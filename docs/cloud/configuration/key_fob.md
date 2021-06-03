---
id: cloud-config-key-fob
title: Key Fob
---

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| ENABLED | Enable control of a key fob connected to the AutoPi main board. | bool | False | - |
| EXTENSION PORT | Which user extension port on the AutoPi main board is the key fob connected to? | int | 2 | - |

## Button

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| ACTIONS | Define available actions corresponding to the key fob buttons. | json | {"name": "green", "pin": {"initial": true, "wire": "green"}, "duration": 0.25}, {"name": "white", "pin": {"initial": true, "wire": "white"}, "duration": 0.25}, {"name": "grey", "pin": {"initial": true, "wire": "grey"}, "duration": 0.25}, {"name": "red", "pin": {"initial": true, "wire": "red"}, "duration": 0.25}, {"name": "black", "pin": {"initial": true, "wire": "black"}, "duration": 0.25} | - |
