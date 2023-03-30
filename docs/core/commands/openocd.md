---
id: core-commands-openocd
title: Openocd
---

## `openocd.help`

Shows this help information.


----
## `openocd.program`

Loads a program onto a MCU.

**ARGUMENTS**

  - **`file`** (str): Path of program binary file.
  - **`interface_cfg`** (str): Path of interface configuration file.
  - **`target_cfg`** (str): Path of target configuration file.

**OPTIONAL ARGUMENTS**

  - **`raise_on_error`** (bool): Raise an error upon failure. Default is `True`.
  - **`start_address`** (string): Flash memory start address in hex format (required for .bin files)
