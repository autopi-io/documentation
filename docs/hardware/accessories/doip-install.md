---
id: doip-install
title: DOIP HAT Install
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import SideBySide from '@site/src/components/SideBySide';

:::caution Before proceeding with the install
The DOIP solution described here only works with the AutoPi TMU CM4 and newer editions
:::

## DOIP introduction
This guide provides a general technical overview of the AutoPi DOIP solution. 

DOIP stands for "Diagnostic over Internet Protocol." It is a communication protocol used in the automotive industry for diagnostic and programming tasks. DOIP enables the exchange of diagnostic information between a vehicle's electronic control units (ECUs) and diagnostic tools over an IP-based network, such as Ethernet.

:::note
**Prerequesites** for this guide:
- 1x DOIP HAT PCB
- 3x Plastic screw
- 2x 6.5 mm plastic spacer

:::

<p align="center">
<img src="/img/hardware/accessories/doip/doip2.jpg" alt="Keyfob flow" width="40%" />
</p>


## Step-by-step guide

### Step 1
Open up the AutoPi device by unscrewing the four screws at the bottom. 
<p align="center">
<img alt="Step 2" width="460px" src={useBaseUrl('/img/hardware/autopi_tmu_cm4/installing_external_antennas/ext_ant2.jpg')}/>
</p>

### Step 2
Start preparing the DOIP hat by screwing one 6.5 mm spacer in each hole of the DOIP hat PCB as seen in the pictures.

<img src="/img/hardware/accessories/doip/doip3.jpg" alt="Keyfob flow"  />


### Step 3
Connect the BLE hat with the AutoPi board through the 40 pin headers. Verify that the connectors are properly connected.

<img src="/img/hardware/accessories/doip/doip8.jpg" alt="Keyfob flow"  />


### Step 4
Reasemble the device using the new AutoPi BLE side shield, giving access to two new Keyfob control ports on the side.

<img src="/img/hardware/accessories/doip/side.jpg" alt="Keyfob flow"  />


## Disscussion
<p>
	You have now successfully installed the DOIP solution to the device.
</p>

<p>
	In case you have any questions about installing additional components onto the AutoPi device, don't hesitate to
	shoot us an email at <a href="mailto:support@autopi.io">support@autopi.io</a>. We usually respond back in 24 hours
	on working days.
</p>
