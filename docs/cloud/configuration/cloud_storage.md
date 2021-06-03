---
id: cloud-config-cloud-storage
title: Cloud Storage
---

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| DEFAULT RETURNER | Which cloud returner should be used as default? Only change this value if you know what you are doing. | str | cloud | - |

## Https

#### Cache

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| MAX BATCH SIZE | The maximum amount of entries to include in an upload batch. | int | 1000 | - |
| MAX RETRY | The maximum retry attempts before transferring batch to fail queue. Retry and fail queues are disabled if set to zero, meaning that pending will block until success. | int | 30 | - |
| FAIL TTL | How many days of retention before a fail queue is deleted? | int | 30 | d |

#### Endpoint

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| URL | The endpoint URL of the API where data is pushed to. | url | https://api.autopi.io/logbook/storage | - |
| AUTH TOKEN | The authentication token used in HTTP header when pushing data to the API. | str | XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX | - |

#### Upload

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| INTERVAL | How often should cached data be uploaded to the cloud endpoint? | float | 60 | s |
| SPLAY | The maximum amount of time in seconds between consecutive uploads of batches. The actual delay is a randomly generated value between zero and the splay value. In error scenarios, the delay is increased by an incrementing factor. | int | 10 | s |
| TIMEOUT | How long to wait for server to respond? | int | 60 | s |
| EVENT REGEX | In addition to repeated interval, upload data to cloud when event(s) occur. | str | ^system/power/(sleep\|hibernate\|reboot) | - |

## Jsonl Returner

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| FILENAME FORMAT | How should the JSONL files be named? | str | {now:%y%m%d%H%M%S}_{pid}.jsonl | - |
| DIRECTORY | In which directory should the JSONL files be stored? | str | /opt/autopi/data | - |
| FILE MODE | In which mode should new files be opened? | str | a | - |

#### Async File Writer

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| FLUSH THRESHOLD | Size limit for when the internal buffer should be written to disk. | int | 5242880 | b |
| FLUSH TIMEOUT | Time limit for when the internal buffer should be written to disk. | int | 1 | s |
| BUFFER SIZE | Size of the internal buffer. | int | 52428800 | b |
| BUFFER HIGH WATERMARK | Size for buffer highwater mark warning. | int | - | b |

#### File Rotation

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| SIZE THRESHOLD | Size limit for when to rorate to a new file. | int | 524288000 | b |
| CRON EXPRESSION | Cron expression for when to rotate to a new file. | str | 0 0 * * * | - |
| INTERVAL | Time interval for when to rorate to a new file. | int | - | s |

## Jsonl Shipper

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| ENABLED | Enable service for shipping JSONL files to cloud? | bool | False | - |

#### Cleanup

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| INTERVAL | How often should cleanup of harvested JSONL files be performed? | int | 3600 | s |
| OLDER THAN | The minimum age before fully harvested JSONL files are removed. | int | 3600 | s |

#### Input

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| PATHS | Where to crawl for JSONL files? | str | ['/opt/autopi/data/*.jsonl'] | - |

#### Output

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| HOSTS | Kafka broker addresses from where to fetch the cluster metadata. The cluster metadata contain the actual Kafka brokers messages are published to. | str | ['localhost:9093'] | - |
| USERNAME | The username for connecting to Kafka. | str | XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX | - |
| PASSWORD | The password for connecting to Kafka. | str | XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX | - |
