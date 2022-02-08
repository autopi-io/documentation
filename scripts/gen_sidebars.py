import os
import json
import yaml


def read_meta(file):
    ret = ""

    with open(file) as fp:
        found = False

        for l in fp:
            if l.strip() == "---":
                if found:
                    break

                found = True
            elif found:
                ret += l

    return ret


def get_file_entry_name(path, filename, basedir):
    meta = yaml.load(read_meta(os.path.join(path, filename)), Loader=yaml.BaseLoader)
    if not meta:
        raise Exception('Make sure to have the metadata entry at the beginning of file {}'.format(os.path.join(path, filename)))
    
    return '{}/{}'.format(path.removeprefix(basedir), meta['id'])


def generate_sidebars(src_dir):
    def build_entry(dir_entry, base_entry=False):
        dir_name = dir_entry.name
        dir_path = dir_entry.path

        items = []

        files = [f.name for f in os.scandir(dir_path) if f.is_file()]
        dirs = [d for d in os.scandir(dir_path) if d.is_dir()]

        files.sort()
        dirs.sort(key=lambda d: d.name)

        # get index file, put it first
        index_file = None
        if 'index.md' in files:
            index_file = files[files.index('index.md')]

        elif 'index.mdx' in files:
            index_file = files[files.index('index.mdx')]
        
        if index_file:
            index_entry_name = get_file_entry_name(dir_path, index_file, src_dir)
            items.append(index_entry_name)

        # get all folders, put them next, recursively
        items.extend([build_entry(d) for d in dirs])

        # get all the rest of the files, put them last
        for f in files:
            # skip intro file
            if f in ['index.md', 'index.mdx']:
                continue

            file_entry_name = get_file_entry_name(dir_path, f, src_dir)
            items.append(file_entry_name)

        if base_entry:
            return items
        else:
            return {
                'type': 'category',
                'label': dir_name.replace('_', ' ').replace('-', ' ').title().replace('Obd Ii', 'OBD-II'),
                'items': items,
            }
    
    # begin function execution here
    sidebars = {}

    # generate top-level sidebars
    for base_dir_entry in os.scandir(src_dir):
        if base_dir_entry.is_file():
            continue
        
        sidebarName = "{}Sidebar".format(base_dir_entry.name)
        sidebars[sidebarName] = build_entry(base_dir_entry, base_entry=True)

    return sidebars


def main():
    src_dir = "../docs/"
    sidebars = generate_sidebars(src_dir)

    # Write side bars JS file
    with open(os.path.join("..", "sidebars.js"), "w") as fp:
        fp.write("module.exports = {:};".format(json.dumps(sidebars, indent=4, sort_keys=True)))


if __name__ == "__main__":
    main()
