---
id: keyfob-hat-install
title: Keyfob HAT Install
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import CardGrid from "/components/CardGrid";

:::caution Before proceeding with the install
The keyless entry solution described here only works with the [AutoPi](https://www.autopi.io) [TMU CM4](https://www.autopi.io/hardware/autopi-tmu-cm4) and newer editions
:::

:::note
**Prerequesites** for this guide:
- 1x Keyless Entry BLE HAT PCB
- 1x 4mm plastic spacer
- 2x Plastic screw
- 2x 6.5 mm plastic spacer
- AutoPi BLE side shield
:::

<p align="center">
<img src="/img/hardware/accessories/keyfob/keyfob_components.jpg" alt="Keyfob HAT components" width="60%" />
</p>

## Step-by-Step Guide

### Step 1
Open up the [AutoPi](https://www.autopi.io) device by unscrewing the four screws at the bottom. 
<p align="center">
<img alt="Step 2" width="460px" src={useBaseUrl('/img/hardware/autopi_tmu_cm4/installing_external_antennas/ext_ant2.jpg')}/>
</p>

### Step 2
Start preparing the BLE hat by screwing one 6.5 mm spacer in each hole of the PCB as seen in the pictures.

![Step 2](/img/hardware/accessories/keyfob/install_step1.jpg)

### Step 3
Connect the BLE hat with the [AutoPi](https://www.autopi.io) board through the 40 pin headers. Verify that the connectors are properly connected.

![Step 3](/img/hardware/accessories/keyfob/install_step2.jpg)

### Step 4
Reasemble the device using the new [AutoPi](https://www.autopi.io) BLE side shield, giving access to two new Keyfob control ports on the side.

![Step 4](/img/hardware/accessories/keyfob/keyfob_ports.jpg)

## Disscussion
<p>
	You have now successfully installed the keyless entry solution to the device.
</p>
