---
id: core-commands-keyfob
title: Keyfob
---

## `keyfob.action`

Performs a key fob button action.

**ARGUMENTS**

  - **`*name`** (str): Name(s) of the action(s) to perform.


----
## `keyfob.context`

:::warning
**DEPRECATED**
Use 'manage context' instead.
:::
Gets current context.


----
## `keyfob.help`

Shows this help information.


----
## `keyfob.manage`

Runtime management of the underlying service instance.


**SUPPORTED COMMANDS**

  - `hook list|call <name> [argument]... [<key>=<value>]...`
  - `worker list|show|start|pause|resume|kill <name>`
  - `reactor list|show <name>`
  - `run <key>=<value>...`


**EXAMPLES**

  - `keyfob.manage hook list`
  - `keyfob.manage hook call power`
  - `keyfob.manage worker list *`
  - `keyfob.manage worker show *`
  - `keyfob.manage worker start *`
  - `keyfob.manage worker pause *`
  - `keyfob.manage worker resume *`
  - `keyfob.manage worker kill *`
  - `keyfob.manage reactor list`
  - `keyfob.manage reactor show *`


----
## `keyfob.power`

Powers on/off key fob.

**OPTIONAL ARGUMENTS**

  - **`value`** (bool): Power on or off. 
