---
id: core-commands-avrdude
title: Avrdude
---

## `avrdude.flash`

Flash hex file to MCU.

WARNING: Only use this command with caution as it can misconfigure the MCU and leave it in an unusable state.

**ARGUMENTS**

  - **`hex_file`** (str): Path of hex file.

**OPTIONAL ARGUMENTS**

  - **`part_id`** (str): Part ID. Default is `t88`.
  - **`prog_id`** (str): ID of programmer. Default is `autopi`.
  - **`raise_on_error`** (bool): Raise an error upon failure. Default is `True`.
  - **`no_write`** (bool): No actual write to MCU. Default is `True`.


----
## `avrdude.fuse`

Get or set fuse value of MCU.

WARNING: Only use this command with caution as it can misconfigure the MCU and leave it in an unusable state.

**ARGUMENTS**

  - **`name`** (str): Name of the fuse.

**OPTIONAL ARGUMENTS**

  - **`part_id`** (str): Part ID. Default is `t88`.
  - **`prog_id`** (str): ID of programmer. Default is `autopi`.
  - **`value`** (str): Fuse byte value to write.


----
## `avrdude.help`

Shows this help information.
