---
id: cloud-events-system
title: System
---

System events relate to the running system of the device.

## Device Events

These events apply depending on which peripherals are installed inside the dongle.

| Tag | Description | Fields |
| ------ | ------ | ------ |
| `system/device/ec2x/gnss/assist_data_updated` | GNSS assist data of the installed EC2X compatible device has been updated. | - |
| `system/device/ec2x/powered_off` | Installed EC2X compatible device was powered off. Automatic power on is expected immediately after. | `reason` |

**FIELD DEFINITIONS**

| Name | Type | Description | Example |
| ------ | ------ | ------ | ------ |
| `reason` | Text | The explanatory cause for the event. | - |

## Minion Events

| Tag | Description | Fields |
| ------ | ------ | ------ |
| `system/minion/ready` | The Minion is started up and ready. | - |
| `system/minion/online` | The Minion is connected to the hub. | - |
| `system/minion/offline` | The Minion is not connected to the hub. | - |
| `system/minion/restarting` | The Minion is restarting because of the specified reason. | `reason` |

**FIELD DEFINITIONS**

| Name | Type | Description | Example |
| ------ | ------ | ------ | ------ |
| `reason` | Text | The explanatory cause for the event. | - |

## Network Events

| Tag | Description | Fields |
| ------ | ------ | ------ |
| `system/network/wwan0/online` | The network interface _wwan0_ has gone online. | - |
| `system/network/wwan0/offline` | The network interface _wwan0_ has gone offline. | `reason` |

**FIELD DEFINITIONS**

| Name | Type | Description | Example |
| ------ | ------ | ------ | ------ |
| `reason` | Text | The explanatory cause for the event. | - |

## Power Events

| Tag | Description | Fields |
| ------ | ------ | ------ |
| `system/power/_booting` | The prefixed underscore indicates that this is a private event and should only be used for debugging purposes. The event describes the internal state of the SPM subsystem. This event may be discarded in the future. | `awaken`, `trigger` |
| `system/power/on` | Triggered when it is confirmed that the SPM subsystem is in *on* state. | `awaken`, `trigger` |
| `system/power/last_off` | Informs during start-up the last known timestamp where the device was last powered off. The actual timestamp is retrieved from the syslog and should only be used for debugging purposes. | `timestamp` |
| `system/power/recover` | Informs during start-up if the device has recovered from an error condition handled by the SPM subsystem. | `trigger` |
| `system/power/sleep` | Device went into sleep because of specifed reason.  | `delay`, `interval`, `reason`, `uptime` |
| `system/power/hibernate` | Device went into hibernation because of specifed reason. | `delay`, `interval`, `reason`, `uptime` |
| `system/power/3v3/restarted` | The 3V3 power supply has been restarted. | `reason` |
| `system/power/config_failed` | One or more configuration parameters of the SPM subsystem could not be loaded and have therefore been restored to default. This event only applies to SPM version 3. | `params` |

**FIELD DEFINITIONS**

| Name | Type | Description | Example |
| ------ | ------ | ------ | ------ |
| `awaken` | Text | The state from which the device awakens. | `off`, `sleeping`, `hibernating` |
| `delay` | Number | Delay in seconds before execution. | 10 |
| `interval` | Number | Planned duration in seconds before expiration. | 300 |
| `reason` | Text | The explanatory cause for the event. | - |
| `timestamp` | Timestamp | Time to be reported. | 2019-03-13T11:10:14 |
| `trigger` | Text | Underlying cause of the event reported by the SPM subsystem. | `acc`, `boot_timeout`, `heartbeat_timeout`, `modem`, `rpi`, `spm`, `stn`, `timer` |
| `uptime` | Number | System uptime in seconds. | 3745 |
| `params` | List | List of parameter names. | - |

## Release Events

| Tag | Description | Fields |
| ------ | ------ | ------ |
| `system/release/pending` | Installing latest release. | `id` |
| `system/release/forcing` | Force installing latest release. | `id` |
| `system/release/retrying` | Retrying installation of latest release. | `id` |
| `system/release/failed` | Installation of latest release failed. | `id` |
| `system/release/updated` | Installation of latest release succeeded. | `id` |

**FIELD DEFINITIONS**

| Name | Type | Description | Example |
| ------ | ------ | ------ | ------ |
| `id` | UUID | ID of the concerned release. | 8ff5526a3dafe2fc0e80675f32755578ddaf3962 |

## STN Events

| Tag | Description | Fields |
| ------ | ------ | ------ |
| `system/stn/not_connected` | Not connected to STN11XX interface. | - |
| `system/stn/interface_connected` | Connected to STN11XX interface. | - |
| `system/stn/bus_connected` | Connected to bus using specified protocol.  | `protocol`, `autodetected` |
| `system/stn/bus_disconnected` | Was connected to a bus but is now disconnected. | - |

**FIELD DEFINITIONS**

| Name | Type | Description | Example |
| ------ | ------ | ------ | ------ |
| `protocol` | Text | ID of the protocol. | 6 |
| `autodetected` | Boolean | Has the protocol been autodetected or not? | `true` |

## Time Events

| Tag | Description | Fields |
| ------ | ------ | ------ |
| `system/time/synced` | The system clock was synchronized with the specifed source. | `new`, `old`, `source` |
| `system/time/uncertain` | The system clock is not synchronized. | - |

**FIELD DEFINITIONS**

| Name | Type | Description | Example |
| ------ | ------ | ------ | ------ |
| `new` | Timestamp | The new time after synchronization. | 19-03-13 10:08:19 |
| `old` | Timestamp | The old time before synchronization. | 2019-03-13 10:08:30 |
| `source` | Text | The source that was synchronized against. | `network`, `ntp`, `rtc`  |

## Jolting Events

| Tag | Description | Fields |
| ------ | ------ | ------ |
| `vehicle/motion/jolting` | The accelerometer readings detected a jolt in the device. | `changes` |
| `vehicle/motion/steady` | The accelerometer readings detect a steady device (there is no movement). | - |

**FIELD DEFINITIONS**

| Name | Type | Description | Example |
| ------ | ------ | ------ | ------ |
| `changes` | Dictionary | Shows a dictionary with the changes detected on each axis (X, Y or Z). | `{x: 0.1, y: 0.2}` |

## Short Message Service (SMS) Events

| Tag | Description | Fields |
| ------ | ------ | ------ |
| `system/sms/received` | A new SMS message was received. | `sender`, `timestamp`, `text` |

**FIELD DEFINITIONS**

| Name | Type | Description | Example |
| ------ | ------ | ------ | ------ |
| `sender` | Text | The phone number of whoever sent the message, including country code. | +4501020304 |
| `timestamp` | Timestamp | The timestamp that the message was received on. Timestamp is in UTC. | 2019-03-13 10:08:30 |
| `text` | Text | The text contained in the mesage. | 'An example text message.'  |