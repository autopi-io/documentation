---
id: installing_external_antennas
title: Installing 3-in-1 External Antennas
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import SideBySide from '@site/src/components/SideBySide';

:::caution Before proceeding with the upgrade
Please read the **whole guide** in order to have a good understanding of how all the components fit together.

You need to be careful not to tear or damange some of the cables when handling the casing of the device.
:::

If you've purchased the [Antenna Kit](https://shop.autopi.io/products/3in1-external-antenna-kit) 
alongside your AutoPi TMU CM4, this guide will help you through the 
installation process. The kit allows you to boost 4G/LTE connectivity and 
GPSsignal strength, which is especially useful if you frequently drive
in areas with weak signal reception. 

**What's included:** 
- **3x SMA adapter cables** (for internal installation) 
- **1x 4G/LTE & GPS combo antenna** (with 3M adhesive pad and 300cm cable) 
- **1x Rear shield** (for 3x SMA connectors) 

### Pre-installed Antennas
If you opted for pre-installed antennas through our shop or by contacting our 
sales team, your device will arrive with the antennas already in place. All that's
left to do is connect the cables to the corresponding antenna ports. Please refer
to the image below for guidance. 

![Device with antenna](/img/hardware/autopi_tmu_cm4/installing_external_antennas/antenna_device.png)

Then all you need to do is to connect the device to the vehicle’s OBD-II and place
the adhesive pad on the dashboard or other suitable place.  

### Installing the Antennas: 

If you are installing the antennas yourself, follow the Step-by-Step guide.

:::success
**Prerequesites** for this guide:
- An AutoPi TMU CM4 device
- External antennas kit provided by AutoPi
:::

### Step-by-Step Guide

<SideBySide>
	<p>
		<strong>Step 1: </strong>
		Take your AutoPi and flip it so you can face the bottom of the device. Unscrew the bottom cover of the device and get out the shield that was previously installed and disconnect the internal antennas. 
	</p>
	<img alt="Step 1" src={useBaseUrl('/img/hardware/autopi_tmu_cm4/installing_external_antennas/ext_ant3.jpg')}/>
</SideBySide>
<br/>

<SideBySide>
	<p>
		<strong>Step 2: </strong>
		Next, plug in each of the antennas in their respective socket as seen in the picture bellow: <br/>
		 <ul>
		 	<li>The GPS antenna (the one that is separated) should be connected to the left side connector of the modem</li> 
		 	<li>The middle antenna (Main 4G) should be connected to the middle connector of the modem</li>
			<li>The right antenna (Alt. 4G) should be connected to the right connector of the modem</li></ul><br/>
			<strong>Note: </strong>
			Please make sure that the antennas are not stuck in between the casings or that they are accidentally screwed in when you put back the screws in the casing. Once installed,
			don't tighten the SMA nut anymore because the cables will twist and be damaged in the interior of the device.
	</p>
	<img alt="Step 2" src={useBaseUrl('/img/hardware/autopi_tmu_cm4/installing_external_antennas/ext_ant4.jpg')}/>
</SideBySide>
<br/>

<SideBySide>
	<p>
		<strong>Step 3: </strong>
		Mount the shield inside the small cutout that runs along the side of the device. <br/><br/>
		<strong>Note: </strong>
			Please make sure that the antennas are not stuck in between the casings or that they are accidentally screwed in when you put back the screws in the casing.
	</p>
	<img class="zoomable" alt="Step 3" src={useBaseUrl('/img/hardware/autopi_tmu_cm4/installing_external_antennas/ext_ant5.jpg')}/>
</SideBySide>
<br/>

<SideBySide>
	<p>
		<strong>Step 4: </strong>
		Screw back in the four metal screws that you took out in the beginning. You don’t have to worry about where to put them as they all have the same dimensions. 
	</p>
	<img alt="Step 4" src={useBaseUrl('/img/hardware/autopi_tmu_cm4/installing_external_antennas/ext_ant2.jpg')}/>
</SideBySide>
<br/>

<SideBySide>
	<p>
		<strong>Step 5: </strong>
		Check that all the components are placed in their place and that there are no spaces between the casing!
	</p>
	<img alt="Step 5" src={useBaseUrl('/img/hardware/autopi_tmu_cm4/installing_external_antennas/ext_ant6.jpg')}/>
</SideBySide>
<br/> 



### Disscussion
<p>
	You have now successfully installed external antennas in your AutoPi TMU CM4 device.
</p>

:::note
In case you have any questions, don't hesitate to contact us at [support@autopi.io](mailto:support@autopi.io).
:::
