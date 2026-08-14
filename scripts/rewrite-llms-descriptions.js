#!/usr/bin/env node
/**
 * Post-processes `build/llms.txt` so each entry's description is a real prose
 * paragraph from the source doc — not an MDX component, admonition, table,
 * heading, or image caption.
 *
 * `docusaurus-plugin-llms` picks the first non-heading, non-import paragraph as
 * the description, which for AutoPi docs frequently ends up being lines like:
 *   <DeviceSupportBanner supported={frontMatter.supportedDevices} />
 *   :::warning
 *   | Name | Description | Type | Default | Unit |
 *
 * This script re-derives the description by scanning the source Markdown/MDX
 * with a stricter filter and rewrites `build/llms.txt` in place. It is wired
 * to run automatically via the `postbuild` npm hook after `docusaurus build`.
 *
 * URL → source-file mapping mirrors Docusaurus's slug resolution: frontmatter
 * `slug` (absolute or relative) wins over `id`, which wins over the filename.
 * `index.md` collapses to its parent directory.
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const REPO_ROOT = path.resolve(__dirname, '..');
const DOCS_ROOT = path.join(REPO_ROOT, 'docs');
const BUILD_DIR = path.join(REPO_ROOT, 'build');
const LLMS_TXT = path.join(BUILD_DIR, 'llms.txt');
const SITE_URL = 'https://docs.autopi.io';
const MAX_LENGTH = 250;

// Matches: `- [Title](URL): description`
const ENTRY_RE = /^(\s*-\s*\[[^\]]+\]\()([^)]+)(\):\s*)(.*)$/;

function main() {
  if (!fs.existsSync(LLMS_TXT)) {
    console.warn(`[rewrite-llms-descriptions] ${LLMS_TXT} not found; nothing to do`);
    return;
  }

  const { urlIndex, idIndex } = buildIndex(DOCS_ROOT);

  const original = fs.readFileSync(LLMS_TXT, 'utf8');
  const lines = original.split('\n');

  let rewrites = 0;
  let unresolved = 0;
  const rewritten = lines.map((line) => {
    const m = line.match(ENTRY_RE);
    if (!m) return line;
    const [, prefix, url, sep, oldDesc] = m;
    const sourceFile = resolveSource(url, urlIndex, idIndex);
    if (!sourceFile) {
      unresolved += 1;
      return line;
    }
    const desc = extractDescription(sourceFile);
    if (!desc) return line;
    if (desc !== oldDesc) rewrites += 1;
    return `${prefix}${url}${sep}${desc}`;
  });

  const output = rewritten.join('\n');
  console.log(
    `[rewrite-llms-descriptions] rewrote ${rewrites} description(s); ` +
    `${unresolved} URL(s) could not be mapped to a source file`
  );

  if (output !== original) {
    fs.writeFileSync(LLMS_TXT, output, 'utf8');
  }
}

// Try the directory-based URL key first; then fall back to matching the URL's
// last segment against a frontmatter-id index — Docusaurus routes docs by their
// `id` when a sidebar places them, so the id is often the final URL segment
// while the URL prefix comes from the sidebar rather than the file's directory.
function resolveSource(url, urlIndex, idIndex) {
  const key = normalizeUrlKey(url);
  if (urlIndex.has(key)) return urlIndex.get(key);
  const lastSegment = key.split('/').pop();
  if (lastSegment && idIndex.has(lastSegment)) return idIndex.get(lastSegment);
  return null;
}

// Reduce a URL to a lookup key: pathname without leading/trailing slashes and
// without the `.md` extension the llms plugin appends.
function normalizeUrlKey(url) {
  let rel = url;
  if (rel.startsWith(SITE_URL)) rel = rel.slice(SITE_URL.length);
  rel = rel.replace(/^https?:\/\/[^/]+/, '');
  rel = rel.split('#')[0].split('?')[0];
  rel = rel.replace(/^\/+/, '').replace(/\/+$/, '');
  rel = rel.replace(/\.mdx?$/i, '');
  return rel;
}

function buildIndex(docsRoot) {
  const urlIndex = new Map();
  const idIndex = new Map();
  walk(docsRoot, (file) => {
    if (!/\.mdx?$/i.test(file)) return;
    const rel = path.relative(docsRoot, file).split(path.sep).join('/');
    const raw = safeReadFile(file);
    if (raw == null) return;
    const { data } = matter(raw);

    const key = urlKeyFor(rel, data);
    if (key !== null && !urlIndex.has(key)) urlIndex.set(key, file);

    if (typeof data.id === 'string' && data.id.trim() && !idIndex.has(data.id.trim())) {
      idIndex.set(data.id.trim(), file);
    }
  });
  return { urlIndex, idIndex };
}

function safeReadFile(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch { return null; }
}

function walk(dir, cb) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, cb);
    else if (entry.isFile()) cb(p);
  }
}

// Compute the "directory-based" URL key for a source file, mirroring the
// vanilla Docusaurus slug rules. Docs with an `id` different from the
// directory layout still get a directory key here; they're additionally
// covered by the id-based fallback in `resolveSource`.
function urlKeyFor(relPath, data) {
  const dir = path.posix.dirname(relPath);
  const base = path.posix.basename(relPath).replace(/\.mdx?$/i, '');

  // Absolute slug override (e.g. `slug: /` on the docs root index)
  if (typeof data.slug === 'string' && data.slug.startsWith('/')) {
    return data.slug.replace(/^\/+/, '').replace(/\/+$/, '');
  }

  let last;
  if (typeof data.slug === 'string' && data.slug.trim()) {
    last = data.slug.trim().replace(/^\/+/, '').replace(/\/+$/, '');
  } else if (typeof data.id === 'string' && data.id.trim()) {
    last = data.id.trim();
  } else {
    last = base;
  }

  const parts = [];
  if (dir && dir !== '.') parts.push(dir);
  if (base !== 'index') parts.push(last);
  return parts.join('/').replace(/^\/+/, '').replace(/\/+$/, '');
}

function extractDescription(filePath) {
  let raw;
  try {
    raw = fs.readFileSync(filePath, 'utf8');
  } catch {
    return null;
  }
  const parsed = matter(raw);
  const fm = parsed.data || {};
  if (typeof fm.description === 'string' && fm.description.trim()) {
    return cleanText(fm.description);
  }

  const body = stripFencedCode(stripAdmonitions(parsed.content || ''));
  const paragraphs = body.split(/\n{2,}/);
  for (const para of paragraphs) {
    const p = para.trim();
    if (!p) continue;
    if (!isProseParagraph(p)) continue;
    return cleanText(p);
  }

  // Fallback for pages that are only tables / components / images (e.g. the
  // per-setting reference pages): use the frontmatter title. Better than
  // leaving a raw `| Name | ... |` table row as the description.
  if (typeof fm.title === 'string' && fm.title.trim()) {
    return cleanText(fm.title);
  }
  return null;
}

// Remove fenced code blocks entirely; we don't want them as descriptions.
function stripFencedCode(md) {
  return md.replace(/```[\s\S]*?```/g, '').replace(/~~~[\s\S]*?~~~/g, '');
}

// Remove Docusaurus admonitions (:::note ... :::) so prose inside them is not
// used as a page description.
function stripAdmonitions(md) {
  return md.replace(/^:::[A-Za-z][^\n]*\n[\s\S]*?^:::\s*$/gm, '');
}

function isProseParagraph(para) {
  const firstLine = para.split('\n').find((l) => l.trim().length > 0) || '';
  const t = firstLine.trim();

  // Headings
  if (/^#{1,6}\s+/.test(t)) return false;
  // ES imports/exports (MDX)
  if (/^(import|export)\s/.test(t)) return false;
  // Docusaurus admonitions (:::note, :::warning, :::tip, etc.)
  if (/^:{3,}/.test(t)) return false;
  // Markdown tables
  if (/^\|/.test(t)) return false;
  if (/^[:\-\s|]+$/.test(t) && t.includes('|')) return false;
  // HTML comments
  if (/^<!--/.test(t)) return false;
  // Horizontal rules
  if (/^(-{3,}|\*{3,}|_{3,})\s*$/.test(t)) return false;
  // Images (markdown or HTML)
  if (/^!\[/.test(t)) return false;
  if (/^<img\b/i.test(t)) return false;
  if (/^<p\b[^>]*>\s*<img\b/i.test(t)) return false;
  // JSX/MDX components or block HTML: first non-space char is `<` + letter or `/`
  if (/^<[A-Za-z/]/.test(t)) return false;
  // Bare JSX expression brace
  if (/^\{/.test(t)) return false;

  return true;
}

function cleanText(text) {
  let s = String(text)
    .replace(/\r/g, '')
    .replace(/\s*\n\s*/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();

  s = s.replace(/^#+\s+/, '');

  if (s.length > MAX_LENGTH) {
    const cut = s.slice(0, MAX_LENGTH);
    const lastSpace = cut.lastIndexOf(' ');
    s = (lastSpace > MAX_LENGTH * 0.6 ? cut.slice(0, lastSpace) : cut).trimEnd() + '…';
  }
  return s;
}

main();
