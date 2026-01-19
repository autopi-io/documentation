---
id: doip-install
title: DoIP HAT Installation
supportedDevices: ['cm4']
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />

---

:::caution Before you begin
The DoIP solution described in this guide is **only supported on AutoPi TMU CM4–based devices** and newer revisions.

- DoIP can be ordered **pre-installed** from AutoPi. If your device was delivered with DoIP pre-installed, no hardware installation is required.
- When the DoIP HAT is installed, the **Ethernet interface on the AutoPi is internally routed to the vehicle**.  
  **Do not connect anything to the Ethernet port** after installation.
- **Never install a DoIP-enabled device in a vehicle that does not support DoIP (Ethernet diagnostics).**  
  Using Ethernet-based diagnostics on a CAN-only vehicle may interfere with vehicle communication and operation.
:::

## Introduction

This guide explains how to physically install the **AutoPi DoIP HAT** on an AutoPi TMU CM4 device.

The DoIP HAT enables **Diagnostics over IP (DoIP)**, allowing diagnostic and programming communication with vehicle ECUs over Ethernet instead of CAN. This is commonly used for:
- UDS diagnostics over Ethernet
- ECU flashing and programming
- High-bandwidth diagnostic workflows
- OEM and engineering tools that require DoIP

If you are looking for instructions on **how to use DoIP after installation**, see:  
[Setting up DoIP on AutoPi](/developer_guides/setting-up-doip/)

## What is DoIP?

DoIP (Diagnostic over Internet Protocol, ISO 13400) is an automotive diagnostic protocol that transports diagnostic messages over IP-based networks, typically Ethernet.

Compared to CAN-based diagnostics, DoIP offers:
- Higher bandwidth
- Faster flashing and data transfer
- Direct compatibility with modern OEM diagnostic tools
- Ethernet-based ECU access without CAN bottlenecks

## Prerequisites

Before starting, ensure you have the following:

- 1 × AutoPi DoIP HAT PCB
- 3 × Plastic screws
- 2 × 6.5 mm plastic spacers
- AutoPi TMU CM4 device
- Clean, static-safe workspace

:::info
The DoIP HAT can be purchased from the AutoPi Shop:  
[DoIP HAT for AutoPi TMU CM4](https://shop.autopi.io/products/doip-hat-v1-3)

You can also order AutoPi devices with the DoIP HAT pre-installed.
:::

<p align="center">
  <img
    src="/img/hardware/accessories/doip/doip2.jpg"
    alt="AutoPi DoIP HAT"
    width="40%"
  />
</p>

## Installation Steps

### Step 1 – Open the AutoPi enclosure

Place the AutoPi device upside down and remove the four screws on the bottom of the enclosure.

Carefully lift off the top cover to expose the internal PCB.

<p align="center">
  <img
    alt="Opening AutoPi enclosure"
    width="460px"
    src={useBaseUrl('/img/hardware/autopi_tmu_cm4/installing_external_antennas/ext_ant2.jpg')}
  />
</p>

### Step 2 – Prepare the DoIP HAT

Attach the two **6.5 mm plastic spacers** to the DoIP HAT PCB using the provided plastic screws.

Ensure the spacers are firmly mounted and aligned with the mounting holes.

<p align="center">
  <img
    src="/img/hardware/accessories/doip/doip3.jpg"
    alt="Mounting spacers on DoIP HAT"
    width="460px"
  />
</p>

### Step 3 – Mount the DoIP HAT

Carefully align the DoIP HAT with the **40-pin GPIO header** on the AutoPi main board.

Press the HAT straight down until the connector is fully seated.  
Verify:
- The HAT is level
- The GPIO connector is fully engaged
- No pins are misaligned or bent

<p align="center">
  <img
    src="/img/hardware/accessories/doip/doip8.jpg"
    alt="DoIP HAT connected to AutoPi"
    width="460px"
  />
</p>

### Step 4 – Reassemble the enclosure

Reassemble the device using the **DoIP-compatible side shield**.

This side shield provides the correct cutout and routing for the internal Ethernet interface used by DoIP.

Make sure:
- No cables are pinched
- The HAT remains firmly seated
- All enclosure screws are tightened evenly

<p align="center">
  <img
    src="/img/hardware/accessories/doip/side.jpg"
    alt="AutoPi enclosure with DoIP side shield"
    width="460px"
  />
</p>

## Final Checks

After installation:

- The external Ethernet port on the AutoPi is now **reserved for DoIP**
- Do not connect external Ethernet cables
- Install the device **only in vehicles that support DoIP**
- Proceed with software configuration before attempting diagnostics

## Next Steps

The DoIP hardware installation is now complete.

Continue with the software setup guide to:
- Enable DoIP services
- Configure network settings
- Validate ECU discovery and communication

➡️ [Setting up DoIP on AutoPi](/developer_guides/setting-up-doip/)

## Troubleshooting

If the device does not detect DoIP ECUs after installation:

- Verify the HAT is fully seated on the GPIO header
- Confirm the vehicle supports DoIP
- Check that no external Ethernet device is connected
- Ensure the correct AutoPi OS version is installed

---

You have now successfully installed the AutoPi DoIP HAT.
