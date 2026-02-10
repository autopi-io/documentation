---
id: cloud-config-doip
title: Doip
---

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| ENABLED | Enable the DOIP UDS service? | bool | False | - |
| NO GATEWAY | Do not use the 'eth0' interface as a default gateway. | bool | True | - |
| HOST | Hostname or IP of the TCP endpoint. | str | 127.0.0.1 | - |
| PORT | Port number of the TCP endpoint. | int | 13400 | - |
| TIMEOUT | Timeout of the TCP connection. | float | 0.1 | s |
| DEFAULT PIN SETUP | Choose between main or alternative configuration of DOIP pins in the OBD-II connector. | str | main | - |
| BOARD VERSION | Version of the installed DOIP HAT board. | str | 1.6 | - |
