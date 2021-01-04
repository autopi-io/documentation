---
id: core-services-acc
title: Acc Manager
---

## Enrichers
### `roll_pitch`

Calculates roll and pitch for a XYZ reading and appends it to the result.
This enricher supports both single value results as well as multiple values results.

## Filters
### `alternating_readout`

Filter that only returns alternating/changed results.

## Handlers
### `connection`

Manages current connection.

**OPTIONAL ARGUMENTS**

  - **`close`** (bool): Close MMA8X5X connection? Default value is `False`. 


----
### `context`

Gets current context.


----
### `dump`

Dumps raw XYZ readings to screen or file.

**OPTIONAL ARGUMENTS**

  - **`duration`** (int): How many seconds to record data? Default value is `1`.
  - **`file`** (str): Write data to a file with the given name.
  - **`range`** (int): Maximum number of g-forces being measured. Default value is `8`.
  - **`rate`** (float): How many Hz (samples per second)? Default value is `50`.
  - **`decimals`** (int): How many decimals to calculate? Default value is `4`.
  - **`timestamp`** (bool): Add timestamp to each sample? Default value is `True`.
  - **`sound`** (bool): Play sound when starting and stopping recording? Default value is `True`.
  - **`interrupt_driven`** (bool): Await hardware data ready signal before reading a sample? Default value is `True`.


----
### `query`

Queries a given accelerometer command.

**ARGUMENTS**

  - **`cmd`** (str): The command to query.
