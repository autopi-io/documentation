---
id: cloud-config-vehicle
title: Vehicle
---

## Ignition Event

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| SOURCES | Which sources should be the basis for triggering ignition events? | str | ['bat_charging'] | - |

#### Transition To Off

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| MATCH COUNT | How many sources must agree before transitioning to 'off'? If undefined or zero all sources must agree. | int | - | - |
| ALLOW DUPLICATES | Allow duplicate 'off' events to be triggered one after the other? For example, when sources have the same outcome. | bool | False | - |
| DETAIN PERIOD | How long should the state remain unchanged before the 'off' event is triggered? | int | - | s |

#### Transition To On

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| MATCH COUNT | How many sources must agree before transitioning to 'on'? If undefined or zero all selected sources must agree. | int | 1 | - |
| ALLOW DUPLICATES | Allow duplicate 'on' events to be triggered one after the other? For example, when sources have the same outcome. | bool | False | - |
| DETAIN PERIOD | How long should the state remain unchanged before the 'on' event is triggered? | int | - | s |

## Trip Event

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| SOURCES | Which sources should be the basis for triggering trip events? | str | ['acc_motion', 'gnss_movement'], ['acc_motion', 'gnss_movement'] | - |

#### Transition To Start

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| MATCH COUNT | How many sources must agree before transitioning to 'start'? If undefined or zero all selected sources must agree. | int | 1 | - |
| ALLOW DUPLICATES | Allow duplicate 'start' events to be triggered one after the other? For example, when sources have the same outcome. | bool | False | - |
| DETAIN PERIOD | How long should the state remain unchanged before the 'start' event is triggered? | int | 5 | s |

#### Transition To Stop

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| MATCH COUNT | How many sources must agree before transitioning to 'stop'? If undefined or zero all sources must agree. | int | - | - |
| ALLOW DUPLICATES | Allow duplicate 'stop' events to be triggered one after the other? For example, when sources have the same outcome. | bool | False | - |
| DETAIN PERIOD | How long should the state remain unchanged before the 'stop' event is triggered? | int | 300 | s |
