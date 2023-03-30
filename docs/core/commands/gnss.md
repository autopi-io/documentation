---
id: core-commands-gnss
title: Gnss
---

## `gnss.connection`

Query the connection class.


----
## `gnss.help`

Shows this help information.


----
## `gnss.load_geofences`

Loads geofences.
**OPTIONAL ARGUMENTS**

  - `path` path to the geofences file


----
## `gnss.manage`

Runtime management of the underlying service instance.


**SUPPORTED COMMANDS**

  - `hook list|call <name> [argument]... [<key>=<value>]...`
  - `worker list|show|start|pause|resume|kill <name>`
  - `reactor list|show <name>`
  - `run <key>=<value>...`


**EXAMPLES**

  - `gnss.manage hook list`
  - `gnss.manage hook call connection_handler gnss_location`
  - `gnss.manage worker list *`
  - `gnss.manage worker show *`
  - `gnss.manage worker start *`
  - `gnss.manage worker pause *`
  - `gnss.manage worker resume *`
  - `gnss.manage worker kill *`
  - `gnss.manage reactor list`
  - `gnss.manage reactor show *`
  - `gnss.manage run handler="connection" args="[\"gnss_location\"]" converter="gnss_location_to_position" returner="cloud"`
