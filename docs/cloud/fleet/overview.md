---
id: fleet-overview
title: Overview
---

The fleet overview section allows you to monitor the entire fleet of vehicles, and get a quick overview of the status of each vehicle.

All devices with a known position is shown in the map, and each device can be highlighted by clicking the device in the table.

![fleet overview](/img/cloud/fleet/overview/fleet-overview.jpg)

### Available Columns
The fleet overview can be customized to show the columns that you need, by clicking the three dots in the top of the fleet overview table.

#### Online

Indicates if the device has been online in the last 5 minutes, to get a realtime indication you will need to use the ping function by clicking the globe while the device is active.
This column also allows the use of the [remote wake up functionality](/cloud/device_management/triggers/remote-wakeup.md).

:::note active
An active device means that it has been selected as the device that you're working on. You can verify which device you have active by looking at the top-right corner of the web page.
:::

#### Display
The display name of the device, it will show the following values in order of availability.
device name > vehicle name > Last 12 characters of the Unit ID.

#### Vehicle
The name of the vehicle currently assigned to the device

#### Unit ID
The unit id of the device. This ID is also printed on the device, so this makes it possible to correlate which device you are working on.

#### IMEI
The IMEI number of the modem installed in the device.

#### Open Alerts
The number and distribution of alerts on the device, is used to signal that various issues are found.

#### Last Communication
When the device has last sent data to the cloud, or communicated with the master server.

#### Template
What template is associated to the device.

#### Is Updated
Indicates if the device has a pending update.

#### Data Usage
Shows the current data usage. 

Data usage can exceed the default allowed limit, as the limit is pooled across all devices, ie. if 10 devices can use 1GB of data, but if 5 of them are not using anything, the other 5 can use 200mb each before reaching the limit.

Currently only available for customers which are using our SIM solution.

#### Phone Number
Shows the phone number associated to the device. 

Currently only available for customers which are using our SIM solution.

:::tip
Contact sales@autopi.io to get more information.
:::
