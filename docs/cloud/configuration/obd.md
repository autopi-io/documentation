---
id: cloud-config-obd
title: Obd
---

## Advanced

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| ADAPTIVE TIMING | Set adaptive timing mode. Sometimes, a single OBD requests results in multiple response frames. The time between frames varies significantly depending on the vehicle year, make, and model – from as low as 5ms up to 100ms. | int | 1 | - |
| RESPONSE TIMEOUT | When adaptive timing is on, this sets the maximum time that is to be allowed, even if the adaptive algorithm determines that the setting should be longer. In most circumstances, it is best to let the adaptive timing algorithm determine what to use for the timeout. | int | 50 | ms |
| PRINT SPACES | Turn printing of spaces in OBD responses on or off. To get better performance, turn spaces off. | bool | True | - |

## Elm327 Proxy

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| ENABLED | Enable the ELM327 proxy to support 3rd party mobile apps like Torque Lite/Pro on Android and Car Scanner on iOS. This is currently an experimental feature. | bool | False | - |
| PORT | Specify which port to listen on. | int | 35000 | - |
| PAUSE WORKERS | Pause all OBD worker threads while the ELM327 proxy is being used? The threads will be resumed when the proxy is no longer in use. | bool | True | - |
| RESET AFTER USE | Reset the underlying STN subsystem after the proxy has been used? | bool | True | - |

#### Logging

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| FILE | The filename to which logs should be written. The default directory path is '/var/log/salt' if none other specified. Leave empty to disable logging. | str | elm327_proxy.log | - |
| LEVEL | Change if you want more detailed logging. Please note that more logging can have a negative impact on performance. | int | 20 | - |
