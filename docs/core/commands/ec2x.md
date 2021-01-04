---
id: core-cmd-ec2x
title: Ec2X
---

## `ec2x.cell_location`

Get location by triangulation (QuecLocator).


----
## `ec2x.cell_signal`

Signal quality report indicates the received signal strength and the channel bit error rate.


----
## `ec2x.connection`

Manages current connection.

**OPTIONAL ARGUMENTS**

  - **`close`** (bool): Close serial connection? Default value is `False`. 


**EXAMPLES**

  - `ec2x.connection`
  - `ec2x.connection close=True`


----
## `ec2x.context`

Gets current context.


----
## `ec2x.data_usage`

Check how many bytes are sent to and received by the module.


----
## `ec2x.delete_file`

Deletes a single file or all the files in the specified storage.


----
## `ec2x.download`

Low-level function to download files.


----
## `ec2x.download_file`



----
## `ec2x.error_format_config`

Controls the format of error result codes: `ERROR`, error numbers or
verbose messages as `+CME ERROR: <err>` and `+CMS ERROR: <err>`.


----
## `ec2x.firmware_rev`

Revision identification of software release.


----
## `ec2x.gnss`

The command is used to turn on GNSS function. Currently `<mode>` only supports
turning on GNSS in Stand-alone Solution. When `<fixcount>` is 0, GNSS will fix
position continuously, and it can be turned off via `AT+QGPSEND`. When `<fixcount>`
is non-zero and reaches the specified value, GNSS will be turned off automatically.

When GNSS is turned on and `<fixcount>` is 0, GNSS fixes position continuously.
In this case, GNSS can be turned off compulsorily via this command. When
`<fixcount>` is non-zero, GNSS will be turned off automatically when the
parameter reaches the specified value, and thus the command can be ignored.

**OPTIONAL ARGUMENTS**

  - **`enable`** (bool):
  - **`mode`** (int): Default value is `1`.
  - **`fix_max_time`** (int): Default value is `30`.
  - **`fix_max_dist`** (int): Default value is `50`.
  - **`fix_count`** (int): Default value is `0`.
  - **`fix_rate`** (int): Default value is `1`.


----
## `ec2x.gnss_assist`

This command can be used to enable gpsOneXTRA Assistance function, and the
function can be activated after restarting the module.


----
## `ec2x.gnss_assist_data`

Query the status or specify gpsOneXTRA data file.


----
## `ec2x.gnss_assist_data_reset`

Delete assistance data to operate cold start, hot start and warm start of GNSS. The command
can only be executed when GNSS is turned off. After deleting the assistance data via this
command, cold start of GNSS can be enforced via AT+QGPS. Hot/warm start can also be performed
if the corresponding conditions are satisfied.

- `0` = Delete all assistance data except gpsOneXTRA data. Enforce cold start after starting GNSS.
- `1` = Do not delete any data. Perform hot start if the conditions are permitted after starting GNSS.
- `2` = Delete some related data. Perform warm start if the conditions are permitted after starting GNSS.
- `3` = Delete the gpsOneXTRA assistance data injected into GNSS engine.


----
## `ec2x.gnss_assist_time`

This command can be used to inject gpsOneXTRA time to GNSS engine. Before using it,
customers must enable gpsOneXTRA Assistance function via AT+QGPSXTRA=1 command.
After activating the function, the GNSS engine will ask for gpsOneXTRA time and
assistance data file. Before injecting gpsOneXTRA data file, gpsOneXTRA time must
be injected first via this command.


----
## `ec2x.gnss_auto_start`

Enable/disable GNSS to run automatically after the module is powered on.
Configuration parameter will be automatically saved to NVRAM. The default value is 0.


----
## `ec2x.gnss_config`

Configure supported GNSS constellation.

:::note
Requires restart of EC2x module to take effect.
:::

Supported GNSS constellation (GPS is always on):

- `0` = GLONASS off/BeiDou off/Galileo off
- `1` = GLONASS on/BeiDou on/Galileo on
- `2` = GLONASS on/BeiDou on/Galileo off
- `3` = GLONASS on/BeiDou off/Galileo on
- `4` = GLONASS on/BeiDou off/Galileo off
- `5` = GLONASS off/BeiDou on/Galileo on
- `6` = GLONASS off/BeiDou off/Galileo on


----
## `ec2x.gnss_location`

Acquire positioning information on request.

Mode controls latitude and longitude display format:

- `0` = ddmm.mmmm N/S,dddmm.mmmm E/W
- `1` = ddmm.mmmmmm N/S,dddmm.mmmmmm E/W
- `2` = (-)dd.ddddd,(-)ddd.ddddd


----
## `ec2x.gnss_nmea_fix_stats`



----
## `ec2x.gnss_nmea_gga`

Get NMEA GGA data parsed into dict.


----
## `ec2x.gnss_nmea_gsa`

Get NMEA GSA data parsed into dict.


----
## `ec2x.gnss_nmea_gsv`

Get list where entries are grouped by all available satellites in NMEA GSV data.


----
## `ec2x.gnss_nmea_gsv_ext`

Enable/disable output of extended GSV information. Elevation/Azimuth/SNR (C/No) will
be displayed as decimals when extended information is enabled, otherwise they will be
displayed as integers. The configuration parameter will be automatically saved to NVRAM.


----
## `ec2x.gnss_nmea_output_beidou`

Configure output type of BeiDou NMEA sentences.

