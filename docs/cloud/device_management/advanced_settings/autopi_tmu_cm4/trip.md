---
id: cloud-config-trip
title: Trip
---

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| REOPEN LIMIT | For how long time can an ended trip be reopened? | int | 600 | s |
| ACTIVE TRIP MAX AGE | The maximum trip age in seconds before it will be closed. Defaults to 90 minutes. | int | 5400 | s |
| DYNAMIC TRIP BUFFER | How long into the future should artificially closed trips be maximally extended to. Defaults to 60 minutes | int | 3600 | s |
| MIN BUFFER SPEED | Speed cutoff for how fast the vehicle should move before registered. Defaults to 5 km/h | int | 5 | km/h |
| MIN BUFFER INTERVAL | How many minutes between each interval should we count in a batch to take average traveling speed for. Defaults to 5 minutes | int | 5 | min |
| MAX TRIP OFFSET | Max distance for last position to be used when determine trip start position | int | 20 | km |
| ENABLE TRIP OFFSET | Enable the max distance offset between the first position before trip and first position inside trip | bool | True | bool |
| TRIP LOGIC VERSION | Which trip logic algorithm version to use, or disable the functionality. | str | Improved | - |

## Final Event

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| END TAGS | Which event tags can end an active trip, which do not allow reopening? Navigate to the Events page to view actual events for Device. | str | ['vehicle/rfid/.*/(unauthenticated\|rejected)'] | - |

## Primary Event

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| START TAGS | Which event tags can start a new trip or reopen latest? Navigate to the Events page to view actual events for Device. | str | ['vehicle/engine/running'] | - |
| END TAGS | Which event tags can end an active trip? Navigate to the Events page to view actual events for Device. | str | ['vehicle/engine/stopped'] | - |

## Secondary Event

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| START TAGS | Which event tags can start a new trip or reopen latest? Navigate to the Events page to view actual events for Device. | str | None | - |
| END TAGS | Which event tags can end an active trip? Navigate to the Events page to view actual events for Device. | str | ['vehicle/engine/not_running'] | - |
