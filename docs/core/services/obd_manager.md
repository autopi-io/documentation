---
id: core-services-obd-manager
title: Obd Manager
---

## Converters
### `battery`

Converts a voltage reading result with battery charge state and level.


----
### `can`

Converts raw CAN data using the CAN database available for the current protocol.
This converter supports both single value results as well as multiple values results.
The CAN database file (.dbc) is found on the local file system by the following path expression:


/opt/autopi/obd/can/db/protocol_`<PROTOCOL ID>`.dbc


----
### `dtc`

Converts Diagnostics Trouble Codes (DTCs) result into a cloud friendly format.

## Filters
### `alternating_readout`

Filter that only returns alternating/changed results.

## Handlers
### `commands`

Lists all supported OBD commands found for vehicle.


----
### `connection`

Manages current connection.

**OPTIONAL ARGUMENTS**

  - **`baudrate`** (int): Changes baudrate used to communicate with interface.
  - **`reset`** (str): Reboots interface and re-initializes connection. 


----
### `context`

Gets current context.


----
### `dump`

Dumps all messages from bus to screen or file.

**OPTIONAL ARGUMENTS**

  - **`duration`** (int): How many seconds to record data? Default value is `2` seconds.
  - **`file`** (str): Write data to a file with the given name.
  - **`description`** (str): Additional description to the file.
  - **`protocol`** (str): ID of specific protocol to be used to receive the data. If none is specifed the current protocol will be used.
  - **`baudrate`** (int): Specific protocol baudrate to be used. If none is specifed the current baudrate will be used.
  - **`verify`** (bool): Verify that OBD-II communication is possible with the desired protocol? Default value is `False`.
  - **`raw_response`** (bool): Get raw response without any validation nor parsing? Default value is `False`.
  - **`format_response`** (bool): Format response messages by separating header and data with a hash sign? Default value is `True`.


----
### `execute`

Executes an AT/ST command.

**ARGUMENTS**

  - **`cmd`** (str): Command to execute.

**OPTIONAL ARGUMENTS**

  - **`assert_result`** (str or list): Validate the response by checking that is matches this specific value.
  - **`reset`** (str): Reset interface after execution. Valid options are: `warm`, `cold`
  - **`keep_conn`** (bool): Keep connection to interface after execution or close it permanently? Default value is `True`.
  - **`type`** (str): Specify a name of the type of the result. Default is the given command.


----
### `export`

Fast export of all messages on a bus to a log file.

**OPTIONAL ARGUMENTS**

  - **`run`** (bool): Specify if subprocess should be running or not. If not defined the current state will be queried.
  - **`folder`** (str): Custom folder to place export log files.
  - **`wait_timeout`** (int): Maximum time in seconds to wait for subprocess to complete. Default value is `0`.
  - **`monitor_filtering`** (bool): Use filters while monitoring or monitor all messages? Default value is `False`. It is possible to specify `can` in order to add filters based on the messages found in a CAN database file (.dbc).
  - **`monitor_mode`** (int): The STN monitor mode. Default is `0`.
  - **`can_auto_format`** (bool): Apply automatic formatting of messages? Default value is `False`.
  - **`read_timeout`** (int): How long time in seconds should the subprocess wait for data on the serial port? Default value is `1`.
  - **`serial_baudrate`** (int): Specify a custom baud rate to use for the serial connection to the STN.
  - **`process_nice`** (int): Process nice value that controls the priority of the subprocess. Default value is `-2`.
  - **`protocol`** (str): ID of specific protocol to be used to receive the data. If none is specifed the current protocol will be used.
  - **`baudrate`** (int): Specific protocol baudrate to be used. If none is specifed the current baudrate will be used.
  - **`verify`** (bool): Verify that OBD-II communication is possible with the desired protocol? Default value is `False`.


----
### `filter`

Manages filters used when monitoring.

**ARGUMENTS**

  - **`action`** (str): Action to perform. Available actions are `list`, `add` and `clear`.


----
### `import`

