---
id: cloud-config-wireguard
title: Wireguard
---

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| ENABLED | Enable WireGuard VPN? | bool | False | - |
| ALLOW SSH | Allow incoming SSH connections on port 22 from the WireGuard network? | bool | True | - |

## Interface

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| NAME | Specify the configuration name of the WireGuard interface. | str | wg0 | - |
| PRIVATE KEY | Enter the generated private key for this interface. | str | - | - |
| PUBLIC KEY | Enter the generated public key for this interface. | str | - | - |
| ADDRESS | Specify the IP address of the interface. | str | - | - |
| MTU | Specify the Maximum Transmission Unit of the interface. It is recommended to verify the MTU with the command: 'ping -M do \<Peer IP\> -s \<MTU\>' | int | - | - |

## Peer

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| PUBLIC KEY | Specify the public key of the peer. | str | - | - |
| ALLOWED IPS | Specify the allowed IPs from the peer. | str |  | - |
| ENDPOINT | Specify the server endpoint to connect to. | str | - | - |
| PERSISTENT KEEPALIVE | Interval at which keepalive packets should be sent to the server endpoint. | int | 25 | - |
| LATENCY CHECK INTERVAL | Interval for how often the latency to the server endpoint should be measured. | int | 30 | - |
