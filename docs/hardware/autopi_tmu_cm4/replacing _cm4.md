---
id: replacing-cm4
title: Replacing the CM4
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
- New Raspberry Pi CM4
:::

### Step-by-step guide

<SideBySide>
	<p>
		<strong>Step 1: </strong>
		Take your AutoPi and flip it so you can face the bottom of the device. Unscrew the bottom cover of the device and remove the shields. 
	</p>
	<img alt="Step 1" src={useBaseUrl('/img/hardware/autopi_tmu_cm4/installing_external_antennas/ext_ant3.jpg')}/>
</SideBySide>
<br/>

<SideBySide>
	<p>
		<strong>Step 2: </strong>
		Using a PH2 screwdriver, carefully remove the four screws that are securing the heatsink to the CM4, as indicated in the image below.
	</p>
	<img alt="Step 2" src={useBaseUrl('/img/hardware/autopi_tmu_cm4/replacing_cm4/replacing1.png')}/>
</SideBySide>
<br/>

<SideBySide>
	<p>
		<strong>Step 3: </strong>
		Transfer the heat transfer pads from the original Raspberry Pi to the new Raspberry Pi CM4. 
	</p>
	<img alt="Step 3" src={useBaseUrl('/img/hardware/autopi_tmu_cm4/replacing_cm4/replacing3.png')}/>
</SideBySide>
<br/>

<SideBySide>
	<p>
		<strong>Step 4: </strong>
		Using a 5mm screwdriver, loosen and remove the four screws that are securing the CM4 to the AutoPi board, as shown in the picture below.	</p>
	<img alt="Step 4" src={useBaseUrl('/img/hardware/autopi_tmu_cm4/replacing_cm4/replacing5.png')}/>
</SideBySide>
<br/>

<SideBySide>
	<p>
		<strong>Step 5: </strong>
		Gently disconnect the CM4 from the AutoPi board, ensuring to handle both components with care to avoid any damage.
	</p>
	<img alt="Step 5" src={useBaseUrl('/img/hardware/autopi_tmu_cm4/replacing_cm4/replacing6.png')}/>
</SideBySide>
<br/>


:::caution Before proceeding with the installation of the new CM4
Please take note of the orientation of the CM4 while detaching it from the AutoPi board. The two connectors on the CM4 doesn't have a symmetrical position in relation to the edge, so be mindful of aligning them correctly to ensure a proper connection.
:::


<SideBySide>
<p></p>
	<img align="right" alt="Step 1" src={useBaseUrl('/img/hardware/autopi_tmu_cm4/replacing_cm4/replacing13.png')}/>
</SideBySide>


<br/>
		<strong>Step 6: </strong>
		After verifying the correct orientation, proceed with the installation of the new CM4. Ensure that the CM4 connectors are securely pushed in until fully seated.
<br/>
<br/>
<br/>

<SideBySide>
	<p>
		<strong>Step 7: </strong>
		Reattach the 4 hexagonal screws that secure the CM4 to the AutoPi board, ensuring a firm and secure connection.	</p>
	<img alt="Step 1" src={useBaseUrl('/img/hardware/autopi_tmu_cm4/replacing_cm4/replacing2.png')}/>
</SideBySide>
<br/>

<SideBySide>
	<p>
		<strong>Step 8: </strong>
 		Securely reattach the heatsink to the CM4 using the 4 screws and plastic washers provided. Ensure that each screw is tightened firmly for optimal heat dissipation. <br/><br/>
		When reattaching the heatsink, ensure that you align the cut in the heatsink with the SMA connector of the CM4.	</p>
	<img alt="Step 1" src={useBaseUrl('/img/hardware/autopi_tmu_cm4/replacing_cm4/replacing8.png')}/>
</SideBySide>
<br/>

<SideBySide>
	<p>
		<strong>Step 8: </strong>
 		Carefully position the shield over the designated holes and insert it securely. Once the shields are in place, position the bottom case over the board, ensuring that all the components fit properly. Press down gently to ensure a snug fit between the bottom case and the board. <br/><br/>
		Using the 4 black hex screws provided, securely fasten the bottom case to the board. Tighten the screws firmly, but be careful not to overtighten and risk damaging the components.	</p>
	<img alt="Step 1" src={useBaseUrl('/img/hardware/autopi_tmu_cm4/replacing_cm4/replacing12.png')}/>
</SideBySide>
<br/>

<p>
		<strong>Step 8: </strong>
		To flash or reflash your AutoPi CM4 device, it is recommended to refer to the official manual provided with the device. The manual will contain specific instructions tailored to your AutoPi CM4 model, ensuring the proper and safe execution of the flashing process. Please consult the manual for detailed step-by-step guidance on how to flash or reflash your AutoPi CM4 device. <br/><br/>
		<strong><a href="https://docs.autopi.io/guides/reflashing-your-device/">Reflashing your device</a>.</strong>
</p>		

### Disscussion

<p>
	You have now successfully replaced your Raspberry Pi CM4 in your AutoPi TMU CM4 device.
</p>

<p>
	In case you have any questions about installing additional components onto the AutoPi device, don't hesitate to
	shoot us an email at <a href="mailto:support@autopi.io">support@autopi.io</a>. We usually respond back in 24 hours
	on working days.
</p>