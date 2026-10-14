---
id: power-cycle-for-electric-vehicles
title: Power Cycles
supportedDevices: ['cm4','pro','pro_case']
---
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

By default, an AutoPi device uses engine RPM events to determine whether a vehicle is running. When
the engine stops, the device starts a sleep timer and enters sleep mode after the configured delay,
which is five minutes by default.

This behavior relies on [engine events](/cloud/device_management/events/cloud-events-vehicle/#engine-events)
generated from RPM values read through the standard OBD-II PID defined by SAE J1979. Most vehicles
with an internal combustion engine support this PID, but battery electric vehicles (BEVs) do not
use a standardized method for reporting motor activity.

For a BEV, choose a configuration based on the data available from the vehicle:

1. Use an RPM PID if the vehicle responds to PID requests with a value that represents movement.
2. Use a communication PID if the vehicle responds only while it is active.
3. Use a CAN signal if the vehicle continuously transmits an RPM value while it is active.

Check the [OBD Community Library](/cloud/obd_library/community_library/) if you do not know which PID
or CAN signal is available for your vehicle.

## Set Up an RPM PID Using the `rpm_motor_event` Trigger

Use this method when the vehicle responds to a PID request with an RPM value that represents
movement, such as electric motor or wheel speed.

:::note

The device configuration differs between AutoPi TMU CM4 and AutoPi CAN-FD Pro. Follow the steps for
your device edition.

:::

### AutoPi TMU CM4

The standard PID logger workflow described in this section applies only to AutoPi TMU CM4. Before
continuing, add a PID that returns a movement-related RPM value to your OBD Library.

To create the RPM PID logger:

1. Open the TMU CM4 device in the AutoPi Cloud.
2. Go to **Loggers** > **Create** > **PID**.
3. Select the RPM PID.
4. Select the `rpm_motor_event` trigger.
5. Save the logger and sync the changes to the device.
6. Restart the associated service when prompted.

<p align="center">
	<img src="/img/getting_started/electric_vehicles/power_cycle_for_electric_vehicles/setting_up_rpm_based_pid_logger.png" alt="Setting up an RPM-based PID logger" width="800" style={{maxWidth: '100%'}} />
</p>

:::important
Name the PID `RPM`. The `rpm_motor_event` trigger ignores values from PIDs with other names.
:::


After the logger has been synced to your device, and the service has been restarted, you should
start seeing motor events on the **Events** page. For more information, see
[Motor Events](/cloud/device_management/events/cloud-events-vehicle/#motor-events).

### AutoPi CAN-FD Pro

AutoPi CAN-FD Pro uses an OBD-II PID query in **CAN Logging** instead of the standard PID logger
workflow used by AutoPi TMU CM4.

1. Open the CAN-FD Pro device in the AutoPi Cloud.
2. Go to **CAN Logging** and open **Queries**.
3. Select **Add Query** > **OBD-II PID**.
4. Configure the required PID request.
5. Under **Response**, enable **Show Advanced Settings**.
6. Under **Triggers**, select `rpm_motor_event_trigger`.
7. Save the query and apply the changes to the device.

<p align="center">
	<img src="/img/getting_started/electric_vehicles/power_cycle_for_electric_vehicles/rpm_pid_query.png" alt="Creating RPM Query" width="800" style={{maxWidth: '100%'}} />
</p>

---

## Set Up a PID Logger Using the `communication_event` Trigger

Use this TMU CM4 method when the vehicle does not provide movement-related RPM data but does respond
to another PID while active. The response value itself does not affect the trigger.

The PID must return data while the vehicle is active and stop responding while the vehicle is
inactive. Unlike the RPM method, this PID does not require a specific name.

To read more about communication events, click here: [Communication Events](https://docs.autopi.io/cloud/device_management/events/cloud-events-vehicle/#communication-events).

### Create the PID Logger

1. Open the TMU CM4 device in the AutoPi Cloud.
2. Go to **Loggers** > **Create** > **PID**.
3. Select a PID that responds only while the vehicle is active.
4. Select the `communication_event` trigger.
5. Save the logger and sync the changes to the device.
6. Restart the associated service when prompted.

<p align="center">
	<img src="/img/getting_started/electric_vehicles/power_cycle_for_electric_vehicles/setting_up_communication_based_pid_logger.png" alt="Setting up a communication-based PID logger" width="800" style={{maxWidth: '100%'}} />
</p>

### Configure the Sleep Timer

Configure the sleep timer to use
[communication events](/cloud/device_management/events/cloud-events-vehicle/#communication-events)
instead of engine or motor events:

1. Go to **Advanced Settings** > **Power** > **Sleep Timer** > **Event Driven**.
2. Set **Event Regex** to `^vehicle/communication/disconnected`.
3. Set **Reason** to `vehicle_communication_disconnected`.
4. Go to **Sleep Timer** > **Suppress**.
5. Set **Event Regex** to `^vehicle/communication/established`.
6. Save the settings and sync the changes to the device.

<p align="center">
	<img src="/img/getting_started/electric_vehicles/power_cycle_for_electric_vehicles/change_events_1.png" alt="Configuring the event-driven sleep timer" width="800" style={{maxWidth: '100%'}} />
</p>

<p align="center">
	<img src="/img/getting_started/electric_vehicles/power_cycle_for_electric_vehicles/change_events_2.png" alt="Configuring sleep timer suppression" width="800" style={{maxWidth: '100%'}} />
</p>

After applying the configuration, open **Events** for the device. Confirm that communication events
and `system/sleep_timer` events appear when the vehicle changes between active and inactive states.

---

## Set Up a PID Logger Using a Custom Trigger

If the built-in triggers do not meet your requirements, create a custom trigger and select it when
you configure the PID logger. For implementation and configuration details, see
[Create Custom Triggers](/cloud/device_management/services/create-custom-triggers/).

:::caution
Custom triggers are intended for advanced users who can develop and validate custom event logic.
:::

---

## Set Up a TMU CM4 CAN Logger Using the `rpm_engine_event` Trigger

Use this TMU CM4 method when the vehicle continuously transmits an RPM signal on the CAN bus while
active. This workflow generates
[engine events](/cloud/device_management/events/cloud-events-vehicle/#engine-events).

Before continuing, obtain a CAN message mapping for the vehicle that contains an RPM signal. Check
the [OBD Community Library](/cloud/obd_library/community_library/) if you do not have a mapping.

:::important

Name the CAN signal `RPM`. The `rpm_engine_event` trigger ignores values from signals with other
names.

:::

1. In the AutoPi Cloud, go to **OBD Library** > **Community Library**.
2. Filter the library by vehicle make and locate an RPM signal.

<p align="center">
	<img src="/img/getting_started/electric_vehicles/power_cycle_for_electric_vehicles/community_library_screenshot.png" alt="Finding an RPM signal in the Community Library" width="800" style={{maxWidth: '100%'}} />
</p>

3. Open the signal and select **Add to my library**.
4. Open the TMU CM4 device and go to **Loggers** > **Create** > **CAN**.


<p align="center">
	<img src="/img/getting_started/electric_vehicles/power_cycle_for_electric_vehicles/setting_up_can_signal_logger.png" alt="Setting up a CAN signal logger" width="800" style={{maxWidth: '100%'}} />
</p>

5. Select the RPM signal and the `rpm_engine_event` trigger.
6. Save the logger and sync the changes to the device.
7. Restart the associated service when prompted.

After applying the configuration, safely test the vehicle and open **Events** for the device.
Confirm that engine events appear when the vehicle becomes active and inactive.
