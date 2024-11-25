---
id: gen-2-intro
title: Introduction
---

In this section, we will explore specifics about the generation 2 devices. On this page, you will
find general information like the GPIO pinout and where to put the jumper if you need it.

![Second generation AutoPi device](/img/hardware/legacy_devices/autopi_dongle/device.png)

## Pinout

This image is an overview of the GPIO pinout of the 2<sup>nd</sup> generation AutoPi.

Pins marked with "in use" cannot be used for anything else. This will interrupt the functionality
of the AutoPi. This I2C bus is used by the AutoPi, but can be shared with other devices. 

All other pins are free and their functionality follows that of the Raspberry Pi.

![Second generation AutoPi GPIO Pinout](/img/hardware/legacy_devices/autopi_dongle/gpio_pinout.jpg)

## Jumper

This is a picture of the location of the 5V FORCE pins. You can put a jumper on these pins to
prevent the AutoPi from going to hibernation. More info [here](/developer_guides/jumpers.md).

![Second generation AutoPi Jumper location](/img/hardware/legacy_devices/autopi_dongle/jumper.jpg)