Fast import of exported log files containing messages from a bus.

**OPTIONAL ARGUMENTS**

  - **`folder`** (str): Custom folder to import log files from.
  - **`limit`** (int): The maximum number of lines/messages to read each time. Default value is `5000`.
  - **`idle_sleep`** (int): Pause in seconds if there is no lines/messages to import. Default value is `0`.
  - **`cleanup_grace`** (int): Grace period in seconds before a fully imported log file is deleted. Default value is `60`.
  - **`process_nice`** (int): Process nice value that controls the priority of the service. Default value is `0`.
  - **`type`** (str): Specify a name of the type of the result. Default is `raw`.


----
### `monitor`

Monitors messages on bus until limit or duration is reached.

**OPTIONAL ARGUMENTS**

  - **`wait`** (bool): Wait for each message/line to read according to the default timeout of the serial connection (default 1 second). Otherwise there will only be waiting on the first line. line/message. Default value is `False`.
  - **`limit`** (int): The maximum number of messages to read. Default value is `500`.
  - **`duration`** (float): How many seconds to monitor? If not set there is no limitation.
  - **`mode`** (int): The STN monitor mode. Default is `0`.
  - **`auto_format`** (bool): Apply automatic formatting of messages? Default value is `False`.
  - **`filtering`** (bool): Use filters while monitoring or monitor all messages? Default value is `False`. It is possible to specify `can` in order to add filters based on the messages found in a CAN database file (.dbc).
  - **`protocol`** (str): ID of specific protocol to be used to receive the data. If none is specifed the current protocol will be used.
  - **`baudrate`** (int): Specific protocol baudrate to be used. If none is specifed the current baudrate will be used.
  - **`verify`** (bool): Verify that OBD-II communication is possible with the desired protocol? Default value is `False`.
  - **`type`** (str): Specify a name of the type of the result. Default is `raw`.


----
### `play`

Plays all messages from a file on the bus.

**ARGUMENTS**

  - **`file`** (str): Path to file recorded with the `obd.dump` command.

**OPTIONAL ARGUMENTS**

  - **`delay`** (float): Delay in milliseconds between sending each message. Default value is `0`.
  - **`slice`** (str): Slice the list of messages before sending on the CAN bus. Based one the divide and conquer algorithm. Multiple slice characters can be specified in continuation of each other.
    - `t`: Top half of remaining result.
    - `b`: Bottom half of remaining result.
  - **`filter`** (str): Filter out messages before sending on the CAN bus. Multiple filters can be specified if separated using comma characters.
    - `+[id][#][data]`: Include only messages matching string.
    - `-[id][#][data]`: Exclude messages matching string.
    - `+duplicate`: Include only messages where duplicates exist.
    - `-duplicate`: Exclude messages where duplicates exist.
    - `+mutate`: Include only messages where data mutates.
    - `-mutate`: Exclude messages where data mutates.
  - **`group`** (str): How to group the result of sent messages. This only affects the display values returned from this command. Default value is `id`.
    - `id`: Group by message ID only.
    - `msg`: Group by entire message string.
  - **`protocol`** (str): ID of specific protocol to be used to send the data. If none is specifed the current protocol will be used.
  - **`baudrate`** (int): Specific protocol baudrate to be used. If none is specifed the current baudrate will be used.
  - **`verify`** (bool): Verify that OBD-II communication is possible with the desired protocol? Default value is `False`.
  - **`auto_format`** (bool): Apply automatic formatting of messages? Default value is `False`.
  - **`test`** (bool): Run command in test-only? (dry-run) mode. No data will be sent on CAN bus. Default value is `False`.


----
### `protocol`

Configures protocol or lists all supported.

**OPTIONAL ARGUMENTS**

  - **`set`** (str): Change to protocol with given identifier.
  - **`baudrate`** (int): Use custom protocol baudrate. 
  - **`verify`** (bool): Verify that OBD-II communication is possible with the desired protocol? Default value is `False`.


----
### `query`

Queries an OBD command.

