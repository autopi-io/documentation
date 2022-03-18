---
id: cloud-config-bluetooth
title: Bluetooth
---

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| MODE | Setup bluetooth mode for the built-in device. Changes require a system reboot to take effect. | str | disable | - |

## Expansion

#### Le

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| MAC ADDRESS | MAC address of the BLE device. | str | - | - |
| DEVICE | Specify Bluetooth Low Energy device provided by expansion board connected to the AutoPi main board. | str | - | - |

###### Firmware

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| VERSION | Version number of the BLE firmware release. | str | 3.2.1 | - |

###### Gatt Terminal

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| ALLOW COMMAND REGEX | Specify regular expression for allowed command(s) that can be executed via the GATT terminal service. | str | - | - |
