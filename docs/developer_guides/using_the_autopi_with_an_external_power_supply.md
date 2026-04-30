---
id: using-the-autopi-with-an-external-power-supply
title: Using the AutoPi With an External Power Supply
supportedDevices: ['cm4','pro','pro_case']
---
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

Your AutoPi is preconfigured for in-vehicle use. In a lab or bench setup, you can power it from an external power supply through the OBD connector.

:::tip Recommended for testing and troubleshooting
Using an external power supply is an excellent option when validating configurations, reproducing issues, and troubleshooting behavior outside a vehicle.
:::

## Before You Connect

1. Always power the AutoPi through the OBD connector.
Do not use the Raspberry Pi power inputs. Doing so can cause AutoPi features to behave incorrectly and may damage the device.

2. Use a stable power source.
AutoPi may power down automatically when voltage drops below 12.2 V to protect the vehicle battery. For lab use, supply at least 12.5 V and use a power supply capable of at least 2.5 A.

3. Be aware of sleep timer behavior.
If no communication is detected on the vehicle CAN bus, a sleep timer can be triggered.

## Useful Commands

You can run AutoPi Core commands locally or over [SSH](/developer_guides/how_to_ssh_to_your_device.md).

* Local terminal format: `power.status`
* SSH format: `autopi power.status`

The `autopi` prefix works for all AutoPi Core commands. See [commands documentation](/core/commands/index.md) for a full reference.

To inspect sleep timers, run [`power.sleep_timer`](/core/commands/core-commands-power/#powersleep_timer).
To clear timers, run `power.sleep_timer clear=*`.

## Recommended Cable

For easier connection to an external power supply, we recommend the OBD power cable available in our shop:
[OBD-II Power Cable](https://shop.autopi.io/en/products/obd-ii-power-cable-10/).
