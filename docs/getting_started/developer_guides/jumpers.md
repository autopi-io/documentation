---
id: jumpers
title: Jumpers
---

Jumpers are a very small devices which are used to jump the electrical current from one pin to
another. In this guide, we will talk about jumpers. More specifically, we'll talk about what they
are used for and how you can use one for your device.

## How jumpers help

With a jumper you can force the AutoPi to maintain the 5V supply on all the time. This effectively
means that the Raspberry Pi wont be able to go to sleep or hibernation, because you disable the
Smart Power Manager (SPM) chip.

The jumper will come in handy when you debug or develop new core features, where you want to change
the functionality of the SPM. For normal use it shouldn’t be necessary.

## Using a jumper

To use a jumper, you will need to open up your AutoPi device. On the inside of the device, you'll
see two boards connected to each other. One of them being the Raspberry Pi and the other - the
AutoPi board. On the AutoPi board, you should be able to see two pins on one of the four corners,
next to which is written 'FORCE 5V'.

To see how you can attach a jumper to your specific device view the following pages for:

* [Generation 2 devices](../hardware/legacy_devices/autopi_dongle/index.md/#jumper)
* [Generation 3 devices](../hardware/legacy_devices/autopi_dongle_gen3/index.md/#jumper)

## Need help?

If you have any questions, can't get the jumper to work properly or have any feedback, don't
hesitate to reach out to us by sending an email to support@autopi.io.
