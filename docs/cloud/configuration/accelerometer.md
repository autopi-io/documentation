---
id: cloud-config-accelerometer
title: Accelerometer
---

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| SAMPLING RATE | How many samples per second? Increasing this will affect system performance negatively. Only change this value if you know what you are doing. | float | 12.5 | Hz |
| RANGE | Maximum number of g-forces being measured. | int | 8 | g |

## Gyroscope

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| SAMPLING RATE | Gyroscope sampling rate. How often will the gyroscope sample new data? A value of 0 means the gyroscope is disabled. | float | 0 | Hz |
| RANGE | Maximum number of degrees per second that the gyroscope will measure. | int | 250 | deg/s |

## Logger

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| RETURNERS | Which cloud returner(s) should be used? | str |  | - |
| FILTER DUPLICATES | Filter out duplicate measurements? | bool | True | - |
| DECIMALS | More decimals means a lot more data. Be very careful about increasing this value. | int | 2 | - |

## Motion Events

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| ENABLE | Trigger motion events based on XYZ measurements? | bool | True | - |
| SHAKE PERCENTAGE | Percentage of positive motion detections required within duration period to conclude shaking. | float | 90 | % |
| SHAKE G THRESHOLD | G force threshold for shaking detection. Disabled when set to zero. | float | 0.01 | g |
| JOLT DURATION | How long in seconds should the G force threshold be observed over? | int | 1 | s |
| DEBOUNCE DELAY | Minimum delay in seconds between triggering events. | int | 1 | s |
| JOLT G THRESHOLD | G force threshold for jolting detection. Disabled when set to zero. | float | 0.6 | g |
| SHAKE DURATION | How long in seconds should the G force threshold be observed over? | int | 3 | s |

## Wake On Motion

Devices with a hardware version of **5.1** and earlier have the wake on motion available, this includes Gen 2 devices as well.

Devices with a hardware version of **5.2** and above **don't** support wake on motion.

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| SENSITIVITY | The sensitivity of a trigger for the motions/jolts. Minimum value is 0 and maximum value is 127. The sensitivity value defines how much G force is required to trigger a wake event using the formula `sensitivity * 0.063 = G` | int | 5 | - |
| MODE | Enable the device to wake up whenever it detects motion or transient (jolt) acceleration of the device. Transient mode detects jolts (fast movements), while motion mode detects even slow and steady changes in accelerometer readings. | string | disabled | - |

#### Axes

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| Z | Wake if motion/jolt is detected on the Z axis. | bool | True | - |
| X | Wake if motion/jolt is detected on the X axis. | bool | True | - |
| Y | Wake if motion/jolt is detected on the Y axis. | bool | True | - |
