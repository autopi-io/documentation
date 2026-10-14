---
id: create-can-signal-loggers
title: Create CAN Signal Loggers
supportedDevices: ['cm4']
---
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

Use a CAN signal logger to passively capture specific raw CAN messages and send them to the AutoPi Cloud. Unlike a PID logger, a CAN signal logger does not send requests on the CAN bus.

This guide explains how to define a CAN message and signal, create the logger, modify its generated worker to preserve raw data, and synchronize the configuration with your device.

## Before You Begin

Make sure that:

- You know the header and expected payload length of the CAN message you want to capture.
- Your device is assigned to a vehicle with a vehicle bus configured.
- The configured vehicle bus matches the bus on which the CAN message is transmitted.

If you need help configuring the CAN bus, follow [Step 1: Setting Up CAN Bus Protocol](https://docs.autopi.io/getting_started/autopi_tmu_cm4/create-loggers-cm4/#step-1-setting-up-can-bus-protocol).

## Step 1: Create a CAN Message and Signal

First, create a CAN message that defines the header the device should listen for.

1. In the AutoPi Cloud, go to **OBD Library > My Library**.
2. Select **Create > CAN**.
3. Complete the CAN message fields:

	- **Name**: enter a descriptive, user-readable name.
    - **Description**: enter the description of the CAN message. 
	- **Header**: enter the header of the CAN message you want to capture.
	- **Bytes**: enter the expected payload length, which is the number of data bytes after the header.
	- **Sender**: select the ECU that sends the message. If the sender is unknown, use `vector_XXX` as a placeholder.

    <img src="/img/cloud/obd_ii/create_can_signal_loggers/create_new_can_message.png" alt="Create New CAN Message" width="100%" />

4. Add a CAN signal to the message. The signal does not need to represent meaningful decoded data. It is required so that the CAN message is valid and can be used to create a logger.

    <img src="/img/cloud/obd_ii/create_can_signal_loggers/create_new_can_signal.png" alt="Create New CAN Signal" width="100%" />

5. At the bottom of the dialog, select the vehicle bus configured for your device.
6. Save the CAN message and signal.


:::note
If the correct vehicle bus is not available, configure it for the vehicle before continuing. The logger will only list messages associated with the selected vehicle bus. If you need help configuring the CAN bus, follow [Step 1: Setting Up CAN Bus Protocol](https://docs.autopi.io/getting_started/autopi_tmu_cm4/create-loggers-cm4/#step-1-setting-up-can-bus-protocol).
:::

## Step 2: Create a CAN Signal Logger

AutoPi devices use OBD filters to determine which messages are accepted and which are dropped. Creating a CAN signal logger adds the selected message to these filters.

The logger is passive and does not transmit anything on the CAN bus. Although CAN signal loggers normally convert raw messages into human-readable values, Step 3 removes that conversion so the raw messages are retained.

1. Go to **Device > Loggers**.
2. Select **+ Create > CAN**.

    <img src="/img/cloud/obd_ii/create_can_signal_loggers/logger_overview_create.png" alt="Logger overview create" width="100%" />

3. Open the **Signal** dropdown, and select the CAN signal created in Step 1.
4. Select the CAN bus on which the message is transmitted.
5. Optionally, enter a different name for the logger. Otherwise, it uses the signal name.
6. Save the logger.


If the signal does not appear in the dropdown, confirm that the CAN message is associated with the same vehicle bus as your device.


## Step 3: Modify the Default `can_logger`

When you add the CAN signal logger in Step 2, a default `can_logger` worker is created. You must modify this worker to return raw CAN messages.

1. Go to **Device > Services**, and locate `obd_manager`.
2. Check the **Custom** column before opening the service.

    :::warning
    If `obd_manager` is marked as custom, deleting it also removes any existing custom changes to that service. Record any changes you need to preserve before selecting the trash icon. Deleting the custom version restores the default `obd_manager` service.
    :::

3. Open the default `obd_manager` service.
4. In the **Workers** section, open `can_logger`.
5. Modify the worker as follows:

    <img src="/img/cloud/obd_ii/create_can_signal_loggers/edit_can_logger.png" alt="Edit CAN Logger" width="100%" />

    - Clear the **Converter** field. It is set to `can` by default; select the **x** in the dropdown to remove it.
    - Remove the `rpm_engine_event` trigger because it is not needed for this workflow.
    - To receive repeated messages, remove the `alternating_readout` filter. When enabled, this filter omits consecutive messages with the same value.

6. Save the worker.

<!-- Add a screenshot of the modified can_logger worker here. -->


## Step 4: Sync the Changes to the Device

Synchronize the configuration with your device. After synchronization, the device will capture matching messages from the CAN bus and send them to the AutoPi Cloud.

:::note
Raw CAN messages are sent as strings, while the AutoPi Cloud storage layer typically expects integers or floating-point values. Contact AutoPi Support after completing the setup so that your data storage configuration can be verified.
:::

### Test the Logger

You can test the setup by running a command that simulates the `can_logger` workflow:

```shell
obd.manage run handler='monitor' kwargs='{"filtering": "can"}'
```

The command returns the CAN messages accepted by the configured filters. For optional arguments, such as the monitoring duration or maximum message count, refer to the [`obd.monitor` command documentation](https://docs.autopi.io/core/commands/core-commands-obd/#obdmonitor).

