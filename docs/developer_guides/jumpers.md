---
id: jumpers
title: Jumpers
supportedDevices: ['cm4','pro']
---
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

Jumpers are a very small devices which are used to jump the electrical current from one pin to
another. In this guide, we will talk about jumpers. More specifically, we'll talk about what they
are used for and how you can use one for your device.

## How Jumpers Help

With a jumper you can force the [AutoPi](https://www.autopi.io) to maintain the 5V supply on all the time. This effectively
means that the Raspberry Pi wont be able to go to sleep or hibernation, because you disable the
Smart Power Manager (SPM) chip.

The jumper will come in handy when you debug or develop new core features, where you want to change
the functionality of the SPM. For normal use it shouldn’t be necessary.

## Using a Jumper

To use a jumper, you will need to open up your [AutoPi](https://www.autopi.io) device. On the inside of the device, you'll
see two boards connected to each other. One of them being the Raspberry Pi and the other - the
[AutoPi](https://www.autopi.io) board. On the [AutoPi](https://www.autopi.io) board, you should be able to see two pins on one of the four corners,
next to which is written 'FORCE 5V'.

To see how you can attach a jumper to your specific device view the following pages for:

* [Generation 2 devices](/hardware/legacy_devices/autopi_dongle/#jumper)
* [Generation 3 devices](/hardware/legacy_devices/autopi_dongle_gen3/#jumper)


