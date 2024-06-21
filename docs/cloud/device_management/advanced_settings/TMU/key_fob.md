---
id: cloud-config-key-fob
title: Key Fob
---

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| EXTENSION PORT | Which user extension port on the AutoPi main board is the key fob connected to? | int | 2 | - |
| ENABLED | Enable control of a key fob connected to the AutoPi main board. | bool | False | - |

## Button

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| ACTIONS | Define available actions corresponding to the key fob buttons. | json | {"duration": 0.25, "name": "green", "pin": {"initial": true, "wire": "green"}}, {"duration": 0.25, "name": "white", "pin": {"initial": true, "wire": "white"}}, {"duration": 0.25, "name": "grey", "pin": {"initial": true, "wire": "grey"}}, {"duration": 0.25, "name": "red", "pin": {"initial": true, "wire": "red"}}, {"duration": 0.25, "name": "black", "pin": {"initial": true, "wire": "black"}} | - |

## Pins

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| DELAY AFTER INITIALIZATION | Specify a delay after initialization of GPIO pins to ensure a pause before execution of any button actions. | int | 0 | s |
| RESET AFTER DELAY | How long time after powering off the key fob should the GPIO pins be reset (all pins set to low)? If a negative value is specified, no reset occurs. If set to zero, reset occurs immediately without any delay. | int | -1 | s |
| LAZY INITIALIZATION | Initialize GPIO pins lazily after first manual key fob power state check (or change) instead of during startup? | bool | False | - |
