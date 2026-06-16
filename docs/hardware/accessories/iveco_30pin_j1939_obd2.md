---
id: iveco-30pin-j1939-obd2
title: IVECO 30 PIN J1939 to OBD-II Adapter Cable
supportedDevices: ['mini','cm4','pro','pro_case']
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

## Introduction

Do you need to connect your AutoPi device to an IVECO truck for J1939 diagnostics and data logging?

The IVECO 30 PIN J1939 to 16 PIN OBD-II Adapter Cable fits many IVECO truck models — including heavy-duty trucks and commercial vehicles — and lets you easily connect your AutoPi device to start reading J1939 data. Simply locate the 30-pin diagnostic port in your vehicle, typically found in the cabin, and plug in the cable.

<p align="center">
	<img src="/img/hardware/accessories/adapter_cables/iveco_30_to_16.png" alt="IVECO 30 PIN J1939 to 16 PIN OBD-II Adapter Cable" width="55%" />
</p>

The cable features a plug-and-play design for quick and secure connections, and is constructed with premium materials built for heavy-duty environments.

:::info
This adapter cable can be purchased through the AutoPi shop: [**IVECO 30 PIN J1939 to 16 PIN OBD-II Adapter Cable**](https://shop.autopi.io/products/iveco-30-pin-to-16-pin-obd2-adapter-cable).
:::

## Specifications

| Property            | Details                                           |
|:---------------------:|:---------------------------------------------------:|
| Compatibility       | IVECO trucks with 30 PIN diagnostic port          |
| Connector Types     | 30 PIN (male) to 16 PIN OBD-II (female)           |
| Protocol Support    | J1939 for vehicle diagnostics                     |
| Durability          | Premium materials for heavy-duty use              |
| Ease of Use         | Plug-and-play design                              |

## Pinout

| AutoPi Function | IVECO 30 PIN | OBD-II 16 PIN |
|:-----------------:|:--------------:|:---------------:|
| CAN High        | Pin 4        | Pin 6         |
| CAN Low         | Pin 2        | Pin 14        |
| Power           | Pin 30       | Pin 16        |


:::note
The pinout above is based on the standard J1939 to OBD-II mapping. Refer to your IVECO truck documentation for any model-specific variations.
:::
