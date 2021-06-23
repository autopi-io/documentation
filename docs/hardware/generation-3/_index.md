---
id: gen-3-intro
title: Introduction
---

This section has a few guides written out that are specifically for third generation (TMU) devices.
Some of the knowledge may be transferrable to second generation devices.

![Third generation AutoPi device](/img/hardware/gen_3/device.png)

## Pinout

This image is an overview of the GPIO pinout of the 3<sup>rd</sup> generation (TMU) AutoPi.

Pins marked with "in use" cannot be used for anything else. This will interrupt the functionality
of the AutoPi. This I2C bus is used by the AutoPi, but can be shared with other devices. 

All other pins are free and their functionality follows that of the Raspberry Pi.

![Third generation AutoPi GPIO Pinout](/img/hardware/gen_3/gpio_pinout.jpeg)

:::note
If you'd like to discuss this topic with us or other fellow community members, you can do so on
our community page dedicated for this guide:
[AutoPi GPIO Pinout](https://community.autopi.io/t/autopi-gpio-pinout/271)
:::

## Jumper

This is a picture of the location of the 5V FORCE pins. You can put a jumper on these pins to
prevent the AutoPi from going to hibernation. More info [here](../../guides/jumpers.md).

![Third generation AutoPi Jumper location](/img/hardware/gen_3/jumper.jpg)