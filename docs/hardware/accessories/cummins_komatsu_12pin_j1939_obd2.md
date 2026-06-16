---
id: cummins-komatsu-12pin-j1939-obd2
title: Cummins-Komatsu Truck 12 PIN J1939 to OBD-II Adapter Cable
supportedDevices: ['mini','cm4','pro','pro_case']
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

## Introduction

Do you need to connect your AutoPi device to a Cummins or Komatsu truck for J1939 diagnostics and data logging?

The Cummins-Komatsu Truck 12 PIN J1939 to 16 PIN OBD-II Adapter Cable fits many Cummins and Komatsu truck models — including heavy-duty trucks and commercial vehicles — and lets you easily connect your AutoPi device to start reading J1939 data. Simply locate the 12-pin diagnostic port in your vehicle, typically found in the cabin, and plug in the cable.

<p align="center">
	<img src="/img/hardware/accessories/adapter_cables/cummins_komatsu.png" alt="Cummins-Komatsu Truck 12 PIN J1939 to 16 PIN OBD-II Adapter" width="55%" />
</p>

The cable features a plug-and-play design for quick and secure connections, and is constructed with premium materials built for heavy-duty environments.

:::info
This adapter cable can be purchased through the AutoPi shop: [**Cummins-Komatsu Truck 12 PIN J1939 to 16 PIN OBD-II Adapter Cable**](https://shop.autopi.io/products/man-truck-12-pin-j1939-to-16-pin-obd-ii-adapter-copy).
:::

## Specifications

| Property            | Details                                              |
|:---------------------:|:------------------------------------------------------:|
| Compatibility       | Cummins and Komatsu trucks with 12 PIN diagnostic port |
| Connector Types     | 12 PIN (male) to 16 PIN OBD-II (female)              |
| Protocol Support    | J1939 for vehicle diagnostics                        |
| Durability          | Premium materials for heavy-duty use                 |
| Ease of Use         | Plug-and-play design                                 |

## Pinout

| AutoPi Function | Cummins-Komatsu 12 PIN | OBD-II 16 PIN |
|:-----------------:|:------------------------:|:---------------:|
| CAN High        | Pin 3                    | Pin 6         |
| CAN Low         | Pin 10                   | Pin 14        |
| Power           | Pin 1                    | Pin 16        |
| GND             | Pin 12                   | Pin 5         |



:::note
The pinout above is based on the standard J1939 to OBD-II mapping. Refer to your Cummins or Komatsu truck documentation for any model-specific variations.
:::
