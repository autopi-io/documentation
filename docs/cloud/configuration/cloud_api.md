---
id: cloud-config-api
title: Cloud Api
---

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| URL | The endpoint URL of the API where data is pushed to. | url | https://api.autopi.io/logbook/storage | - |
| AUTH TOKEN | The authentication token used in HTTP header when pushing data to the API. | str | XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX | - |

## Compression

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| ALGORITHM | Compress data with selected algorithm before uploading. | str | None | - |
| LEVEL | Integer from 0 to 9 controlling the level of compression; 1 is fastest and produces the least compression, and 9 is slowest and produces the most compression. 0 is no compression. | int | 9 | - |

## Upload

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| MAX BATCH SIZE | The maximum amount of entries to include in an upload batch. | int | 1000 | - |
| MAX RETRY | The maximum retry attempts before transferring batch to fail queue. Retry and fail queues are disabled if set to zero, meaning that pending will block until success. | int | 30 | - |
| FAIL TTL | How many days of retention before a fail queue is deleted? | int | 30 | d |
| SPLAY | The maximum amount of time in seconds between consecutive uploads of batches. The actual delay is a randomly generated value between zero and the splay value. In error scenarios, the delay is increased by an incrementing factor. | int | 10 | s |
| INTERVAL | How often should cached data be uploaded to the cloud endpoint? | float | 60 | s |
| TIMEOUT | How long to wait for server to respond? | int | 60 | s |
| EVENT REGEX | In addition to repeated interval, upload data to cloud when event(s) occur. | str | ^system/power/(sleep\|hibernate\|reboot) | - |
