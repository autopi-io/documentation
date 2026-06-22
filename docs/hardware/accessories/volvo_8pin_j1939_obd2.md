---
id: volvo-8pin-j1939-obd2
title: Volvo 8 PIN J1939 to OBD-II Adapter Cable
supportedDevices: ['mini','cm4','pro','pro_case']
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

## Introduction

Do you need to connect your AutoPi device to a Volvo truck for J1939 diagnostics and data logging?

The Volvo 8 PIN J1939 to 16 PIN OBD-II Adapter Cable fits many Volvo truck models — including heavy-duty trucks and commercial vehicles — and lets you easily connect your AutoPi device to start reading J1939 data. Simply locate the 8-pin diagnostic port in your vehicle, typically found in the cabin, and plug in the cable.

<p align="center">
	<img src="/img/hardware/accessories/adapter_cables/volvo_8_to_16.png" alt="Volvo 8 PIN J1939 to 16 PIN OBD-II Adapter Cable" width="55%" />
</p>

The cable features a plug-and-play design for quick and secure connections, and is constructed with premium materials built for heavy-duty environments.

:::info
This adapter cable can be purchased through the AutoPi shop: [**Volvo 8 PIN J1939 to 16 PIN OBD-II Adapter Cable**](https://shop.autopi.io/products/volvo-8-pin-to-16-pin-obd2-adapter-cable).
:::

## Specifications

| Property            | Details                                           |
|:---------------------:|:---------------------------------------------------:|
| Compatibility       | Volvo trucks with 8 PIN diagnostic port           |
| Connector Types     | 8 PIN (male) to 16 PIN OBD-II (female)            |
| Protocol Support    | J1939 for vehicle diagnostics                     |
| Durability          | Premium materials for heavy-duty use              |
| Ease of Use         | Plug-and-play design                              |

## Pinout

| AutoPi Function | OBD-II 16 PIN | Volvo 8 PIN |
|:-----------------:|:---------------:|:-------------:|
| Power           | Pin 16        | Pin 8       |
| GND             | Pin 4         | Pin 1       |

<p align="center">
	<img src="/img/hardware/accessories/custom_pinouts/volvo_custom_8to16.png" alt="Volvo to OBD-II Adapter Cable" width="75%" />
</p>

:::note
The pinout above is based on the standard J1939 to OBD-II mapping. Refer to your Volvo truck documentation for any model-specific variations.
:::
