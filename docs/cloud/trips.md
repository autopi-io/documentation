---
id: cloud-trips
title: Trips
---

Trips are automatically detected based on the events sent from the device, by default the [engine events](../events/vehicle.md#engine-events) are used. 

It is fully customizeable what events trigger a new trip to be created and it can be changed in the [advanced settings](../configuration/trip.md#event).

:::tip
You can check the events page on my.autopi.io to see all events logged from your device. When troubleshooting it is one of the first places to check if you are unsure why something happened. By looking at the events you can usually get a really good idea about why the device did something.
:::

## Trip generation

When the server receives the start|stop trip events it will do the following.

#### On start trip event (default: `vehicle/engine/running`)
   * If closed trip exists, the end time will be checked:
     * If older than N minutes (default: 10), a new trip will be created, with the start_time set to the timestamp of the event.
     * If not older than N minutes, it will not create a new trip.
   * OR: If open trip exists, the start time will be checked:
     * If older than N minutes, a new trip will be created.
     * If not older than N minutes, it will ignore the event, and just keep using the trip from before.

#### On stop trip event (default: `vehicle/engine/not_running`|`vehicle/engine/stopped`)
   * Check if a trip is currently in progress using the timestamp of the event.
     * If it can find one, it will close it.
     * If it can't find one, the event will be ignored.

This means that a typical trip generation lifecycle can look like this

1. Trip is created
2. Data is logged
3. Trip is closed
4. Trip is reopened if new event is within 10 minutes of the last trip close event.
5. More data is logged
6. Trip is closed

:::tip
For EV's it's possible to set up new events so that the trip generation works as expected.
See more here: [Setup power cycle for an electric vehicle](https://community.autopi.io/t/guide-how-to-setup-power-cycle-for-an-electric-vehicle/1668)
:::