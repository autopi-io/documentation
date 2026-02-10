---
id: core-commands-socketcan
title: Socketcan
---

## `socketcan.down`

Bring down CAN interface.

**OPTIONAL ARGUMENTS**

  - **`interface`** (str): CAN interface. Default is `can0`.


----
## `socketcan.dump`

Run CAN dump.


**EXAMPLE** `socketcan.dump can0,18F00000:1FF00000`


----
## `socketcan.help`

Shows this help information.


----
## `socketcan.show`

Show current information for CAN interface.

**OPTIONAL ARGUMENTS**

  - **`interface`** (str): CAN interface. Default is `can0`.
  - **`details`** (bool): Include details. Default is `False`.
  - **`stats`** (bool): Include statistics. Default is `False`.


----
## `socketcan.up`

Bring up CAN interface.

**OPTIONAL ARGUMENTS**

  - **`interface`** (str): CAN interface. Default is `can0`.
  - **`bitrate`** (int): Default is `500000`.
  - **`dbitrate`** (int): CAN-FD data bitrate.
  - **`listen_only`** (bool): Only receive and not transmit CAN messages. Default is `False`.
