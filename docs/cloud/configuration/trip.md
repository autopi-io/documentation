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
| START TAGS | Which event tags can start a new trip or reopen latest? | str | vehicle/engine/running | - |
| END TAGS | Which event tags can end an active trip? | str | vehicle/engine/stopped, vehicle/engine/not_running | - |
