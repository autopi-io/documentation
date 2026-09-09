---
id: core-commands-intro
title: Introduction
---
import CardGrid from "/components/CardGrid"; 

This guide provides a comprehensive reference for all AutoPi core commands available on your device. Execute powerful device operations remotely from the cloud, locally via WiFi, or directly through the Linux shell. Commands enable you to interact with your vehicle's systems, manage power states, configure logging, and automate complex workflows.


### Execution methods:
- **Cloud Terminal** — execute commands remotely from the AutoPi Cloud platform. see [Cloud Commands](https://docs.autopi.io/core/commands/core-commands-cloud/). 
- **Local Terminal** — run commands locally via the device's WiFi hotspot. See [Local Development Workflow](https://docs.autopi.io/developer_guides/local-development-workflow/) for detailed setup instructions. 
- **SSH** — execute commands remotely over SSH for secure access to your device. See [How to SSH to Your Device](https://docs.autopi.io/developer_guides/how-to-ssh-to-your-device/) for connection setup.
- **REST API** — programmatic command execution for automation and integration. See [Rest API execute](https://api.autopi.io/#/dongle-execute-create).

### Common command categories:
- **[OBD Commands](http://docs.autopi.io/core/commands/core-commands-obd/)** — query vehicle data, send OBD requests, analyze CAN messages.
- **[Power Management](https://docs.autopi.io/core/commands/core-commands-power/)** — control power states, manage sleep timers, monitor voltage.
- **[Service Management](https://docs.autopi.io/core/services/)** — start, stop, and configure device services.
- **[System Commands](https://docs.autopi.io/cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-system/)** — monitor device metrics, retrieve logs, manage configurations.
- **[CAN Logging](https://docs.autopi.io/core/commands/core-commands-can/) and Data Collection** — configure loggers, manage data streams, export data.
- **[Network Commands](https://docs.autopi.io/cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-system/#network)** — manage connectivity, configure network interfaces.
- **[Custom Commands](https://docs.autopi.io/cloud/device_management/custom-code/)** — create and execute Python-based custom automation.

### Key features:
- Multi-interface execution (Cloud, local, CLI).
- Real-time command feedback and response data.
- Error handling and troubleshooting information.
- Command chaining and automation support.
- REST API integration for programmatic access.
- Python support for custom command development.
- Comprehensive command reference documentation.

:::note
You can create your own custom commands in Python through the [AutoPi](https://www.autopi.io) Cloud. When logged in, go to: _Device_ -> _Custom Code_
:::