**ARGUMENTS**

  - **`name`** (str): Name of the command.

**OPTIONAL ARGUMENTS**

  - **`mode`** (str): Service section of the PID.
  - **`pid`** (str): Code section of the PID.
  - **`header`** (str): Identifer of message to send. If none is specifed the default header will be used.
  - **`bytes`** (int): Default value is `0`.
  - **`decoder`** (str): Specific decoder to be used to process the response.
  - **`formula`** (str): Formula written in Python to convert the response.
  - **`unit`** (str): Unit of the result.
  - **`protocol`** (str): ID of specific protocol to be used to receive the data. If none is specifed the current protocol will be used.
  - **`baudrate`** (int): Specific protocol baudrate to be used. If none is specifed the current baudrate will be used.
  - **`verify`** (bool): Verify that OBD-II communication is possible with the desired protocol? Default value is `False`.
  - **`force`** (bool): Force query of unknown command. Default is `False`.


----
### `recordings`

Lists all dumped recordings available on disk.


----
### `send`

Sends a message on bus.

**ARGUMENTS**

  - **`msg`** (str): Message to send.

**OPTIONAL ARGUMENTS, GENERAL**

  - **`header`** (str): Identifer of message to send. If none is specifed the default header will be used.
  - **`auto_format`** (bool): Apply automatic formatting of messages? Default value is `False`.
  - **`expect_response`** (bool): Wait for response after sending? Avoid waiting for timeout by specifying the exact the number of frames expected. Default value is `False`.
  - **`raw_response`** (bool): Get raw response without any validation nor parsing? Default value is `False`.
  - **`echo`** (bool): Include the request message in the response? Default value is `False`.
  - **`protocol`** (str): ID of specific protocol to be used to receive the data. If none is specifed the current protocol will be used.
  - **`baudrate`** (int): Specific protocol baudrate to be used. If none is specifed the current baudrate will be used.
  - **`verify`** (bool): Verify that OBD-II communication is possible with the desired protocol? Default value is `False`.
  - **`output`** (str): What data type should the output be returned in? Default is a `list`.
  - **`type`** (str): Specify a name of the type of the result. Default is `raw`.

**OPTIONAL ARGUMENTS, CAN SPECIFIC**

  - **`can_extended_address`** (str): Use CAN extended address.
  - **`can_flow_control_clear`** (bool): Clear all CAN flow control filters and ID pairs before adding any new ones.
  - **`can_flow_control_filter`** (str): Ensure CAN flow control filter is added. Value must consist of `<pattern>,<mask>`.
  - **`can_flow_control_id_pair`** (str): Ensure CAN flow control ID pair is added. Value must consist of `<transmitter ID>,<receiver ID>`.


----
### `setup`

Setup advanced runtime settings.

**OPTIONAL ARGUMENTS**

  - **`can_extended_address`** (str): Use CAN extended address.
  - **`can_flow_control_clear`** (bool): Clear all CAN flow control filters and ID pairs before adding any new ones.
  - **`can_flow_control_filter`** (str): Ensure CAN flow control filter is added. Value must consist of `<pattern>,<mask>`.
  - **`can_flow_control_id_pair`** (str): Ensure CAN flow control ID pair is added. Value must consist of `<transmitter ID>,<receiver ID>`.


----
### `status`

Gets current status information.

## Triggers
### `battery_event`

Looks for battery results and triggers `vehicle/battery/*` event when voltage changes.


----
### `communication_event`

Looks for error in result and triggers `vehicle/communication/[inactive|established|disconnected]` event based on the outcome.


----
### `rpm_engine_event`

Looks for RPM result and triggers `vehicle/engine/[not_running|running|stopped]` event based on the value(s) found.
This trigger supports single value results as well as multiple values results.


----
### `rpm_motor_event`

Looks for RPM result and triggers motor `vehicle/motor/[not_running|running|stopped]` event based on the value(s) found.
This trigger supports single value results as well as multiple values results.
This trigger is meant to be used for electric vehicles without an engine.
