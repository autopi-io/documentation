---
id: cloud-config-can-logging
title: Can Logging
---

## Disk Housekeeper

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| ENABLED | Enable automatic disk cleanup to prevent the disk from running full? The oldest files will be deleted first. | bool | True | - |
| USE TARGET | Disk usage percentage which is the target to reach when deleting files. | int | 85 | % |
| USE LIMIT | Disk usage percentage which is the limit for when file deletion should begin. | int | 90 | % |
| CRITICAL USE LIMIT | Disk usage percentage that is considered critical and which causes an event to be triggered. | int | 95 | % |
| WORKER DELAY | Delay after startup before performing the first check for files to cleanup. | int | 60 | s |
| WORKER INTERVAL | Time period between each check for files to cleanup. | int | 60 | s |

## Frame Listener

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| WORKER INTERVAL | Time period between each check of the executing frame listener process(es). | int | 10 | s |
| WORKER DELAY | Delay at startup before executing of the frame listener process(es). | int | 0 | s |
| WORKER RUN AT | When should the frame listener process(es) be running? | str | startup | - |

## Output Handler

#### S3

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| WORKER INTERVAL | Time period between each check of the executing AWS S3 sync process(es). | int | 10 | s |
| WORKER DELAY | Delay after startup before executing of the AWS S3 sync process(es). | int | 60 | s |
| WORKER AUTO START | Enable automatic start of the AWS S3 sync process(es). | bool | True | - |
