---
id: core-commands-can
title: Can
---

## `can.autodetect`

Attempts to autodetect the protocol.


----
## `can.connection`

Manages the current CAN connection.

**OPTIONAL ARGUMENTS**

  - **`autodetect`** (str): Attempt autodetection of the bus protocol. One or more of the following values can be specified; `passive`, `obd` and/or `j1939`.


----
## `can.dump`

Stores messages from the CAN bus to a file until a limit or duration is reached.

**ARGUMENTS**

  - **`file`** (str): Write data to a file with the given name. Supported file extensions are `.asc`, `.blf`, `.csv`, `.db` and `.log`.

**OPTIONAL ARGUMENTS**

  - **`duration`** (int): How many seconds to record data? Default value is `1`.
  - **`limit`** (int): The maximum number of messages to read.
  - **`receive_timeout`** (float): The amount of time in seconds to wait for a reply message. Default value is `0.2`.
  - **`skip_error_frames`** (bool): Skip any reply message marked as an error frame. Default value is `False`.
  - **`keep_listening`** (bool): Continue listening for messages in the background? Default value is `False`.
  - **`buffer_size`** (int): The limit of messages that the internal queue can hold. If the value is less than or equal to zero, the queue size is infinite. Default value is `0`.

**OPTIONAL ARGUMENTS FOR ASC AND BLF FILES**

  - **`channel`** (int): The default value to use when a message does not have a channel set. Default value is `1`.

**OPTIONAL ARGUMENTS FOR CSV FILE**

  - **`append`** (bool): Append messages to an existing file where no header line is written or truncate and start with a newly written header line? Default value is `False`.


**OPTIONAL ARGUMENTS FOR DB FILE (SQLITE)**

  - **`table_name`** (str): The name of the table to store messages in. Default value is `messages`.

**OPTIONAL ARGUMENTS FOR LOG FILE**

  - **`channel`** (str): The default value to use when a message does not have a channel set. Default value is `vcan0`.
  - **`append`** (bool): Append messages to any existing file or truncate it?  Default value is `False`.


----
## `can.filter`

Manages the CAN filters.

:::note
For now it is only possible to view the active filters.
:::


----
## `can.help`

Shows this help information.


----
## `can.j1939_query`

Queries a J1939 PGN on the CAN bus.

**ARGUMENTS**

  - **`pgn`** (int): Number of the PGN to query.

**OPTIONAL ARGUMENTS, J1939 SPECIFIC**

  - **`priority`** (int): The priority to use for the request message. Default value is `6`.
  - **`destination_address`** (int): The destination address of the request message. Default value is `0`.
  - **`source_address`** (int): The source address of the request message. Default value is `249` (Service Tool).
  - **`auto_filter`** (bool): Ensure to apply filtering to only include reply message for the specific PGN. Default value is `True`.
  - **`auto_filter_mask`** (int): The bitmask to use when the filter is applied. Default value is `0x00FFFF00`.

**OPTIONAL ARGUMENTS, GENERAL**

  - **`ensure_filtering`** (bool): Ensure that reply messages not matching the filters are excluded. Default value is `True`.
  - **`flow_control`** (list): List of flow control ID resolvers to enable. Options are `obd` and `custom`. Default value is `False` (disabled).
  - **`replies`** (int): The amount of reply messages to wait for within a timeout.
  - **`skip_error_frames`** (bool): Skip any reply message marked as an error frame. Default value is `True`.
  - **`skip_remote_frames`** (bool): Skip any reply message marked as a remote frame. Default value is `True`.
  - **`strict`** (bool): Raise an error when no reply messages are received or if the amount of expected reply messages is not met within the timeout. Default value is `True`.
  - **`timeout`** (float): The amount of time in seconds to wait for a reply message. Default value is `0.2`.
  - **`output`** (str): Select `obj`, `dict` or `str` as the output data type of the reply messages. Default value is `str`.


----
## `can.manage`

Facilitates runtime management of the underlying service instance.


----
## `can.monitor`

Monitors messages on the CAN bus until a limit and/or duration is reached.

