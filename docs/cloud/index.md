---
id: cloud-intro
title: Introduction
---

import useBaseUrl from '@docusaurus/useBaseUrl'; import CardGrid from "/components/CardGrid" ; 

This section is all about the [Cloud](https://www.autopi.io/software-platform/cloud-management) system. It goes over details, such as the different configuration
options that can be set, the events that can be seen from the device. More complex functionalities
are also explored in this section.

## What is the [AutoPi](https://www.autopi.io) [Cloud](https://www.autopi.io/software-platform/cloud-management)?

The [AutoPi](https://www.autopi.io) [Cloud](https://www.autopi.io/software-platform/cloud-management) is a system created to more easily manage your [AutoPi](https://www.autopi.io) device. The [Cloud](https://www.autopi.io/software-platform/cloud-management) is divided into several sections:

- Device management 
- Fleet management 
- API

<p align="center">
  <img src={useBaseUrl('/img/cloud/intro/cloud_device_setups_scaled.png')} alt="AutoPi Cloud" width="400"/>
</p>

### Device Management
This is an area that shows the current state of your devices and allows you to easily change that
state to whatever is needed. For example, there is a section of advanced settings that are
available that change various functionalities of the device like WiFi, hotspot, accelerometer
and power settings. It is also possible to setup the device to send data back to your own servers.
This way data can be kept private if needed. It possible to manage and maintain multiple devices at the same type, by applying templates to groups of devices.


### Fleet Management
The [Cloud](https://www.autopi.io/software-platform/cloud-management) also allows you to view data that has been recorded from your vehicle. There is a dashboard that
shows past OBD-II data like RPM, speed and fuel level. The device also sends back information about
[trips](/cloud/fleet_management/vehicles/trips/), which are also viewable. The [Cloud](https://www.autopi.io/software-platform/cloud-management) also keeps track of the
[events](/cloud/device_management/events/index.md) that were triggered on your device. In the events page, you are
able to view all events and filter them by date or tag.

### [Cloud](https://www.autopi.io/software-platform/cloud-management) API
The [API](/getting_started/api/) gives you acccess to all the same functionalities you see in the [Cloud](https://www.autopi.io/software-platform/cloud-management). Through the API it is possible to extend the features to your own systems or APP solution and thereby build on top of the platform. 


## Get Your Device Today and Get Started!

<p align="center">
  <img src={useBaseUrl('img/shared/autopi_devices_trans.png')} alt="AutoPi devices" width="600"/>
</p>

<CardGrid home>

[![](/img/hardware/autopi_mini/AutoPi_Mini_5_Top_right.png) **AutoPi Mini** Build for fleet volume scaling and ease of install. CAN bus ready with support for legacy protocols. Support wide range of OEM Parameters. Comes with connectivity built-in. See price.](https://shop.autopi.io/products/autopi-mini)

[![](/img/hardware/autopi_tmu_cm4/TMU_Floating_Topside_V1_scaled.png) **AutoPi TMU CM4** Based on Raspberry Pi Compute Module 4. Best for custom solutions requiring large computation power and expansion options. Comes with connectivity built-in. See price.](https://shop.autopi.io/products/autopi-telematics-unit-cm4-4g-lte-edition)

[![](/img/hardware/autopi_canfd_pro/canfd_pro_trans.png) **AutoPi CAN-FD Pro** Based on Raspberry Pi Compute Module 4. Our most powerful device to date, designed for full speed automotive datalogging of dual CAN-FD channels. See price.](https://shop.autopi.io/products/autopi-can-fd-pro)

[![](/img/shared/autopi_devices_trans.png) **Comparison of all AutoPi devices** Compare our devices and find the best fit for your requirements.](https://www.autopi.io/hardware/compare/)

</CardGrid>