:::note
Requires restart of EC2x module to take effect.
:::

Configure output type of BeiDou NMEA sentences via ORed, and the configuration parameter will be automatically saved to NVRAM.
The default value is 0.

- `0` = Disable
- `1` = GSA
- `2` = GSV


----
## `ec2x.gnss_nmea_output_galileo`

Configure output type of Galileo NMEA sentences.

:::note
Requires restart of EC2x module to take effect.
:::

Configure output type of Galileo NMEA sentences by ORed, and the configuration parameter will be automatically saved to NVRAM.
The default value is 0.

- `0` = Disable
- `1` = GSV


----
## `ec2x.gnss_nmea_output_glonass`

Configure output type of GLONASS NMEA sentences.

:::note
Requires restart of EC2x module to take effect.
:::

Configure output type of GLONASS NMEA sentences by ORed, and the configuration parameter will be automatically saved to NVRAM.
The default value is 0.

- `0` = Disable
- `1` = GSV
- `2` = GSA
- `4` = GNS


----
## `ec2x.gnss_nmea_output_gps`

Configure output type of GPS NMEA sentences.

:::note
Requires restart of EC2x module to take effect.
:::

Output type of GPS NMEA sentences by ORed, and the configuration parameter will be automatically saved to NVRAM.
The default value is 31 which means that all the five types of sentences will be output.

- `0` = Disable
- `1` = GGA (Essential fix data which provide 3D location and accuracy data)
- `2` = RMC (Recommended minimum data for GPS)
- `4` = GSV (Detailed satellite data)
- `8` = GSA (Overall satellite data)
- `16` = VTG (Vector track and speed over the ground)


----
## `ec2x.gnss_nmea_port`

Configure the output port of NMEA sentences, and the configuration parameter will be automatically saved to NVRAM.

Port options:

- `none` = Close NMEA sentence output
- `usbnmea` = Output via USB NMEA port
- `uartdebug` = Output via UART debug port


----
## `ec2x.gnss_nmea_raw`

Acquire NMEA sentence(s) data on request.

Available types:

- `GGA` (Fix information)
- `RMC` (Recommended minimum data for GPS)
- `GSV` (Detailed satellite data)
- `GSA` (Overall satellite data)
- `VTG` (Vector track an speed over the ground)
- `GNS`


----
## `ec2x.gnss_nmea_req`

Enables/disables acquisition of NMEA sentences on request via commands.


----
## `ec2x.gnss_nmea_sat_stats`

Get list of summarized information about each satellite currently in view.


----
## `ec2x.help`

Shows this help information.


----
## `ec2x.imei`

Returns the International Mobile Equipment Identity (IMEI).


----
## `ec2x.list_files`

lists the information of a single file or all files in the required storage medium.


----
## `ec2x.list_sms`

List all messages from message storage.


----
## `ec2x.manage`

Runtime management of the underlying service instance.


**SUPPORTED COMMANDS**

  - `hook list|call <name> [argument]... [<key>=<value>]...`
  - `worker list|show|start|pause|resume|kill <name>`
  - `run <key>=<value>...`


**EXAMPLES**

  - `ec2x.manage hook list`
  - `ec2x.manage hook call exec_handler ATI`
  - `ec2x.manage worker list *`
  - `ec2x.manage worker show *`
  - `ec2x.manage worker start *`
  - `ec2x.manage worker pause *`
  - `ec2x.manage worker resume *`
  - `ec2x.manage worker kill *`
  - `ec2x.manage run handler="exec" args="[\"ATI\"]" returner="cloud"` 


----
## `ec2x.power`

Low-level function to run power command.


----
## `ec2x.power_off`

Used to shut down the entire EC2x module. The module will restart automatically.
A 30-second wait is included after power off to allow the module time to recover before receiving any new command requests.


----
## `ec2x.product_info`

Display product identification information.


----
## `ec2x.query`

Low-level function to execute AT commands.


----
## `ec2x.ri_other_config`

Specifies the RI (Ring Indicator) behavior when other URCs are presented.

**OPTIONAL ARGUMENTS**

  - **`value`** (str):
  - **`pulse_duration`** (int): Default value is `120`.
  - **`pulse_count`** (int): Default value is `1`.


----
## `ec2x.ri_signal_config`

Specifies the RI (Ring Indicator) signal output carrier.

**OPTIONAL ARGUMENTS**

  - **`value`** (str):


----
## `ec2x.ri_sms_config`

Specifies the RI (Ring Indicator) behavior when incoming SMS URCs are presented.

**OPTIONAL ARGUMENTS**

  - **`value`** (str):
  - **`pulse_duration`** (int): Default value is `120`.
  - **`pulse_count`** (int): Default value is `1`.


----
## `ec2x.sms_format_config`



----
## `ec2x.sync_time`

Synchronize system time with network time.


----
## `ec2x.time`

Obtain the latest time synchronized through network

Query network time mode:

- `0` = Query the latest time that has been synchronized through network
- `1` = Query the current GMT time calculated from the latest time that has been synchronized through network
- `2` = Query the current LOCAL time calculated from the latest time that has been synchronized through network


----
## `ec2x.upload`

Low-level function to upload files.


----
## `ec2x.upload_file`



----
## `ec2x.urc_port_config`

Configure the output port of URC (Unsolicited Result Code).

Port options:

- `usbat` (USB AT port)
- `usbmodem` (USB modem port)
- `uart1` (Main UART)
