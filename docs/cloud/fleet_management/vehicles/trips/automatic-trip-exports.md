---
id: automatic-exports
title: Automatic Exports
---
import CardGrid from "/components/CardGrid" ;

# Automatic Exporting
When enabled for a device, it will automatically trigger exports when a trip ends, and when an export is finished, it will send notifications (mail and/or JSON Http request)

:::tip
Contact [sales@autopi.io](mailto:support@autopi.io) to get more information.
:::

## Endpoints Overview

* `GET tasks/` 
Returns all tasks for the current customer
* `GET tasks/{task_id}/result/` Downloads the exported data from the task
* `GET tasks/{task_id}/remove_result/` Removed the exported data
* `GET logbook/trips/?device=device_id` Returns all trips for the specific device. (device querystring can be omitted, to show all trips for customer)

## How to Enable the Automatic Trip Export Functionality

The setting should be enabled per device, and this is done in Device > Advanced Settings > Trip > Auto Export
This can also be managed automatically for the entire fleet by using a template.

## Overview - Step by Step

1. The device sends an event that causes the server to trigger the trip_end event.
   This can be configured in the advanced settings.
   By default trips are started on an `vehicle/engine/running` event and stopped on `vehicle/engine/not_running|stopped` event.

2. This trip_end event causes a trip export to be scheduled, and will execute the export after the configured trip reopen limit, which by default is set to 10 minutes (600 seconds). This is because we need to make sure that all data from the device has been uploaded properly, before the export is executed.
   The minimum time it will wait to do the trip export after a trip ends, is 10 minutes.
   This means that even if the trip reopen limit is set to 1 second, the export will not run untill after 10 minutes.

   It also means that if a trip is reopened a number of times, it can execute multiple exports, each one overwriting the last.
   It will not schedule a new export if another is already running.
   
   Read more about how trips works [here](/cloud/fleet_management/vehicles/trips/).

3. When a trip export is scheduled, you can see the status with the tasks endpoint `tasks/`
   Where you can also see the ID and the trip ID of the trip being exported.
   
   It will only ever create one task per trip, ie. the list of tasks is one-to-one with trips.

   An export of a trip with the default set of logging should take only a few seconds, it of course depends on how long the trip is, and how much data is logged, as that will change the export time taken considerably. 
   But we are still talking seconds or minutes as it should for example, be able to export 10000 logged datapoints ever 400ms or so. 
   So a trip with 1mio datapoints should take roughly 40 seconds.

4. When the trip export finishes, it will send a signal to any listening triggers, which can be configured to send an email and/or a JSON payload. They are configured on the triggers page on the frontend on the `Triggers` page.
   The trigger type must be set to `signal` type, and it must target the signal `trip_export_finished`.

5. The exported data package can be downloaded by calling the `tasks/ID/result/` endpoint, which will return the file `TRIP_ID.json.gz` containing the exported data. After you have downloaded the exported data, you must remove the exported result by calling the endpoint `tasks/ID/clear_result/`
   This is done to prevent the system from re-broadcasting that the export is ready for download, as this is done once a day for all exports older than 2 hours, the reason for this is that if the webhook request is somehow missed, it will still get picked up later.

## Authentication

It's possible to access the API with a pre-generated API token, so that you will not have to authenticate and cache the JWT token as used when logging in to the frontend.
To use this new API token, simply set the following header on the request.

~~~http
Authorization: APIToken TOKEN
~~~

## Data Structure
The trip + any uploaded data is exported as json lines - this means that every line has a valid json object, see more here: http://jsonlines.org/

The data is sorted in ascending order.
The exported file is gzipped, so it must be unpacked before it can be interpreted as json.

The structure is as follows.
The first item is the trip object, and the next item(s) is all the data logged during that trip.

Example:

~~~json
{"id": "TRIP_UUID", "start_time_utc": "2020-01-01T08:16:52.962918Z", "end_time_utc": "2020-01-01T08:22:00.942395Z", "start_position_lat":  "56.144...", .... }

{"@vid": VEHICLE_ID, "@uid": "DEVICE_UNIT_ID", "@ts": "2020-01-01T08:16:52.962918Z", "@tag": "vehicle/engine/running", "@t": "event.vehicle.engine", "@rec": "2020-01-01T08:17:56.128398Z"}

{"obd.rpm.unit": "revolutions_per_minute", "@vid": VEHICLE_ID, "@uid": "DEVICE_UNIT_ID", "obd.rpm.value": 830.5, "@ts": "2020-01-01T08:16:53.001449Z", "@t": "obd.rpm", "@rec": "2020-01-01T08:17:56.128138Z"}

{"@vid": VEHICLE_ID, "@uid": "DEVICE_UNIT_ID", "@ts": "2020-01-01T08:16:53.107849Z", "@t": "obd.coolant_temp", "obd.coolant_temp.value": 19, "obd.coolant_temp.unit": "degC", "@rec": "2020-01-01T08:17:56.128149Z"}
~~~

## Manually Executing Trip Export Task

After a while the trip export will no longer be present on the server, and if a new export is needed, you can re-run the export for an old trip, depending on the data retention conditions for the specific environment, using the `tasks` endpoing like so.

`POST tasks/`
~~~json
{
    "task": "core.tasks.es_trip_export",
    "args": [],
    "kwargs": {
        "trip_id": "TRIP_ID"
    }
}
~~~

This will return a new task object, and using the task id you can retrieve the result using the above mentioned `tasks/ID/result/` endpoint, when the task has completed.


## Manually Retrieving Trip Export Task Results

To retrieve the exported data, you can retrieve a list of the tasks, and get the task ids from there.

`GET tasks/`
~~~json
[{
    "id": 100,
    "created_at": "2020-01-27T17:30:42.460311Z",
    "task": "core.tasks.es_trip_export",
    "args": [],
    "kwargs": {
        "trip_id": "00000000-0000-0000-0000-000000000000"
    },
    "state": "SUCCESS"
}]
~~~

In the response for each task you can see the task ID, and which trip ID it was executed for.

Now you can use the task ID to retrieve the result, in this case: 100

`GET tasks/100/result/`



<br>
</br>

## Let's keep in touch!
Thank you for choosing AutoPi. We're excited to see what you will achieve with your AutoPi device! 

<CardGrid home>
[![](/img/shared/favicon.ico) **Contact our sales team** You can build on top of AutoPi.](https://www.autopi.io/contact/)

[![](/img/shared/support_icon.png) **Get help from our support team** Let us know about your technical questions.](https://www.autopi.io/support/)

</CardGrid>