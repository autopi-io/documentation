---
id: cummins-9pin-j1939-obd2
title: Cummins 9 PIN J1939 (J1708) to OBD-II Adapter Cable
supportedDevices: ['mini','cm4','pro','pro_case']
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

## Introduction

Do you need to connect your AutoPi device to a Cummins heavy-duty vehicle for J1939 or J1708 diagnostics and data logging?

The Cummins 9 PIN J1939 (J1708) to 16 PIN OBD-II Adapter Cable fits many Cummins-powered heavy-duty vehicles — including trucks, buses, and industrial machinery — and lets you easily connect your AutoPi device to start reading J1939 or J1708 data. Simply locate the 9-pin diagnostic port in your vehicle, typically found in the cabin, and plug in the cable.

<p align="center">
	<img src="/img/hardware/accessories/adapter_cables/cummins_9_to_16.png" alt="Cummins 9 PIN J1939 (J1708) to OBD-II Adapter Cable" width="55%" />
</p>


The cable features a plug-and-play design for quick and secure connections, and is constructed with premium materials built for heavy-duty environments.

:::info
This adapter cable can be purchased through the AutoPi shop: [**Cummins 9 PIN J1939 (J1708) to 16 PIN OBD-II Adapter Cable**](https://shop.autopi.io/products/cummins-9-pin-j1939-j1708-to-16-pin-obd2-adapter-cable).
:::

## Specifications

| Property            | Details                                              |
|:---------------------:|:------------------------------------------------------:|
| Compatibility       | Cummins engines with a 9 PIN diagnostic port         |
| Connector Types     | 9 PIN (male) to 16 PIN OBD-II (female)               |
| Protocol Support    | J1939 and J1708 for vehicle diagnostics              |
| Durability          | Premium materials for heavy-duty use                 |
| Ease of Use         | Plug-and-play design                                 |

## Pinout

| AutoPi Function | Cummins 9 PIN | OBD-II 16 PIN |
|:-----------------:|:---------------:|:---------------:|
| CAN High        | Pin C         | Pin 6         |
| CAN Low         | Pin D         | Pin 14        |
| Power           | Pin B         | Pin 16        |
| GND             | Pin A         | Pin 5         |


<p align="center">
	<img src="/img/hardware/accessories/custom_pinouts/cummins_custom_9to16.png" alt="Cummins 9 PIN J1939 (J1708) to OBD-II Adapter Cable" width="85%" />
</p>

:::note
The pinout above is based on the standard J1939/J1708 to OBD-II mapping. Refer to your Cummins engine documentation for any model-specific variations.
:::
