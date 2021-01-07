
import os
import re


CMD_SRC = "../../core/src/salt/base/ext/_modules/"
CMD_DST = "../docs/core/commands/"

RET_SRC = "../../core/src/salt/base/ext/_returners/"
RET_DST = "../docs/core/returners/"

ENG_SRC = "../../core/src/salt/base/ext/_engines/"
ENG_DST = "../docs/core/services/"


func_regex = re.compile("^def (?P<name>\w+)\(.*\):$")
arg_regex = re.compile("^(?P<name>\w+) \((?P<type>\w+)\): (?P<desc>.*)$")
virtual_name_regex = re.compile("^__virtualname__(?: )*=(?: )*[\"|'](\w+)[\"|']")


def parse_doc(file_path, group=False):
    ret = []

    with open(file_path) as f:
        cmd = ""
        is_doc = False
        doc = []

        for count, line in enumerate(f):
            match = func_regex.match(line)
            if match:
                cmd = match.group("name")
            elif line.strip() == "\"\"\"":
                if not is_doc:
                    is_doc = True
                else:
                    if group:
                        ret.append({"cmd": cmd[:cmd.rindex("_")], "grp": cmd[cmd.rindex("_")+1:], "doc": doc})
                    else:
                        ret.append({"cmd": cmd, "doc": doc})
                    doc = []
                    is_doc = False
            elif is_doc:
                doc.append(line)

    return ret


def gen_doc(src_path, dst_path, kind, group=False):
    for fn in [fn for fn in os.listdir(src_path) if fn.endswith(".py")]:
        print("[INFO] Parsing {:}...".format(fn))

        name = os.path.splitext(fn)[0]
        with open(os.path.join(src_path, fn)) as f:
            for l in f:
                m = virtual_name_regex.match(l)
                if m:
                    name = m.group(1)

        with open(os.path.join(dst_path, name + ".md"), "w") as f:

            f.write("---\n")
            f.write("id: core-{:}-{:}\n".format(kind, name.replace("_", "-")))
            f.write("title: {:}\n".format(name.replace("_", " ").title()))
            f.write("---\n")

            res = parse_doc(os.path.join(src_path, fn), group=group)
            if group:
                res = sorted(res, key=lambda r: (r["grp"], r["cmd"]))
                grp = None
            else:
                res = sorted(res, key=lambda r: r["cmd"])

            i = 0
            for r in [r for r in res if not r["cmd"].startswith("_")]:
                i += 1

                f.write("\n")
                if group:
                    if grp != r["grp"]:
                        grp = r["grp"]
                        f.write("## {:}s\n".format(grp.title()))
                        i = 1
                        
                    if i > 1:
                        f.write("\n----\n")

                    f.write("### `{:}`\n".format(r["cmd"]))  
                else:
                    if i > 1:
                        f.write("\n----\n")
                   
                    f.write("## `{:}.{:}`\n".format(name, r["cmd"]))
                f.write("\n")

                is_arg = False
                is_kwarg = False
                is_ex = False

                for d in r["doc"]:
                    # wrap all <content> with backticks (`)
                    # but only if it's not already surrounded by some
                    copy = d;
                    skip = False
                    d = '';

                    for c in copy:
                        if c == "'":
                            skip = not skip
                        elif c == '<' and not skip:
                            c = '`<'
                        elif c == '>' and not skip:
                            c = '>`'
                        d += c

                    if d.upper().startswith("    NOTE: "):
                        f.write(":::note\n")
                        f.write(re.sub("    NOTE: ", "" , d, flags=re.IGNORECASE))
                        f.write(":::\n")
                    elif d.upper().startswith("    DEPRECATED: "):
                        f.write(":::warning\n")
                        f.write(re.sub("    DEPRECATED: ", "**DEPRECATED**\n" , d, flags=re.IGNORECASE))
                        f.write(":::\n")
                    elif d.upper().startswith("    ARGUMENTS:"):
                        f.write("**{:}**\n\n".format("ARGUMENTS"))
                        is_arg = True
                    elif d.upper().startswith("    OPTIONAL ARGUMENTS"):
                        f.write("**{:}**\n\n".format(d.upper().strip().rstrip(":")))
                        is_kwarg = True
                    elif d.upper().startswith("    SUPPORTED COMMANDS:"):
                        f.write(re.sub("    Supported commands:", "\n**SUPPORTED COMMANDS**\n", d, flags=re.IGNORECASE))
                        is_ex = True
                    elif d.upper().startswith("    EXAMPLES:"):
                        f.write(re.sub("    Examples:", "\n**EXAMPLES**\n", d, flags=re.IGNORECASE))
                        is_ex = True
                    elif d.upper().startswith("    EXAMPLE:"):
                        f.write(re.sub("    Example:", "\n**EXAMPLE**", d, flags=re.IGNORECASE).replace("'", "`"))
                        is_ex = True
                    elif not d.strip():
                        f.write("\n")
                        is_arg = False
                        is_kwarg = False
                        is_ex = False
                    else:
                        if is_arg or is_kwarg:
                            p = d.strip().split(" ")
                            f.write(d.replace("    - ", "- ").replace("'", "`").replace(" ".join(p[:2]), "- **`{:}`**".format(p[1])))
                        elif is_ex:
                            f.write(d.replace("    - ", "- ").replace("'", "`"))
                        else:
                            f.write(d.replace("    - ", "- ").replace("'", "`").strip() + "\n")
                            if d.endswith(":\n"):
                                f.write("\n")

gen_doc(CMD_SRC, CMD_DST, "commands")
gen_doc(RET_SRC, RET_DST, "returners")
gen_doc(ENG_SRC, ENG_DST, "services", group=True)
