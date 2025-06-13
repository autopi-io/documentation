---
id: dualdb9-pinout
title: OBD-II to dual DB9 pinout
supportedDevices: ['mini','cm4','pro']
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---


## Introduction
This page describes the pinout of our OBD-II to dual DB9 pinout cable:

<p align="center">
    <img src="/img/hardware/accessories/cables/obd2_db9.png" alt="OBD-II to dual DB9 cable" width="60%" />
</p>

The following is the size and dimensions:
<p align="center">
    <img src="/img/hardware/accessories/cables/obd2_conns.jpg" alt="OBD-II to dual DB9 cable connections" width="100%" />
</p>

## Pinout


| AutoPi function      | OBD-II Connector       | DB9 CH1         | DB9 CH2                     |
|-------|------------------------|-----------------------------------------------|-|
| Power    | Pin 16           | Pin 1 (Power)                                           |  Pin 1 (Power)     |
| GND | Pin 5              | Pin 3 + Pin 6 (GND)                        | Pin 3 + Pin 6 (GND)   |
| MS CAN Low | Pin 11          | Pin 2 (CAN1 Low)                 | NC  |
| MS CAN High | Pin 3              | Pin 7 (CAN1 High)                   |  NC |
| HS CAN Low | Pin 14   | NC                              | Pin 2 (CAN2 Low)   |
| HS CAN High| Pin 6              | NC                          |  Pin 7 (CAN2 High)  |
| HAT Pin 11| Pin 9               | Pin 4 (LIN1)    | NC  |
| HAT Pin 12 | Pin 12                 | Pin 9 (LIN1 VBat)                                       | NC  |
| HAT Pin 5 | Pin 1              | NC                     | Pin 4 (LIN2)     |
| HAT Pin 8 | Pin 2                | NC           | Pin 9 (LIN2 VBat)  |

:::info
This adapter cable can be bought through AutoPi shop: [**OBD-II to dual DB9 adapter cable**](https://shop.autopi.io/products/obd2-to-dual-db9). 
:::