---
id: core-services-can-manager
title: Can Manager
---

## Converters
### `can`

Converts raw CAN data using the CAN database available for the current protocol.
The CAN database file (.dbc) is found on the local file system by the following path expression:


/opt/autopi/obd/can/db/protocol_`<PROTOCOL ID>`.dbc

## Handlers
### `autodetect`

Autodetection of interfaces and their supported protocols.


----
### `connection`

Manages the CAN connections.

**OPTIONAL ARGUMENTS**

  - **`open`** (bool): Attempt to open connection. Defaults to `True` if autodetecting, otherwise, don`t change connection state.


----
### `dump`

Stores messages from the CAN bus to a file until a limit or duration is reached.

**ARGUMENTS**

  - **`file`** (str): Write data to a file with the given name. Supported file extensions are `.asc`, `.blf`, `.csv`, `.db` and `.log`.

**OPTIONAL ARGUMENTS**

  - **`duration`** (int): How many seconds to record data? Default value is `1`.
  - **`limit`** (int): The maximum number of messages to read.
  - **`receive_timeout`** (float): The amount of time in seconds to wait for a reply message. Default value is `0.2`.
  - **`skip_11bit_ids`** (bools): Skip all messages with 11bit arbitration IDs. Default value is `False`.
  - **`skip_29bit_ids`** (bools): Skip all messages with 29bit arbitration IDs. Default value is `False`.
  - **`skip_error_frames`** (bool): Skip all messages marked as error frames. Default value is `False`.
  - **`skip_remote_frames`** (bool): Skip all messages marked as remote frames. Default value is `False`.
  - **`skip_normal_frames`** (bool): Skip all messages marked as normal data frames. Default value is `False`.
  - **`pass_filters`** (list): List of arbitration ID filters which are allowed to be received.
  - **`keep_listening`** (bool): Continue listening for messages in the background? Default value is `False`.
  - **`buffer_size`** (int): The limit of messages that the internal queue can hold. If the value is less than or equal to zero, the queue size is infinite. Default value is `0`.
  - **`bus`** (str): Name of bus to use. Defaults to can_conn.DefaultBus mapping.
  - **`conn`** (str): Name of the CAN interface to use. 
  - **`sanitize`** (bool): Enable/disable input sanitization. Defaults to `True`.

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
### `external_dump`

Helper for performing CAN dump with external process.


----
### `external_dump_match`

Helper for performing CAN dump matching with external process.


----
### `filter`

Display and management of CAN filters.

**ARGUMENTS**

  - **`*channels`** (str): The channel(s) to include in the result. If none defined all channels are included.

**OPTIONAL ARGUMENTS**

  - **`bus`** (str): Name of a specific bus to display or change.
  - **`add`** (str): The CAN arbitration ID to add as filter.
  - **`mask`** (str): The bitmask to use with the CAN arbitration ID to perform filtering. If not specified, the value is automatically set to the highest possible, meaning a perfect match with the defined CAN arbitration ID.
  - **`is_ext_id`** (bool): Explicit indication of whether to use extended CAN arbitration ID or not (29 or 11 bit). If omitted, the value will be inferred automaticlly by the length of the defined CAN arbitration ID.
  - **`clear`** (bool): Clear any existing filters? This is always done before adding. Default value is `False`.


**EXAMPLES**

  - `can.filter can0`
  - `can.filter can0 bus=dump`
  - `can.filter can0 bus=dump add=7E0`
  - `can.filter can0 bus=dump clear=true`
  - `can.filter can0 bus=dump clear=true add=x7E0`
  - `can.filter can0 bus=dump clear=true add=x7E0 mask=x7FF`
  - `can.filter can0 bus=dump clear=true add=x7E0 mask=x7FF is_ext_id=false`


----
### `j1939_query`

Queries a J1939 PGN on the CAN bus.

**ARGUMENTS**

  - **`pgn`** (int): Number of the PGN to query.

**OPTIONAL ARGUMENTS, J1939 QUERY SPECIFIC**

  - **`priority`** (int): The priority to use for the request message. Default value is `6`.
  - **`destination_address`** (int): The destination address of the request message. Default value is `0`.
  - **`source_address`** (int): The source address of the request message. Default value is `249` (Service Tool).
  - **`auto_filter`** (bool): Ensure to apply filtering to only include reply message for the specific PGN. Default value is `True`.
  - **`auto_filter_mask`** (int): The bitmask to use when the filter is applied. Default value is `0x00FFFF00`.
  - **`auto_tp`** (bool): Automatically enable Transport Protocol (TP) for multi-frame messages. Default value is `True`.

**OPTIONAL ARGUMENTS, GENERAL**

  - **`name`** (str): Name of the command. (E.g. `VehicleSpeed` or `SeatTemperature`)
  - **`output`** (str): Select `obj`, `dict` or `str` as the output data type of the reply messages. Ignored if formula argument is given. Default value is `str`. 
  - **`formula`** (str): Python code that decodes the raw byte data to a value. 
  - **`conn`** (str): Name of the CAN interface to use.
  - **`bus`** (str): Name of the bus instance to use. Default value is `default_query_j1939`.
  - **`sanitize`** (bool): Enable/disable input sanitization. Defaults to `True`.

**OPTIONAL ARGUMENTS, QUERY GENERAL**

  - **`pass_filters`** (list): List of pass filters to use for receiving reply frames. 
  - **`ensure_filtering`** (bool): Ensure that reply messages not matching the filters are excluded. Default value is `True`.
  - **`flow_control`** (list): List of flow control ID resolvers to enable. Options are `obd` and `custom`.
  - **`custom_flow_control_id_mappings`** (dict): ID mappings to use for custom flow control.
  - **`replies`** (int): The amount of reply messages to wait for within a timeout.
  - **`skip_error_frames`** (bool): Skip any reply message marked as an error frame. Default value is `True`.
  - **`skip_remote_frames`** (bool): Skip any reply message marked as a remote frame. Default value is `True`.
  - **`strict`** (bool): Raise an error when no reply messages are received or if the amount of expected reply messages is not met within the timeout. Default value is `True`.
  - **`timeout`** (float): The amount of time in seconds to wait for a reply message. Default value is `0.2`.


----
### `monitor`

Monitors messages on the CAN bus until a limit and/or duration is reached.

**OPTIONAL ARGUMENTS**

  - **`duration`** (float): How many seconds to record data? Default value is `1`.
  - **`limit`** (int): The maximum number of messages to read.
  - **`receive_timeout`** (float): The amount of time in seconds to wait for a reply message. Default value is `0.2`.
  - **`skip_error_frames`** (bool): Skip any reply message marked as an error frame. Default value is `False`.
  - **`bus`** (str): Name of bus to use. Defaults to can_conn.DefaultBus mapping.
  - **`conn`** (str): Name of the CAN interface to use. 
  - **`keep_listening`** (bool): Continue listening for messages in the background? Default value is `False`.
  - **`bus_keep_alive`** (bool): Will keep the bus and its settings alive after the handler is finished. Forced to True if keep_listening is set. Default value is `False`.
  - **`buffer_size`** (int): The limit of messages that the internal queue can hold. If the value is less than or equal to zero, the queue size is infinite. Default value is `0`.
  - **`output`** (str): Select `obj`, `dict` or `str` as the output data type of the reply messages. Ignored if `dbc` argument is given. Default value is `str`.
  - **`dbc`** (str): Path of the can database file (like .dbc) for filtering and decoding.
  - **`mask`** (str): Mask to apply to filters and CAN database for decoding.
  - **`sanitize`** (bool): Enable/disable input sanitization. Defaults to `True`.


----
### `obd_query`

Queries an OBD-II PID on the CAN bus.

**ARGUMENTS**

  - **`name`** (str): Name of the command.

**OPTIONAL ARGUMENTS, OBD-II QUERY SPECIFIC**

  - **`mode`** (str): Service section of the PID.
  - **`pid`** (str): Code section of the PID.
  - **`bytes`** (int): Byte size of individual returned frame(s). Default value is `0`.
  - **`frames`** (int): Expected frame count to be returned?
  - **`strict_lengths`** (bool): Enforce strict validation of specified `bytes` and/or `frames`. Default value is `False`.
  - **`decoder`** (str): Specific decoder to be used to process the response.
  - **`unit`** (str): Unit of the result.
  - **`auto_filter`** (bool): Ensure to apply filtering to only include OBD-II reply messages. Default value is `True`.
  - **`auto_format`** (bool): Ensure that the PID request message always has a fixed data length of 8 bytes (zero padding). Default value is `True`.
  - **`id`** (int): Use a custom CAN arbitration ID for the PID request message. 
  - **`is_ext_id`** (bool): Enforce to use extended CAN arbitration ID or not (29 or 11 bit) for the PID request message.
  - **`extended_address`** (int): Extended address value that will be set as the first data byte.
  - **`zero_padding`** (int): Number of zero padding bytes to add to data. Defaults to `8` when `auto_format` is set to `True`.

**OPTIONAL ARGUMENTS, GENERAL**

  - **`formula`** (str): Python code that decodes the raw byte data to a value.
  - **`conn`** (str): Name of the CAN interface to use.
  - **`bus`** (str): Name of the bus instance to use. Default value is `default_query_obd`.
  - **`sanitize`** (bool): Enable/disable input sanitization. Defaults to `True`.

**OPTIONAL ARGUMENTS, QUERY GENERAL**

  - **`pass_filters`** (list): List of pass filters to use for receiving reply frames. 
  - **`ensure_filtering`** (bool): Ensure that reply messages not matching the filters are excluded. Default value is `True`.
  - **`flow_control`** (list): List of flow control ID resolvers to enable. Options are `obd` and `custom`.
  - **`custom_flow_control_id_mappings`** (dict): ID mappings to use for custom flow control.
  - **`replies`** (int): The amount of reply messages to wait for within a timeout.
  - **`skip_error_frames`** (bool): Skip any reply message marked as an error frame. Default value is `True`.
  - **`skip_remote_frames`** (bool): Skip any reply message marked as a remote frame. Default value is `True`.
  - **`strict`** (bool): Raise an error when no reply messages are received or if the amount of expected reply messages is not met within the timeout. Default value is `True`.
  - **`timeout`** (float): The amount of time in seconds to wait for a reply message. Default value is `0.2`.


----
### `play`

Sends all messages from one or more dump files on the CAN bus.

**ARGUMENTS**

  - **`*files`** (str): Specify one or more dump files for playback.

**OPTIONAL ARGUMENTS**

  - **`ignore_timestamps`** (bool): Ignore the timestamps of the messages and use the `min_gap` parameter as the time between messages instead. Default value is `False`.
  - **`min_gap`** (float): Minimum time between sent messages in seconds. Default value is `0.0001`.
  - **`skip_gaps_gt`** (float): Skip periods of inactivity greater than this (in seconds). Default value is `86400`.
  - **`include_error_frames`** (bool): Also send messages marked as error frames? Default value is `True`.
  - **`bus`** (str): Name of bus to use. Defaults to can_conn.DefaultBus mapping.
  - **`conn`** (str): Name of the CAN interface to use. 
  - **`sanitize`** (bool): Enable/disable input sanitization. Defaults to `True`.


----
### `query`

Queries by sending one or more request messages on the CAN bus and then waits for one or more reply messages.

**ARGUMENTS**

  - **`*messages`** (can.Message|str): CAN request messages to send.

**OPTIONAL ARGUMENTS, GENERAL**

  - **`name`** (str): Name of the command (e.g. `VehicleSpeed` or `SeatTemperature`).
  - **`output`** (str): Select `obj`, `dict` or `str` as the output data type of the reply messages. Default value is `str`.
  - **`formula`** (str): Python code that decodes the raw byte data to a value.
  - **`conn`** (str): Name of the CAN interface to use.
  - **`bus`** (str): Name of the bus instance to use. Default value is `default_query`.
  - **`sanitize`** (bool): Enable/disable input sanitization. Defaults to `True`.

**OPTIONAL ARGUMENTS, QUERY GENERAL**

  - **`pass_filters`** (list): List of pass filters to use for receiving reply frames. 
  - **`ensure_filtering`** (bool): Ensure that reply messages not matching the filters are excluded. Default value is `True`.
  - **`flow_control`** (list): List of flow control ID resolvers to enable. Options are `obd` and `custom`.
  - **`custom_flow_control_id_mappings`** (dict): ID mappings to use for custom flow control.
  - **`replies`** (int): The amount of reply messages to wait for within a timeout.
  - **`skip_error_frames`** (bool): Skip any reply message marked as an error frame. Default value is `True`.
  - **`skip_remote_frames`** (bool): Skip any reply message marked as a remote frame. Default value is `True`.
  - **`strict`** (bool): Raise an error when no reply messages are received or if the amount of expected reply messages is not met within the timeout. Default value is `True`.
  - **`timeout`** (float): The amount of time in seconds to wait for a reply message. Default value is `0.2`.


----
### `send`

Sends one or more messages on the CAN bus.

**ARGUMENTS**

  - **`*messages`** (str): CAN messages to send.

**OPTIONAL ARGUMENTS**

  - **`bus`** (str): Name of bus to use. Defaults to can_conn.DefaultBus mapping.
  - **`conn`** (str): Name of the CAN interface to use. 
  - **`sanitize`** (bool): Enable/disable input sanitization. Defaults to `True`.
