---
id: cloud-config-mqtt
title: Mqtt
---

## Broker

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| INSTALL | Run a local broker/server on the device? | str | none | - |

#### Bind

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| ADDRESS | Specify which address the broker/server should bind to. | str | 0.0.0.0 | - |
| PORT | Specify which port the broker/server should listen on. | int | 1883 | - |

## Returner

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| ENABLED | Enable MQTT returner for this device. The returner will automatically be added as hook in all services. | bool | False | - |

#### Connection

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| CLIENT ID | The unique client ID string used when connecting to the broker. | str | AutoPi-XXXXXXXXXXXX | - |
| HOST | Specify the hostname or IP address of the broker. | str | localhost | - |
| PORT | The port of the broker to connect to. Note that the default port for MQTT over SSL/TLS is 8883. | int | 1883 | - |
| PROTOCOL | Specify the version of the MQTT protocol to use. | str | MQTTv311 | - |
| TLS | Enable SSL/TLS support? | bool | False | - |

###### Authentication

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| USERNAME | Username for broker authentication. | str | - | - |
| PASSWORD | Password for broker authentication. | str | - | - |

###### Tls

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| CA CERTS | Path to the Certificate Authority certificate files that are to be treated as trusted. | str | - | - |
| CERT FILE | String pointing to the PEM encoded client certificate key. | str | - | - |
| KEY FILE | String pointing to the PEM encoded client private key. | str | - | - |
| CERT REQS | Defines the certificate requirements that the client imposes on the broker. | str | CERT_REQUIRED | - |
| VERSION | Specifies the version of the SSL/TLS protocol to be used. | str | - | - |
| CIPHERS | String specifying which encryption ciphers are allowable for this connection. | str | - | - |
