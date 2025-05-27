---
id: pro-led-and-button
title: LED and Button States
supportedDevices: ['pro']
---
import CardGrid from "/components/CardGrid" ;
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

The [AutoPi](https://www.autopi.io) [CAN-FD Pro](https://shop.autopi.io/products/autopi-can-fd-pro) comes with an advanced smart power management (SPM) system, which will handle the lifecycle of the device. The status of SPM can be seen from the LEDs on the side of the device and can changed from software or from the Button also located on the side:

![LED and Button location](/img/hardware/autopi_tmu_cm4/led_and_button/led_button_location.png)

The following state diagram explains this lifecycle. The LED is the Blue LED on the side of the device.

![LED and Button states](/img/hardware/autopi_tmu_cm4/led_and_button/led_button_states.png)

## Button
With the button it is possible to control the state of the device:

| Action | State | Description |
| ------ | ------ | ------ |
| Long press (>3s) | Can be initated from any state. | SPM will go into **USER SETUP** state. |
| Click | **ON** State | SPM will go into **SHUTDOWN** state and thereby either into hibernate or sleep. |
| Click | **USER SETUP** State | SPM will go into **HIBERNATING** state. |
| Click | **SLEEPING** State | SPM will go into **BOOTING** state. |
| Click | **HIBERNATING** State | SPM will go into **BOOTING** state. |



## Status LEDs

### Blue LED

The blue LED indicates the current state of the [low-level ](/core/power_management/core-power-low) SPM system.

| LED State | Description |
| ------ | ------ |
| Turned off | SPM is in **OFF** state. |
| Constantly dimmed | SPM is in **HIBERNATING** state. |
| Fading in | SPM is in **BOOTING** state. |
| Fading out | SPM is in **SHUTTING DOWN** state. |
| Constantly bright | SPM is in **ON** state. |
| Breathing slow | SPM is in **SLEEP** state. |
| Flashing medium (once a second) | SPM is in **USER SETUP** state. |
| Flashing rapidly | eMMC is begin flashed |

### Green LED

The green LED indicates the current state of the [high-level](/core/power_management/core-power-high) system.

| LED State | Description |
| ------ | ------ |
| Turned off | Not running or in the process of booting up. |
| Flashing brightly | Up and running but NOT (yet) connected to the [Cloud](https://www.autopi.io/software-platform/cloud-management). |
| Constantly bright | Up and running and connected to the [Cloud](https://www.autopi.io/software-platform/cloud-management). |
| Flashing rapidly | [AutoPi](https://www.autopi.io) Core software upgrade in progress |

