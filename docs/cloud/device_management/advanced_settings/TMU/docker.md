---
id: cloud-config-docker
title: Docker
---

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| ENABLED | Enable support for docker containers. Enabling this will install balena-engine on the device. | bool | False | - |
| CONTAINER WHITELIST | A list of container names that will be whitelisted, so that the docker release process will not remove them during the deploy process. | str | - | - |
