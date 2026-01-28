---
id: pinouts
title: Screw terminal pinouts for IP67
supportedDevices: ['pro_case']
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import SideBySide from '@site/src/components/SideBySide';
import CardGrid from "/components/CardGrid" ;
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

The [AutoPi](https://www.autopi.io/) [CAN-FD Pro device](https://shop.autopi.io/products/autopi-can-fd-pro) is packed into a durable, IP67-rated aluminum casing — built to withstand dust, dirt, and water, making it perfect for rugged, outdoor, or industrial installations. Inside the device it's possible to access additional GPIO pins for your project. These are conviniently located at a set of screw terminal blocks inside the device. There is 23 connections in total:

<p align="center">
    <img src="/img/getting_started/getting_started/simcard_direction.jpeg" alt="Screw terminal header" width="80%" />
</p>


The screw terminals is applied to a custom AutoPi HAT board located inside the CAN-FD Pro device, giving you easy access to a number of selected pins:


<p align="center">
    <img src="/img/hardware/ip67/ip67pinout_hat.png" alt="Screw terminal header" width="60%" />
</p>

The pinouts have the following functions assigned, note some of them are already pre assigned for the OBD-II connector on the device:

| Pin | Function | Used | Description |
| ------ | ------ | ------ | ------ |
| Pin 1 | HS_CAN_HI | Yes | [See here](/hardware/autopi_tmu_cm4/using-hat/#pinout) |
| Pin 2 | HS_CAN_LO | Yes | [See here](/hardware/autopi_tmu_cm4/using-hat/#pinout) |
| Pin 3 | MS_CAN_HI | Yes | [See here](/hardware/autopi_tmu_cm4/using-hat/#pinout) |
| Pin 4 | MS_CAN_LO | Yes | [See here](/hardware/autopi_tmu_cm4/using-hat/#pinout) |
| Pin 5 | Vcc12V | Yes | [See here](/hardware/autopi_tmu_cm4/using-hat/#pinout) |
| Pin 6 | GND | Yes | [See here](/hardware/autopi_tmu_cm4/using-hat/#pinout) |
| Pin 7 | RPI_GPIO22 | No | [See here](/hardware/autopi_tmu_cm4/using-hat/#pinout) |
| Pin 8 | RPI_GPIO24 | No | [See here](/hardware/autopi_tmu_cm4/using-hat/#pinout) |
| Pin 9 | RPI_GPIO27 | No | [See here](/hardware/autopi_tmu_cm4/using-hat/#pinout) |
| Pin 10 | Vcc5V_EXT  | No | [See here](/hardware/autopi_tmu_cm4/using-hat/#pinout) |
| Pin 11 | Vcc3V3_EXT | No | [See here](/hardware/autopi_tmu_cm4/using-hat/#pinout) |
| Pin 12 | RPI_PWR | No | [See here](/hardware/autopi_tmu_cm4/using-hat/#pinout) |
| Pin 13 | PICO_EXT_17 | No | [See here](/hardware/autopi_tmu_cm4/using-hat/#pinout) |
| Pin 14 | PICO_EXT_28 | No | [See here](/hardware/autopi_tmu_cm4/using-hat/#pinout) |
| Pin 15 | Vcc5V | No | [See here](/hardware/autopi_tmu_cm4/using-hat/#pinout) |
| Pin 16 | GND | No | [See here](/hardware/autopi_tmu_cm4/using-hat/#pinout) |
| Pin 17 | RPI_GPIO23 | No | [See here](/hardware/autopi_tmu_cm4/using-hat/#pinout) |
| Pin 18 | RPI_ID_SD | No | [See here](/hardware/autopi_tmu_cm4/using-hat/#pinout) |
| Pin 19 | RPI_ID_SC | No | [See here](/hardware/autopi_tmu_cm4/using-hat/#pinout) |
| Pin 20 | Vcc3V3 | No | [See here](/hardware/autopi_tmu_cm4/using-hat/#pinout) |
| Pin 21 | GND | No | [See here](/hardware/autopi_tmu_cm4/using-hat/#pinout) |
| Pin 22 | EXT_WAKE_12V | No | [See here](/hardware/autopi_tmu_cm4/using-hat/#pinout) |
| Pin 23 | GND | No | [See here](/hardware/autopi_tmu_cm4/using-hat/#pinout) |

If you want to use some of the additional pins in the screw terminal, then its important that you use the correct cable transfer out of the box, to maintain the IP67 integrety. An alternative is to use some of the unused cables in the OBD connector as this is already IP67 rated. These unused cables has been neatly tied up inside the box in flex wrapping. 


