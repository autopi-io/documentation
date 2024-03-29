---
id: cloud-config-wifi
title: Wifi
---

## Client

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| ALLOW SSH | Allow incoming SSH connections on port 22 from the WiFi client network? | bool | False | - |
| ENABLED | Enable connection to WiFi networks? | bool | True | - |

## Hotspot

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| PASS | The password to access the hotspot. Length must be between 8 and 63 characters. | str | XXXXXXXX-XXXX | - |
| CHANNEL | Which channel to use for the hotspot. If connected to a WiFi access point, due to hardware limits, the hotspot will use the same channel as the connected WiFi access point. | int | 6 | - |
| HIDE SSID | Should the hotspot name be broadcasted? | bool | False | - |
| SSID | The name of the hotspot. Length must be between 1 and 32 characters. | str | AutoPi-XXXXXXXXXXXX | - |

#### Client

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| ALLOW LIST | Specify which client MAC addresses are allowed to connect to the WiFi hotspot. | str | - | - |

#### Dhcp

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| HOSTS | Supply parameters for specified hosts using DHCP. Note that IP addresses do not have to be in the specified range, they just need to be on the same network. | str | - | - |
| OPTIONS | Specify different or extra options to DHCP clients. | str | - | - |
| RANGE | Specify the range of addresses available for lease and optionally a lease time. | str | 192.168.4.2,192.168.4.20,255.255.255.0,24h | - |

#### Dns

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| HOSTS | Specify additional host entries. | str | ['192.168.4.1 local.autopi.io'] | - |
