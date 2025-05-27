---
id: introduction
title: Introduction
supportedDevices: ['mini','cm4']
---
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

The Trips section provides in-depth information about the vehicle's trips. 
Trips are automatically detected based on the events sent from the device, by default the 
[engine events](/cloud/device_management/events/vehicle.md#engine-events) are used, these can be customized in the 
[advanced settings](/cloud/device_management/advanced_settings/autopi_tmu_cm4/trip.md#event).

This will display the trip route on a map along with the starting and ending addresses, duration, and distance travelled. 
Additionally, you can review **events** that occurred during each trip, such as 'engine running/stopped' and 'position moving/standstill' and **dashboard** widgets can display data from a specific trip — including position, speed, battery level, total odometer, and more. You can easily customize your dashboard to show the metrics that matter most to you. If you’re unsure how to set it up, check out our guides on configuring widgets for a personalized view of your data <a href="https://docs.autopi.io/getting_started/autopi_tmu_cm4/cm4-data-troubleshooting/#5-configuring-widgets" target="_blank">on AutoPi TMU CM4</a> or <a href="https://docs.autopi.io/getting_started/autopi_mini/mini-data-troubleshooting/#3-configuring-widgets/" target="_blank">on AutoPi mini</a>.

You also have an option to **filter** trips based on the desired date range and an option to **categorize trips** as either personal or business for better differentiation of your fleet operations. Another feature is **Export trips** that allows you to export trip data to Excel/CSV for easier handling. 

![Trip example](/img/cloud/fleet_management/vehicles/trips/intro/trip_demo_example_1.png)

:::tip
You can check the events page on [my.autopi.io](https://my.autopi.io) to see all events logged from your device. When troubleshooting it is one of the first places to check if you are unsure why something happened. By looking at the events you can usually get a really good idea about why the device did something.
:::

## Trip Generation

When the server receives the start|stop trip events it will do the following.

#### On Start Trip Event (Default: `vehicle/engine/running`)
   * If closed trip exists, the end time will be checked:
     * If older than N minutes (default: 10), a new trip will be created, with the start_time set to the timestamp of the event.
     * If not older than N minutes, it will not create a new trip.
   * OR: If open trip exists, the start time will be checked:
     * If older than N minutes, a new trip will be created.
     * If not older than N minutes, it will ignore the event, and just keep using the trip from before.

#### On Stop Trip Event (Default: `vehicle/engine/not_running`|`vehicle/engine/stopped`)
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
See more here: [Setup power cycle for an electric vehicle](/getting_started/electric_vehicles/power-cycle-for-electric-vehicles/)
:::

:::note
For [AutoPi](https://www.autopi.io) [Mini](https://www.autopi.io/hardware/autopi-mini), the start/stop trip events are `trip/start` and `trip/stop`
:::


## How to Export Trips
Our Trips page gives you a complete overview of all trips taken by your vehicle or fleet. You’ll see key details like distance traveled, start and end locations, routes, and even event data — all displayed through various widgets on your dashboard.

### Getting started with API
For an even deeper dive into your data — whether you want raw data or aggregated insights — you can export trip data using our <a href="https://api.autopi.io/" target="_blank">REST API</a>. Here are steps you need to follow, but visit this guide for more detailed step by step guide: <a href="https://docs.autopi.io/getting_started/api/" target="_blank">Getting started with API</a>
1. Authenticate: head over to our <a href="https://api.autopi.io/" target="_blank">API documentation portal</a>, where you can authenticate by setting your token. You can use two different tokens for flexibility or send requests manually using tools like Postman.
2. Explore the Endpoints: once you’re authenticated, you’re ready to start exploring! 
3. Export Your Data: with full API access, you can now pull all the trip data you need — whether it’s a personal vehicle or your entire fleet.

### Retrieving list of trips and pulling of data
To get full trip data, you’ll first need to retrieve the list of trips, then pull the specific data you need for each trip’s duration:
1. You can access trip data from either the API Endpoint or AutoPi Cloud:
    - Trips endpoint provides start/stop times and trip summaries, check out <a href="https://api.autopi.io/#/logbook/logbook_trips_list/" target="_blank">Logbook - trips list</a>.
    - Trips page, gives you an opportunity for the trips to be exported to excel/csv format as mentioned above.
2.  Use these endpoints to pull the data: <a href="https://api.autopi.io/#/logbook/logbook_storage_read_list" target="_blank">Logbook storage read list</a> and <a href="https://api.autopi.io/#/logbook/logbook_storage_raw_list" target="_blank">Logbook storage raw list</a>  

Be sure to follow this guide on how to authenticate and use our REST API to get everything set up smoothly: <a href="https://docs.autopi.io/getting_started/api/" target="_blank">Getting started with API</a>.


:::note
The reason that there is no single endpoint way to retrieve all data for a specific trip is because
there can be a lot of data for trips, and our system can query and filter very large amounts of data
very very fast, but the downside is that it is not really geared towards downloading large amounts
of data in one go.
:::

:::tip
If you have our AutoPi TMU CM4 device, you can also set up automatic exporting of trips for your vehicle or fleet. 
For business customers we also support automatic exporting of trips which will call a webhook on
an external system signalling that an export can be downloaded. Read more about <a href="https://docs.autopi.io/cloud/fleet_management/vehicles/trips/automatic-exports/" target="_blank">Automatic Exports</a>.
:::