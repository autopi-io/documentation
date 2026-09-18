---
id: doip-install
title: DoIP HAT Installation
supportedDevices: ['cm4','pro','pro_case']
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

This guide provides step-by-step instructions for installing the **AutoPi DoIP HAT** on an AutoPi TMU CM4 device.

The DoIP HAT enables **Diagnostics over IP (DoIP)**, a protocol that transports diagnostic and programming communication with vehicle ECUs over Ethernet instead of CAN. This is commonly used for:
- UDS diagnostics over Ethernet.
- ECU flashing and programming.
- High-bandwidth diagnostic workflows.
- OEM and engineering tools that require DoIP.

For instructions on configuring DoIP after installation, refer to:  
[Setting up DoIP on AutoPi](/developer_guides/setting-up-doip/)

## What is DoIP?

DoIP (Diagnostic over Internet Protocol, ISO 13400) is an automotive diagnostic protocol that transports diagnostic messages over IP-based networks, typically Ethernet.

DoIP provides several advantages over traditional CAN-based diagnostics:
- Higher bandwidth for faster data transfer.
- Reduced flashing and programming times.
- Direct compatibility with modern OEM diagnostic tools.
- ECU access without CAN network limitations.

## Prerequisites

Before starting, ensure you have the following:

- 1 × AutoPi DoIP HAT PCB
- 3 × Plastic screws
- 2 × 6.5 mm plastic spacers
- AutoPi TMU CM4 device
- Clean, static-safe workspace

:::info
The DoIP HAT is available for purchase through the AutoPi Shop: [DoIP HAT for AutoPi TMU CM4](https://shop.autopi.io/products/doip-hat-v1-3).

Alternatively, you can order AutoPi devices with the DoIP HAT pre-installed from the factory.
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

Position the AutoPi device upside down and remove the four screws from the bottom of the enclosure.

Gently lift off the top cover to access the internal PCB.

<p align="center">
  <img
    alt="Opening AutoPi enclosure"
    width="460px"
    src={useBaseUrl('/img/hardware/autopi_tmu_cm4/installing_external_antennas/ext_ant2.jpg')}
  />
</p>

### Step 2 – Prepare the DoIP HAT

Secure the two **6.5 mm plastic spacers** to the DoIP HAT PCB using the provided plastic screws.

Verify that the spacers are securely mounted and properly aligned with the mounting holes.

<p align="center">
  <img
    src="/img/hardware/accessories/doip/doip3.jpg"
    alt="Mounting spacers on DoIP HAT"
    width="460px"
  />
</p>

### Step 3 – Mount the DoIP HAT

Align the DoIP HAT with the **40-pin GPIO header** on the AutoPi main board, ensuring proper orientation.

Press the HAT vertically downward until the connector is fully seated.  
Confirm:
- The HAT sits level and flush.
- The GPIO connector is fully engaged.
- No pins are bent or misaligned.

<p align="center">
  <img
    src="/img/hardware/accessories/doip/doip8.jpg"
    alt="DoIP HAT connected to AutoPi"
    width="460px"
  />
</p>

### Step 4 – Reassemble the enclosure

Reassemble the device using the **DoIP-compatible side shield**.

The side shield provides the proper cutout and internal routing for the Ethernet interface used by DoIP.

Ensure:
- No cables are trapped or pinched.
- The HAT remains secure and seated.
- All enclosure screws are tightened uniformly.

<p align="center">
  <img
    src="/img/hardware/accessories/doip/side.jpg"
    alt="AutoPi enclosure with DoIP side shield"
    width="460px"
  />
</p>

## Final Checks

After completing the installation:

- The external Ethernet port is **reserved for DoIP** and internal vehicle communication.
- Do not connect external Ethernet devices to the port.
- Install the device **only in vehicles that support DoIP** functionality.
- Proceed with software configuration before attempting any diagnostic operations.

## Next Steps

Hardware installation is complete.

Proceed to the software configuration guide to:
- Enable DoIP services on the device.
- Configure network parameters.
- Verify ECU discovery and bidirectional communication.

For full overview oh setting up DoIP, read this guide: [Setting up DoIP on AutoPi](https://docs.autopi.io/developer_guides/setting-up-doip/). 

For available DoIP commands and operations: [DoIP Commands Reference](https://docs.autopi.io/core/commands/core-commands-doip/). 

## Troubleshooting

If the device fails to detect DoIP ECUs following installation:

- Verify the HAT is completely seated on the GPIO header.
- Confirm that the vehicle supports DoIP functionality.
- Ensure no external Ethernet devices are connected.
- Validate that the appropriate AutoPi OS version is installed.

---

The AutoPi DoIP HAT installation is complete.
