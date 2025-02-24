---
id: installing_4in1_external_antennas
title: Installing 4-in-1 External Antennas
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import SideBySide from '@site/src/components/SideBySide';

:::caution Before proceeding with the upgrade
Please read the **whole guide** in order to have a good understanding of how all the components fit together.

You need to be careful not to tear or damange some of the cables when handling the casing of the device.
:::

If you've purchased the [4-in-1 Antenna Kit](https://shop.autopi.io/products/4-in-1-car-antenna-lte-x2-gps-wifi) 
alongside your [AutoPi](https://www.autopi.io) [TMU CM4](https://www.autopi.io/hardware/autopi-tmu-cm4), this guide will help you through the 
installation process. The kit allows you to boost 4G/LTE connectivity, 
GPS signal strength and BLE/WiFI signal, which is especially useful if you frequently drive
in areas with weak signal reception. 

**What's included:** 
- **4x SMA adapter cables** (for internal installation) 
- **1x 4G/LTE, GPS and BLE/WiFi combo antenna** (with 3M adhesive pad) 
- **1x Side shield** (for 4x SMA connectors) 

### Pre-installed Antennas
If you opted for pre-installed antennas through our shop or by contacting our 
sales team, your device will arrive with the antennas already in place. All that's
left to do is connect the cables to the corresponding antenna ports. Please refer
to the image below for guidance. 

![Device with antenna](/img/hardware/autopi_tmu_cm4/installing_4in1_external_antennas/autopi_cable_connections.jpg)

Then all you need to do is to connect the device to the vehicle’s OBD-II and place
the adhesive pad on the dashboard or other suitable place.  

### Installing the Antennas: 

If you are installing the antennas yourself, follow the Step-by-Step guide.

:::success
**Prerequesites** for this guide:
- An [AutoPi](https://www.autopi.io) [TMU CM4](https://www.autopi.io/hardware/autopi-tmu-cm4) device
- External 4-in-1 antennas kit provided by [AutoPi](https://www.autopi.io)
:::

### Step-by-Step Guide

<SideBySide>
	<p>
		<strong>Step 1: </strong>
		Take your [AutoPi](https://www.autopi.io) and flip it so you can face the bottom of the device. Unscrew the bottom cover of the device and get out the shield that was previously installed and disconnect the internal antennas. 
	</p>
	<img alt="Step 1" src={useBaseUrl('/img/hardware/autopi_tmu_cm4/installing_4in1_external_antennas/autopi_case_open.jpg')}/>
</SideBySide>
<br/>

<SideBySide>
	<p>
		<strong>Step 2: </strong>
		The first antenna we need to install is the BLE/WiFI antenna. This is the left most antenna on the shield, seen from the outside. The u.Fl. connector connects to the Compute module as shown in the picture. 
	</p>
	<img alt="Step 2" src={useBaseUrl('/img/hardware/autopi_tmu_cm4/installing_4in1_external_antennas/autopi_connecting_wifi.jpg')}/>
</SideBySide>
<br/>

<SideBySide>
	<p>
		<strong>Step 3: </strong>
		Next we need to connect the antennas to the modem. Plug in each of the antennas in their respective socket as seen in the picture bellow: <br/>
		 <ul>
		 	<li>The GPS antenna should be connected to the left side connector of the modem</li> 
		 	<li>The middle antenna (Main 4G) should be connected to the middle connector of the modem</li>
			<li>The right antenna (Alt. 4G) should be connected to the right connector of the modem</li>
		</ul>			
	</p>
	<img class="zoomable" alt="Step 3" src={useBaseUrl('/img/hardware/autopi_tmu_cm4/installing_4in1_external_antennas/autopi_connecting_modem.jpg')}/>
</SideBySide>
<br/>

<SideBySide>
	<p>
		<strong>Step 4: </strong>
		Carefully insert the new SMA shield in the side of the device. <br/><br/>
		<strong>Note: </strong>
		Please make sure that the antennas are not stuck in between the casings or that they are accidentally screwed in when you put back the screws in the casing. Once installed,
		don't tighten the SMA nut anymore because the cables will twist and be damaged in the interior of the device.
	</p>
	<img alt="Step 4" src={useBaseUrl('/img/hardware/autopi_tmu_cm4/installing_4in1_external_antennas/autopi_insert_shield.jpg')}/>
</SideBySide>
<br/>

<SideBySide>
	<p>
		<strong>Step 5: </strong>
		Screw back in the four metal screws that you took out in the beginning. You don’t have to worry about where to put them as they all have the same dimensions. Check that all the components are placed in their place and that there are no spaces between the casing!
	</p>
	<img alt="Step 5" src={useBaseUrl('/img/hardware/autopi_tmu_cm4/installing_4in1_external_antennas/autopi_screw_together.jpg')}/>
</SideBySide>
<br/> 



### Disscussion
<p>
	You have now successfully installed external antennas in your [AutoPi](https://www.autopi.io) [TMU CM4](https://www.autopi.io/hardware/autopi-tmu-cm4) device.
</p>

:::note
In case you have any questions, don't hesitate to contact us at [support@autopi.io](mailto:support@autopi.io).
:::
