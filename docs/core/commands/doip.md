---
id: core-commands-doip
title: Doip
---

## `doip.context`

Gets current context.


----
## `doip.help`

Shows this help information.


----
## `doip.interface`

Manages the DoIP interface.


**EXAMPLES**

  - `doip.interface`
  - `doip.interface help`
  - `doip.interface activate`
  - `doip.interface activate pin_setup=alt`
  - `doip.interface deactivate`
  - `doip.interface connect`
  - `doip.interface disconnect`
  - `doip.interface reconnect`


----
## `doip.manage`

Runtime management of the underlying service instance.


**SUPPORTED COMMANDS**

  - `hook list|call <name> [argument]... [<key>=<value>]...`
  - `worker list|show|start|pause|resume|kill <name>`
  - `reactor list|show <name>`
  - `run <key>=<value>...`


**EXAMPLES**

  - `doip.manage hook list`
  - `doip.manage hook call uds_handler change_session 1`
  - `doip.manage worker list *`
  - `doip.manage worker show *`
  - `doip.manage worker start *`
  - `doip.manage worker pause *`
  - `doip.manage worker resume *`
  - `doip.manage worker kill *`
  - `doip.manage reactor list`
  - `doip.manage reactor show *`
  - `doip.manage run handler="uds" args="[\"change_session\", 1]"`


----
## `doip.uds`

Queries using the UDS client. The UDS client works synchronously and can handle a single request/response at a time.


**EXAMPLES**

  - `doip.uds help`
  - `doip.uds help change_session`
  - `doip.uds change_session 1`
