---
id: core-intro
title: Introduction
---

import useBaseUrl from '@docusaurus/useBaseUrl'; import CardGrid from "/components/CardGrid";

This section explores the [AutoPi](https://www.autopi.io) Core system, which is one part of the [AutoPi](https://www.autopi.io) platform. The [AutoPi](https://www.autopi.io)
Core is an open-source software running on the hardware device. It is built on [salt stack](https://saltproject.io/).

## What is [AutoPi](https://www.autopi.io) Core?
The [AutoPi](https://www.autopi.io) Core is a system that runs on the [AutoPi](https://www.autopi.io) device. It includes a vast range of
functionalities such as services that manage different components in the device. For example,
there is the [OBD service](/core/services/obd_manager.md), which controls how the device communicates
with the OBD-II port of your vehicle. There is also the [tracking service](/core/services/tracking_manager.md),
which controls the GPS modem inside the device.

<p align="center">
  <img src={useBaseUrl('/img/shared/gen3device_narrow.png')} alt="AutoPi GEN3" width="400"/>
</p>

There are also many modules that provide a single execution commands that help to manage or work
with the device. Modules are separated by functionality, for example, the [OBD module](/core/commands/obd.md)
provides commands that work with the OBD-II port of your vehicle, just like the OBD service
mentioned above. The [ec2x module](/core/commands/ec2x.md) has commands to manage the Quectel 4G/GPS
modem.


## Get Your Device Today and Get Started!

<p align="center">
  <img src={useBaseUrl('img/shared/autopi_devices_trans.png')} alt="AutoPi GEN3" width="600"/>
</p>

<CardGrid home>

[![](/img/hardware/autopi_mini/AutoPi_Mini_5_Top_right.png) **AutoPi Mini** Build for fleet volume scaling and ease of install. CAN bus ready with support for legacy protocols. Support wide range of OEM Parameters. Comes with connectivity built-in. See price.](https://shop.autopi.io/products/autopi-mini)

[![](/img/hardware/autopi_tmu_cm4/TMU_Floating_Topside_V1_scaled.png) **AutoPi TMU CM4** Based on Raspberry Pi Compute Module 4. Best for custom solutions requiring large computation power and expansion options. Comes with connectivity built-in. See price.](https://shop.autopi.io/products/autopi-telematics-unit-cm4-4g-lte-edition)

[![](/img/hardware/autopi_canfd_pro/canfd_pro_trans.png) **AutoPi CAN-FD Pro** Based on Raspberry Pi Compute Module 4. Our most powerful device to date, designed for full speed automotive datalogging of dual CAN-FD channels. See price.](https://shop.autopi.io/products/autopi-can-fd-pro)

[![](/img/shared/autopi_devices_trans.png) **Comparison of all AutoPi devices** Compare our devices and find the best fit for your requirements.](https://www.autopi.io/hardware/compare/)

</CardGrid>

<br>
</br>

## Let's keep in touch!
Thank you for choosing AutoPi. We're excited to see what you will achieve with your AutoPi device! 
<CardGrid home>

[![](/img/hardware/autopi_tmu_cm4/TMU_Floating_Topside_V1_scaled.png) **Buy AutoPi device** Check out our shop .](https://shop.autopi.io)

[![](/img/shared/autopi_devices_trans.png) **Learn more** Check which device fits your requirements .](https://www.autopi.io/hardware/compare/)

[![](/img/shared/favicon.ico) **Contact our sales team** You can build on top of AutoPi .](https://www.autopi.io/contact/)

[![](/img/shared/support_icon.png) **Get help from our support team** Let us know about your technical questions.](https://www.autopi.io/support/)

</CardGrid>
