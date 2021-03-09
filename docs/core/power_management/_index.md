---
id: core-power-intro
title: Introduction
---

Power management of the device consists of a low- and high-level layer:

1. [Low-level](low_level.md)
1. [High-level](high_level.md)


## Status LEDs

:::note
Status LEDs are only available on the AutoPi Telematics Unit.
:::

### Blue LED

The blue LED indicates the current state of the [low-level ](low_level.md) SPM system.

| LED State | Description |
| ------ | ------ |
| Turned off | SPM is in [OFF](low_level.md#off) state. |
| Flashing brightly | SPM is in [BOOTING](low_level.md#booting) state. |
| Constantly bright | SPM is in [ON](low_level.md#on) state. |
| Breathing effect | SPM is in [SLEEPING](low_level.md#sleeping) state. |
| Constantly dimmed | SPM is in [HIBERNATING](low_level.md#hibernating) state. |


### Green LED

The green LED indicates the current state of the [high-level](high_level.md) system.

| LED State | Description |
| ------ | ------ |
| Turned off | Not running or in the process of booting up. |
| Flashing brightly | Up and running but NOT (yet) connected to the cloud. |
| Constantly bright | Up and running and connected to the cloud. |


## AutoPi's Power Cycle
There are three general states that the device can be in:

* On
* Sleeping
* Hibernating


#### On
The `On` state is when the device is working. It will record data, communicate with the cloud or do whatever it has been configured to do.
Eventually, when the vehicle has turned off, a sleep timer is scheduled that will shut down the device and go to sleep
In order to conserve power. This sleep timer puts the device in the `Sleeping` state.


#### Sleeping
The `Sleeping` state is a state in which the device is only partially working. When the device goes to sleep, there is always setup
an interval until it will wake up again ([configuration here](../../cloud/configuration/cloud-config-power#sleep-timer)).
The INACTIVITY setting defines how often should the device wake up after a sleep. For example, if the
[`Modem > Power Save`](../../cloud/configuration/cloud-config-power#modem) option is set to false, the modem is still
being powered with the idea that the device could be woken up by sending an SMS to it.

There are generally two reasons for a device to go to the `On` state while sleeping:
1. **The vehicle's engine turns on.** More precisely, the vehicle's battery voltage raises above a [specified threshold](../../cloud/configuration/cloud-config-power#wake-trigger).
2. **The sleep timer's sleep period passes.** When the device goes to sleep, a wake timer is being setup based on the inactivity setting.

We will take a look at example scenarios which will further describe the power cycle of the device.


#### Hibernating
The `Hibernating` state is the last effort the device will do in order to preserve your vehicle's battery. It will shut off almost all
of the functionalities of the AutoPi leaving only one power-cheap component on - a chip that will detect a raise in the battery's
voltage so that it can trigger an `On` state. This will happen when the vehicle is powered on, so this is the moment the battery will
start to charge up again.


## Example power cycle
Let us now walk through an example power cycle. We will begin with the device being unplugged and the vehicle's engine not running.
If we plug in a device in the vehicle's OBD-II port the following steps will occur:

1. The device will start booting
2. After some time, bootup process will finish and device will appear online on the Cloud
3. A sleep timer will be setup (that will expire after 5 minutes by default)
4. When the sleep timer expires, three things will happen:
    1. A wake up timer will be setup on the hardware level
    2. The device will attempt to upload pending data to the Cloud
    3. The device will start its shutdown procedure
5. Device is now sleeping

By default, a sleep timer will introduce a wake-up timer that is in 2 hours after the device goes to sleep. So let's now take a look
at what happens with this:

1. Wake-up timer expires
2. Device will start its boot process
3. After boot, device will appear online on the Cloud
4. A new sleep timer will be setup (5 minutes by default)
5. When the sleep timer expires, three things happen:
    1. A wake up timer will be setup on the hardware level
    2. The device will attempt to upload any pending data to the Cloud
    2. The device will start its shutdown procedure
5. Device is now sleeping

It is more or less the same procedure. This means that by default, your device will wake up every two hours, setup a sleep timer for 5
minutes and go back to sleep. In the time that the device is `On` it will try to read data off of the CAN bus from the vehicle, record
it and report any data or events it needs to report to the Cloud. Now, what happens if the vehicle is being driven? Let's assume that
the device is asleep at the moment that the engine of the vehicle gets turned on. Here's what will happen:

1. The STN chip will detect the higher voltage reading
2. The STN chip will send a wake-up request to the device
3. The device will boot up
4. After boot, the device will appear online on the Cloud
5. Device will detect CAN bus traffic, more specifically RPM values (only works by default on standard ICE vehicles)
6. The RPM values will trigger an event called `vehicle/engine/running`
7. All sleep timers are cleared and sleep timers are no longer allowed to be set

Almost the same process will occur if the device is already awake with the exception that it won't need to actually boot up again.
Instead, the device will stay awake, current sleep timers will be cleared and new sleep timers won't be able to be set.


## Hibernation
So now you may be wondering, when exactly does the device go into hibernation, or maybe what even is the hibernation state?
Hibernation is a state where the device sees that the battery is very low on power and will shut down completely, leaving only
a very power-cheap device which will wake the device up again when the battery level raises to normal values. This mode is necessary
as without it, the AutoPi can potentially drain the battery so low that the vehicle won't be able to start up the next time, or
even worse - permanently damage the battery. So, in essence, hibernation is a last resort effort of the AutoPi to protect the battery
of the vehicle.

There are two settings that you can tweak on the Cloud in the Advanced > Settings > Power section: `Critical Level` and `Safety Cut-Out`.
They both make the device go to hibernation, however they differ on one key point - Critical Level will still shut down the device
gracefully, while Safety Cut-Out will essentially pull the plug on it. The difference is that with a graceful shutdown the Cloud will
(*likely*\*) receive an event that will be reported. With Safety Cut-out, this won't happen, there will only be a notification the next
time the device gets online.

:::note
\**likely* - If the device doesn't have access to the internet for whatever reason (no WiFi connection, no 4G/LTE enabled, or there is no
coverage at the current moment) the event will not be sent to the Cloud even if it went to hibernation due to the Critical Level threshold.
:::

As long as the battery doesn't go below the Voltage threshold that are set on those two settings (`Critical Level` and `Safety Cut-Out`)
your device will wake up occasionally to check up on if it needs to do something or not. If there is nothing to do, it will go back to
sleep after the sleep timer is triggered.
