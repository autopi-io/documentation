---
id: cm4-data-troubleshooting
title: Data Troubleshooting
---
import CardGrid from "/components/CardGrid"

## Why Am I Not Seeing Any Data? 

If you've followed the [Getting Started Guide](/getting_started/autopi_tmu_cm4/index.md)
and tested your [AutoPi](https://www.autopi.io) [TMU CM4](https://www.autopi.io/hardware/autopi-tmu-cm4) device during a drive, but aren't seeing any data
on the [AutoPi](https://www.autopi.io) [Cloud](https://www.autopi.io/software-platform/cloud-management), this guide will help you identify and resolve common issues. 

This guide is organized as a checklist, detailing potential reasons why your vehicle
data might not be appearing on the [AutoPi](https://www.autopi.io) [Cloud](https://www.autopi.io/software-platform/cloud-management) Dashboard. It is intended for the
[AutoPi](https://www.autopi.io) [TMU CM4](https://www.autopi.io/hardware/autopi-tmu-cm4) device, for [AutoPi](https://www.autopi.io) Mini please see the [Mini guides](/getting_started/autopi_mini/index.md).  

![Dashboard](/img/getting_started/autopi_tmu_cm4/data_troubleshooting/no_data_dashboard.png)

## Common Causes and Solutions for Data Not Appearing on the [Cloud](https://www.autopi.io/software-platform/cloud-management)  

### 1. Connection Issues 

A common reason for missing data is a communication issue between your [AutoPi](https://www.autopi.io) [TMU CM4](https://www.autopi.io/hardware/autopi-tmu-cm4) 
device and the [Cloud](https://www.autopi.io/software-platform/cloud-management). If you’ve followed the Getting Started guide, this should 
typically not be a problem. However, it’s important to check the status of the 
LEDs on the side of the device to confirm it’s communicating with the [Cloud](https://www.autopi.io/software-platform/cloud-management) and hasn’t entered sleep mode. 

- **LED Status**: Both the green and blue LEDs should be lit solid and bright. 
    If the blue LED is “breathing” (varying brightness from dim to bright), 
    the device is in sleep mode. 
- **To Resolve**: Disconnect the device from the OBD-II port, then reconnect it.
    Wait until both LEDs are solid before proceeding.

For more details on LED status meanings, refer to [this guide](/core/power_management/#status-leds).

![CM4 LED status meaning](/img/getting_started/autopi_tmu_cm4/data_troubleshooting/cm4_light_placements_01.png)

### 2. Internet Connectivity Issues 

Ensure your device is connected to the internet. If there are connectivity issues,
follow the steps outlined in our [4G Internet Setup and Troubleshooting Guide](/getting_started/autopi_tmu_cm4/4g-internet-setup-troubleshooting).

### 3. CAN Bus Creation 

When the device boots for the first time, it attempts to autodetect the 
communication protocol and sends the results back to [AutoPi](https://www.autopi.io), where a CAN Bus is 
created for your device.

- **Check for CAN Bus**: Go to Vehicles > Choose Device > Settings > Vehicle Editor 
    to see if the CAN Bus has been created.
- **Manual Configuration**: If the CAN Bus wasn’t created automatically, you might 
    need to configure it manually. For assistance, refer to this [guide](/cloud/obd-ii/can-bus-configuration).

![Change device settings](/img/getting_started/autopi_tmu_cm4/data_troubleshooting/device_settings.png)

### 4. Loggers Creation

To view data on the [AutoPi](https://www.autopi.io) [Cloud](https://www.autopi.io/software-platform/cloud-management) Dashboard, you need to create Loggers to collect
the data via your [AutoPi](https://www.autopi.io) device. 

- **Setting Up Loggers**: Loggers can be configured to communicate on the CAN Bus
    and capture the necessary data. They can be set up using PIDs or CAN messages,
    depending on your vehicle's communication type. 
- **Accessing Loggers**: Navigate to the Devices section of the [AutoPi](https://www.autopi.io) [Cloud](https://www.autopi.io/software-platform/cloud-management), 
    select your device, and find Loggers. Some default loggers may already be 
    available and should display data in the Dashboard widgets. However, 
    depending on your vehicle, you may need to create custom loggers. 
- **Explore OBD Community Library**: You can check the OBD Community Library for
    loggers that have been created for your specific vehicle model and year. 

![Create Loggers](/img/getting_started/autopi_tmu_cm4/data_troubleshooting/loggers.png)

For more information on creating Loggers, visit our [OBD-II Introduction Guide](/cloud/obd-ii/). 
Additional documentation on CAN and PID configuration can be found under the 
OBD-II dropdown in the [Cloud](https://www.autopi.io/software-platform/cloud-management) section of our documentation. 

When everything is configured correctly you should be able to see your data 
displayed in the form of widgets on the Dashboard by navigating to Vehicles > Dashboard.

### 5. Configuring Widgets

![Successful dashboard](/img/getting_started/autopi_tmu_cm4/data_troubleshooting/successful_data_dashboard.png)

After setting up your loggers, you'll be able to view your data on the dashboard.
Each widget in the dashboard offers controls in the top-right corner: 

- **Circle icon**: Refreshes the widget's data. 
- **Three dots icon**: Opens the configuration options for the widget. 
- **X icon**: Removes the widget. Feel free to remove any default widgets that aren't relevant to you.

![Configurinyyg widget](/img/getting_started/autopi_tmu_cm4/data_troubleshooting/configuration_widget.png)

To customize how your data is displayed, click the three dots on a widget. 
This will take you to the configuration settings, where you can choose different 
display formats such as graphs, line charts, gauges, and more. You can also set 
the widget to show data averages, minimums, or maximums. 

:::note
If your widget shows "No data," it's often due to an incorrect configuration—especially 
in the 'Field' section. Ensure the widget's settings align with the configuration
of the logger that collects the data for that field. 
:::

After updating your widget settings, click **Save**, then refresh the widget using 
the circle icon to check if data appears. If you see the data, the configuration 
is correct. To make sure your changes are saved for future use, click 
**Widget Actions** and select **Save**.

![Widget actions](/img/getting_started/autopi_tmu_cm4/data_troubleshooting/widget_action.png)

To add a new widget to your dashboard, go to **Widget Actions** and choose 
**Add Widget**. Remember, a logger must be set up beforehand, or the widget 
won't have any data to display. 

When you're satisfied with your dashboard configuration, save your layout via 
**Widget Actions** to keep your settings for future sessions. 

For more detailed information on widgets, see [this documentation](/cloud/device_management/dashboard/adding-a-new-widget-from-scratch).
