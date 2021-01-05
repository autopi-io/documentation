---
id: core-command-power
title: Power
---

## `power.help`

Shows this help information.


----
## `power.hibernate`

Power down system and put device into hibernate state.

**OPTIONAL ARGUMENTS**

  - **`delay`** (str): Delay in seconds before powering down. Default is `10`.
  - **`confirm`** (bool): Acknowledge the execution of this command. Default is `False`.
  - **`reason`** (str): Reason code that tells why we decided to hibernate. Default is `unknown`.


----
## `power.reboot`

Reboot system immediately.

**OPTIONAL ARGUMENTS**

  - **`reason`** (str): Reason code that tells why we decided to reboot. Default is `unknown`.


----
## `power.request_reboot`

Request for a future system reboot.

**OPTIONAL ARGUMENTS**

  - **`pending`** (bool): Default is `True`.
  - **`immediately`** (bool): Default is `False`.
  - **`reason`** (str): Reason code that tells why we decided to reboot. Default is `unknown`.


----
## `power.restart_3v3`

Restart the 3V3 power supply. This will restart the modem and also the accelerometer the hard way.

WARNING: Any open serial connections to the modem (eg. in ec2x_manager and tracking_manager) may cause the system to freeze or block the TTYs and make new numbering after modem is re-initialized. It is recommended to use `ec2x.power_off` to restart modem.

**OPTIONAL ARGUMENTS**

  - **`confirm`** (bool): Acknowledge the execution of this command. Default is `False`.
  - **`reason`** (str): Reason code that tells why the 3V3 supply is restarted. Default is `unknown`.


----
## `power.sleep`

Power down system and put device into sleep state.

**OPTIONAL ARGUMENTS**

  - **`interval`** (int): Sleep interval in seconds. Default is `60`.
  - **`delay`** (str): Delay in seconds before powering down. Default is `10`.
  - **`modem_off`** (bool): Power off 3V3 supply to modem on mPCIe slot. Default is `False`.
  - **`acc_off`** (bool): Put accelerometer into standby. Default is `False`.
  - **`confirm`** (bool): Acknowledge the execution of this command. Default is `False`.
  - **`reason`** (str): Reason code that tells why we decided to sleep. Default is `unknown`.


----
## `power.sleep_timer`

Setup sleep timer to schedule power off upon inactivity.

:::note
Do not access pillar data in this function as they will not be available when called from engines (separate processes).
:::

**OPTIONAL ARGUMENTS**

  - **`add`** (str): Add a timer with the given name.
  - **`clear`** (str): Clear sleep timer(s) matching the given name. Use `*` to clear all.
  - **`enable`** (bool): Enable or disable timer. __DEPRECATED__: Use `add` or `clear` instead.
  - **`period`** (int): Timer period in seconds before performing sleep. Default is `1800`.
  - **`reason`** (str): Reason code that tells why we decided to sleep. Default is `unknown`.


----
## `power.status`

Get status and debug information regarding power management.
