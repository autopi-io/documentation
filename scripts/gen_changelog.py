#!/usr/bin/env python3
"""
Generate combined monthly documentation from GitLab changelogs.

Generates two sets of files:
  docs/releases/   - Monthly release pages (skeleton auto-created, manually curated)
  docs/changelog/  - Monthly raw changelogs (fully auto-generated from GitLab)
"""

import os
import re
import urllib.request
import urllib.error
from pathlib import Path
from collections import defaultdict
from datetime import datetime

# GitLab projects and branches
CHANGELOGS = {
    'core':     {'project': 'AutoPi.io/core',     'branch': 'master'},
    'backend':  {'project': 'AutoPi.io/backend',  'branch': 'develop'},
    'frontend': {'project': 'AutoPi.io/frontend', 'branch': 'develop'},
}

BASE_DIR           = Path(__file__).parent.parent
DOCS_RELEASES_DIR  = BASE_DIR / 'docs' / 'releases'
DOCS_CHANGELOG_DIR = BASE_DIR / 'docs' / 'changelog'
SIDEBARS_FILE      = BASE_DIR / 'sidebars.js'

GITLAB_TOKEN = os.environ.get('GITLAB_TOKEN')

PRODUCT_ORDER = ['backend', 'frontend', 'core']


# ---------------------------------------------------------------------------
# Fetching
# ---------------------------------------------------------------------------

def fetch_changelog(project, branch):
    if not GITLAB_TOKEN:
        print("GITLAB_TOKEN environment variable not set.")
        print("Set it with: export GITLAB_TOKEN='your_token_here'")
        return None
    project_encoded = project.replace('/', '%2F')
    url = (
        f"https://gitlab.com/api/v4/projects/{project_encoded}"
        f"/repository/files/changelog.md/raw?ref={branch}"
    )
    try:
        req = urllib.request.Request(url)
        req.add_header('PRIVATE-TOKEN', GITLAB_TOKEN)
        response = urllib.request.urlopen(req, timeout=10)
        return response.read().decode('utf-8')
    except urllib.error.HTTPError as e:
        print(f"  Failed to fetch {project}: HTTP {e.code}")
        return None
    except Exception as e:
        print(f"  Failed to fetch {project}: {e}")
        return None


# ---------------------------------------------------------------------------
# Parsing
# ---------------------------------------------------------------------------

def strip_emojis(text):
    """Remove emoji / non-ASCII symbol characters from text."""
    return re.sub(r'[^\w\s\-.,;:\'"()\[\]@#$%&*+=/!?~`|\\{}_]', '', text, flags=re.UNICODE)


def clean_content(raw):
    """Escape MDX-unsafe chars and strip emojis from changelog body text."""
    text = raw.replace('<', '&lt;').replace('>', '&gt;')
    text = strip_emojis(text)
    text = re.sub(r'^ +', '', text, flags=re.MULTILINE)
    text = re.sub(r' +$', '', text, flags=re.MULTILINE)
    text = re.sub(r'  +', ' ', text)
    return text


def parse_changelog(content):
    """
    Parse changelog markdown into per-version dicts.
    Returns: {version: {'date': datetime, 'content': str}}
    """
    versions = {}
    version_pattern = r'^## \[([^\]]+)\] - (\d{4}-\d{2}-\d{2})'

    lines = content.split('\n')
    current_version = current_date = None
    current_lines = []

    def save(version, date, lines):
        versions[version] = {
            'date':    datetime.strptime(date, '%Y-%m-%d'),
            'content': clean_content('\n'.join(lines).strip()),
        }

    for line in lines:
        m = re.match(version_pattern, line)
        if m:
            if current_version:
                save(current_version, current_date, current_lines)
            current_version, current_date, current_lines = m.group(1), m.group(2), []
        elif current_version:
            current_lines.append(line)

    if current_version:
        save(current_version, current_date, current_lines)

    return versions


def group_by_month(all_changelogs):
    """
    Group parsed versions by (year, month).
    Returns: {(year, month): {product: {version: {date, content}}}}
    """
    months = defaultdict(dict)
    for product, content in all_changelogs.items():
        if not content:
            continue
        for version, data in parse_changelog(content).items():
            key = (data['date'].year, data['date'].month)
            months[key].setdefault(product, {})[version] = data
    return months


# ---------------------------------------------------------------------------
# Changelog pages (auto-generated raw content)
# ---------------------------------------------------------------------------

def build_changelog_markdown(month_key, products_data, filename):
    year, month = month_key
    month_name = datetime(year, month, 1).strftime('%B')

    parts = [
        f"# {month_name} {year} Changelog\n",
        f"**Generated:** {datetime.now().strftime('%Y-%m-%d')}\n",
    ]

    first = True
    for product in PRODUCT_ORDER:
        if product not in products_data or not products_data[product]:
            continue
        if not first:
            parts.append("\n---\n")
        first = False

        parts.append(f"\n## {product.capitalize()}\n")

        for version, data in sorted(products_data[product].items(),
                                    key=lambda x: x[1]['date'], reverse=True):
            parts.append(f"\n### {product.capitalize()} {version}\n")
            parts.append(f"**Release Date:** {data['date'].strftime('%Y-%m-%d')}\n")
            # Demote ### → #### inside changelog content
            demoted = re.sub(r'^###', '####', data['content'], flags=re.MULTILINE)
            parts.append(demoted)

    parts.append(f"\n\n---\n\n**Looking for a summary?** View the [**{month_name} {year} Release highlights**](../releases/{filename}) page.\n")

    return '\n'.join(parts)


