---
id: mini-guides-intro
title: Getting Started
supportedDevices: ['mini']
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import SideBySide from '@site/src/components/SideBySide';
import CardGrid from "/components/CardGrid" ;
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

## Welcome to AutoPi Setup

This guide walks you through setting up an AutoPi Mini, from creating an account to verifying cloud connectivity and configuring the device for an electric vehicle, if applicable. The device arrives pre-assembled with its SIM card installed.

## Quickstart

Complete the steps in order:

1. [Create an AutoPi Cloud account](#1-set-up-your-user-account).
2. [Register your device](#2-register-your-device).
3. [Locate the vehicle's OBD-II port](#3-locate-obd-port).
4. [Install and position the device](#4-install-the-device).
5. [Verify cloud connectivity](#5-verify-cloud-connectivity).
6. [Configure the Mini for an electric vehicle](#6-configure-the-mini-for-an-electric-vehicle), if applicable.
7. [Confirm the setup](#7-confirm-the-setup).

## Important Safety and Setup Requirements

:::caution

The AutoPi Mini connects directly to your vehicle's ECU. Follow these requirements before continuing:

1. **Turn off the vehicle:** make sure the vehicle is completely powered off before connecting the device for the first time.
2. **Park before making changes:** install or configure the device only while the vehicle is parked.
3. **Keep the device connected while driving:** never disconnect the AutoPi Mini while the vehicle is moving.
4. **Use the OBD-II power source:** power the device only through the OBD-II connector.
5. **Change advanced settings carefully:** incorrect settings may affect vehicle data collection or battery life.

:::

---

## 1. Set Up Your User Account

1. Go to [my.autopi.io](https://my.autopi.io/).
2. Select **Sign up**.
3. Enter your email address and create a password.
4. Optionally, expand the form and add your name and country. You can also add these details later.
5. Select **Create account**.

![AutoPi sign up](/img/getting_started/getting_started/sign_up.png)

## 2. Register Your Device

After creating an account, you can access the [Cloud](https://www.autopi.io/software-platform/cloud-management) Platform features for fleet and device management.
The next step is to register your device to unlock the platform’s full potential.  

To add a device to your account, follow one of these methods:  

**Option 1: Via Device Management**
1. See the “Device Management” section of the Platform. 
2. Click on “Devices”. 
3. Find and click the “Register Device” button in the upper right corner. 

**Option 2: Via the Accounts Tab**
1. Navigate to the “Accounts” tab at the bottom of the left side menu on the Platform.
2. Select “Devices”. 
3. Locate and click the “Register Device” button in the upper right corner.


After clicking the “Register Device” button, the registration tab will appear. Enter all necessary information: 

![Register Device](/img/getting_started/getting_started/register_new_device.png)

- **Unit ID**: This is the number on the side of your device. You can also find it in the.
    document attached in the email you received when the device was shipped. 
- **Vehicle Information**: Optionally include the make, model and year of the vehicle.
- **Vehicle Type**: Choose the type of vehicle (ICE, Battery [Electric Vehicle](https://www.autopi.io/hardware/autopi-mini), Hybrid [Electric Vehicle](https://www.autopi.io/hardware/autopi-mini), or Plug-in Hybrid [Electric Vehicle](https://www.autopi.io/hardware/autopi-mini)).

The Mini device should now appear under **Fleet Management** > **Vehicles** and **Device Management** > **Devices**.


## 3. Locate OBD Port

Next step is to install the device into your vehicle. Locate the OBD port in your car, 
it is usually found underneath the dashboard and looks something like this:

<div style={{textAlign: 'center'}}>

  ![AutoPi.io - OBD port](/img/getting_started/getting_started/obd_location.jpg)

</div>

Its exact location depends on the vehicle's make and model. The following image shows common locations. If you cannot find the port, consult the vehicle owner's manual.

![AutoPi.io - OBD port location](/img/getting_started/getting_started/TMU_placement_dashboard_v1_finecut-01.jpg)

## 4. Install the Device

1. Make sure the vehicle is completely powered off.
2. Connect the AutoPi Mini to the OBD-II port.
3. Position the device with the **AutoPi logo facing upward toward the sky**. The GPS antenna is inside the device, and another orientation may weaken the GPS signal.
4. Make sure the device cannot interfere with pedals, steering, or other vehicle controls.

If the OBD-II port is difficult to reach or leaves the Mini in an unsafe position, use an [OBD-II extension cable](https://shop.autopi.io/products/obd-ii-extension-cable) to move it to a suitable location.

<p align="center">
  <img src="/img/getting_started/getting_started/relocator_cable.png" alt="OBD-II extension cable" width="500" style={{maxWidth: '100%'}} />
</p>

:::tip Performance tips
- Keep the AutoPi logo facing the sky.
- Keep the device out of direct sunlight when possible. Excessive heat may reduce performance.
- Do not cover the device with metal, because this can interfere with the internal GPS antenna.
- Power the Mini only through the OBD-II connector.
:::

## 5. Verify Cloud Connectivity

1. Turn on the vehicle to supply power to the AutoPi Mini.
2. Allow a few minutes for the device to start and establish its cellular connection.
3. Sign in to the [AutoPi Cloud](https://my.autopi.io/).
4. Open **Devices**, select the Mini, and confirm that it appears online.

:::tip If the Mini remains offline
The first cellular connection may take a few minutes. If the device does not appear online or does not report data, follow the [AutoPi Mini Data Troubleshooting](/getting_started/autopi_mini/mini-data-troubleshooting) guide to check its status LEDs and data configuration.
:::

## 6. Configure the Mini for an Electric Vehicle

If the Mini is installed in an electric vehicle (EV), apply the following settings. Some EVs do not support automatic VIN detection or standard OBD-II behavior, which can prevent the device from collecting data correctly.

### Set the OBD Feature

This setting allows the Mini to communicate with vehicles that do not use standard OBD-II behavior.

1. Go to **Advanced Settings** > **OBD Settings** > **OBD Feature**.
2. Select **Non-OBD Compliant**.
3. Select **Save**.

### Enter the VIN Manually

Complete this configuration even if the VIN was detected automatically.

1. Go to **Advanced Settings** > **OBD VIN Settings**.
2. Enter the 17-character VIN using digits and uppercase letters.
3. Set **VIN Source** to **Manual**.
4. Select **Save**.

### Configure Ignition Detection

1. Go to **Advanced Settings** > **System** > **Ignition Settings**.
2. Select **Accelerometer**.
3. Select **Save**.

### Configure Movement Detection

1. Go to **Advanced Settings** > **System** > **Movement Source**.
2. Select **Accelerometer**.
3. Set **Movement start delay** to a value from **5 to 12 seconds**.
4. Set **Movement stop delay** to a value from **30 to 60 seconds**.
5. Select **Save**.

After making these changes, open **Change History** and confirm that each setting was applied successfully.

## 7. Confirm the Setup

1. Confirm that the Mini appears online in the AutoPi Cloud.
2. Take the vehicle for a drive to begin collecting trip and vehicle data.
3. Return to the AutoPi Cloud and confirm that new data appears for the device.

### Setup Complete

Your AutoPi Mini is connected to the AutoPi Cloud and ready to collect and transmit vehicle data.

## What's Next?

- **Configure data collection:** follow [Create Mini Loggers](/getting_started/autopi_mini/create-mini-loggers) to customize the data collected from the vehicle.
- **Troubleshoot missing data:** use [AutoPi Mini Data Troubleshooting](/getting_started/autopi_mini/mini-data-troubleshooting) if the device is online but data does not appear.
- **Explore the AutoPi Cloud:** try real-time monitoring, analytics, and configurable alerts in the [AutoPi Cloud](https://my.autopi.io/).


