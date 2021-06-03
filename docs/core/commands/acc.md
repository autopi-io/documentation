---
id: core-commands-acc
title: Acc
---

## `acc.connection`

Manages current connection.

**OPTIONAL ARGUMENTS**

  - **`close`** (bool): Close MMA8X5X connection? Default value is `False`. 


**EXAMPLES**

  - `acc.connection`
  - `acc.connection close=True`


----
## `acc.context`

:::warning
**DEPRECATED**
Use 'manage context' instead.
:::
Gets current context.


----
## `acc.dump`

Dumps raw XYZ readings to screen or file.

**OPTIONAL ARGUMENTS**

  - **`duration`** (int): How many seconds to record data? Default value is `1`.
  - **`file`** (str): Write data to a file with the given name.
  - **`range`** (int): Maximum number of g-forces being measured. Default value is `8`.
  - **`rate`** (float): How many Hz (samples per second)? Default value is `50`.
  - **`decimals`** (int): How many decimals to calculate? Default value is `4`.
  - **`timestamp`** (bool): Add timestamp to each sample? Default value is `True`.
  - **`sound`** (bool): Play sound when starting and stopping recording? Default value is `True`.
  - **`interrupt_driven`** (bool): Await hardware data ready signal before reading a sample? Default value is `True`.


----
## `acc.help`

Shows this help information.


----
## `acc.manage`

Runtime management of the underlying service instance.


**SUPPORTED COMMANDS**

  - `hook list|call <name> [argument]... [<key>=<value>]...`
  - `worker list|show|start|pause|resume|kill <name>`
  - `reactor list|show <name>`
  - `run <key>=<value>...`


**EXAMPLES**

  - `acc.manage hook list`
  - `acc.manage hook call query_handler xyz`
  - `acc.manage worker list *`
  - `acc.manage worker show *`
  - `acc.manage worker start *`
  - `acc.manage worker pause *`
  - `acc.manage worker resume *`
  - `acc.manage worker kill *`
  - `acc.manage reactor list`
  - `acc.manage reactor show *`
  - `acc.manage run handler="query" args="[\"xyz\"]" returner="cloud"`


----
## `acc.query`

Queries a given accelerometer command.

For additional help run: `acc.query help`


**EXAMPLES**

  - `acc.query status`
  - `acc.query xyz`
  - `acc.query active value=False`
  - `acc.query range value=4`
  - `acc.query data_rate value=12.5`
  - `acc.query offset x=0.1 y=-0.1 z=0`
