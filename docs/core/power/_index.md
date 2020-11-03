---
id: core-power
title: Using Power Management
---

Power management of the device consists of a low- and high-level layer:

1. [Low-level](low_level)
1. [High-level](high_level)


## Status LEDs

:::note
Status LEDs are only available on the AutoPi Telematics Unit.
:::

### Blue LED

The blue LED indicates the current state of the [low-level ](/power/low_level) SPM system.

| LED State | Description |
| ------ | ------ |
| Turned off | SPM is in [OFF](/power/low_level#off) state. |
| Flashing brightly | SPM is in [BOOTING](/power/low_level#booting) state. |
| Constantly bright | SPM is in [ON](/power/low_level#on) state. |
| Breathing effect | SPM is in [SLEEPING](/power/low_level#sleeping) state. |
| Constantly dimmed | SPM is in [HIBERNATING](/power/low_level#hibernating) state. |


### Green LED

The green LED indicates the current state of the [high-level](/power/high_level) system.

| LED State | Description |
| ------ | ------ |
| Turned off | Not running or in the process of booting up. |
| Flashing brightly | Up and running but NOT (yet) connected to the cloud. |
| Constantly bright | Up and running and connected to the cloud. |
