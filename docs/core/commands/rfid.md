---
id: core-commands-rfid
title: Rfid
---

## `rfid.load_settings`

Read the settings file stored in /opt/autopi/rfid/settings.yaml and load it.


----
## `rfid.manage`

Runtime management of the underlying service instance.


**SUPPORTED COMMANDS**

  - `hook list|call <name> [argument]... [<key>=<value>]...`
  - `worker list|show|start|pause|resume|kill <name>`
  - `reactor list|show <name>`
  - `run <key>=<value>...`
  - `context [key]... [value=<value>]`


**EXAMPLES**

  - `rfid.manage hook list`
  - `rfid.manage hook call power`
  - `rfid.manage worker list *`
  - `rfid.manage worker show *`
  - `rfid.manage worker start *`
  - `rfid.manage worker pause *`
  - `rfid.manage worker resume *`
  - `rfid.manage worker kill *`
  - `rfid.manage reactor list`
  - `rfid.manage reactor show *`
  - `rfid.manage context`
  - `rfid.manage context <context_key>`
