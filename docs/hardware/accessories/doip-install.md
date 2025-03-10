---
id: doip-install
title: DoIP HAT Install
---
import useBaseUrl from '@docusaurus/useBaseUrl';

:::caution Before proceeding with the install
The DoIP solution described here only works with the [AutoPi](https://www.autopi.io) [TMU CM4](https://www.autopi.io/hardware/autopi-tmu-cm4) and newer editions. 

Please note, its possible to order the DoIP solution pre-installed in the devices.
:::

## DoIP Introduction
This guide provides a walk-through of how to install the [AutoPi](https://www.autopi.io) DoIP solution in the AutoPi devices. For a guide on how to get started using the DoIP solution, [`see here`](/developer_guides/setting-up-doip/).

DoIP stands for "Diagnostic over Internet Protocol." It is a communication protocol used in the automotive industry for diagnostic and programming tasks. DOIP enables the exchange of diagnostic information between a vehicle's electronic control units (ECUs) and diagnostic tools over an IP-based network, such as Ethernet.

:::note
**Prerequesites** for this guide:
- 1x DOIP HAT PCB
- 3x Plastic screw
- 2x 6.5 mm plastic spacer

:::

<p align="center">
<img src="/img/hardware/accessories/doip/doip2.jpg" alt="Keyfob flow" width="40%" />
</p>


## Step-by-Step Guide

### Step 1
Open up the [AutoPi](https://www.autopi.io) device by unscrewing the four screws at the bottom. 
<p align="center">
<img alt="Step 2" width="460px" src={useBaseUrl('/img/hardware/autopi_tmu_cm4/installing_external_antennas/ext_ant2.jpg')}/>
</p>

### Step 2
Start preparing the DoIP hat by screwing one 6.5 mm spacer in each hole of the DoIP hat PCB as seen in the pictures.

![Keyfob flow](/img/hardware/accessories/doip/doip3.jpg)

### Step 3
Connect the BLE hat with the [AutoPi](https://www.autopi.io) board through the 40 pin headers. Verify that the connectors are properly connected.

![Keyfob flow](/img/hardware/accessories/doip/doip8.jpg)

### Step 4
Reasemble the device using the new [AutoPi](https://www.autopi.io) BLE side shield, giving access to two new Keyfob control ports on the side.

![Keyfob flow](/img/hardware/accessories/doip/side.jpg)

## Disscussion
<p>
	You have now successfully installed the DoIP solution to the device.
</p>

:::note
In case you have any questions, don't hesitate to contact us at [support@autopi.io](mailto:support@autopi.io).
:::
