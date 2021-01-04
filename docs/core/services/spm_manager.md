---
id: core-services-spm
title: Spm Manager
---

## Handlers
### `flash_firmware`

Flashes new SPM firmware to ATtiny.


----
### `heartbeat`

Triggers SPM heartbeat and fires power on event when booting.


----
### `heartbeat`

Reset/restart ATtiny.


----
### `led_pwm`

Change PWM frequency and/or duty cycle for LED.

**OPTIONAL ARGUMENTS**

  - **`frequency`** (float): Change to frequency in Hz.
  - **`duty_cycle`** (float): Change to duty cycle in percent.


----
### `query`

Queries a given SPM command.

**ARGUMENTS**

  - **`cmd`** (str): The SPM command to query.
