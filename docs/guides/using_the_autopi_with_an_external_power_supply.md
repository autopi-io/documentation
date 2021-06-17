---
id: using-the-autopi-with-an-external-power-supply
title: Using the AutoPi with an external power supply
---

The device you have is pre-configured to work directly in your car. When working it in a lab
environment you may need to supply the AutoPi with a controlled power supply. There are a couple of
things you should be aware of, before connecting your device:

1. Always power your AutoPi from the OBD connector. Don't use the power inputs on the Raspberry Pi.
  This makes some of the function on the AutoPi not function correctly and could potentially damage
  your AutoPi device.

2. The AutoPi has several commands that can be run from the local terminal. Commands like
[`power.status`](/core/commands/power.md/#powerstatus) should be written out on the local terminal
as you see them in our [commands documentation](/core/commands/_index.md). All terminal commands
can also be run when logged in via [SSH](/guides/how_to_ssh_to_your_device.mdx). All you need to do
is prepend the `autopi` command, like `autopi power.status`. This works for every AutoPi Core
command.

3. The AutoPi auto powers down when voltage is below 12.2V. This is to prevent draining the vehicle
battery. Power it with at least 12.5V when in a lab.

4. There is a trigger (sleep timer) on the device, that will initiate if there is no communication
to the car, more specifically, its CAN bus. You can see sleep timers by running the
[`power.sleep_timer`](/core/commands/power.md/#powersleep-timer) command and you can clear them
by running `power.sleep_timer clear=*`.

We recommend getting the OBD power cable from our shop, to ease the connection to any external
power supply. You can get it [here](https://shop.autopi.io/en/products/obd-ii-power-cable-10/).

## Discussion
If you'd like to discuss this topic with us or other fellow community memebers, you can do so on
our community page dedicated for this guide:
[Using the AutoPi with an external power supply](https://community.autopi.io/t/using-the-autopi-with-an-external-power-supply-lab/626).