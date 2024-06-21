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
| FILTER DUPLICATES | Filter out duplicate measurements? | bool | True | - |
| RETURNERS | Which cloud returner(s) should be used? | str | ['cloud'] | - |
| INTERVAL | How often should the position of the vehicle be logged? The smaller the interval, the more data is potential logged. Disabled if set to zero. | float | 5 | s |
