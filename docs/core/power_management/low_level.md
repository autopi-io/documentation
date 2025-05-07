---
id: core-power-low
title: "Low-level"
---
import CardGrid from "/components/CardGrid";

## SPM

The SPM (Smart Power Management) is an embedded system that controls the low-level power cycle of the device. It interacts with a number of subsystems that can initiate power state changes:

| Subsystem | Description |
| ------ | ------ |
| Accelerometer | Built-in accelerometer is capable of triggering wake up based on physical movement events. |
| Modem | Installed modem module can trigger wake up on received SMS or dial up call. |
| [STN](#stn) | Built-in chipset triggers power on and off based on voltage level changes. |

Finally the Raspberry Pi communicates directly with the SPM and performs power state changes based on more [high-level](/core/power_management/high_level.md) decisions.  

### States

Below diagram shows an overview of all possible SPM states and the transitions between.


import StatesSvg from '/img/core/power_management/low_level/states.svg';

<StatesSvg />

#### OFF

Everything is powered off.

##### Transitions

| State | Condition |
| ------ | ------ |
| [BOOTING](#booting) | The device is plugged in. |
| [HIBERNATING](#hibernating) | Maximum number of boot attempts reached. Default is 10 attempts. |

#### BOOTING

Everything is powered on and the Raspberry Pi is booting up.

##### Transitions

| State | Condition |
| ------ | ------ |
| [ON](#on) | Successfully communicated with the Raspberry Pi. |
| [OFF](#off) | No communication with the Raspberry Pi within a given time limit. Default boot timeout is 10 minutes. |

#### ON

Everything is powered on and there is regular communication with the Raspberry Pi.

##### Transitions

| State | Condition |
| ------ | ------ |
| [SLEEPING](#sleeping) | The Raspberry Pi decided to sleep for a given period of time. |
| [HIBERNATING](#hibernating) | The Raspberry Pi decided to hibernate or the STN chip powered off according to its triggers. |
| [OFF](#off) | No communication with the Raspberry Pi within a given time limit. Default heartbeat timeout is 3 minutes. |

#### SLEEPING

The Raspberry Pi is powered off. Modem and GPS is kept on in low power mode.

Wake up will happen after a specified period of sleep time or earlier if:

  - STN is powered on.
  - Received wake signal from modem.
  - Received wake signal from accelerometer.

##### Transitions

| State | Condition |
| ------ | ------ |
| [BOOTING](#booting) | See the above criteria. |

#### HIBERNATING

Everything is shut down for maximum power saving.

##### Transitions

| State | Condition |
| ------ | ------ |
| [BOOTING](#booting) | The STN powers on (when transitions from off to on). |

## STN

See the STN command for available power trigger options [here](core/commands/stn.md).
