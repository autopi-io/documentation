---
id: cloud-config-accelerometer
title: Accelerometer
---

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| RANGE | Maximum number of g-forces being measured. | int | 8 | g |
| SAMPLING RATE | How many samples per second? Increasing this will affect system performance negatively. Only change this value if you know what you are doing. | float | 1.56 | Hz |

## Logger

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| DECIMALS | More decimals means a lot more data. Be very careful about increasing this value. | int | 1 | - |
| FILTER DUPLICATES | Filter out duplicate measurements? | bool | True | - |
| CLOUD RETURNER | Which cloud returner should be used? | str | cloud | - |

## Wake On Motion

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| MODE | Enable the device to wake up whenever it detects motion or transient (jolt) acceleration of the device. Transient mode detects jolts (fast movements), while motion mode detects even slow and steady changes in accelerometer readings. | string | disabled | - |
| SENSITIVITY | The sensitivity of a trigger for the motions/jolts. Minimum value is 0 and maximum value is 127. The sensitivity value defines how much G force is required to trigger a wake event using the formula `sensitivity * 0.063 = G` | int | 5 | - |

#### Axes

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| X | Wake if motion/jolt is detected on the X axis. | bool | True | - |
| Y | Wake if motion/jolt is detected on the Y axis. | bool | True | - |
| Z | Wake if motion/jolt is detected on the Z axis. | bool | True | - |
