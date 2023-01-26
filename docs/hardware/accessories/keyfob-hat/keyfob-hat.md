---
id: keyfob-hat
title: Keyfob HAT Install
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import SideBySide from '@site/src/components/SideBySide';

:::caution Before proceeding with the install
The keyless entry solution described here only works with the AutoPi TMU CM4 and newer editions
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


## Step-by-step guide



### Step 1
Open up the AutoPi device by unscrewing the four screws at the bottom. 
<p align="center">
<img alt="Step 1" src={useBaseUrl('/img/hardware/tmu_cm4/TMU_Floating_Topside_V1_scaled.png')} width="60%" />
</p>

### Step 2
Start preparing the BLE hat by screwing one 6.5 mm spacer in each hole of the PCB as seen in the pictures.

<img alt="Step 2" src={useBaseUrl('/img/hardware/accessories/keyfob/install_step1.jpg')}/>



### Step 3
Connect the BLE hat with the AutoPi board through the 40 pin headers. Verify that the connectors are properly connected.

<img alt="Step 3" src={useBaseUrl('/img/hardware/accessories/keyfob/install_step2.jpg')}/>


### Step 4
Reasemble the device using the new AutoPi BLE side shield, giving access to two new Keyfob control ports on the side.

<img alt="Step 4" src={useBaseUrl('/img/hardware/accessories/keyfob/keyfob_ports.jpg')}/>


## Disscussion
<p>
	You have now successfully installed the keyless entry solution to the device.
</p>

<p>
	In case you have any questions about installing additional components onto the AutoPi device, don't hesitate to
	shoot us an email at <a href="mailto:support@autopi.io">support@autopi.io</a>. We usually respond back in 24 hours
	on working days.
</p>