---
id: caterpillar-538-5051-9pin-j1939-obd2
title: Caterpillar (538-5051) Truck 9 PIN J1939 to OBD-II Adapter Cable
supportedDevices: ['mini','cm4','pro','pro_case']
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

## Introduction

Do you need to connect your AutoPi device to a Caterpillar truck for J1939 diagnostics and data logging?

The Caterpillar (538-5051) Truck 9 PIN J1939 to 16 PIN OBD-II Adapter Cable fits many Caterpillar truck models — including heavy-duty trucks and commercial vehicles — and lets you easily connect your AutoPi device to start reading J1939 data. Simply locate the 9-pin diagnostic port in your vehicle, typically found in the cabin, and plug in the cable.

<p align="center">
	<img src="/img/hardware/accessories/adapter_cables/caterpillar_9_to_16.png" alt="Caterpillar (538-5051) Truck 9 PIN J1939 to 16 PIN OBD-II Adapter" width="55%" />
</p>

The cable features a plug-and-play design for quick and secure connections, and is constructed with premium materials built for heavy-duty environments.

:::info
This adapter cable can be purchased through the AutoPi shop: [**Caterpillar (538-5051) Truck 9 PIN J1939 to 16 PIN OBD-II Adapter Cable**](https://shop.autopi.io/products/cummins-komatsu-truck-12-pin-j1939-to-16-pin-obd-ii-adapter-copy).
:::

## Specifications

| Property            | Details                                              |
|:---------------------:|:------------------------------------------------------:|
| Compatibility       | Caterpillar 538-5051 truck with 9 PIN diagnostic port |
| Connector Types     | 9 PIN (male) to 16 PIN OBD-II (female)               |
| Protocol Support    | J1939 for vehicle diagnostics                        |
| Durability          | Premium materials for heavy-duty use                 |
| Ease of Use         | Plug-and-play design                                 |

## Pinout

| AutoPi Function | OBD-II 16 PIN | Caterpillar 9 PIN |
|:-----------------:|:---------------:|:-------------------:|
| CAN High        | Pin 6         | Pin G             |
| CAN Low         | Pin 14        | Pin F             |
| Power           | Pin 16        | Pin A             |
| GND             | Pin 5         | Pin B             |



:::note
The pinout above is based on the standard J1939 to OBD-II mapping. Refer to your Caterpillar truck documentation for any model-specific variations.
:::
