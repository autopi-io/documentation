---
id: core-power
title: Getting Started
---

Power management of the device consists of a low- and high-level layer:

1. [Low-level](low_level.md)
1. [High-level](high_level.md)


## Status LEDs

:::note
Status LEDs are only available on the AutoPi Telematics Unit.
:::

### Blue LED

The blue LED indicates the current state of the [low-level ](low_level.md) SPM system.

| LED State | Description |
| ------ | ------ |
| Turned off | SPM is in [OFF](low_level.md#off) state. |
| Flashing brightly | SPM is in [BOOTING](low_level.md#booting) state. |
| Constantly bright | SPM is in [ON](low_level.md#on) state. |
| Breathing effect | SPM is in [SLEEPING](low_level.md#sleeping) state. |
| Constantly dimmed | SPM is in [HIBERNATING](low_level.md#hibernating) state. |


### Green LED

The green LED indicates the current state of the [high-level](high_level.md) system.

| LED State | Description |
| ------ | ------ |
| Turned off | Not running or in the process of booting up. |
| Flashing brightly | Up and running but NOT (yet) connected to the cloud. |
| Constantly bright | Up and running and connected to the cloud. |
