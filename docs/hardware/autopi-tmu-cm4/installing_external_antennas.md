---
id: installing_external_antennas
title: Installing External Antennas
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import SideBySide from '@site/src/components/SideBySide';

:::caution Before proceeding with the upgrade
Please read the **whole guide** in order to have a good understanding of how all the components fit together.

You need to be careful not to tear or damange some of the cables when handling the casing of the device.
:::

:::success
**Prerequesites** for this guide:
- An AutoPi TMU CM4 device
- External antennas kit provided by AutoPi
:::

### Step-by-step guide

<SideBySide>
	<p>
		<strong>Step 1: </strong>
		Take your AutoPi and flip it so you can face the bottom of the device. Unscrew the bottom cover of the device and get out the shield that was previously installed and disconnect the internal antennas. 
	</p>
	<img alt="Step 1" src={useBaseUrl('/img/hardware/tmu_cm4/ext_ant3.jpg')}/>
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
	<img alt="Step 2" src={useBaseUrl('/img/hardware/tmu_cm4/ext_ant4.jpg')}/>
</SideBySide>
<br/>

<SideBySide>
	<p>
		<strong>Step 3: </strong>
		Mount the shield inside the small cutout that runs along the side of the device. <br/><br/>
		<strong>Note: </strong>
			Please make sure that the antennas are not stuck in between the casings or that they are accidentally screwed in when you put back the screws in the casing.
	</p>
	<img class="zoomable" alt="Step 3" src={useBaseUrl('/img/hardware/tmu_cm4/ext_ant5.jpg')}/>
</SideBySide>
<br/>

<SideBySide>
	<p>
		<strong>Step 4: </strong>
		Screw back in the four metal screws that you took out in the beginning. You don’t have to worry about where to put them as they all have the same dimensions. 
	</p>
	<img alt="Step 4" src={useBaseUrl('/img/hardware/tmu_cm4/ext_ant2.jpg')}/>
</SideBySide>
<br/>

<SideBySide>
	<p>
		<strong>Step 5: </strong>
		Check that all the components are placed in their place and that there are no spaces between the casing!
	</p>
	<img alt="Step 5" src={useBaseUrl('/img/hardware/tmu_cm4/ext_ant6.jpg')}/>
</SideBySide>
<br/> 



### Disscussion
<p>
	You have now successfully installed external antennas in your AutoPi TMU CM4 device.
</p>

<p>
	In case you have any questions about installing additional components onto the AutoPi device, don't hesitate to
	shoot us an email at <a href="mailto:support@autopi.io">support@autopi.io</a>. We usually respond back in 24 hours
	on working days.
</p>