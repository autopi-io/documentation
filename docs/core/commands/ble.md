---
id: core-commands-ble
title: Ble
---

## `ble.context`

Gets current context.


----
## `ble.flash_firmware`

Flashes new firmware to the BlueNRG device.


----
## `ble.help`

Shows this help information.


----
## `ble.interface`

Manages the interface to the BlueNRG device.


----
## `ble.manage`

Runtime management of the underlying service instance.


**SUPPORTED COMMANDS**

  - `hook list|call <name> [argument]... [<key>=<value>]...`
  - `worker list|show|start|pause|resume|kill <name>`
  - `reactor list|show <name>`
  - `run <key>=<value>...`


**EXAMPLES**

  - `ble.manage hook list`
  - `ble.manage hook call query_handler ACI_HAL_GET_FW_BUILD_NUMBER`
  - `ble.manage worker list *`
  - `ble.manage worker show *`
  - `ble.manage worker start *`
  - `ble.manage worker pause *`
  - `ble.manage worker resume *`
  - `ble.manage worker kill *`
  - `ble.manage reactor list`
  - `ble.manage reactor show *`
  - `ble.manage run handler="query" args="[\"ACI_HAL_GET_FW_BUILD_NUMBER\"]"`


----
## `ble.mode`

Manages the low-level modes of the BlueNRG device.


----
## `ble.query`

Queries a given BlueNRG ACI command.
