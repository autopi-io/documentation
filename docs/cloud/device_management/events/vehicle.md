---
id: cloud-events-vehicle
title: Vehicle
---

## Battery Events

These events are calculated from the voltage level measured via the OBD-II connector and are fired by the trigger [`battery_event`](/core/services/core-services-obd-manager/#battery_event) in the [Obd Manager](/core/services/core-services-obd-manager/).

| Tag | Description | Fields |
| ------ | ------ | ------ |
| `vehicle/battery/unknown` | The battery state is unknown. | `reason` |
| `vehicle/battery/charging` | The battery has started charging. | - |
| `vehicle/battery/discharging` | The battery is discharging. | `level` |
| `vehicle/battery/overcharging` | The battery is overcharging compared to normal. | - |
| `vehicle/battery/charging_slow` | The battery charges slowly. | - |
| `vehicle/battery/critical_level` | The battery voltage has reached a critically low level. | `level` |

**FIELD DEFINITIONS**

| Name | Type | Description | Example |
| ------ | ------ | ------ | ------ |
| `reason` | Text | The explanatory cause for the event. | - |
| `level` | Number | Battery level as a percentage. | 90 |

## Battery Nominal Voltage Events

**NOTE**: These events are only available for the Pro edition.

| Tag | Description | Fields |
| ------ | ------ | ------ |
| `vehicle/battery/nominal_voltage/unknown` | The battery nominal voltage is unknown. | `reason` |
| `vehicle/battery/nominal_voltage/autodetected` | The battery nominal voltage is autodetected. | `value` |
| `vehicle/battery/nominal_voltage/predefined` | The battery nominal voltage is predefined to a fixed value. | `value` |

**FIELD DEFINITIONS**

| Name | Type | Description | Example |
| ------ | ------ | ------ | ------ |
| `reason` | Text | The explanatory cause for the event. | `nominal_voltage_absent` |
| `value` | Number | Battery nominal voltage value. | 12 |

## CAN Logging Events

**NOTE**: These events are only available for the Pro edition with the _CAN Logging_ feature.

| Tag | Description | Fields |
| ------ | ------ | ------ |
| `vehicle/bus/<can0\|can1\|...>/logger/<logger_name>/writing` | The logger is starting to write raw CAN frames to an output file. | `file` |
| `vehicle/bus/<can0\|can1\|...>/logger/<logger_name>/rollover` | The logger is performing rollover of the output file. | `source_file`, `destination_file` |
| `vehicle/bus/<can0\|can1\|...>/logger/<logger_name>/decoder/<decoder_name>/reading` | The decoder is starting to read raw CAN frames from an input file. | `file` |
| `vehicle/bus/<can0\|can1\|...>/logger/<logger_name>/decoder/<decoder_name>/writing` | The decoder is starting to write decoded data to an output file. | `file` |
| `vehicle/bus/<can0\|can1\|...>/logger/<logger_name>/decoder/<decoder_name>/rollover` | The decoder is performing rollover of the output file.. | `source_file`, `destination_file` |
| `vehicle/bus/<can0\|can1\|...>/logger/<logger_name>/s3_sync/started` | An AWS S3 sync job has started. | - |
| `vehicle/bus/<can0\|can1\|...>/logger/<logger_name>/s3_sync/completed` | An AWS S3 sync job has finished with success. | `uploaded_files` |
| `vehicle/bus/<can0\|can1\|...>/logger/<logger_name>/s3_sync/timeout` | An AWS S3 sync job has timed out. | - |
| `vehicle/bus/<can0\|can1\|...>/logger/<logger_name>/s3_sync/failed` | An AWS S3 sync job has finished with errors. | `errors`, `uploaded_files` |

**FIELD DEFINITIONS**

| Name | Type | Description | Example |
| ------ | ------ | ------ | ------ |
| `file` | Text | Path of file. | - |
| `source_file` | Text | Path of source file. | - |
| `destination_file` | Text | Path of destination file. | - |
| `uploaded_files` | List | List of files that have been uploaded. | - |
| `errors` | List | List of errors that occurred. | - |

## Engine Events

These events are fired by the trigger [`rpm_engine_event`](/core/services/core-services-obd-manager/#rpm_engine_event) in the [Obd Manager](/core/services/core-services-obd-manager/) and are only intended for ICE-type cars.

| Tag | Description | Fields |
| ------ | ------ | ------ |
| `vehicle/engine/not_running` | The engine is currently not running. This event is usually seen during start-up. | `reason` |
| `vehicle/engine/running` | The engine is now running. | - |
| `vehicle/engine/stopped` | Before the engine was started, now it is stopped. | `reason` |

**FIELD DEFINITIONS**

| Name | Type | Description | Example |
| ------ | ------ | ------ | ------ |
| `reason` | Text | The explanatory cause for the event. | - |

## Communication Events

These events are fired by the trigger [`communication_event`](/core/services/core-services-obd-manager/#communication_event) in the [Obd Manager](/core/services/core-services-obd-manager/) and used with EV-type cars that are unable to produce [Motor Events](#motor-events).

| Tag | Description | Fields |
| ------ | ------ | ------ |
| `vehicle/communication/inactive` | Communication with the vehicle is currently inactive. This event is usually seen during start-up. | `reason` |
| `vehicle/communication/established` | Communication with the vehicle is established. | - |
| `vehicle/communication/disconnected` | Communication with the vehicle is disconnected. | `reason` |

**FIELD DEFINITIONS**

| Name | Type | Description | Example |
| ------ | ------ | ------ | ------ |
| `reason` | Text | The explanatory cause for the event. | - |

## Motor Events

These events are fired by the trigger [`rpm_motor_event`](/core/services/core-services-obd-manager/#rpm_motor_event) in the [Obd Manager](/core/services/core-services-obd-manager/) and are intended for EV-type cars.

| Tag | Description | Fields |
| ------ | ------ | ------ |
| `vehicle/motor/not_running` | The motor(s) is currently not running. This event is usually seen during start-up. | `reason` |
| `vehicle/motor/running` | The motor(s) is now running. | - |
| `vehicle/motor/stopped` | Before the motor(s) was running, now it is stopped. | `reason` |

**FIELD DEFINITIONS**

| Name | Type | Description | Example |
| ------ | ------ | ------ | ------ |
| `reason` | Text | The explanatory cause for the event. | - |

## Position Events

| Tag | Description | Fields |
| ------ | ------ | ------ |
| `vehicle/position/unknown` | The vehicle's current position is not confirmed. | `reason` |
| `vehicle/position/standstill` | The vehicle's position is known and stationary.  | - |
| `vehicle/position/moving` | The vehicle has started moving. | - |

**FIELD DEFINITIONS**

| Name | Type | Description | Example |
| ------ | ------ | ------ | ------ |
| `reason` | Text | The explanatory cause for the event. | no_fix |

## Motion Events

| Tag | Description | Fields |
| ------ | ------ | ------ |
| `vehicle/motion/steady` | The accelerometer readings detect a steady device (there is no movement). | - |
| `vehicle/motion/shaking` | The accelerometer readings detect a shaking motion. | - |
| `vehicle/motion/jolting` | The accelerometer readings detected a sudden jolt in the device. | - |

## Geofence Events

These events are triggered by the [`position_event`](/core/services/core-services-tracking-manager/#position_event) trigger in the [Tracking Manager](/core/services/core-services-tracking-manager/) after first acquiring a GPS signal after startup (entering the `on` power state). 
The geofence_slug is a URL-safe version of the geofence's name.

`enter|exit` gets triggered while driving when the vehicle enters/exits a geofence.

| Tag | Description | Fields |
| ------ | ------ | ------ |
| `vehicle/geofence/<geofence_slug>/enter` | The vehicle went from being outside a geofence to inside a geofence. | `fence_id` |
| `vehicle/geofence/<geofence_slug>/exit` | The vehicle went from being inside a geofence to outside a geofence. | `fence_id` |

`inside|outside` events are triggered once for each geofence when the device wakes up, and is a snapshot of the current state.

| Tag | Description | Fields |
| ------ | ------ | ------ |
| `vehicle/geofence/<geofence_slug>/inside` | The vehicle is inside a geofence. | `fence_id` |
| `vehicle/geofence/<geofence_slug>/outside` | The vehicle is outside a geofence. | `fence_id` |

**FIELD DEFINITIONS**

| Name | Type | Description | Example |
| ------ | ------ | ------ | ------ |
| `fence_id` | Number | Id of the geofence that triggered the event | `3306` |
