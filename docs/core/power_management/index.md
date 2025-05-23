---
id: core-power-intro
title: Introduction
---
import CardGrid from "/components/CardGrid";

:::tip
For power cycle, LED and button information on the [AutoPi](https://www.autopi.io) [TMU CM4](https://www.autopi.io/hardware/autopi-tmu-cm4), please see [configuration here](/hardware/autopi_tmu_cm4/led_and_button.mdx)
:::


The power management of the device consists of a low- and high-level layer. For further details please see: 

1. [Low-level](/core/power_management/low_level.md)
1. [High-level](/core/power_management/high_level.md)


## Power Cycle
Overall, there are three states that the device can be in:

* On
* Sleeping
* Hibernating

#### On
The `On` state is when the device is awake and performing work. It will record data, communicate with the [Cloud](https://www.autopi.io/software-platform/cloud-management) or do whatever it has been configured to do.
Eventually, when the vehicle has turned off, a sleep timer is scheduled that will shut down the device and go to sleep in order to conserve power. This sleep timer puts the device into the `Sleeping` state.

#### Sleeping
The `Sleeping` state is a state where the device is powered off for a certain period of time. Before the device goes to sleep, there is always setup
an interval until it will wake up again ([configuration here](/cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-power/#sleep-timer)). When the [`Modem > Power Save`](/cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-power/#modem) option is disabled, the modem is kept powered on while sleeping. This makes it possible to wake the device by sending an SMS to it, if it is within mobile network range.

There are generally two reasons for a device to go to the `On` state while sleeping:
1. **The vehicle's engine turns on.** More precisely, the vehicle's battery voltage raises above a [specified threshold](/cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-power/#wake-trigger).
2. **The sleep timer's sleep period passes.** When the device goes to sleep, a wake timer is being setup based on the inactivity setting.

We will take a look at example scenarios which will further describe the power cycle of the device.

#### Hibernating
The `Hibernating` state is the last effort the device will do in order to preserve your vehicle's battery. It will shut off almost all
of the functionalities of the [AutoPi](https://www.autopi.io) leaving only one power-cheap component on - a chip that will detect a raise in the battery's
voltage so that it can trigger an `On` state. This will happen when the vehicle is powered on, so this is the moment the battery will
start to charge up again.

### Walk-Through

Let us now walk through an example of the power cycle. We will begin with the device being unplugged and the vehicle's engine not running.
If we plug in a device in the vehicle's OBD-II port the following steps will occur:

1. The device will start booting
2. After some time, bootup process will finish and device will appear online on the [Cloud](https://www.autopi.io/software-platform/cloud-management)
3. A sleep timer will be setup (that will expire after 5 minutes by default)
4. When the sleep timer expires, three things will happen:
    1. A wake up timer will be setup on the hardware level
    2. The device will attempt to upload pending data to the [Cloud](https://www.autopi.io/software-platform/cloud-management)
    3. The device will start its shutdown procedure
5. Device is now sleeping

By default, a sleep timer will introduce a wake-up timer that is in 2 hours after the device goes to sleep. So let's now take a look
at what happens with this:

1. Wake-up timer expires
2. Device will start its boot process
3. After boot, device will appear online on the [Cloud](https://www.autopi.io/software-platform/cloud-management)
4. A new sleep timer will be setup (5 minutes by default)
5. When the sleep timer expires, three things happen:
    1. A wake up timer will be setup on the hardware level
    2. The device will attempt to upload any pending data to the [Cloud](https://www.autopi.io/software-platform/cloud-management)
    2. The device will start its shutdown procedure
5. Device is now sleeping

It is more or less the same procedure. This means that by default, your device will wake up every two hours, setup a sleep timer for 5
minutes and go back to sleep. In the time that the device is `On` it will try to read data off of the CAN bus from the vehicle, record
it and report any data or events it needs to report to the [Cloud](https://www.autopi.io/software-platform/cloud-management). Now, what happens if the vehicle is being driven? Let's assume that
the device is asleep at the moment that the engine of the vehicle gets turned on. Here's what will happen:

1. The STN chip will detect the higher voltage reading
2. The STN chip will send a wake-up request to the device
3. The device will boot up
4. After boot, the device will appear online on the [Cloud](https://www.autopi.io/software-platform/cloud-management)
5. Device will detect CAN bus traffic, more specifically RPM values (only works by default on standard ICE vehicles)
6. The RPM values will trigger an event called `vehicle/engine/running`
7. All sleep timers are cleared and sleep timers are no longer allowed to be set

Almost the same process will occur if the device is already awake with the exception that it won't need to actually boot up again.
Instead, the device will stay awake, current sleep timers will be cleared and new sleep timers won't be able to be set.

So now you may be wondering, when exactly does the device go into hibernation, or maybe what even is the hibernation state?
Hibernation is a state where the device sees that the battery is very low on power and will shut down completely, leaving only
a very power-cheap device which will wake the device up again when the battery level raises to normal values. This mode is necessary
as without it, the [AutoPi](https://www.autopi.io) can potentially drain the battery so low that the vehicle won't be able to start up the next time, or
even worse - permanently damage the battery. So, in essence, hibernation is a last resort effort of the [AutoPi](https://www.autopi.io) to protect the battery
of the vehicle.

There are two settings that you can tweak on the [Cloud](https://www.autopi.io/software-platform/cloud-management) in the Advanced > Settings > Power section: `Critical Level` and `Safety Cut-Out`.
They both make the device go to hibernation, however they differ on one key point - Critical Level will still shut down the device
gracefully, while Safety Cut-Out will essentially pull the plug on it. The difference is that with a graceful shutdown the [Cloud](https://www.autopi.io/software-platform/cloud-management) will
(*likely*\*) receive an event that will be reported. With Safety Cut-out, this won't happen, there will only be a notification the next
time the device gets online.

:::note
\**likely* - If the device doesn't have access to the internet for whatever reason (no WiFi connection, no 4G/LTE enabled, or there is no
coverage at the current moment) the event will not be sent to the [Cloud](https://www.autopi.io/software-platform/cloud-management) even if it went to hibernation due to the Critical Level threshold.
:::

As long as the battery doesn't go below the Voltage threshold that are set on those two settings (`Critical Level` and `Safety Cut-Out`)
your device will wake up occasionally to check up on if it needs to do something or not. If there is nothing to do, it will go back to
sleep after the sleep timer is triggered.

:::caution
For OBD-II non-compliant vehicles additional configuration may be required to ensure a well-functioning power cycle.
For EVs please see this [guide](/getting_started/electric_vehicles/power-cycle-for-electric-vehicles/).
:::

## Status LEDs

:::note
Status LEDs are only available on the [AutoPi](https://www.autopi.io) Telematics Unit.
:::

### Blue LED

The blue LED indicates the current state of the [low-level ](/core/power_management/low_level.md) SPM system.

| LED State | Description |
| ------ | ------ |
| Turned off | SPM is in [OFF](/core/power_management/low_level.md#off) state. |
| Flashing brightly | SPM is in [BOOTING](/core/power_management/low_level.md#booting) state. |
| Constantly bright | SPM is in [ON](/core/power_management/low_level.md#on) state. |
| Breathing effect | SPM is in [SLEEPING](/core/power_management/low_level.md#sleeping) state. |
| Constantly dimmed | SPM is in [HIBERNATING](/core/power_management/low_level.md#hibernating) state. |

### Green LED

The green LED indicates the current state of the [high-level](/core/power_management/high_level.md) system.

| LED State | Description |
| ------ | ------ |
| Turned off | Not running or in the process of booting up. |
| Flashing brightly | Up and running but NOT (yet) connected to the [Cloud](https://www.autopi.io/software-platform/cloud-management). |
| Constantly bright | Up and running and connected to the [Cloud](https://www.autopi.io/software-platform/cloud-management). |

