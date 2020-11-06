---
id: cloud-events-vehicle
title: Vehicle
---

## Battery Events

These events are calculated from the voltage level measured via the OBD-II connector and are fired by the trigger [`battery_event`](../../core/services/obd_manager.md#battery-event) in the [Obd Manager](../../core/services/obd_manager.md).

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

## Engine Events

These events are fired by the trigger [`rpm_engine_event`](../../core/services/obd_manager.md#rpm-engine-event) in the [Obd Manager](../../core/services/obd_manager.md) and are only intended for ICE-type cars.

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

These events are fired by the trigger [`communication_event`](../../core/services/obd_manager.md#communication-event) in the [Obd Manager](../../core/services/obd_manager.md) and used with EV-type cars that are unable to produce [Motor Events](#motor-events).

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

These events are fired by the trigger [`rpm_motor_event`](../../core/services/obd_manager.md#rpm-motor-event) in the [Obd Manager](../../core/services/obd_manager.md) and are intended for EV-type cars.

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