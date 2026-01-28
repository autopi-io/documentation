---
id: device-management-intro
title: Introduction
supportedDevices: ['mini','cm4','pro','pro_case']
---
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

This section of our [Cloud](https://www.autopi.io/software-platform/cloud-management) Platform is dedicated to managing and configuring devices.
Here, you can monitor and ensure that all devices within your fleet operate optimally,
maintaining constant communication and data exchange.

![Device management overview](/img/cloud/device_management/device_management_intro.png)

On this page, you will find an overview of all your devices, including their activity, alerts,
and software updates. We are committed to continual improvement, and we regularly
enhance our devices through software updates. We strongly recommend that our
customers keep their devices up to date.

Within the overview, you can see how many of your devices are currently updated,
how many have failed to update, and how many are waiting for updates.

## Device List
In this view, you have access to a list of all your devices, including their names, statuses, unit IDs, types, last communication timestamps, and update statuses. 
You can customize this view using the 'Edit Columns' feature, allowing you to include other essential identifying factors like alerts or VIN numbers.
For a faster search of your desired device, use the 'Search for Vehicle' feature at the top of the page to filter your view based on specific criteria. 
For more detailed information about a particular device, simply click on the chosen device.

![Device management device](/img/cloud/device_management/device_management_device_list.png)

## Device Overview
Once you have selected a device for viewing or editing, you will be directed to a dedicated page for that specific device. 
At the top of the page, you will find the device's name, its most recent activity timestamp, and the device it is assigned to. 
You can edit this information in the 'Settings' located on the right side of the page. 

On this page you can see a concise summary of essential information about your device. 
This includes details like its last communication, installed software version, and device specifications. 
You will also find information about the vehicle to which the device is connected, including its [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) bus, make, model, year and engine.

![Device management device](/img/cloud/device_management/device_management_device_overview.png)

