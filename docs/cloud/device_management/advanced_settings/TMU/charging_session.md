---
id: cloud-config-charging-session
title: Charging Session
---

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| REOPEN LIMIT | For how long time can an ended charging session be reopened? | int | 600 | s |

## Event

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| START TAGS | Which event tags can start a new charging session or reopen latest? Navigate to the Events page to view actual events for Device. | str | ['vehicle/engine/charging'] | - |
| END TAGS | Which event tags can end an active charging session? Navigate to the Events page to view actual events for Device. | str | ['vehicle/engine/not_charging'] | - |
