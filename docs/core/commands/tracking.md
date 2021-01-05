---
id: core-command-tracking
title: Tracking
---

## `tracking.context`

Gets current context.


----
## `tracking.help`

Shows this help information.


----
## `tracking.manage`

Runtime management of the underlying service instance.


**SUPPORTED COMMANDS**

  - `hook list|call <name> [argument]... [<key>=<value>]...`
  - `worker list|show|start|pause|resume|kill <name>`
  - `reactor list|show <name>`
  - `run <key>=<value>...`


**EXAMPLES**

  - `tracking.manage hook list`
  - `tracking.manage hook call gnss_query_handler location`
  - `tracking.manage worker list *`
  - `tracking.manage worker show *`
  - `tracking.manage worker start *`
  - `tracking.manage worker pause *`
  - `tracking.manage worker resume *`
  - `tracking.manage worker kill *`
  - `tracking.manage reactor list`
  - `tracking.manage reactor show *`
  - `tracking.manage run handler="gnss_query" args="[\"location\"]" converter="gnss_location_to_position" returner="cloud"`


----
## `tracking.status`

Gets current status.
