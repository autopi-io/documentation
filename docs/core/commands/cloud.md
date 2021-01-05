---
id: core-command-cloud
title: Cloud
---

## `cloud.cache`

Queries/calls a given cache function.


----
## `cloud.help`

Shows this help information.


----
## `cloud.manage`

Runtime management of the underlying service instance.


**SUPPORTED COMMANDS**

  - `hook list|call <name> [argument]... [<key>=<value>]...`
  - `worker list|show|start|pause|resume|kill <name>`
  - `reactor list|show <name>`
  - `run <key>=<value>...`


**EXAMPLES**

  - `cloud.manage hook list`
  - `cloud.manage hook call status_handler`
  - `cloud.manage worker list *`
  - `cloud.manage worker show *`
  - `cloud.manage worker start *`
  - `cloud.manage worker pause *`
  - `cloud.manage worker resume *`
  - `cloud.manage worker kill *`
  - `cloud.manage reactor list`
  - `cloud.manage reactor show *`
  - `cloud.manage run handler="cache" args="[\"list_queues\"]"`


----
## `cloud.status`

Gets current status.


----
## `cloud.upload`

Uploads cached data to cloud.


----
## `cloud.upload_batch`

:::warning
**DEPRECATED**
This will no longer upload anything.
:::

Uploads next batch of logged data to the cloud server.
