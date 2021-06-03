---
id: cloud-config-tracking
title: Tracking
---

## Gnss

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| FIX FREQUENCY | Set the fix frequency of the GNSS engine. | int | 1 | Hz |

## Logger

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| INTERVAL | How often should the position of the vehicle be logged? The smaller the interval, the more data is potential logged. Disabled if set to zero. | float | 5 | s |
| FILTER DUPLICATES | Filter out duplicate measurements? | bool | True | - |
| CLOUD RETURNER | Which cloud returner should be used? | str | cloud | - |