def generate_changelog_files(months_data, sorted_months):
    DOCS_CHANGELOG_DIR.mkdir(parents=True, exist_ok=True)
    sidebar_entries = []
    count = 0

    for idx, month_key in enumerate(sorted_months):
        products_data = months_data[month_key]
        year, month = month_key
        month_name = datetime(year, month, 1).strftime('%B')
        filename = f"{month_name}_{year}"

        markdown = build_changelog_markdown(month_key, products_data, filename)
        if not markdown:
            continue

        sidebar_pos = 10000 - (idx * 10)
        full_content = f"---\nsidebar_position: {sidebar_pos}\n---\n\n{markdown}"

        with open(DOCS_CHANGELOG_DIR / f"{filename}.md", 'w') as f:
            f.write(full_content)

        sidebar_entries.append(f'        "changelog/{filename}",')
        count += 1
        print(f"  OK changelog/{filename}.md")

    return sidebar_entries, count


# ---------------------------------------------------------------------------
# Release pages (skeleton only — preserve existing manual content)
# ---------------------------------------------------------------------------

def build_release_skeleton(month_key, filename):
    year, month = month_key
    month_name = datetime(year, month, 1).strftime('%B')

    return f"""# {month_name} {year} Releases

## New Features

## Bug Fixes

## Refactoring

## Other

---

For a full list of all changes, see the [**{month_name} {year} Changelog**](../changelog/{filename}).
"""


def generate_release_files(months_data, sorted_months):
    DOCS_RELEASES_DIR.mkdir(parents=True, exist_ok=True)
    sidebar_entries = []
    count = 0

    for idx, month_key in enumerate(sorted_months):
        products_data = months_data[month_key]
        if not any(products_data.values()):
            continue

        year, month = month_key
        month_name = datetime(year, month, 1).strftime('%B')
        filename = f"{month_name}_{year}"
        file_path = DOCS_RELEASES_DIR / f"{filename}.md"

        # Only create skeleton if the file does not already exist
        if not file_path.exists():
            sidebar_pos = 10000 - (idx * 10)
            skeleton = build_release_skeleton(month_key, filename)
            full_content = f"---\nsidebar_position: {sidebar_pos}\n---\n\n{skeleton}"
            with open(file_path, 'w') as f:
                f.write(full_content)
            print(f"  CREATED releases/{filename}.md")
        else:
            print(f"  KEPT    releases/{filename}.md (manual content preserved)")

        sidebar_entries.append(f'        "releases/{filename}",')
        count += 1

    return sidebar_entries, count


# ---------------------------------------------------------------------------
# Sidebar update
# ---------------------------------------------------------------------------

def update_sidebar(release_entries, changelog_entries):
    with open(SIDEBARS_FILE, 'r') as f:
        content = f.read()

    releases_block = (
        '    {\n      "Releases": [\n        "releases/index",\n'
        + '\n'.join(release_entries)
        + '\n      ],\n      "type": "category"\n    },'
    )
    changelog_block = (
        '    {\n      "Changelog": [\n        "changelog/index",\n'
        + '\n'.join(changelog_entries)
        + '\n      ],\n      "type": "category"\n    },'
    )
    api_block = '    {\n      "type": "link",\n     "label": "API",\n      "href": "https://api.autopi.io/"\n    },'
    end_block = '\n  ]\n};'

    new_tail = f'\n{releases_block}\n{changelog_block}\n{api_block}\n{end_block}'

    # Replace everything from the API link onwards (and any preceding Releases/Changelog blocks)
    content = re.sub(
        r'\n\s*\{[^{}]*"Releases".*?\},?\s*|\n\s*\{[^{}]*"Changelog".*?\},?\s*',
        '',
        content,
        flags=re.DOTALL,
    )
    content = re.sub(
        r'\n\s*\{\s*"type":\s*"link",\s*"label":\s*"API".*?\},?\s*\n\s*\]\s*\};',
        new_tail,
        content,
        flags=re.DOTALL,
    )

    with open(SIDEBARS_FILE, 'w') as f:
        f.write(content)


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    print("Fetching changelogs from GitLab...")
    all_changelogs = {}
    for product, config in CHANGELOGS.items():
        print(f"  Fetching {product}...", end=' ')
        raw = fetch_changelog(config['project'], config['branch'])
        all_changelogs[product] = raw
        print("OK" if raw else "FAILED")

    if not any(all_changelogs.values()):
        print("No changelogs fetched. Exiting.")
        return

    print("\nParsing by month...")
    months_data = group_by_month(all_changelogs)
    if not months_data:
        print("No versions found. Exiting.")
        return

    sorted_months = sorted(months_data.keys(), reverse=True)
    # Only include months from 2026 onwards
    sorted_months = [m for m in sorted_months if m[0] >= 2026]
    preview = [datetime(y, m, 1).strftime('%B %Y') for y, m in sorted_months[:3]]
    print(f"Found {len(months_data)} months: {', '.join(preview)}...")

    print("\nGenerating changelog pages (raw, auto-generated)...")
    changelog_entries, changelog_count = generate_changelog_files(months_data, sorted_months)

    print("\nGenerating release pages (skeleton, manually curated)...")
    release_entries, release_count = generate_release_files(months_data, sorted_months)

    print("\nUpdating sidebars.js...")
    try:
        update_sidebar(release_entries, changelog_entries)
        print("  OK sidebars.js updated")
    except Exception as e:
        print(f"  WARNING: Could not update sidebar: {e}")

    print(f"\nDone. {changelog_count} changelog pages, {release_count} release pages.")
    print("Edit the release pages to add highlights and screenshots before committing.")


if __name__ == '__main__':
    main()
