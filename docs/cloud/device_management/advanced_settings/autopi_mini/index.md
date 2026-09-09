---
id: cloud-config-mini-intro
title: Introduction
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import CardGrid from "/components/CardGrid"

---

This guide will walk you through configuring advanced settings for your AutoPi Mini device. Optimize device behavior for your specific vehicle type (ICE or EV), configure OBD communication, manage vehicle identification, and customize ignition detection and vehicle tracking methods. Learn how to fine-tune your Mini device for reliable data collection and seamless vehicle integration.

![Mini advanced settings](/img/cloud/device_management/advanced_settings/autopi_mini/mini_advanced_settings.png)

What you'll learn:
- How to access and navigate AutoPi Mini advanced settings.
- How to configure OBD settings for your vehicle type (ICE or EV).
- How to manage vehicle identification (VIN) settings.
- How to set up ignition detection methods based on your vehicle type.
- How to configure vehicle tracking and trip detection sources.


:::note
Like any [AutoPi](https://www.autopi.io) [Cloud](https://www.autopi.io/software-platform/cloud-management) functionality, configuration settings can be changed programmatically through the [AutoPi](https://www.autopi.io) REST API. For more information see our [API docs page](https://api.autopi.io/).
:::



## Obd settings

| Name | Description | Default |
| ------ | ------ | ------ |
| Obd Feature | Specifies how the device communicates with the vehicle’s onboard diagnostics (OBD) system. | OBD (auto) |

:::tip
If you have an internal combustion engine (ICE) vehicle, select OBD (Auto) in the OBD Feature field. This is the default setting for all AutoPi Mini devices.
If you have an electric vehicle (EV), select Non-OBD Compliant in the OBD Feature field.
:::
<br>
</br>

## Obd Vin Settings

| Name | Description | Default |
| ------ | ------ | ------ |
| Vin | If the vehicle identification number (VIN) cannot be retrieved automatically, you can enter it manually. The VIN is a 17-character code consisting of digits and capital letters. | - |
| Vin source | Specifies how the VIN is obtained: either automatically from the device (Auto) or entered manually by the user (Manual). | Auto |

:::tip
If your device cannot automatically detect the VIN, you can enter it manually in the VIN field after selecting Manual for VIN Source.
:::
<br>
</br>

## System

| Name | Description | Default |
| ------ | ------ | ------ |
| Ignition settings | Specifies how the system detects vehicle ignition status. | Power Voltage or Engine RPM |

:::tip
If you have an ICE vehicle, select Power Voltage or Engine RPM as the ignition detection method.
If you have an EV, select Accelerometer for ignition detection.
:::
<br>
</br>

## Tracking 
This setting is used to determine if a vehicle has been driven by using these 2 sources: 
* Trip start/stop - created events for both trip start and trip stop that can be found under Device > Events; the whole trip taken can be seen in Vehicle > Trips.
* obd.rpm - values for RPM detected from the vehicle. 

| Name | Description | Default |
| ------ | ------ | ------ |
| Source | What data source should be used to determine if a vehicle/asset has been used/driven? Changing this will only apply to new data being logged. | Trip start/stop |

