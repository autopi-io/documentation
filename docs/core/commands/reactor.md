---
id: core-commands-reactor
title: Reactor
---

## `reactor.cache`

Queries or manipulates cache of event reactor.


----
## `reactor.context`

:::warning
**DEPRECATED**
Use 'manage context' instead.
:::
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
  - `reactor list|show <name>`
  - `run <key>=<value>...`


**EXAMPLES**

  - `reactor.manage hook list`
  - `reactor.manage worker list *`
  - `reactor.manage worker show *`
  - `reactor.manage worker start *`
  - `reactor.manage worker pause *`
  - `reactor.manage worker resume *`
  - `reactor.manage worker kill *`
  - `reactor.manage reactor list`
  - `reactor.manage reactor show *`
