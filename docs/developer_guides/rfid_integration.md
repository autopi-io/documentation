---
id: rfid-integartion
title: RFID Reader Integration
supportedDevices: ['cm4','pro']
---
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

This guide explains how to integrate a USB RFID reader with your [AutoPi](https://www.autopi.io) device and configure RFID-based access tracking in [AutoPi Cloud](https://my.autopi.io).

With this setup, drivers or operators scan an RFID card or chip before using a vehicle. AutoPi Cloud then records the authentication attempt in Access Control and System Events, giving you clear visibility into who used which vehicle, when, and for how long.

Typical benefits include:
- Better vehicle accountability.
- Easier investigation by linking incidents to specific drivers or operators.
- More accurate tracking of working hours based on scan history.

:::tip
Connect the RFID reader over USB and use a model that behaves as a keyboard input device (HID). Other reader types may work, but HID readers are the officially verified option.
:::

---

## Quickstart

Follow these steps for a fast setup:

1. Enable RFID in Device > Advanced Settings > RFID.
2. Add the reader Vendor ID and Product ID.
3. (Optional) Configure the `rfid_manager` service.
4. (Optional) Configure a worker and reactor.
5. Assign RFID tokens to users.
6. Assign drivers to vehicles.
7. Scan cards and monitor Access Control and Events.

---

## Step 1: Enable RFID in Advanced Settings

![Advanced Settings for RFID](/img/guides/rfid_reader/advanced_settings_rfid.png)

1. Open your device in [AutoPi Cloud](https://my.autopi.io).
2. Go to Device > Advanced Settings > RFID.
3. Configure the fields below and save.

### Advanced Settings Field Reference

- **Authorized token regexes**: a list of regex patterns used to match RFID tokens. Example: `*`
- **Authorized tokens**: a list of RFID authentication tokens in `timestamp,duration,rfid` format. Example: `2021-11-23T09:50:00,7200,0011252203`
- **Enabled**: turns RFID functionality on or off. When enabled, `rfid_manager` becomes available in Services.
- **Keep login context**: if enabled, RFID tokens used for login are saved and the device tracks login status.
- **Reader Vendor Product Id**: the `vendor_id:product_id` identifier of your RFID reader.

:::note
If RFID does not appear in Advanced Settings, contact [support@autopi.io](mailto:support@autopi.io). The feature can be enabled for your account at no additional cost.
:::

---

## Step 2: Find Vendor ID and Product ID

1. Connect the RFID reader to the device over USB and power on the device.
2. Run the command below:

```python
usbutil.devices
```

3. Find your RFID reader in the output and note the vendor and product values.
4. Enter the values in Advanced Settings as vendor_id:product_id (for example, 2c7c:0125).
5. Save settings. The device will synchronize settings and restart.

---

## Step 3: Configure the RFID Manager Service (Optional)

The core service for RFID handling is rfid_manager. It becomes available under Services after RFID is enabled in Advanced Settings.

![RFID_manager in Services](/img/guides/rfid_reader/rfid_manager_services.png)

You can extend this service with workers, reactors, hooks, and custom settings. For full command coverage, see [RFID Manager documentation](https://docs.autopi.io/core/services/core-services-rfid-manager/).

---

## Step 4: Worker and Reactor Configuration (Optional)

The worker and reactor are enabled by default when you activate RFID in Advanced Settings. In most cases, you do not need to perform any additional configuration.

However, if the worker and reactor are not present, or if you want to customize them to fit your use case, follow the instructions below.

### Create Worker

![Create Worker for RFID Reader](/img/guides/rfid_reader/rfid_reader_worker.png)

1. Go to Device > Services > `rfid_manager`.
2. Open the Workers tab and select Create.
3. Configure the worker with these values:
   - Name: rfid_reader
   - Interval: 0
   - Loop: -1
   - Handler: reader
   - Trigger: rfid_read
4. Save.

### Create Reactor

![Create Reactor for RFID Reader](/img/guides/rfid_reader/rfid_reader_reactor.png)

1. In `rfid_manager`, open the Reactors tab and select Create.
2. Configure the reactor with these values:
   - Name: `authenticate_rfid`
   - Regex: `^system/rfid/(?P<rfid>[0-9]*)/read$`
   - Description: Authenticate RFID chip/card
   - Handler: `authenticate_rfid`
   - Args:
      ```json
      [
        "$match.group('rfid')"
      ]
      ```

3. Save.

:::tip
You can edit both the worker and reactor at any time to adjust them for your specific use case or requirements.
:::

---

## Step 5: Assign RFID Tokens to Users

Each user can have one or more RFID tokens.

1. Go to Users.
2. Open a user profile.
3. Scroll to RFID Tokens.
4. Add one or more tokens and save.

Only administrators with `account_administrator` permission can assign tokens.

You can also create users without email addresses. These users cannot sign in to AutoPi Cloud, but you can still link RFID tokens and track activity.

---

## Step 6: Assign Drivers to Vehicles

Each vehicle can have multiple assigned drivers.

1. Go to Vehicles.
2. Select one or more vehicles.
3. Click on Assign drivers.
4. Choose one or more drivers.
5. Save.

> Note: the Assign drivers button appears only after at least one vehicle is selected.

To review all vehicles assigned to a specific driver, open Users > select the user and check the Assigned Vehicles tab.

---

## Access Control Overview

The Access Control page provides a complete history of RFID access attempts.

It includes:
- **User name**: who attempted access.
- **Token used**: which RFID token was scanned.
- **Timestamp**: when the attempt happened.
- **Vehicle**: which vehicle was accessed.
- **Status**: approved, rejected, or logged out.

![Access Control Table](/img/guides/rfid_reader/access_control_table.png)

You can also assign drivers to vehicles directly from this page. Also each vehicle can have multiple assigned drivers.

---

## RFID Events

Each card scan generates system events that you can review under [System Events](https://docs.autopi.io/cloud/device_management/events/cloud-events-system/#rfid-events).

Event topics:
- `system/rfid/<rfid_token>/read`: a new RFID token was read.
- `system/rfid/<rfid_token>/rejected`: a scanned token was rejected.
- `system/rfid/<rfid_token>/authenticated`: a scanned token was authenticated.

Example from the Events tab in AutoPi Cloud:

![Rfid Reader Events](/img/guides/rfid_reader/rfid_events.png)

> Tip: If you are unsure about the Token ID of the rfid card/chip, you can scan it and in the events tab, you will be able to see the ID of this card. 

---

**Next steps:**

* If your account does not include one or more RFID features shown in this guide and you would like to enable them, please contact AutoPi [support@autopi.io](mailto:support@autopi.io).
* If you need assistance selecting a compatible RFID reader, contact AutoPi support for recommendations on tested and supported RFID hardware.
* You can create custom triggers based on RFID events. For example, when a token is rejected, AutoPi can automatically trigger actions such as sending an email notification, logging the event, activating an alert, or notifying a fleet administrator. This allows you to immediately detect and respond to unauthorized access attempts. Read more about custom triggers in this guide: [Custom Triggers](https://docs.autopi.io/cloud/device_management/a-guide-to-triggers/). 
* Use the AutoPi template feature to save RFID-related configurations and quickly apply them to new devices across your fleet. This simplifies deployment and ensures consistent configuration management. Read more in this guide: [Templates](https://docs.autopi.io/cloud/device_management/templates/). 


**Benefits of Using RFID Readers with AutoPi Devices**

Integrating RFID readers with AutoPi devices enables a wide range of security, fleet management, and operational use cases, including:

* Driver identification — ensure that only authorized drivers can start or operate a vehicle.
* Access control — prevent unauthorized vehicle usage by requiring valid RFID authentication.
* Fleet accountability — track which driver used a specific vehicle and when.
* Theft prevention — receive immediate alerts if unauthorized RFID tokens are used or access attempts are rejected.
* Equipment and Asset tracking — use RFID tags to identify trailers, tools, or attached equipment.
* Simplified Fleet deployment — apply RFID configurations through templates for faster rollout across multiple vehicles.

RFID integration provides an additional layer of security and automation while improving visibility and operational control across your vehicle fleet.