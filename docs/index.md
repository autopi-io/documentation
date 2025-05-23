---
id: index
slug: /
title: AutoPi Documentation
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import CardGrid from "/components/CardGrid"

This website contains the documentation for the [AutoPi](https://www.autopi.io) IoT Platform. The website will continually
be updated with the latest details and functionalities about the platform.

## What is [AutoPi](https://www.autopi.io)?

[AutoPi](https://www.autopi.io) is a [Cloud](https://www.autopi.io/software-platform/cloud-management) platform, and a hardware device that works together. The aim of [AutoPi](https://www.autopi.io) is to
serve as a platform for various car projects, as the platform is open and allows for easy
customization. The hardware device is built on top of a Raspberry Pi, and can use the RPi Zero, 3, 4 and Compute Module 4 boards. It is using a modified version of Raspbian.

<p align="center">
  <img src={useBaseUrl('img/shared/gen3device_narrow.png')} alt="AutoPi GEN3" width="400"/>
</p>

The platform is separated in two major parts - the [AutoPi](https://www.autopi.io) [Cloud](https://www.autopi.io/software-platform/cloud-management) and the [AutoPi](https://www.autopi.io) Core. The [Cloud](https://www.autopi.io/software-platform/cloud-management)
system is the server side of the [AutoPi](https://www.autopi.io). It has the main website ([my.autopi.io](https://my.autopi.io)),
which provides a user friendly front-end interface to work with [AutoPi](https://www.autopi.io) devices. The [Cloud](https://www.autopi.io/software-platform/cloud-management) also has
an open [RESTful API](https://api.autopi.io), which powers the [AutoPi](https://my.autopi.io)
website. However, the API can also be used for your own custom solutions.

<p align="center">
  <img src={useBaseUrl('/img/cloud/intro/cloud_device_setups_scaled.png')} alt="AutoPi Cloud" width="400"/>
</p>


The second part of the system is the [AutoPi](https://www.autopi.io) Core, which is the system that's running on the actual
[AutoPi](https://www.autopi.io) device. It is built on top of [salt stack](https://saltproject.io/). The [AutoPi](https://www.autopi.io) Core system
works together with the [Cloud](https://www.autopi.io/software-platform/cloud-management) system by sending data back regularly, so that it is easily accessible
by the users later on. Users are also able to change settings, execute commands and work with the
device directly through the [Cloud](https://www.autopi.io/software-platform/cloud-management).

In this documentation website you will be able to find everything you need to start working with
[AutoPi](https://autopi.io). If you already have a device and you're looking to set it up, a very
good starting point for you is our [Getting started guide](/getting_started/autopi_tmu_cm4/).


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


## Documentation

Explore our documentation by area.

<CardGrid home>

[![](/img/shared/favicon-194x194.png) **Core Documentation** Understand how the AutoPi Core works.](/core/index.md)


[![](/img/shared/laptop_autopi_3_scaled.png) **Cloud Documentation** Learn how to make the most of your AutoPi Cloud Solution.](/cloud/index.md)


[![](/img/shared/guides_trans.png) **Guides** Get inspiration from our rich set of guides.](/getting_started/autopi_tmu_cm4/index.md)

[![](/img/hardware/autopi_tmu_cm4/TMU_Floating_Topside_V1_scaled.png) **Hardware** View hardware specific documentation.](/hardware/index.md)

[![](/img/getting_started/api/api_intro/api_frontpage.jpg) **API** Explore our rich API.](https://api.autopi.io/)

</CardGrid>



## Developers
Want to dig right into the source code? Get full access here:

<CardGrid home>

[![](/img/shared/github.png) **AutoPi Core Github** Get the open-source code for the AutoPi Core.](https://github.com/autopi-io/autopi-core)

[![](/img/shared/github.png) **AutoPi Documentation Github** Participate in the documentation, it's open-source.](https://github.com/autopi-io/documentation)

</CardGrid>
