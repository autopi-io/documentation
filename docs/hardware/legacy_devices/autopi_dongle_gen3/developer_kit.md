---
id: developer-kit
title: Developer Kit
---

In this guide we will explore how you can get started with your AutoPi Developer Kit. We will talk
about how to get the device some power, what you're able to connect to it and how to get the
antennas attached.

## Power

Let's start off by getting the power sorted out. Included in your developer kit, you have a power
cable, one side of that power cable is a female OBD-II port and the other is a female DC connector.
This is the cable we're going to use to provide power to it. On one side, plug the AutoPi device
(OBD side) and on the other - your DC power supply.

:::tip
You can connect the OBD side of the power cable to your device and use the DC connector to easily
switch on and off the power provided to the device. It is easier than plugging and unplugging the
OBD-II port.
:::

:::danger
NEVER connect a micro-USB power cable to the Raspberry Pi's power input port. The intended way for
the AutoPi to receive power is through the OBD-II port. Connecting a micro-USB power cable to the
Raspberry Pi will likely result in a short-cirtuit.
:::

## Connectivity

The AutoPi has three IO ports:

1. **Micro-USB cable**, which you can use to connect any usb device to your AutoPi.
2. **HDMI**, which you can use to connect a monitor to your AutoPi.
3. **Audio jack**, which you can use for headphones or speakers.

![available I/O](/img/hardware/legacy_devices/autopi_dongle_gen3/developer_kit/available-io.jpg)


## Antennas

The developer kit also has included three antennas. Two of the antennas look the same, they are the
antennas for 4G/LTE connectivity. The third, longer one, is the GPS antenna. Usually, we recommend
to place the GPS antenna as close to a window as possible.

The GPS antenna port is located in the middle, between two 4G/LTE antenna ports. Here is an image
that shows those ports.

![antenna port locations](/img/hardware/legacy_devices/autopi_dongle_gen3/developer_kit/antennas-pre-setup.jpg)

In the middle port, connect the GPS antenna. On the two ports on the side, connect the 4G/LTE
antennas. After you're done, your device should look a bit like the following:

![complete dev kit](/img/hardware/legacy_devices/autopi_dongle_gen3/developer_kit/finished-dev-kit.jpg)

## Need help?

If you have any questions, requests to improve the documentation or any feedback, don't hesitate
to reach out to us by sending us an email to support@autopi.io.
