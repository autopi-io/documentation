---
id: fleet-templates
title: Templates
---

The template functionality makes it possible for a user to manage the configuration of a range of devices by setting up a template with the required functionality, and then applying that to a number of devices.

## Features
A template can contain the following configurations.

### Advanced configuration
Most [advanced configuration settings](/cloud/configuration/index.md) are available to be specified for a template. Options that aren't available for templates have been removed because they are too specific for each device and it doesn't make sense to set in a template.

The table shows the settings currently associated to the template, and clicking the edit button will open the settings UI, with all available settings.

### Modules (custom code)
Modules are created the same way for templates as they are for normal devices; chose a type depending on what you need the module for, and when creating a custom module of type service, it will automatically create a custom service for you and associate that to the same template.

### Services
[Read more here](/guides/services/index.md).

#### Creating custom services
Creating a custom service does not not autocreate a custom module as of now, so if you want to create a custom service, you should instead go create a custom module of the type service, then a service will be automatically created.

#### Overriding default services
To override a default engine, like the obd_manager from a template, you can simply create a new service which has the same name as the default service.

### Triggers and Jobs
Triggers and Jobs are created the same way for templates as they are for normal devices.

More info about [Jobs](/cloud/jobs.md) and [Triggers](/cloud/triggers.md)

### Loggers
Loggers are created the same way for templates as they are for normal devices. You will of course need to have the PIDs or CAN Messages and CAN Signals beforehand, just like when creating loggers for a device.

## Functionality

To use the templates, the common usage is the following.

1. Create a template with a descriptive name.
2. Make some changes to the template - change configuration, add loggers, custom code, etc.
3. Add some devices to the template by clicking the devices tab and then "Add Device(s)", find one or more devices to add, and click save.
4. Now to actually apply any of the changes to the devices, you should click "apply" on the template to apply the template to all associated devices, or to apply it one by one, click apply on each device.

:::tip
To ensure reproducible behavior, please make sure to keep the configuration on each device as "clean" as possible, as that will make it easier to manage, and try to keep manual changes to devices with a template applied, as few as possible to avoid any colissions between the changes made manual and the changes from the template.
:::