---
id: power-cycle-for-electric-vehicles
title: Power Cycles
---

The AutoPi dongle is initially configured to be powered on when the engine of the vehicle is
running. When the engine is not running, a sleep timer is created to put the dongle to sleep after
5 minutes or whatever configured.

Behind the scenes this works by using [engine events](/cloud/device_management/events/cloud-events-vehicle/#engine-events).
Engine events are triggered based on the RPM values continuously read from the vehicle. For all
non-BEVs (Battery [Electric Vehicle](https://www.autopi.io/hardware/autopi-mini)s) this is setup automatically as default because they all
support readout of engine RPM in the same way according to the OBD-II PID standard
(SAE J1979).

Unfortunately, this is not as simple for BEVs. Here there is no standard and data is read out in
different ways between makes and models. Two approaches are available:

1. if your vehicle can respond to PID requests and/or 
2. if your car continuously delivers data on a [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) bus.

## Setup a PID Logger Using the `rpm_motor_event` Trigger
This option can be used if your vehicle can respond to PID queries.

**Precondition:** A PID which on request delivers an RPM value related to the movement of the
vehicle. It could be the RPM of an electric motor, a spinning wheel etc. If you do not know of such
a PID for your model, you can always check the *Community Library* on https://my.autopi.io.

:::note Important
The PID must be named 'RPM' or else the `rpm_motor_event` trigger will skip checking the value.
:::

Go to **Device** > **Loggers** > **Create** > **PID**. Choose your RPM PID and be sure to
select the *rpm_motor_event* trigger.

![Setting up RPM based PID logger](/img/getting_started/electric_vehicles/power_cycle_for_electric_vehicles/setting_up_rpm_based_pid_logger.png) 

After the logger has been synced to your device, and the service has been restarted, you should
start seeing motor events in the **Device** > **Events** page.

[Click here for documentation on motor events](/cloud/device_management/events/cloud-events-vehicle/#motor-events).

## Setup a PID Logger Using the `communication_event` Trigger

This option can be used if you do not have a PID capable of delivering RPM data, but instead have
another arbitrary PID that delivers data when the vehicle is moving or active. The actual content
of the PID response is irrelevant for this trigger to function.

**Precondition:** A PID which on request delivers data when the vehicle is active and no response
when the vehicle is inactive. If you do not know any PID to use, you can always check the
*Community Library* on https://my.autopi.io.

**Note:** There is no restriction on specific naming of the PID.

Go to **Device** > **Loggers** > **Create** > **PID**. Choose your arbitrary PID and be sure
to select the `communication_event` trigger.

![Setting up communication based PID logger](/img/getting_started/electric_vehicles/power_cycle_for_electric_vehicles/setting_up_communication_based_pid_logger.png) 

[Click here for documentation on communication events](/cloud/device_management/events/cloud-events-vehicle/#communication-events).

Next step is to re-configure the sleep timer functionality to use communication events instead of
the default engine/motor events. Go to **Device** > **Advanced Settings** > **Power** and change the three
values:

**Sleep Timer** > **Event Driven** > **Event Regex:** `^vehicle/communication/disconnected`

**Sleep Timer** > **Event Driven** > **Reason:** `vehicle_communication_disconnected`

**Sleep Timer** > **Suppress** > **Event Regex:** `^vehicle/communication/established`

As shown below:

![Change events 1](/img/getting_started/electric_vehicles/power_cycle_for_electric_vehicles/change_events_1.png) 

...

![Change events 2](/img/getting_started/electric_vehicles/power_cycle_for_electric_vehicles/change_events_2.png) 

After all the changes have been synced to your device, and the service has been restarted, you
should start seeing communication events and also `system/sleep_timer` events in the
**Device** > **Events** page.

## Setup a PID Logger Using a Custom Trigger

**Caution:** This option is recommended for expert users only.

Instead of using one of the built-in triggers you can provide your own implementation which also
can fire your own custom events. The setup procedure is the same as in the example above except
that the trigger used is custom. See how to create a custom trigger
[here](/cloud/device_management/services/create-custom-triggers/).

## Setup a [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) Logger Using the `rpm_engine_event` Trigger

This option can be used if your vehicle continuously produces data on a [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) bus while
active/driving.

**Note:** At the time of writing, this approach can only make use of the `rpm_engine_event` trigger
and thus produce engine events,
[click here for documentation on engine events](/cloud/device_management/events/cloud-events-vehicle/#engine-events).

**Precondition:** A [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) message mapping for your specific vehicle which contains an RPM signal. If
you do not know any [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) messages for your vehicle, you can always check the *Community Library*
on https://my.autopi.io.

The following example shows how an RPM signal can be found in the *Community Library* for vehicles of the make Alfa Romeo. 
Go to **OBD Library** > **Community Library** and specify *Make*:

![Community library](/img/getting_started/electric_vehicles/power_cycle_for_electric_vehicles/community_library_screenshot.png) 

Click on the *RPM* signal and in the pop-up window click on the button *Add to my library*. You have
now added the [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) message to your library, and you can use it for logging.

Next step is to setup a [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) logger for the RPM signal. Go to **Device** > **Loggers** >
**Create** > **CAN** and choose the RPM signal:

![Setting up CAN signal logger](/img/getting_started/electric_vehicles/power_cycle_for_electric_vehicles/setting_up_can_signal_logger.png) 

:::note Important
The [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) signal must be named 'RPM' or else the `rpm_engine_event` trigger will skip checking the
value.
:::

After the logger has been synced to your device, and the service has been restarted, you should
start seeing engine events in the **Device** > **Events** page.
