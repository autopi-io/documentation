import os
import json
import yaml

from collections import OrderedDict


src_dir = "../docs/"


def read_meta(file):
    ret = ""

    print("Reading meta for file: {:}".format(file))
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


# Build graph based on file structure
graph = {"title": "Menu", "items": OrderedDict()}
for subdir, dirs, files in os.walk(src_dir):

    parent = graph
    if subdir.removeprefix(src_dir):
        for d in subdir.removeprefix(src_dir).split("/"):
            parent = parent["items"][d]

    for f in [f for f in files if not f.startswith(".")]:
        meta = yaml.load(read_meta(os.path.join(subdir, f)))
        parent["items"][os.path.splitext(f)[0]] = dict(meta, path=subdir.removeprefix(src_dir))

    for d in dirs:
        parent["items"][d] = {"title": d.replace("_", " ").title(), "items": OrderedDict()}

    # Order items by key
    parent["items"] = OrderedDict(sorted(parent["items"].items()))

print(json.dumps(graph, indent=4))


def render(items):
    ret = []

    for k, v in items.items():
        if "items" in v:
            ret.append({
                "type": "category",
                "label": v["title"],
                "items": render(v["items"])
            })
        else:
            ret.append(os.path.join(v["path"], v["id"]))

    return ret


# Write side bars JS file
with open(os.path.join("..", "sidebars.js"), "w") as fp:
    ret = {"{:}Sidebar".format(k): {v["title"]: render(v["items"])} for k, v in graph["items"].items() if not k.startswith("_")}
    fp.write("module.exports = {:};".format(json.dumps(ret, indent=4)))


