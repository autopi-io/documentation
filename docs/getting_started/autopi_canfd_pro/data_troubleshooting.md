---
id: pro-data-troubleshooting
title: Data Troubleshooting
---

import CardGrid from "/components/CardGrid"


You are experiencing issues with getting the data out of your [CAN-FD Pro device](https://shop.autopi.io/products/autopi-can-fd-pro)? This guide help you step-by-step to identify and resolve common problems related to wrong configurations on device, configurations to CAN Loggers, verification of CAN channels, nominal voltage detection, and internet connectivity issues. 

:::tip Our support team is here to help you.
Get in touch here or send an email to support@autopi.io
:::

### Prerequisites:
Before following this guide, you must have completed the initial [Setup guide](https://docs.autopi.io/getting_started/autopi_canfd_pro/).

### Why Am I Not Seeing Any Data? 
If you've followed the [Getting Started Guide](/getting_started/autopi_canfd_pro/index.md)
and tested your [AutoPi](https://www.autopi.io) [CAN-FD Pro](https://www.autopi.io/hardware/autopi-canfd-pro) device during vehicle operation, but are not recording any data, this guide will help you identify and resolve common issues. 

This guide is organized as a checklist, detailing potential reasons why your vehicle
data might not be recorded. It is only intended for the
[AutoPi](https://www.autopi.io) [CAN-FD Pro](https://www.autopi.io/hardware/autopi-canfd-pro) device.  

## Common Causes and Solutions for No Data Recorded

### 1. Identify the Current State of the Device

Check the two LEDs on the side of the device. Both the green and blue LEDs should be lit. If the green LED is off and the blue LED is “breathing” or fully dimmed the device is either sleeping or hibernating. To resolve this re-plug or push the button on the side of the device to boot it up again.

For more details on LED status meanings, refer to this guide: [LED and button states](https://docs.autopi.io/hardware/autopi_canfd_pro/pro-led-and-button/)

### 2. Check the CAN Loggers

Run the `logger.status` command on the device to see the status of data logger(s).

1. If the device is connected to the Internet it can be done through the cloud terminal on [AutoPi cloud](https://my.autopi.io/).
2. Or alternatively if you have direct SSH access [How to SSH to your device](https://docs.autopi.io/developer_guides/how-to-ssh-to-your-device/) to the device via LAN or VPN (for Tailscale, you can read more at this guide: [How to connect to Tailscale](https://docs.autopi.io/getting_started/autopi_canfd_pro/how_to_connect_to_tailscale/)) you can use the `autopi` terminal command.
3. Or if you are nearby the device and can connect to it's local WiFi hotspot you can do it from the local admin UI on local.autopi.io. Here is a guide: [Local development workflow](https://docs.autopi.io/developer_guides/local-development-workflow/). 

Regardless of which of the above methods you use, you must run the command `logger.status`. 


### 3. CAN bus detection

Verify the settings of the CAN channels. Configuration of the device is done through the [AutoPi cloud](https://my.autopi.io/). 

### 4. Nominal Voltage detection

When the device boots for the first time, it attempts to autodetect the nominal voltage and sends the results back to [AutoPi](https://www.autopi.io) [CAN-FD Pro](https://www.autopi.io/hardware/autopi-canfd-pro) device, where a Nominal voltage is set for your vehicle. 

* **Auto-detect Voltage:** This is a new feature that comes enabled by default on all [AutoPi](https://www.autopi.io) [CAN-FD Pro](https://www.autopi.io/hardware/autopi-canfd-pro) devices. That means you don’t need to configure it manually - your device will automatically detect this value the first time it boots up. And the result is shown in Events tab.
If you want to double check if this feature is enabled, Go to Devices > Choose Device > Settings > Vehicle Editor to see if the Auto-Detect Voltage is enabled.

    ![Autodetect feature](/img/getting_started/autopi_canfd_pro/autodetect_voltage.png)

* **Manual Configuration:** If the device is unable to autodetect the nominal voltage on the vehicle, you might need to configure it manually. Go to Devices > Choose Device > Settings > Vehicle Editor > Nominal Voltage > click on the field and choose from 12V or 24V. Make sure the correct configuration is set from dropdown.  

    ![Manual configuration of nominal voltage](/img/getting_started/autopi_canfd_pro/nominal_voltage.png)

### 5. Internet Connectivity Issues 

Ensure your device is connected to the internet. If there are connectivity issues,
follow the steps outlined in our [4G Internet Setup and Troubleshooting Guide](https://docs.autopi.io/getting_started/autopi_canfd_pro/pro-4g-internet-setup-troubleshooting/).

### 6. Verify Bitrates 

Ensure the correct Bitrate is set for your vehicle, you can follow this guide: [Find the correct Bitrate for your vehicle](https://docs.autopi.io/getting_started/autopi_canfd_pro/pro-user-guide/#step-4-try-bitrates-or-use-fixed-bitrate). The default list for Try Bitrates includes some of the most common used bitrates to make this process easier for you. This step allows you to make sure that you can receive any data by listening to these settings. 
* You have 2 options here: 
  * **1. Try Bitrates (Auto Mode):**
      If you're unsure about your vehicle’s bitrate, this is the best choice.
        The device will automatically scan through a list of common CAN 2.0 and CAN FD bitrates.
  * **2. Fixed Bitrate (Manual Mode):**
    If you already know the exact bitrates for your vehicle just input them directly. 

**Autodetect** feature under CAN Channel settings, is used to figure out how to find the correct bitrate using 3 different detection strategies to ensure there is data incoming. You can read more in this guide, on [How to find the correct bitrate](https://docs.autopi.io/getting_started/autopi_canfd_pro/pro-user-guide/#step-3-autodetect-how-to-find-the-correct-bitrate). Every time the Autodetection is used, it triggers an **event** that could be seen in the events section on [AutoPi cloud](https://my.autopi.io/) -> go to devices > pick the device > events. This should help you to understand a little better what is happening on a device. These are some of the examples for the events that can be used for verifying the bitrates: 
- vehicle/bus/can0/autodetected 
- vehicle/bus/can0/autodetect/any_passive/successful 
- vehicle/bus/can0/autodetect/any_passive/unsuccessful 


### 7. Make sure you are receiving data

**Step 1: Configure Output Handlers:**
* To ensure your device sends data to the correct destination, you need to set up output handlers properly. This step is essential for reliable communication between your device and the receiving service.
* Follow the instructions in the guide here: [How to set up Output Handlers](https://docs.autopi.io/getting_started/autopi_canfd_pro/pro-user-guide/#step-4-outputs). 

**Step 2: Verify File Access via Wi-Fi Hotspot:**
* Once your output handlers are configured, verify that you can access files from the device over a Wi-Fi hotspot. This is important to confirm your setup is working correctly. 
* Follow the instructions in the guide here: [Accessing Files via SFTP/SCP on AutoPi](https://docs.autopi.io/getting_started/autopi_canfd_pro/accessing-files-via-sftp-on-autopi/)


<br>
</br>

### Let's keep in touch!
Thank you for choosing AutoPi. We're excited to see what you will achieve with your AutoPi device! 
<CardGrid home>
[![](/img/shared/favicon.ico) **Contact our sales team** You can build on top of AutoPi .](https://www.autopi.io/contact/)

[![](/img/shared/support_icon.png) **Get help from our support team** Let us know about your technical questions.](https://www.autopi.io/support/)

</CardGrid>
