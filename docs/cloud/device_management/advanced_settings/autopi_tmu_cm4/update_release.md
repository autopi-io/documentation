---
id: cloud-config-update-release
title: Update Release
---

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| PAUSE WORKERS | Pause worker threads before updating in order to release system resources? | bool | False | - |
| DEMAND | Demand that the latest software release is installed on next shutdown? | bool | False | - |
| AUTOMATIC | Automatically keep the device updated with the lastest software release? | str | False | - |
| ATTEMPTS LIMIT | How many times the device will keep retrying the update. | int | 5 | - |
