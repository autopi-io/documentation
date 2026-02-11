---
id: cloud-config-wifi
title: Wifi
---

## Antenna

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| EXTERNAL | Enable external antenna for WiFi and Bluetooth? | bool | True | - |

## Client

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| ENABLED | Enable connection to WiFi networks? | bool | True | - |
| ALLOW SSH | Allow incoming SSH connections on port 22 from the WiFi client network? | bool | False | - |

#### Connection

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| OVERRIDE | Overwrite all wifi settings that may already be specified on the device itself? | bool | False | - |
| NETWORK ENTRIES | JSON of wifi network to connect to. This field accepts all options that `wpa_supplicant.conf` for an RPI accepts. Example {'ssid': 'my network', 'pass': 'SuperSecretPass', 'key_mgmt': 'WPA-PSK'}. Required are ssid and pass, rest is optional. Will not be applied to device unless override is set to true. | json | {"ssid": "network1", "pass": "SuperSecretPassword"} | - |
| DHCPCD ENTRIES | Specify additional 'dhcpcd' entries for the 'wlan0' interface, if available. Example static ip_address=192.168.1.0/24 | str | ['metric 200'] | - |

## Hotspot

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| SSID | The name of the hotspot. Length must be between 1 and 32 characters. | str | AutoPi-XXXXXXXXXXXX | - |
| HIDE SSID | Should the hotspot name be broadcasted? | bool | False | - |
| PASS | The password to access the hotspot. Length must be between 8 and 63 characters. | str | XXXXXXXX-XXXX | - |
| CHANNEL | Which channel to use for the hotspot. If connected to a WiFi access point, due to hardware limits, the hotspot will use the same channel as the connected WiFi access point. | int | 6 | - |
| SECURITY | Which security mechanism to use for the hotspot. | int | 2 | - |

#### Client

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| ALLOW LIST | Specify which client MAC addresses are allowed to connect to the WiFi hotspot. | str | - | - |

#### Dhcp

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| RANGE | Specify the range of addresses available for lease and optionally a lease time. | str | 192.168.4.2,192.168.4.20,255.255.255.0,24h | - |
| HOSTS | Supply parameters for specified hosts using DHCP. Note that IP addresses do not have to be in the specified range, they just need to be on the same network. | str | - | - |
| OPTIONS | Specify different or extra options to DHCP clients. | str | - | - |

#### Dns

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| HOSTS | Specify additional host entries. | str | ['192.168.4.1 local.autopi.io'] | - |
