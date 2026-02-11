---
id: cloud-config-cellular
title: Cellular
---

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| OVERRIDE | Overwrite all cellular settings that may already be specified on the device itself? | bool | False | - |

## Connection

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| MTU | The MTU (Maximum Transmission Unit) to be used for the network connection. Only change this value if you know what you are doing. | int | 1500 | - |

#### Checker

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| PING ADDRESS | The address to ping when the state of the cellular connection is checked. | str | google.com | - |
| ONLINE INTERVAL | How often should the connection state be re-checked when already considered online? | int | 300 | s |
| OFFLINE INTERVAL | How often should the connection state be re-checked when already considered offline? | int | 30 | s |

## Sim

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| APN | The APN (Access Point Name) defines the network path for all cellular data connectivity. | str | internet | - |
| USERNAME | Optional username to be used togehter with the APN. | str | - | - |
| PASSWORD | Optional password to be used togehter with the APN. | str | - | - |
| PIN CODE | Optional PIN code required to unlock the SIM card. | str | - | - |
