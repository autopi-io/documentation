---
id: cloud-config-trip
title: Trip
---

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| REOPEN LIMIT | For how long time can an ended trip be reopened? | int | 600 | s |
| AUTO EXPORT | Should trips be auto-exported when they finish? | bool | False | - |

## Event

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| END TAGS | Which event tags can end an active trip? Navigate to the Events page to view actual events for Device. | str | ['vehicle/engine/stopped', 'vehicle/engine/not_running'], ['vehicle/engine/stopped', 'vehicle/engine/not_running'] | - |
| START TAGS | Which event tags can start a new trip or reopen latest? Navigate to the Events page to view actual events for Device. | str | ['vehicle/engine/running'] | - |
