---
id: core-cmd-log
title: Log
---

## `log.help`

Shows this help information.


----
## `log.kernel`

Print and/or clear the kernel ring buffer.

**OPTIONAL ARGUMENTS**

  - **`level`** (str): Restict output the the given level and higher. Default is `err`.
  - **`facilities`** (str): Restrict output to the given list (comma-separated) of facilities.
  - **`offset`** (str): Offset regex to begin from.
  - **`clear`** (bool): Clear after reading.


----
## `log.kernel_iter`

Helper function to retrieve new kernel log entries (based on cached offset value).

**OPTIONAL ARGUMENTS**

  - **`level`** (str): Restict output the the given level and higher. Default is `err`.
  - **`facilities`** (str): Restrict output to the given list (comma-separated) of facilities.
  - **`offset_key`** (str): Key to get value from result and use as offset. Default is `timestamp`.
  - **`reset`** (bool): Reset cached offset value and start over.


----
## `log.query`

Query a log file or any text file.

**ARGUMENTS**

  - **`file`** (str): Path of log file.

**OPTIONAL ARGUMENTS**

  - **`begin`** (str): Default is `^`.
  - **`end`** (str): Default is `$`.
  - **`match`** (str): Default is `.*`.
  - **`count`** (int): Default is `0`.
  - **`reverse`** (bool): Default is `False`.
  - **`before`** (int): Default is `0`.
  - **`after`** (int): Default is `0`.
  - **`first`** (int): Default is `0`.
  - **`last`** (int): Default is `100`.