**OPTIONAL ARGUMENTS**

  - **`duration`** (int): How many seconds to record data? Default value is `1`.
  - **`limit`** (int): The maximum number of messages to read.
  - **`receive_timeout`** (float): The amount of time in seconds to wait for a reply message. Default value is `0.2`.
  - **`skip_error_frames`** (bool): Skip any reply message marked as an error frame. Default value is `False`.
  - **`keep_listening`** (bool): Continue listening for messages in the background? Default value is `False`.
  - **`buffer_size`** (int): The limit of messages that the internal queue can hold. If the value is less than or equal to zero, the queue size is infinite. Default value is `0`.
  - **`output`** (str): Select `obj`, `dict` or `str` as the output data type of the reply messages. Default value is `str`.


----
## `can.obd_query`

Queries an OBD-II PID on the CAN bus.

**ARGUMENTS**

  - **`name`** (str): Name of the command.

**OPTIONAL ARGUMENTS, OBD-II SPECIFIC**

  - **`mode`** (str): Service section of the PID.
  - **`pid`** (str): Code section of the PID.
  - **`bytes`** (int): Byte size of individual returned frame(s). Default value is `0`.
  - **`frames`** (int): Expected frame count to be returned?
  - **`strict`** (int): Enforce strict validation of specified `bytes` and/or `frames`. Default value is `False`.
  - **`decoder`** (str): Specific decoder to be used to process the response.
  - **`unit`** (str): Unit of the result.
  - **`auto_filter`** (bool): Ensure to apply filtering to only include OBD-II reply messages. Default value is `True`.
  - **`auto_format`** (bool): Ensure that the PID request message always has a fixed data length of 8 bytes (zero padding). Default value is `True`.
  - **`id`** (int): Use a custom CAN arbitration ID for the PID request message. 
  - **`is_ext_id`** (int): Enforce to use extended CAN arbitration ID or not (29 or 11 bit) for the PID request message.

**OPTIONAL ARGUMENTS, GENERAL**

  - **`ensure_filtering`** (bool): Ensure that reply messages not matching the filters are excluded. Default value is `True`.
  - **`flow_control`** (list): List of flow control ID resolvers to enable. Options are `obd` and `custom`. Default value is `False` (disabled).
  - **`replies`** (int): The amount of reply messages to wait for within a timeout.
  - **`skip_error_frames`** (bool): Skip any reply message marked as an error frame. Default value is `True`.
  - **`skip_remote_frames`** (bool): Skip any reply message marked as a remote frame. Default value is `True`.
  - **`strict`** (bool): Raise an error when no reply messages are received or if the amount of expected reply messages is not met within the timeout. Default value is `True`.
  - **`timeout`** (float): The amount of time in seconds to wait for a reply message. Default value is `0.2`.


----
## `can.play`

Sends all messages from one or more dump files on the CAN bus.

**ARGUMENTS**

  - **`*files`** (str): Specify one or more dump files for playback.

**OPTIONAL ARGUMENTS**

  - **`ignore_timestamps`** (bool): Ignore the timestamps of the messages and use the `min_gap` parameter as the time between messages instead. Default value is `False`.
  - **`min_gap`** (float): Minimum time between sent messages in seconds. Default value is `0.0001`.
  - **`skip_gaps_gt`** (float): Skip periods of inactivity greater than this (in seconds). Default value is `86400`.
  - **`include_error_frames`** (bool): Also send messages marked as error frames? Default value is `True`.


----
## `can.query`

Queries by sending one or more request messages on the CAN bus and then waits for one or more reply messages.

**ARGUMENTS**

  - **`*messages`** (can.Message): CAN request messages to send.

**OPTIONAL ARGUMENTS**

  - **`ensure_filtering`** (bool): Ensure that reply messages not matching the filters are excluded. Default value is `True`.
  - **`flow_control`** (list): List of flow control ID resolvers to enable. Options are `obd` and `custom`. Default value is `False` (disabled).
  - **`replies`** (int): The amount of reply messages to wait for within a timeout.
  - **`skip_error_frames`** (bool): Skip any reply message marked as an error frame. Default value is `True`.
  - **`skip_remote_frames`** (bool): Skip any reply message marked as a remote frame. Default value is `True`.
  - **`strict`** (bool): Raise an error when no reply messages are received or if the amount of expected reply messages is not met within the timeout. Default value is `True`.
  - **`timeout`** (float): The amount of time in seconds to wait for a reply message. Default value is `0.2`.
  - **`output`** (str): Select `obj`, `dict` or `str` as the output data type of the reply messages. Default value is `str`.


----
## `can.send`

Sends one or more messages on the CAN bus.

**ARGUMENTS**

  - **`*messages`** (str): CAN messages to send.


----
## `can.write_stack`

Stores stack to stack file
