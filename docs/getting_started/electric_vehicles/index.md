---
id: electric-vehicles-intro
title: Getting Started
supportedDevices: ['mini','cm4','pro','pro_case']
---
import CardGrid from "/components/CardGrid" ;
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

This guide explains how to configure an AutoPi device for an electric vehicle. The required settings depend on the AutoPi device edition and the data interfaces available in the vehicle.

The [supported electric vehicle table](https://www.autopi.io/hardware/autopi-mini/) applies only to the **AutoPi Mini**. The AutoPi TMU CM4 and AutoPi CAN-FD Pro also support electric vehicles, but they require vehicle-specific logger or CAN bus configurations and do not have published compatibility tables.

<p align="center">
	<img src="/img/getting_started/electric_vehicles/intro/electric_vehicle_graphic.png" alt="Electric vehicle graphic" width="700" style={{maxWidth: '100%'}} />
</p>

## Choose Your Device Edition

| Device edition | Recommended use | Electric vehicle configuration path |
| --- | --- | --- |
| **AutoPi Mini** | Standard telematics and data collection through the vehicle's OBD-II connector | Configure the Mini's OBD behavior, VIN, ignition detection, and movement detection in **Advanced Settings**. |
| **AutoPi TMU CM4** | Custom OBD-II or CAN data collection with configurable loggers | Complete the standard TMU CM4 installation, then create loggers for the signals supported by the vehicle. |
| **AutoPi CAN-FD Pro** | High-speed raw or decoded logging from one or two CAN/CAN-FD buses | Configure the CAN channels, bitrate, logger, decoder, and output for the vehicle. |

:::caution

Install the device only while the vehicle is parked and powered off. Change its configuration only while the vehicle is parked, and never disconnect it while driving. Incorrect CAN parameters or active diagnostic requests can trigger vehicle warnings or interfere with CAN bus communication.

:::

## Before You Begin

1. Identify your AutoPi device edition: Mini, TMU CM4, or CAN-FD Pro.
2. If you use an AutoPi Mini, confirm that the vehicle and model year appear in the [Mini supported electric vehicle table](https://www.autopi.io/hardware/autopi-mini/).
3. Create an [AutoPi Cloud](https://my.autopi.io/) account and register the device.
4. Record the vehicle's 17-character VIN.
5. Complete the installation and connectivity steps in the getting started guide for your device edition.


---

## AutoPi Mini

Complete the [AutoPi Mini getting started guide](/getting_started/autopi_mini/) before continuing. When the Mini is online, apply the electric vehicle settings below.

Confirm compatibility and available data for your vehicle and model year in the [Mini supported electric vehicle table](https://www.autopi.io/hardware/autopi-mini/). Support can vary by model year, trim, region, and battery or powertrain configuration.

Some electric vehicles do not support automatic VIN detection or standard OBD-II behavior. Without the following settings, the Mini may not identify the vehicle or collect trip and vehicle data correctly.

### Set the OBD Feature

This setting allows the Mini to communicate with vehicles that do not use standard OBD-II behavior.

1. Go to **Advanced Settings** > **OBD Settings** > **OBD Feature**.
2. Select **Non-OBD Compliant**.
3. Select **Save**.

### Enter the VIN Manually

Enter the VIN manually even if the device detected it automatically.

1. Go to **Advanced Settings** > **OBD VIN Settings**.
2. Enter the 17-character VIN using digits and uppercase letters.
3. Set **VIN Source** to **Manual**.
4. Select **Save**.

### Configure Ignition Detection

1. Go to **Advanced Settings** > **System** > **Ignition Settings**.
2. Select **Accelerometer**.
3. Select **Save**.

### Configure Movement Detection

1. Go to **Advanced Settings** > **System** > **Movement Source**.
2. Select **Accelerometer**.
3. Set **Movement start delay** to a value from **5 to 12 seconds**.
4. Set **Movement stop delay** to a value from **30 to 60 seconds**.
5. Select **Save**.

After saving these changes, open **Change History** and confirm that each setting was applied successfully. Take a short test drive, then confirm that a new trip and the expected vehicle data appear in the AutoPi Cloud.

---

## AutoPi TMU CM4

The TMU CM4 supports electric vehicles through configurable power, tracking, trip, and logger settings. The Mini supported electric vehicle table does not apply to this device. Configure the settings below so the TMU CM4 responds to battery and movement events instead of engine events.

1. Complete the [AutoPi TMU CM4 getting started guide](/getting_started/autopi_tmu_cm4/).
2. Confirm that the device is online in the AutoPi Cloud.

To configure the device's power cycles correctly, follow the
[Power Cycles guide](/getting_started/electric_vehicles/power-cycle-for-electric-vehicles/).

### Configure the Sleep Timer

The event-driven sleep timer determines which vehicle events start the timer that allows the device to enter sleep mode.

1. Go to **Advanced Settings** > **Power** > **Sleep Timer** > **Event Driven**.
2. Set **Event Regex** to `^vehicle/battery/(charging_slow|discharging)`.
3. Set **Reason** to `battery_discharging`.
4. Select **Save**.

### Configure Sleep Timer Suppression

Sleep timer suppression defines which events clear active sleep timers and prevent new ones from being enabled. This configuration keeps the device awake while the vehicle is moving or charging.

1. Go to **Advanced Settings** > **Power** > **Sleep Timer** > **Suppress**.
2. Set **Event Regex** to `^vehicle/(motion/(shaking|jolting)|battery/(charging|overcharging))`.
3. Select **Save**.

### Configure the Last Driven Source

This setting determines which event source updates the vehicle's **Last Driven** timestamp in the AutoPi Cloud.

1. Go to **Advanced Settings** > **Tracking** > **Last Driven**.
2. Set **Source** to **Battery charging** or **Accelerometer motion**, depending on which source most reliably represents vehicle use.
3. Select **Save**.

### Configure Trip Events

Use both GNSS and accelerometer movement to determine when a trip starts and stops.

1. Go to **Advanced Settings** > **Vehicle** > **Trip Event**.
2. Under **Sources**, select **GNSS movement** and **Accelerometer motion**.
3. Open **Transition to Start** and set **Match Count** to `0`. With this value, all selected sources must agree before a trip starts.
4. Open **Transition to Stop** and set **Match Count** to `1`. With this value, either selected source can stop the trip.
5. Select **Save**.

### Configure Electric Vehicle Data Collection

Available signals and query details vary by vehicle. Use parameters from the vehicle manufacturer or your integration specification. Do not assume that standard OBD-II PIDs for internal combustion engine vehicles are available.

1. Obtain the required signal, PID, or CAN parameters for the vehicle.
2. Follow [Create Loggers for AutoPi TMU CM4](/getting_started/autopi_tmu_cm4/create-loggers-cm4) to configure the required data queries and collection interval.
3. Apply the changes and confirm their status in **Change History**.
4. Take a short test drive.
5. Confirm that the device generates the expected trip start and stop events, updates **Last Driven**, and returns plausible values at the configured interval.

:::note

Do not copy parameters from another vehicle solely because it uses the same connector. CAN identifiers, diagnostic sessions, formulas, and security requirements can vary between manufacturers, models, and model years.

:::

---

## AutoPi CAN-FD Pro

The CAN-FD Pro supports electric vehicles by recording traffic directly from up to two CAN or CAN-FD channels. The Mini supported electric vehicle table does not apply to this device. Configure the channel connected to the vehicle bus, then create a logger and choose where to store or transfer the captured data.

Complete the [AutoPi CAN-FD Pro getting started guide](/getting_started/autopi_canfd_pro/), including the external antenna and connectivity steps, before continuing. When the device is online, apply the electric vehicle settings below.

To configure the device's power cycles correctly, follow the
[Power Cycles guide](/getting_started/electric_vehicles/power-cycle-for-electric-vehicles/).

### Configure the Sleep Timer

The event-driven sleep timer determines which vehicle events start the timer that allows the device to enter sleep mode.

1. Go to **Advanced Settings** > **Power** > **Sleep Timer** > **Event Driven**.
2. Set **Event Regex** to `^vehicle/battery/(charging_slow|discharging)`.
3. Set **Reason** to `battery_discharging`.
4. Select **Save**.

### Configure Sleep Timer Suppression

Sleep timer suppression defines which events clear active sleep timers and prevent new ones from being enabled. This configuration keeps the device awake while the vehicle is moving or charging.

1. Go to **Advanced Settings** > **Power** > **Sleep Timer** > **Suppress**.
2. Set **Event Regex** to `^vehicle/(motion/(shaking|jolting)|battery/(charging|overcharging))`.
3. Select **Save**.

### Configure the Last Driven Source

This setting determines which event source updates the vehicle's **Last Driven** timestamp in the AutoPi Cloud.

1. Go to **Advanced Settings** > **Tracking** > **Last Driven**.
2. Set **Source** to **Battery charging** or **Accelerometer motion**, depending on which source most reliably represents vehicle use.
3. Select **Save**.

### Configure Trip Events

Use both GNSS and accelerometer movement to determine when a trip starts and stops.

1. Go to **Advanced Settings** > **Vehicle** > **Trip Event**.
2. Under **Sources**, select **GNSS movement** and **Accelerometer motion**.
3. Open **Transition to Start** and set **Match Count** to `0`. With this value, all selected sources must agree before a trip starts.
4. Open **Transition to Stop** and set **Match Count** to `1`. With this value, either selected source can stop the trip.
5. Select **Save**.

### Configure CAN Logging

When you connect a CAN-FD Pro to a vehicle for the first time, it uses **Any (passive)** autodetection by default. This method listens for CAN traffic without sending requests, reducing the risk of triggering vehicle warnings or communication issues. The device tests common bitrates automatically to identify the connected CAN bus.

Autodetection works best when the CAN bus is active. With the vehicle safely parked, turn on the ignition and check the result. If necessary, complete a controlled test drive and review the result afterward. Never change device settings while driving.

#### Verify Automatic CAN Bus Detection

1. In the AutoPi Cloud, go to **Devices**, select the CAN-FD Pro, and open **CAN Logging**.
2. Open the connected channel, such as **can0** or **can1**, and select **Configure**.
3. Confirm that the channel is enabled and that **Any (passive)** is selected.
4. Open the device's **Events** section and review the autodetection result. The device may generate events such as:
	- `vehicle/bus/can0/autodetected`
	- `vehicle/bus/can0/autodetect/any_passive/successful`
	- `vehicle/bus/can0/autodetect/any_passive/unsuccessful`
5. Run the [`logger.status` command](/getting_started/autopi_canfd_pro/pro-user-guide/#understanding-can-logging) to view the current channel, logger, decoder, output, and storage status in real time.
6. Confirm that the channel receives frames and reports the detected bitrate.

#### Configure the CAN Bus Manually

If passive autodetection is unsuccessful, configure the channel manually:

1. Obtain the vehicle's CAN or CAN-FD arbitration bitrate and, if applicable, its data bitrate.
2. Open the channel configuration under **CAN Logging**.
3. Enter the known bitrate values instead of using automatic bitrate detection.
4. Keep frame transmission disabled unless the integration explicitly requires it and you understand the effect of transmitting on the vehicle bus.
5. Apply the configuration, run `logger.status`, and confirm that the channel receives frames without errors.

#### Configure Data Collection

After the CAN bus and bitrate are configured correctly:

1. Check the [OBD Community Library](/cloud/obd_library/community_library/) for PID details shared for your vehicle model.
2. Configure the required queries or create a CAN logger for the channel.
3. Choose raw logging to capture all bus traffic, or add the appropriate PID details or decoder to produce interpreted signals.
4. Configure the required output, such as local files or an Amazon S3 bucket.
5. Apply the configuration and confirm that the expected data and output files are created.

For channel settings, loggers, decoders, and outputs, follow the [CAN-FD Pro user guide](/getting_started/autopi_canfd_pro/pro-user-guide/).



:::warning

Active autodetection methods transmit diagnostic requests and can trigger warning indicators when the vehicle does not support the selected protocol. Keep the default **Any (passive)** setting unless the vehicle integration specifically requires an active method.

:::

---

## Validate the Installation

After configuring the device:

1. Confirm that the device is online and that the latest changes were applied successfully.
2. With the vehicle parked, confirm that the device reports data without triggering dashboard warnings.
3. Take a short test drive in a safe area.
4. Confirm that trip start and stop events are detected correctly.
5. Where available, compare key values such as speed, state of charge, and odometer readings with the vehicle display.
6. Check for missing, constant, implausible, or incorrectly scaled values before using the data in production.

If the device is online but does not collect the expected data, use the troubleshooting guide for your edition:

- [AutoPi Mini Data Troubleshooting](/getting_started/autopi_mini/mini-data-troubleshooting)
- [AutoPi TMU CM4 Data Troubleshooting](/getting_started/autopi_tmu_cm4/cm4-data-troubleshooting)
- [AutoPi CAN-FD Pro Data Troubleshooting](/getting_started/autopi_canfd_pro/pro-data-troubleshooting)



