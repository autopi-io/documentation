---
id: hardware-intro
title: Introduction
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import SideBySide from '@site/src/components/SideBySide';
import CardGrid from "/components/CardGrid";

This section contains hardware documentation for current and legacy AutoPi devices, along with supported accessories and
adapter cables. Use it to identify connectors, review technical specifications, plan an installation, or find information
specific to your device model.

## What You Will Find Here

The available documentation varies by device, but generally covers:

- Device dimensions and technical specifications.
- Connector and pinout references.
- LED and button states.
- Mounting and antenna installation.
- Replaceable components and hardware expansion options.
- Accessories, cables, and vehicle-specific adapters.
- Reference material for legacy devices.

For initial installation and Cloud setup, select your device from the **Getting Started** category in the sidebar. For device
configuration and data management, see the [Cloud documentation](/cloud/). This section focuses on the physical device and
its connections.

## Choose Your Device

Select your device model to find the relevant hardware documentation.

<p align="center">
  <img src={useBaseUrl('/img/shared/autopi_devices_trans.png')} alt="AutoPi device range" width="400"/>
</p>

<CardGrid home>

[![](/img/hardware/autopi_mini/AutoPi_Mini_5_Top_right.png) **AutoPi Mini** View specifications and the OBD-II connector pinout for the compact, plug-and-play fleet device.](/hardware/autopi_mini/autopi-mini-intro/)

[![](/img/hardware/autopi_tmu_cm4/TMU_Floating_Topside_V1_scaled.png) **AutoPi TMU CM4** Find dimensions, specifications, connector details, mounting information, and hardware expansion guides.](/hardware/autopi_tmu_cm4/autopi-cm4-intro/)

[![](/img/hardware/autopi_canfd_pro/canfd_pro_trans.png) **AutoPi CAN-FD Pro** Review specifications, dimensions, mounting options, indicators, and connector pinouts.](/hardware/autopi_canfd_pro/autopi-pro-intro/)

[![](/img/shared/autopi_devices_trans.png) **AutoPi CAN-FD Pro with IP67 casing** Find mounting instructions and pinouts for the protected CAN-FD Pro enclosure.](/hardware/autopi_canfd_pro_casing/autopi-pro-casing-intro/)

</CardGrid>

Looking for an earlier model? See the **Legacy Devices** category in the sidebar. For cables, mounts, antennas, and other
supported hardware, see [Accessories](/hardware/accessories/accessories-intro/).

## General Installation Guidance

Always follow the model-specific installation and connector documentation. The following guidance applies to most AutoPi
installations.

<SideBySide>
	<p>
		<strong>Avoid direct sunlight. </strong>Install the device away from direct sunlight and other heat sources. Excessive
		heat can reduce performance and may cause the processor to throttle.
	</p>
	<img alt="Device positioned away from direct sunlight" src={require('@site/static/img/shared/user-manual/usage_avoid_direct_sun.png').default}/>
</SideBySide>

<br/>

<SideBySide>
	<p>
		<strong>Keep the GNSS antenna clear. </strong>Do not place metal directly over a device with an internal GNSS antenna.
		Metal can obstruct satellite signals and reduce positioning accuracy.
	</p>
	<img alt="Device installed without metal covering it" src={require('@site/static/img/shared/user-manual/usage_avoid_metal.png').default}/>
</SideBySide>

<br/>

<SideBySide>
	<p>
		<strong>Use the correct orientation. </strong>For devices with an internal GNSS antenna near the logo, position the
		logo side toward the sky whenever possible. Check your device guide for its antenna location.
	</p>
	<img alt="Device positioned with its GNSS antenna toward the sky" src={require('@site/static/img/shared/user-manual/usage_gps_antenna_orientation.png').default}/>
</SideBySide>

<br/>

<SideBySide>
	<p>
		<strong>Use the designated power input. </strong>Power the device only through the connector and cable specified in its
		hardware guide. Do not attempt to power it through data or expansion ports.
	</p>
	<img alt="AutoPi device connected through its designated power input" src={require('@site/static/img/shared/user-manual/usage_how_to_power.png').default}/>
</SideBySide>


