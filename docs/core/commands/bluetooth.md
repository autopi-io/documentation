---
id: core-commands-bluetooth
title: Bluetooth
---

## `bluetooth.help`

Shows this help information.


----
## `bluetooth.scan`

Return list of BLE devices in the proximity.

**OPTIONAL ARGUMENTS**

  - **`hci`** (int) Interface number for scan: Default is 0.
  - **`sensitivity`** (int): Default is -128 dbm.
  - **`timeout`** (int): Default is 4 seconds.
  - **`verbose`** (bool): Default is True.
  - **`sort_by`** (str): Default is `rssi`.
