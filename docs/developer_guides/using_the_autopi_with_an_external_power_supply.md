---
id: using-the-autopi-with-an-external-power-supply
title: Using the AutoPi With an External Power Supply
supportedDevices: ['cm4','pro','pro_case']
---
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

The device you have is pre-configured to work directly in your car. When working it in a lab
environment you may need to supply the [AutoPi](https://www.autopi.io) with a controlled power supply. There are a couple of
things you should be aware of, before connecting your device:

1. Always power your [AutoPi](https://www.autopi.io) from the OBD connector. Don't use the power inputs on the Raspberry Pi.
  This makes some of the function on the [AutoPi](https://www.autopi.io) not function correctly and could potentially damage
  your [AutoPi](https://www.autopi.io) device.

2. The [AutoPi](https://www.autopi.io) has several commands that can be run from the local terminal. Commands like
[`power.status`](/core/commands/core-commands-power/#powerstatus) should be written out on the local terminal
as you see them in our [commands documentation](/core/commands/index.md). All terminal commands
can also be run when logged in via [SSH](/developer_guides/how_to_ssh_to_your_device.mdx). All you need to do
is prepend the `autopi` command, like `autopi power.status`. This works for every [AutoPi](https://www.autopi.io) Core
command.

3. The [AutoPi](https://www.autopi.io) auto powers down when voltage is below 12.2V. This is to prevent draining the vehicle
battery. Power it with at least 12.5V when in a lab. We also recommend that your power supply can output at least 2.5A.

4. There is a trigger (sleep timer) on the device, that will initiate if there is no communication
to the car, more specifically, its [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) bus. You can see sleep timers by running the
[`power.sleep_timer`](/core/commands/core-commands-power/#powersleep_timer) command and you can clear them
by running `power.sleep_timer clear=*`.

We recommend getting the OBD power cable from our shop, to ease the connection to any external
power supply. You can get it [here](https://shop.autopi.io/en/products/obd-ii-power-cable-10/).
