---
id: hardware-intro
title: HW Introduction
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import SideBySide from '@site/src/components/SideBySide';

This section explores the hardware components of the [AutoPi](https://www.autopi.io) and how they differ from one generation
to another.

## [AutoPi](https://www.autopi.io) Hardware
The [AutoPi](https://www.autopi.io) device is built with two major components - an [AutoPi](https://www.autopi.io) board and a Raspberry Pi. The 
[AutoPi](https://www.autopi.io) board has the OBD-II connector, used to plug the [AutoPi](https://www.autopi.io) device into your vehicle, but also
has many other components (chips) that work together to provide the full [AutoPi](https://www.autopi.io) experience.

<p align="center">
  <img src={useBaseUrl('/img/shared/gen3device_narrow.png')} alt="AutoPi GEN3" width="400"/>
</p>

The [AutoPi](https://www.autopi.io) board is then connected to the Raspberry Pi's GPIO pins and an extra USB connector to
build the full [AutoPi](https://www.autopi.io) device. There are two generations of [AutoPi](https://www.autopi.io) devices - Generation 2, which uses
a Raspberry Pi Zero W and a Generation 3 (also called TMU), which uses a Raspberry Pi 3A+. It is
also possible to use Pi 3B+ or Pi 4 with the TMU device.

Our latest generaetion devices is the [AutoPi](https://www.autopi.io) [TMU CM4](https://www.autopi.io/hardware/autopi-tmu-cm4), which is built on the Compute Module 4 from Raspberry Pi. This version is more industrialized. 

## Tips for Best Device Performance

When installing the device in the car, there is a few tips on how to get the best performance of your device.

<SideBySide>
	<p>
		<strong>Hint 1: </strong>Try to avoid installing the device in direct sun. Direct sun will heat up the device and in the summertime this can cause the CPU to throttle down, if the temperature gets too hot. 
	</p>
	<img alt="Hint 1" src={require('@site/static/img/shared/user-manual/usage_avoid_direct_sun.png').default}/>
</SideBySide>

<br/>

<SideBySide>
	<p>
		<strong>Hint 2: </strong>The device contains a GPS antenna inside. Make sure that there is no metal covering the device as this can affect the performance of the device. 
	</p>
	<img alt="Hint 2" src={require('@site/static/img/shared/user-manual/usage_avoid_metal.png').default}/>
</SideBySide>

<br/>

<SideBySide>
	<p>
		<strong>Hint 3: </strong>The GPS antenna is located close the the logo on the device. To ensure the best performance of your device, make sure the logo side of the device is facing the sky.
	</p>
	<img alt="Hint 3" src={require('@site/static/img/shared/user-manual/usage_gps_antenna_orientation.png').default}/>
</SideBySide>

<br/>

<SideBySide>
	<p>
		<strong>Hint 4: </strong>When powering the device, make sure you only power it through the OBD connector. The device can not be powered through any of the other ports.
	</p>
	<img alt="Hint 4" src={require('@site/static/img/shared/user-manual/usage_how_to_power.png').default}/>
</SideBySide>

## Links

- Read more about our [product](https://autopi.io)
- Buy the device in our [shop](https://shop.autopi.io)
