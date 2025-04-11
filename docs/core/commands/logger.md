---
id: core-commands-logger
title: Logger
---

## `logger.call`

Helper command to call handlers or workflows on different engines/services identified by their namespace.

**ARGUMENTS**

  - **`namespace`** (str): The namespace of the engine/service to call.
  - **`handler/workflow`** (str): Name of the handler or workflow to call.
  - **`*args`** (str): The argument(s) to pass to the handler or workflow.


**EXAMPLES**

  - `logger.call can0 manage context`
  - `logger.call can0 obd_query rpm`
  - `logger.call can0_decoder manage worker list`


----
## `logger.channel`

Alias for the `logger.channels` command.


----
## `logger.channel_namespaces`

Returns available namespaces grouped by the channel they belong to.

**ARGUMENTS**

  - **`*only`** (str): The channel(s) to include in the result. If none defined all channels are included.


----
## `logger.channels`

Returns details of all channels available for this device.

**ARGUMENTS**

  - **`*only`** (str): The channel(s) to include in the result. If none defined all channels are included.

**OPTIONAL ARGUMENTS**

  - **`verbose`** (bool): Include more details in the result? Default value is `False`.


----
## `logger.disk`

Alias for the `logger.disks` command.


----
## `logger.disks`

Returns details of all disks available for this device.

**OPTIONAL ARGUMENTS**

  - **`verbose`** (bool): Include more details in the result? Default value is `False`.


----
## `logger.help`

Shows this help information.


----
## `logger.status`

Returns a status overview of all channels and disks available for this device.
This command is just a composite result of the two commands `logger.channels` and `logger.disks`.

**OPTIONAL ARGUMENTS**

  - **`verbose`** (bool): Include more details in the result? Default value is `False`.
