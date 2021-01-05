---
id: core-command-spm
title: Spm
---

## `spm.flash_firmware`

Flashes new SPM firmware to ATtiny.


----
## `spm.help`

Shows this help information.


----
## `spm.led_pwm`

Change PWM frequency and/or duty cycle for LED.

**OPTIONAL ARGUMENTS**

  - **`frequency`** (float): Change to frequency in Hz.
  - **`duty_cycle`** (float): Change to duty cycle in percent.


----
## `spm.manage`

Runtime management of the underlying service instance.


**SUPPORTED COMMANDS**

  - `hook list|call <name> [argument]... [<key>=<value>]...`
  - `worker list|show|start|pause|resume|kill <name>`
  - `reactor list|show <name>`
  - `run <key>=<value>...`


**EXAMPLES**

  - `spm.manage hook list`
  - `spm.manage hook call query_handler status`
  - `spm.manage worker list *`
  - `spm.manage worker show *`
  - `spm.manage worker start *`
  - `spm.manage worker pause *`
  - `spm.manage worker resume *`
  - `spm.manage worker kill *`
  - `spm.manage reactor list`
  - `spm.manage reactor show *`
  - `spm.manage run handler="query" args="[\"status\"]"`


----
## `spm.query`

Queries a given SPM command.

**ARGUMENTS**

  - **`cmd`** (str): The SPM command to query.


----
## `spm.reset`

Reset/restart ATtiny.
