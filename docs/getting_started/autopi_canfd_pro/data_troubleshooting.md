---
id: pro-data-troubleshooting
title: Data Troubleshooting
---

import CardGrid from "/components/CardGrid"

## Why Am I Not Seeing Any Data? 

If you've followed the [Getting Started Guide](/getting_started/autopi_canfd_pro/index.md)
and tested your [AutoPi](https://www.autopi.io) [CAN-FD Pro](https://www.autopi.io/hardware/autopi-canfd-pro) device during vehicle operation, but are not recording any data, this guide will help you identify and resolve common issues. 

This guide is organized as a checklist, detailing potential reasons why your vehicle
data might not be recorded. It is only intended for the
[AutoPi](https://www.autopi.io) [CAN-FD Pro](https://www.autopi.io/hardware/autopi-canfd-pro) device.  

## Common Causes and Solutions for No Data Recorded

### 1. Identify the Current State of the Device

Check the two LEDs on the side of the device. Both the green and blue LEDs should be lit. If the green LED is off and the blue LED is “breathing” or fully dimmed the device is either sleeping or hibernating. To resolve this re-plug or push the button on the side of the device to boot it up again.

### 2. Check the CAN Loggers

Run the `logger.status` command on the device to see the status of data logger(s).

1. If the device is connected to the Internet it can be done through the cloud terminal on my.autopi.io.
2. Or alternatively if you have direct SSH access to the device via LAN or VPN (Tailscale) you can use the `autopi` terminal command.
3. Or if you are nearby the device and can connect to it's local WiFi hotspot you can do it from the local admin UI on local.autopi.io.

Regardless of which of the above methods you use, you must run the command `logger.status`. The response from this command may look like this:

INSERT PICTURE HERE

### 3. CAN bus detection

Verify the settings of the CAN channels. Configuration of the device is done though the cloud at my.autopi.io.

<br>
</br>

### Let's keep in touch!
Thank you for choosing AutoPi. We're excited to see what you will achieve with your AutoPi device! 
<CardGrid home>
[![](/img/shared/favicon.ico) **Contact our sales team** You can build on top of AutoPi .](https://www.autopi.io/contact/)

[![](/img/shared/support_icon.png) **Get help from our support team** Let us know about your technical questions.](https://www.autopi.io/support/)

</CardGrid>
