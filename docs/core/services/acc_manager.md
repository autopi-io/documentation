---
id: core-services-acc-manager
title: Acc Manager
---

## Enrichers
### `orientation`

Adds device orientation (in degrees) which attempts to report back the exact orientation of the
device to the ground.

:::note
This enricher is still a work-in-progress and is not considered stable. The calculations
:::
here are based on this article: http://www.starlino.com/imu_guide.html


----
### `roll_pitch`

Calculates roll and pitch for a XYZ reading and appends it to the result.
This enricher supports both single value results as well as multiple values results.

## Filters
### `alternating_readout`

Filter that only returns alternating/changed results.

**OPTIONAL ARGUMENTS**

  - **`pass_interval`** (int): Filter passes values only when this many miliseconds have passed between readings, even when the values are different. Default value is `0`.

## Handlers
### `connection`

Manages current connection.

**OPTIONAL ARGUMENTS**

  - **`close`** (bool): Close connection? Default value is `False`.


----
### `dump`

Dumps raw XYZ readings to screen or file.

**OPTIONAL ARGUMENTS**

  - **`duration`** (int): How many seconds to record data? Default value is `1`.
  - **`file`** (str): Write data to a file with the given name.
  - **`range`** (int): Maximum number of g-forces being measured. Default value is `8`.
  - **`rate`** (float): How many Hz (samples per second)? Default value is `12.5`.
  - **`decimals`** (int): How many decimals to calculate? Default value is `4`.
  - **`timestamp`** (bool): Add timestamp to each sample? Default value is `True`.
  - **`sound`** (bool): Play sound when starting and stopping recording? Default value is `True`.
  - **`interrupt_driven`** (bool): Await hardware data ready signal before reading a sample? Default value is `True`.


----
### `query`

Queries a given accelerometer command.

**ARGUMENTS**

  - **`cmd`** (str): The command to query.

## Triggers
### `motion_event`

Triggers `vehicle/motion/jolting`, `vehicle/motion/shaking` and `vehicle/motion/steady` events based on accelerometer XYZ readings.

**OPTIONAL ARGUMENTS**

  - **`jolt_g_threshold`** (float): G force threshold for jolting detection. Disabled when set to zero. Default value is `0.3`.
  - **`jolt_duration`** (float): How long in seconds should the G force threshold be observed over? Default value is `1`.
  - **`shake_g_threshold`** (float): G force threshold for shaking detection. Disabled when set to zero. Default value is `0.01`.
  - **`shake_duration`** (float): How long in seconds should the G force threshold be observed over? Default value is `3`.
  - **`shake_percentage`** (float): Percentage of positive motion detections required within duration period to conclude shaking. Default value is `90`.
  - **`debounce_delay`** (float): Minimum delay in seconds between triggering events. Default value is `1`.
