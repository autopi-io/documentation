---
id: index
slug: /
title: AutoPi Documentation
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import CardGrid from "/components/CardGrid"

Welcome to the official documentation for the [AutoPi platform](https://autopi.io).

Build, deploy, and scale connected vehicle solutions with confidence. This documentation gives you everything you need to work with AutoPi hardware, AutoPi Core software running on your devices, and our cloud solution at [my.autopi.io](https://my.autopi.io).

From first-time setup to advanced production workflows, you will find guides for onboarding, fleet operations, device management, APIs, integrations, troubleshooting, and custom development.

## Get Your Device Today and Get Started!

<p align="center">
  <img src={useBaseUrl('img/shared/autopi_devices_trans.png')} alt="AutoPi GEN3" width="400"/>
</p>


## What is [AutoPi](https://www.autopi.io)?

[AutoPi](https://autopi.io) combines rugged telematics hardware with a flexible cloud platform and open software architecture. It is designed for developers, engineering teams, and fleet operations that need reliable access to vehicle data and control.

AutoPi helps you move faster from pilot to production with:

- Open architecture for custom integrations
- Secure remote access and centralized device management
- API-first automation for scalable deployments
- Hardware options for different vehicle and project needs


The platform has two core parts: AutoPi Cloud and AutoPi Core.

- [AutoPi Cloud](https://my.autopi.io) is the central control layer for your devices, data, and automations.
- **AutoPi Core** runs on the device and handles edge logic, communication, and data collection.

Together, they deliver an end-to-end workflow for connected vehicle products.


## Why Choose AutoPi?

- Faster development with open [APIs](https://api.autopi.io)
- Scalable fleet operations in one cloud platform
- Flexible hardware for multiple vehicle types
- Developer-friendly [workflows](https://docs.autopi.io/cloud/device_management/custom-code/) for custom data pipelines and integrations
- Log raw and decoded CAN/CAN-FD/J1939/OBD-II data
- Integrate through [REST API](https://docs.autopi.io/getting_started/api/) and [MQTT](https://docs.autopi.io/developer_guides/configuring-mqtt/)
- Run custom edge applications with [Docker](https://docs.autopi.io/cloud/docker-on-autopi/)
- Manage [OTA updates](https://docs.autopi.io/cloud/device_management/software-updates/) and device [templates](https://docs.autopi.io/cloud/device_management/templates/) at fleet scale

Learn more about the platform at [autopi.io](https://autopi.io) and access the cloud at [my.autopi.io](https://my.autopi.io).


## AutoPi Devices 

<CardGrid home>

[![](/img/hardware/autopi_mini/AutoPi_Mini_5_Top_right.png) **AutoPi Mini** Built for fleet scaling and easy installation. CAN bus ready with support for legacy protocols. Supports a wide range of OEM parameters. Comes with built-in connectivity. View pricing.](https://shop.autopi.io/products/autopi-mini)

[![](/img/hardware/autopi_tmu_cm4/TMU_Floating_Topside_V1_scaled.png) **AutoPi TMU CM4** Based on Raspberry Pi Compute Module 4. Best for custom solutions that require higher compute performance and expansion options. Comes with built-in connectivity. View pricing.](https://shop.autopi.io/products/autopi-telematics-unit-cm4-4g-lte-edition)

[![](/img/hardware/autopi_canfd_pro/canfd_pro_trans.png) **AutoPi CAN-FD Pro** Based on Raspberry Pi Compute Module 4. Our most powerful device to date, designed for high-speed automotive data logging on dual CAN-FD channels. View pricing.](https://shop.autopi.io/products/autopi-can-fd-pro)

[![](/img/shared/autopi_devices_trans.png) **Comparison of all AutoPi devices** Compare our devices and find the best fit for your requirements.](https://www.autopi.io/hardware/compare/)

</CardGrid>


## Documentation

Explore the documentation by area. Whether you are getting started or building advanced workflows, you can quickly navigate to the section that fits your use case.

<CardGrid home>

[![](/img/shared/favicon-194x194.png) **Core Documentation** Understand how the AutoPi Core works.](/core/index.md)


[![](/img/shared/laptop_autopi_3_scaled.png) **Cloud Documentation** Learn how to make the most of your AutoPi Cloud Solution.](/cloud/index.md)


[![](/img/shared/guides_trans.png) **Guides** Get inspiration from our rich set of guides.](/getting_started/autopi_tmu_cm4/index.md)

[![](/img/hardware/autopi_tmu_cm4/TMU_Floating_Topside_V1_scaled.png) **Hardware** View hardware specific documentation.](/hardware/index.md)

[![](/img/getting_started/api/api_intro/api_frontpage.jpg) **API** Explore our rich API.](https://api.autopi.io/)

</CardGrid>


## Most Used Guides

Use these quick links to jump into the guides most teams use first. We maintain a broad set of guides across devices, cloud, hardware, and developer workflows so teams can move from setup to production with clear, practical steps.

### AutoPi TMU CM4

- [TMU CM4 Getting Started](https://docs.autopi.io/getting_started/autopi_tmu_cm4/): start here for setup, key concepts, and essential workflows.
- [Create Loggers](https://docs.autopi.io/getting_started/autopi_tmu_cm4/create-loggers-cm4/): configure logging to capture the data points you need.
- [Data Troubleshooting](https://docs.autopi.io/getting_started/autopi_tmu_cm4/cm4-data-troubleshooting/): diagnose common issues with missing or unexpected data.
- [4G Internet Setup Troubleshooting](https://docs.autopi.io/getting_started/autopi_tmu_cm4/4g-internet-setup-troubleshooting/): resolve connectivity issues on cellular deployments.

### AutoPi CAN-FD Pro

- [CAN-FD Pro Getting Started](https://docs.autopi.io/getting_started/autopi_canfd_pro/): get your device online and ready for data collection.
- [CAN-FD Pro User Guide](https://docs.autopi.io/getting_started/autopi_canfd_pro/pro-user-guide/): review the most important setup and usage steps in one place.
- [Accessing Files via SFTP/SCP](https://docs.autopi.io/getting_started/autopi_canfd_pro/accessing-files-via-sftp-on-autopi/): transfer logs and files securely to and from the device.
- [Set Up AWS S3 Bucket](https://docs.autopi.io/getting_started/autopi_canfd_pro/set_up_AWS_S3_bucket/): configure cloud storage for exporting and retaining data.
- [Data Troubleshooting](https://docs.autopi.io/getting_started/autopi_canfd_pro/pro-data-troubleshooting/): diagnose common issues with missing or unexpected data.
- [4G Internet Setup Troubleshooting](https://docs.autopi.io/getting_started/autopi_canfd_pro/pro-4g-internet-setup-troubleshooting/): resolve connectivity issues on cellular deployments.

### AutoPi Mini

- [AutoPi Mini Getting Started](http://docs.autopi.io/getting_started/autopi_mini/): learn the core setup flow for AutoPi Mini devices.
- [Create Mini Logger](https://docs.autopi.io/getting_started/autopi_mini/create-mini-loggers/): build your first logger for Mini-specific use cases.
- [Data Troubleshooting](https://docs.autopi.io/getting_started/autopi_mini/mini-data-troubleshooting/): troubleshoot common data and configuration issues.

### Cloud Solution

- [Cloud Overview](https://docs.autopi.io/cloud/fleet_management/): understand the structure and capabilities of the AutoPi Cloud.
- [Devices](https://docs.autopi.io/cloud/device_management/): manage and monitor your devices from one place.
- [Loggers](https://docs.autopi.io/cloud/device_management/device-loggers/): create and manage cloud-side loggers at scale.
- [Custom Code](https://docs.autopi.io/cloud/device_management/custom-code/): add advanced cloud workflows with custom scripts.
- [Diagnostics](https://docs.autopi.io/cloud/fleet_management/fleet-diagnostics/): investigate fleet health and identify device or data issues quickly.
- [Reports](https://docs.autopi.io/cloud/fleet_management/reports/): generate operational summaries and performance insights for your fleet.



## Developers
Want to dig right into the source code? Get full access here:


<CardGrid home>

[![](/img/shared/github.png) **AutoPi Core Github** Get the open-source code for the AutoPi Core.](https://github.com/autopi-io/autopi-core)

[![](/img/shared/github.png) **AutoPi Documentation Github** Participate in the documentation, it's open-source.](https://github.com/autopi-io/documentation)

</CardGrid>


### Developer Guides (Advanced)

- **Advanced diagnostics (DoIP):** Use the [DoIP hat](https://shop.autopi.io/products/doip-hat-v1-3) to expand diagnostic and maintenance capabilities. Start here: [How to set up DoIP](https://docs.autopi.io/developer_guides/setting-up-doip/)
- **Remote access:** Connect directly with [SSH to your device](https://docs.autopi.io/developer_guides/how-to-ssh-to-your-device/) or use [Tailscale](https://docs.autopi.io/getting_started/autopi_canfd_pro/how_to_connect_to_tailscale/)
- **Containerized workloads:** Run services on-device with [Setting up Docker on your device](https://docs.autopi.io/developer_guides/setting-up-docker/)
- **Development setup:** Follow the [Local development workflow](https://docs.autopi.io/developer_guides/local-development-workflow/), power safely with an [external power supply](https://docs.autopi.io/developer_guides/using-the-autopi-with-an-external-power-supply/), and use the [AutoPi Local API overview](https://docs.autopi.io/developer_guides/local-api-overview/)
- **Data routing and broker integration:** Send data to your own infrastructure with [Configuring MQTT](https://docs.autopi.io/developer_guides/configuring-mqtt/)
- **Power and wake control:** Access sleeping devices remotely with [Remotely waking up your device](https://docs.autopi.io/developer_guides/remotely-waking-up-your-device/)
- **Troubleshooting and recovery:** Collect diagnostics with [AutoPi Logs](https://docs.autopi.io/developer_guides/autopi-logs/) and recover devices with [Reflashing your device](https://docs.autopi.io/developer_guides/reflashing-your-device/)
- **Hardware extensions:** Add peripherals with [Installing a camera on your AutoPi](https://docs.autopi.io/developer_guides/installing-a-camera-on-your-autopi/) and configure BLE workflows via [How to use bluepy with AutoPi edge devices](https://docs.autopi.io/developer_guides/how-to-use-bluepy-with-autopi-edge-devices/)
- **Raw GPS data access:** Collect and inspect raw GNSS output for advanced location workflows with [Accessing Raw GPS Data](https://docs.autopi.io/developer_guides/accessing-raw-gps-data/)
- **Data visualization for Pro devices:** Visualize telemetry with custom dashboards and real-time metrics using [Build Grafana Dashboard](https://docs.autopi.io/developer_guides/build-grafana-dashboard/)
- **Custom event automation:** Define custom triggers and actions for specialized logger logic with [How to Create a Custom Event](https://docs.autopi.io/developer_guides/how-to-create-custom-event-for-custom-logger/)
- **Remote CAN workflows:** Enable remote CAN bus access for diagnostics and development tasks with [Remote CAN Access](https://docs.autopi.io/developer_guides/can-bridge/)
- **RFID workflows:** Integrate RFID-based identification workflows with your setup using [RFID Integration](https://docs.autopi.io/developer_guides/rfid-integartion/)

