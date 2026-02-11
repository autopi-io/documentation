
import collections
import datetime
import jinja2
import json
import os
import yaml

from yaml import CLoader as Loader


folder = "../docs/cloud/device_management/advanced_settings/autopi_tmu_cm4" 


class Mock(object):

    def __init__(self, data={}):
        self._data = data

    def __getattr__(self, name):
        if name.startswith("_"):
            return super(Mock, self).__getattr__(name)
        else:
            return self._data[name]

    def __setattr__(self, name, value):
        if name.startswith("_"):
            super(Mock, self).__setattr__(name, value)
        else:
            self._data[name] = value


# Render fields template
environment = jinja2.Environment(loader=jinja2.FileSystemLoader(searchpath="../../backend/src/django/dongle/templates"), extensions=["jinja2.ext.do"])
environment.filters["hash"] = lambda val: abs(hash(value)) % (10 ** 12)  # MBA's hash function
template = environment.get_template("dongle_config.yml")
fields = yaml.load(template.render({
    "settings": Mock({
        "PUBLIC_API_URL": "https://api.autopi.io",
        "ENABLE_TRIPS_HANDLING": True,
        "TENANT": "",
        "LOGGING_HOST_NAMES": {},
        "SMALLSTEP_CA_CONFIGURED": False,
        "WEB3_OAUTH_CONFIGURED": False,
        "PUBLIC_URL": "",
        "PUBLIC_HUB_HOST_NAME_MAP": {}
    }),
    "device": Mock({
        "id": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
        "unit_id": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
        "token": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
        "vehicle": None,
        "state": "REGISTERED",
        "master": "local",
        "owner": None,
        "created_at": datetime.datetime.utcnow()
    }),
    "owner": None,
    "masterdata": {
        "hw_board_ver": "7.1",
        "hw_board_ver_as_float": 7.1
    }
}), Loader=Loader)
print("[INFO] Loaded {:} fields".format(len(fields)))

# Group fields excluding name
fields_grouped = {}
for qname, field in fields.items():
    parts = qname.split(".")
    field["group"] = ".".join(parts[:-1])
    field["name"] = parts[-1]

    fields_grouped.setdefault(field["group"], [])
    fields_grouped[field["group"]].append(field)

# Sort grouped fields by key
fields_grouped = collections.OrderedDict(sorted(fields_grouped.items()))

# Delete all existing files before generating new
for file in os.listdir(folder):
    file_path = os.path.join(folder, file)
    try:
        if os.path.isfile(file_path) and not file_path.endswith("index.md"):
            os.unlink(file_path)
    except Exception as ex:
        print("[ERROR] {:}".format(ex))

# Group fields into files
field_files = {}
for group, fields in fields_grouped.items():
    group_parts = group.split(".")

    field_files.setdefault(group_parts[0], [])
    field_files[group_parts[0]] += fields

def render_as_string(value):
    ret = ""

    if isinstance(value, list):
        for val in value:
            if ret:
                ret += ", "

            if isinstance(val, dict):
                ret += json.dumps(val)
            else:
                ret += str(value)
    else:
        ret = str(value)

    return ret.replace("|", "\|")

# Loop through all files
for name, fields in field_files.items():
    with open(os.path.join(folder, name + ".md"), "a") as f:

        f.write("---\n")
        f.write("id: cloud-config-{:}\n".format(name.replace("_", "-")))
        f.write("title: {:}\n".format(name.replace("_", " ").title()))
        f.write("---\n")

        last_group_parts = []
        for field in fields:

            if field.get("hidden", False):
                print("[INFO] Skipping hidden field '{group:}.{name:}'".format(**field))

                continue

            group_parts = field["group"].split(".")

            if group_parts != last_group_parts:
                for idx, group_part in enumerate(group_parts[1:], 1):

                    if dict(enumerate(last_group_parts)).get(idx, None) == group_part:
                        print("[INFO] Skipping group part: {:}".format(group_part))

                        continue

                    f.write("\n{:} {:}\n".format("".rjust(idx * 2, "#"), group_part.replace("_", " ").title()))

                f.write("\n| Name | Description | Type | Default | Unit |\n")
                f.write("| ------ | ------ | ------ | ------ | ------ |\n")

                last_group_parts = group_parts

            if not "desc" in field:
                print("{:}".format(field))

            f.write("| {:} | {:} | {:} | {:} | {:} |\n".format(
                field["name"].replace("_", " ").upper(),
                field["desc"].replace("|", "\\|"),
                field.get("type", "-"),
                render_as_string(field.get("default", "-")),
                field.get("unit", "-"),
            ))