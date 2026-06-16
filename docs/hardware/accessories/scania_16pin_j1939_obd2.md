---
id: scania-16pin-j1939-obd2
title: Scania 16 PIN J1939 to OBD-II Adapter Cable
supportedDevices: ['mini','cm4','pro','pro_case']
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

## Introduction

Do you need to connect your AutoPi device to a Scania truck for J1939 diagnostics and data logging?

The Scania 16 PIN J1939 to 16 PIN OBD-II Adapter Cable fits many Scania truck models — including heavy-duty trucks and commercial vehicles — and lets you easily connect your AutoPi device to start reading J1939 data. Simply locate the 16-pin diagnostic port in your vehicle, typically found in the cabin, and plug in the cable.

<p align="center">
	<img src="/img/hardware/accessories/adapter_cables/scania_truck.png" alt="Scania 16 PIN J1939 to 16 PIN OBD-II Adapter Cable" width="55%" />
</p>

The cable features a plug-and-play design for quick and secure connections, and is constructed with premium materials built for heavy-duty environments.

:::info
This adapter cable can be purchased through the AutoPi shop: [**Scania 16 PIN J1939 to 16 PIN OBD-II Adapter Cable**](https://shop.autopi.io/products/scania-16-pin-to-16-pin-obd2-adapter-cable).
:::

## Specifications

| Property            | Details                                           |
|:---------------------:|:---------------------------------------------------:|
| Compatibility       | Scania trucks with 16 PIN diagnostic port         |
| Connector Types     | 16 PIN (male) to 16 PIN OBD-II (female)           |
| Protocol Support    | J1939 for vehicle diagnostics                     |
| Durability          | Premium materials for heavy-duty use              |
| Ease of Use         | Plug-and-play design                              |

## Pinout

| AutoPi Function | Scania 16 PIN | OBD-II 16 PIN |
|:-----------------:|:---------------:|:---------------:|
| CAN High        | Pin 5         | Pin 6         |
| CAN Low         | Pin 9         | Pin 14        |
| Power           | Pin 1         | Pin 16        |
| GND             | Pin 2         | Pin 5         |


:::note
The pinout above is based on the standard J1939 to OBD-II mapping. Refer to your Scania truck documentation for any model-specific variations.
:::
