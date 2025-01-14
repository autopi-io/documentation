---
id: a-guide-to-triggers
title: A Guide to Triggers
---

This guide will be introducing and explaining how to use, create and edit triggers with your device. 
Triggers empower you to receive notifications based on events from your device, as well as the various data points logged from your vehicle. 
triggers offer you flexibility in managing your notifications, which can be send via email or a webhook request.

![intro_pic](/img/cloud/device_management/triggers/a_guide_to_triggers/triggers_example.png) 

_Webhooks_ are supported so you can integrate with almost any service or system. Popular examples are:

  - [Slack](https://slack.com)
  - [IFTFT](https://ifttt.com)

## What are Triggers?

Triggers are a way to receive notifications when specific events occur on the device. Conditions can also be set on the triggers so
that the notifications are only sent when those conditions have been met.

More specifically, whenever a device recieves an event (e.g. `vehicle/engine/running`) it will push that event and the data that comes
with it to the [Cloud](https://www.autopi.io/software-platform/cloud-management). When the [Cloud](https://www.autopi.io/software-platform/cloud-management) system receives that data, it'll process it and find out if there are any triggers that need to
be executed based on the event name (also known as a tag) and the conditions for each trigger that matches the tag.

You can set up or edit these triggers on the [AutoPi](https://www.autopi.io) [Cloud](https://www.autopi.io/software-platform/cloud-management). As mentioned earlier, triggers are based on event from the device, and
a trigger can have zero or more conditions that needs to be met before it is triggered. Once the condition(s) have been met, the
trigger will execute the attached action(s), i.e. a notification will be sent to you notifying you of this event, either via email
or a webhook request.

In this guide we will explore how you can setup a trigger on your own. We will create a trigger that will notify you whenever your
vehicle has been started outside of specified hours - 8 PM until 8 AM. We will make use of the event `vehicle/engine/running`, which
is fired when the vehicle's engine is started.

## Here is How to Start

Once, you have received your [AutoPi](https://www.autopi.io) device, and you have registered it (click [here](/getting_started/autopi_tmu_cm4/index.md) to see
the getting started guide) and you are all set to go and can begin creating your own triggers.
Let's get started with the guide.

1. Firstly, we need to go over to the Triggers page. You can find it by logging into https://my.autopi.io and selecting the
"Triggers" option from the menu. There, you'll see a "Create" button. When you press that button a pop-up window will show up with
the form to create a trigger.

![create_trigger_form](/img/cloud/device_management/triggers/a_guide_to_triggers/create_trigger_form.jpg)

2. Next, let's fill out that form. We'll go through the options that are available in the form and explain each one of them.

    1. *Description* - This is a descriptive name of your trigger. You can set it to whatever suits you, but for this guide, we will
    go with 'Vehicle started outside of working hours'.

    2. *Last Triggered* - This shows the time the trigger was last triggered. The same form is used to view and edit the trigger,
    so you are able to open it up and view that. This is also visible on the overview of your triggers.

    3. *Enabled* - Whether the trigger is enabled.

    4. *Type* - This is the type of event that the trigger will be reacting on. For right now, only one option is available -
    Event, which is a device event, however in the future, there will be types like Alert, OBD Data and more.

    5. *Tag* - The event tag that the trigger is going to be fired on. This needs to either be a full event tag, like
    `vehicle/engine/running` or a more general specification with the use of regular expressions like `vehicle/engine/*`. For this
    guide we will be using `vehicle/engine/running` in this field.

    6. *Conditions* - Here, you can specify different conditions for your trigger. Conditions are going to be reviewed deeper
    in a subsection later in this guide, but for now, we will set two conditions: one field `@ts` with data `time` should be less
    than `08:00:00` and a second field `@ts` with data `time` should be greater than `20:00:00`

    7. *Actions* - This is where you specify the actions that are to be executed when the trigger is fired. You can choose from two
    options as of now: sending an email and sending a webhook request. For this guide, we will use only the sending an email option
    to send an email to support@autopi.io (which is also the email you should use if you have any questions for this or any other
    guide).  We will review the different options that you have when sending a webhook request further into this guide.

3. Finally, let's click on the create button to create our new trigger.

## Conditions
In this section we will explore the fields available in the conditions.

1. *Field* - The field is the name of a field that is present in the event's data. This means values like the date and time of when the event
has been triggered, the vehicle ID and the unit ID of the device are available. A basic event data can look like the following:
```
{
    "@rec": "2021-05-25T12:33:52.636385Z", # when was the event recieved by the Cloud
    "@t": "event.vehicle.engine",          # the event type
    "@tag": "vehicle/engine/running",      # the event tag
    "@ts": "2021-05-25T12:33:42.686380Z",  # when was the event fired on the device
    "@uid": "ee3df171-ff0f-6209-a3db-aa00b00e1d05",  # the unit ID of the device
    "@vid": 106                            # vehicle ID
}
```

2. *Type* - The type field will be set based on the field you selected. But there are situations where you might want to specify the type
to something else than the preselected value. One situation is when you want a trigger that will only execute at certain times of the day,
like after 8 in the evening. In that case, you would first select a timestamp field (in this case @ts), and then change the type from datetime,
to time. This way the date part of the @ts will be ignored. Note that the timestamps are in UTC, so the comparison value should also be UTC.

3. *Not* - Check the "Not" checkbox if you want the condition to be inverted. For example, you can use that with the "field present" operator,
to make a condition that only executes if the field is NOT present.

4. *Operator* - We also need to select the operator, which will decide how the comparison is performed. Not all operators makes sense on all
types. For example, you would probably not use the comparison operators (greater than, etc.) for a string types.

5. *Value* - Finally, input whatever value should be used when comparing the field value. For example:

    1. some.field should "be present" **(in this case no value is needed)**
    2. some.field should "equal" **1234**
    3. some.field should be "greater than" **0**

### Examples

**Notify on engine start between 01:00 and 06:00 at night.**
(Remember all times are UTC, so keep that in mind when creating the conditions. So if your timezone is UTC+2, the below conditions will in
reality match between 03:00:00 to 08:00:00 local time.)

![conditions_example_1](/img/cloud/device_management/triggers/a_guide_to_triggers/conditions_example_1.jpg) 

**Notify on device update (No conditions)**

![conditions_example_2](/img/cloud/device_management/triggers/a_guide_to_triggers/conditions_example_2.jpg) 

**Notify on all events (will only execute once every minute no matter how many events are received)**

![conditions_example_3](/img/cloud/device_management/triggers/a_guide_to_triggers/conditions_example_3.jpg) 

## Actions

When you speicfy you'd like to send a webhook request, you can specify the payload that is sent with the request. When specifying the payload, you can
use the Jinja templating language to insert data that's passed by the trigger's context. Here's what the context can offer:

```
event #the event that got fired
    @vid: int - Vehicle ID of the vehicle associated with the device
    @uid: UUID - The Unit ID of the device
    @tag: string - Additional event information
    @t:   string - Type of the event
    @ts:  string - Timestamp from the device
    @rec: string - Timestamp of when the event was received

trigger # the trigger
    created:        date - When the trigger was created
    last_modified:  date - When was the trigger last modified
    last_triggered: date - The last time this trigger got executed
    last_error:     date - When was the last error for this trigger
    description:    string - A description of the trigger
    enabled:        boolean - Whether the trigger is enabled or not
    device:         Device - The device model
    interval:       duration - How often is the trigger allowed/going to trigger

# nested models
Device
    id:                 uuid - The device id
    unit_id:            uuid - The device's unit id
    callName:           string - The name of the device (user provided)
    vehicle:            Profile - The profile (vehicle) model
    last_communication: date - The last time this device was connected to the cloud

Profile (the vehicle the device is registered to)
    type:         string - The type of the vehicle
    vin:          string - Serial number of the vehicle
    model:        Model - The model of the vehicle
    year:         integer - The creation year of the vehicle
    callName:     string - The name of the vehicle (user provided)
    licensePlate: string - The license plate of the vehicle

Model
    make: Make - The make of the model
    name: string - The name of the model

Make
    name: string - The name of the make (BMW, Mercedes-Benz, Toyota etc.)
```

You can use these values in a payload like the following example:

```
{
    "payload": "{{ trigger['description'] }}",
    "device_uid": "{{ event['@uid'] }}"
}
```

which will translate into the following payload:

```
{
    "payload": "Description that you've specified when creating the trigger",
    "device_uid": "c3cce723-79ed-4897-80cf-4cd48b62b235"
}
```

Keep in mind that some events provide additional data in the `event` context, so there will be additional fields available. An example for such a scenario
is the `vehicle/battery/discharging` event which has an `event.vehicle.battery.level` value showing a percentage value of the battery.

### Examples

**Send email**

![actions_example_1](/img/cloud/device_management/triggers/a_guide_to_triggers/actions_example_1.jpg)

Here is how an example email from a trigger looks:

![actions_example_email](/img/cloud/device_management/triggers/a_guide_to_triggers/actions_example_email.jpg) 

**Send webhook request**

![actions_example_2](/img/cloud/device_management/triggers/a_guide_to_triggers/actions_example_2.png)  

Address: Your unique Slack webhook address  
Payload: 
```
{"text": "{{ trigger['description'] }} was executed, by device {{ trigger['device']['callName'] }}"}
```

The payload in this case will end up looking something like this when being sent to Slack:
```
{
    "text": "your_trigger_description_here was executed by device your_device_callName"
}
```

This example also shows how you can get nested model data - for each nested level a new set of square brackets needs to be added with
a string of the field name that you would like to get. In the above example, we query for the device's name through the trigger field.

You can check out Slack's [documentation](https://api.slack.com/incoming-webhooks) for more information on what fields they accept.

![actions_example_3](/img/cloud/device_management/triggers/a_guide_to_triggers/actions_example_3.png)


**Send MQTT message via webhook (home assistant etc)**  
Check out this tutorial: https://www.home-assistant.io/blog/2017/03/28/http-to-mqtt-bridge/  
Address: heroku app address  
Payload: 
```
{"topic":"<mqtt_topic>","message":"<mqtt_message>","key":"<AUTH_KEY>"}
```

**Trigger IFTTT applet via webhook**  
Address: Find on https://ifttt.com/services/maker_webhooks/settings  
Payload: optional and custom based on the IFTTT applet.  

:::tip
Like any [AutoPi](https://www.autopi.io) [Cloud](https://www.autopi.io/software-platform/cloud-management) functionality, triggers can be managed programmatically through the [AutoPi](https://www.autopi.io) REST API. For more information see: [API Documentation](https://api.autopi.io/#automation)
:::

