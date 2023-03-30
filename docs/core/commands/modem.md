---
id: core-commands-modem
title: Modem
---

## `modem.connection`

Queries a given connection class command.

**ARGUMENTS**

  - **`cmd`** (str): The command to query.


----
## `modem.help`

Shows this help information.


----
## `modem.manage`

Runtime management of the underlying service instance.


**SUPPORTED COMMANDS**

  - `hook list|call <name> [argument]... [<key>=<value>]...`
  - `worker list|show|start|pause|resume|kill <name>`
  - `reactor list|show <name>`
  - `run <key>=<value>...`


**EXAMPLES**

  - `modem.manage hook list`
  - `modem.manage hook call connection_handler status`
  - `modem.manage worker list *`
  - `modem.manage worker show *`
  - `modem.manage worker start *`
  - `modem.manage worker pause *`
  - `modem.manage worker resume *`
  - `modem.manage worker kill *`
  - `modem.manage reactor list`
  - `modem.manage reactor show *`
  - `modem.manage run handler="connection" args="[\"status\"]"`


----
## `modem.read_sms`

Reads SMS messages stored in the modem and processes them into `system/sms/received` events.
Those events hold information such as the timestamp of the message (when it was received by the
modem), the sender and the text.

Optional parameters:

- clear (bool): Should the messages be deleted from the modem after being processed? Default: False.


----
## `modem.reset`

Enable or disable the one shot or periodic unit reset.

Optional parameters:

- mode (string): The mode in which to operate the command. For available values, look below. Default: None.
- delay (number): Time interval in minutes after that the unit reboots. Default: 0.
- reason (str): The reason the reset was performed. Default: "unspecified".

Available modes:

- disabled: Disables unit reset.
- one_shot: Enables the unit reset only one time (one shot reset).
- periodic: Enables periodic resets of the unit.
