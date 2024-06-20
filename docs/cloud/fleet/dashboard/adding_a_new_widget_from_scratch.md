---
id: adding-a-new-widget-from-scratch
title: Adding a New Widget from Scratch
---

You can easily tie data directly from your vehicle to the dashboard. This guide will go
over the steps of adding a new widget based on data you discovered from your OBD library. Widgets
depend on data from your vehicle. So, lets get an overview of how data is retrieved from your
vehicle and added to your widgets.

![Create widget steps](/img/cloud/fleet/dashboard/adding_a_new_widget_from_scratch/create_widget_steps.jpeg) 

Creating a new widget consists of the 3 steps shown above. Let go over them.

## Library - Discover PID's

Use the library to discover what data you want to log. The library consists of data automatically
extracted from your vehicle, but also contains data created by other users. The library is divided
into two parts - your own library and the community library. The community library contains all
commands globally available in the AutoPi system and your own library contains all the commands
specifically releated to your vehicle. If you find commands in the global library that work for
your vehicle, you can add them to your own library.

:::note
Since you can only create loggers for commands that are located in your own library, the last part
is important. You will need to add commands from the community library to your own to use them.
:::

![Add command](/img/cloud/fleet/dashboard/adding_a_new_widget_from_scratch/add_command.jpeg) 

## Loggers - What Should be Logged

Now that you have found out what should be logged, you need to setup the device to log it. This is
done under the Loggers section (Car Explorer > Loggers). To create a new logger, just press the
"Create" button and you will get this screen:

![Create logger](/img/cloud/fleet/dashboard/adding_a_new_widget_from_scratch/create_logger.jpeg) 

From the PID list we simply select the PID you want to start logging. The list contains all the
PID located in your library and only those you've moved to your library. Secondly you enter the
interval you want log data with. The interval is time in seconds over which the logger will get
executed on the device. For example, an interval of 30 seconds means that the logger will get
executed every 30 seconds. When you create your new logger, you can sync the changes to the device,
and it will start logging immediately. 

## Widgets - Select Logged Data
Now that you have setup what data you want to log, the next step is to visualize the data. You can
do that on the dashboard using widgets.

Go to the dashboard and press the "Add widget" button. Then select one of the custom widgets, as
you are creating a new widget. 

![Create widget](/img/cloud/fleet/dashboard/adding_a_new_widget_from_scratch/create_widget.jpeg) 

Give your new widget a title and select the type of visualization you want. The "Field" contains
the data you want to visualize. The "Field" is the name of the Logger that you created in the
previous step in lower case, however it is usually prepended with `obd.` in front and `.value` at
the back. For example, if you've created a Logger called `RPM` the "Field" should be
`obd.rpm.value`. The widget component will automatically extract data you can visualize for the last
14 days.

You can only create widgets for data already logged, so you will have to log some data for your new
logger before you can visualize it. But dont worry, your data is always stored and once it starts
streaming into the cloud it will be visualized for all previous trips which also used the new
logger.

With these three steps you should be able to visualize all data from your vehicle. 

## Discussion
If you'd like to discuss this topic with us or other fellow community members, you can do so on
our community page dedicated for this guide:
[Adding a new widget from scratch](https://community.autopi.io/t/adding-a-new-widget-from-scratch/964)
