---
id: keyfob-interface
title: Keyless Interface Specification
---
import CardGrid from "/components/CardGrid";

:::warning
This solution has been discontinued and is no longer supported by the platform. 
:::

:::caution
The keyless entry solution described here only works with the [AutoPi](https://www.autopi.io) [TMU CM4](https://www.autopi.io/hardware/autopi-tmu-cm4) and newer editions
:::

This section descripes the interface for the keyless keyfob solution provided through the BLE extension available through [AutoPi](https://www.autopi.io). The BLE extension is a small extension board, which makes it possible to wake the [AutoPi](https://www.autopi.io) through a BLE connection and then send BLE commands to control a keyfob through the same interface. The BLE connection makes it possible to unlock/lock the car in areas where there is no internet connection. 


## API for Key Controls
Commands can be sent from another system to the [AutoPi](https://www.autopi.io) server and there on to control the vehicle. 

<p align="center">
<img src="/img/hardware/accessories/keyfob/command_flow_1.jpg" alt="Keyfob command flow" width="60%" />
</p>

## Power Settings to Optimize Sleep Scheduling
It is possible to upload booking schedules to the [AutoPi](https://www.autopi.io) backend. These will be transformed into sleeping schedules for the [AutoPi](https://www.autopi.io) to ensure that the device is powered on at the correct times.

<p align="center">
<img src="/img/hardware/accessories/keyfob/power_settings_1.jpg" alt="Keyfob power settings control" width="60%" />
</p>

## Offline Mode
When the device is offline (not connected to LTE/GSM network), it is important that the user can still control the car. Therefore, a set of offline functions will be available through Bluetooth. 


<p align="center">
<img src="/img/hardware/accessories/keyfob/offline_mode_1.jpg" alt="Keyfob offline mode" width="60%" />
</p>

From an App it is possible to communicate directly with the device using BLE. 

To ensure security, the device will have a rolling key pair needed for smartphones to be able to send the commands. This key needs to be synced to the smartphone during the booking, to allow unlock of the car. These keys will be distributed by the [AutoPi](https://www.autopi.io) backend and will be updated on the device and made available for the external system. 

<p align="center">
<img src="/img/hardware/accessories/keyfob/offline_mode_2.jpg" alt="Keyfob offline mode" width="60%" />
</p>
