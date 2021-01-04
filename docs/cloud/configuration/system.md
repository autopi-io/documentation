---
id: cloud-config-system
title: System
---

## Display

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| ENABLED | If unused, disable HDMI display to conserve power. | bool | True | - |

#### Gpu

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| MEMORY | Amount of memory that is addressable from the GPU. Set as low as possible to give the system as much memory as possible. | int | 16 | - |

## Locale

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| COUNTRY CODE | The overall country code used on the device (in WiFi configuration etc). The default value is derived from the one specified in your customer profile. | iso_country_code | GB | - |

## Logging

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| LEVEL | The log level of the Salt Minion log. Change if you want more detailed logging. | str | warning | - |

#### Kernel

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| CLEAR BUFFER | Allow clearing of the kernel ring buffer when retrieving log entries? | bool | True | - |

## Security

#### Decryption

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| FUNCTION | Qualified name of the function used to decrypt on the device. | str | - | - |

#### Encryption

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| KEY | Key used for encryption. It must be 16, 24, or 32 characters long. | str | - | - |
| ALGORITHM | Algorithm used for encryption. | str | AES | - |

## Setup

#### Mpcie

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| MODULE | Specify which modem is installed in the Mini PCI Express slot. Change if you replace the modem. | str | ec2x | - |

## Time

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| SOURCE | Choose strategy for how to keep track of the current time. | str | fake | - |

#### Rtc

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| AUTO UPDATE | Allow automatic update of real-time clock after NTP synchronization? | bool | True | - |

## User

#### Pi

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| PASSWORD | Password for the pi user. | str | autopi2018 | - |
