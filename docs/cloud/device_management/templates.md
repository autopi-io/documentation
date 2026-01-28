---
id: templates
title: Templates
supportedDevices: ['mini','cm4']
---
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

## What are Templates?
Templates are a feature that allows for the setup and configuration of several devices at once. First you can create a template with all of the configurations you want to have on your device (such as custom codes, services, jobs...) and secondly you simply assign a device/devices to this template. 
The template functionality makes it possible for a user to manage the configuration of a range of devices by 
setting up a template with the required functionality, and then applying that to a number of devices.

![Temlates overview](/img/cloud/device_management/templates/template_overview.png)

## Features
A template can contain the following configurations.

### Advanced Configuration
Most [advanced configuration settings](/cloud/device_management/advanced_settings/autopi_tmu_cm4/index.md) are available to be specified for a template. Options that aren't available for templates have been removed because they are too specific for each device and it doesn't make sense to set in a template.

The table shows the settings currently associated to the template, and clicking the edit button will open the settings UI, with all available settings.

### Modules (Custom Code)
Modules are created the same way for templates as they are for normal devices; chose a type depending on what you need the module for, and when creating a custom module of type service, it will automatically create a custom service for you and associate that to the same template.

### Services
[Read more here](/cloud/device_management/services/index.md).

#### Creating Custom Services
To create a custom service, you click the `create` button on the services page, this will automatically create a custom module , and you can then navigate directly to it by clicking the link icon next to the service title on the service details page.

#### Overriding Default Services
To override a default engine, like the obd_manager from a template, you can simply create a new service which has the same name as the default service.

### Triggers and Jobs
Triggers and Jobs are created the same way for templates as they are for normal devices.

More info about [Jobs](/cloud/device_management/jobs.md) and [Triggers](/cloud/device_management/triggers/a_guide_to_triggers.md)

### Loggers
Loggers are created similarly to how they are for regular devices. They are a little different since creating loggers on a template will create buses
as well. A prerequisite to setting up Tempalted Loggers is to have already created some [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) Messages and [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) Signals or PIDs in the Library.

#### Templated [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) Loggers
To create a templated [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) logger, find the `Loggers` tab in the template you would like to edit, click `Create`, and `CAN`. You will be presented
with a window like this:

![Create can logger](/img/cloud/device_management/templates/template_create_can_logger.png)

Here you will need to select the [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) signal you'd like to log, and set the bus configuration. In a guide on 
[importing CAN messages and signals through DBC files](/cloud/obd_library/library.md#importing-library-items-from-files) 
we imported some signals related to the seat temperatures. Here we can see those:

![Select logged signal](/img/cloud/device_management/templates/template_select_logged_signal.png)

The first logger you create on a template will always create a bus that's associated to that template. More buses will be created when loggers
are created with a protocol, which none of the existing buses are set to. Multiple buses with the same protocol are not supported. When you click 
on the Bus dropdown, you will see both the buses that are associated to the template, and the buses which are 'supported' by the message. If one
of these buses is selected, it will prefil the Protocol and Baudrate fields (there are no association made between the selected bus and the newly
created logger/bus/template).

:::note
The `Message supported buses` section refers to the `Used by Vehicle(s)` dropdown in the [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) Message edit window in the library.

  ![Logger buses](/img/cloud/device_management/templates/template_can_logger_buses.png)
:::

Let's say this signal can be logged on a bus with protocol ID 6 and default baudrate. You'd set the parameter values, save, and the next logger you
create for this template, you can choose to fill these fields using the bus that was just created.

![Can logger buses with tempalte bus](/img/cloud/device_management/templates/template_can_logger_buses_with_template_bus.png)

#### Templated PIDs
The process for creating templated PID loggers is very similar as for [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) loggers. Go to the template's `Loggers` tab, click `Create`, then `PID`. 
You'll be presented with a window similar to this:

![Logger buses](/img/cloud/device_management/templates/template_create_pid_logger.png)

Most of this is identical to what you'd see when [creating PID loggers for devices](/cloud/obd-ii/create-pid-loggers/#creating-the-logger), with
the exception of Bus settings. Take a look at the [templated CAN loggers section](/cloud/device_management/templates/#templated-can-loggers) to get
an idea of how they work. A notable difference here is that for PID loggers, the Bus is optional. If one's not specified, the PID will be logged
using the vehicle's default bus.


## Step by Step Guide on How to Assign Device to Template:

1. **Login** to [AutoPi cloud](https://my.autopi.io/) using your credentials.
2. From the main screen go to **Templates** tab. 
![main_screen_templates](/img/cloud/device_management/device_install_procedure/main_screen_templates.png)
3. **Click on the template** you want to use. 
![template_screen](/img/cloud/device_management/device_install_procedure/template_screen.png)
4. To add a device to the template click the **add** button.
![template_device_add](/img/cloud/device_management/device_install_procedure/template_device_add.png)
5. In the popup window, **select the device** you want to assign to the template. If you want to add multiple, you have to repeat this process with every device.
![select_devices_for_template](/img/cloud/device_management/device_install_procedure/select_devices_for_template.png)
6. Once you have assigned all devices you wanted, click **Apply template** button in the right upper corner and select **Apply all async** - for ; or **Apply all async + all descendants**
7. You've now assigned one or more devices to a template and applied that template to the device.

## Quick Start with Templates

To use the templates, the common usage is the following:

1. Create a template with a descriptive name.
2. Make some changes to the template - change configuration, add loggers, custom code, etc.
3. Add some devices to the template by clicking the devices tab and then "Add Device(s)", find one or more devices to add, and click save.
4. Now to actually apply any of the changes to the devices, you should click "apply" on the template to apply the template to all associated devices, or to apply it one by one, click apply on each device.

:::tip
To ensure reproducible behavior, please make sure to keep the configuration on each device as "clean" as possible, as that will make it easier to manage, and try to keep manual changes to devices with a template applied, as few as possible to avoid any colissions between the changes made manual and the changes from the template.
:::