---
id: core-cmd-reactor
title: Reactor
---

## `reactor.cache`

Queries or manipulates cache of event reactor.


----
## `reactor.context`

Queries or manipulates context of event reactor.


----
## `reactor.help`

Shows this help information.


----
## `reactor.manage`

Runtime management of the underlying service instance.


**SUPPORTED COMMANDS**

  - `hook list|call <name> [argument]... [<key>=<value>]...`
  - `worker list|show|start|pause|resume|kill <name>`
  - `run <key>=<value>...`


**EXAMPLES**

  - `obd.manage hook list`
  - `obd.manage worker list *`
  - `obd.manage worker show *`
  - `obd.manage worker start *`
  - `obd.manage worker pause *`
  - `obd.manage worker resume *`
  - `obd.manage worker kill *`
