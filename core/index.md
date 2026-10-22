# Introduction

> <DeviceSupportBanner supported={frontMatter.supportedDevices} />

AutoPi Core is the open-source software that runs on AutoPi devices. Built on [Salt](https://saltproject.io/), it provides the services and commands used to configure the device, communicate with connected hardware, and collect vehicle data.

This section explains how Core works and provides reference documentation for its services, commands, returners, and power management features.

## What Is AutoPi Core?

AutoPi Core connects the hardware in an [AutoPi](https://www.autopi.io) device with the rest of the AutoPi platform. Its background services manage device components and handle ongoing tasks. For example, the [OBD manager](https://docs.autopi.io/core/services/core-services-obd-manager/) manages communication with the vehicle's OBD-II port, while the [Tracking manager](https://docs.autopi.io/core/services/core-services-tracking-manager/) collects positioning data from the device's GNSS receiver.

  

Core also includes execution modules that group commands by function. You can use these commands to interact with the device directly or as part of automated workflows. For example, the [OBD module](https://docs.autopi.io/core/commands/core-commands-obd/) provides commands for communicating with a vehicle through the OBD-II port, and the [EC2X module](https://docs.autopi.io/core/commands/core-commands-ec2x/) provides commands for managing the Quectel cellular and GNSS modem.

## Supported Devices

AutoPi Core is supported on the following devices:

- [AutoPi TMU CM4](https://www.autopi.io/hardware/autopi-tmu-cm4/)
- [AutoPi CAN-FD Pro](https://www.autopi.io/hardware/autopi-canfd-pro/), including models with the IP67 casing

AutoPi Mini does not run AutoPi Core and is not covered by this section.

## Get Your Device and Get Started

  

[![](/img/hardware/autopi_tmu_cm4/TMU_Floating_Topside_V1_scaled.png) **AutoPi TMU CM4** Based on the Raspberry Pi Compute Module 4. Designed for custom solutions that require greater processing power and expansion options. Includes built-in connectivity. View pricing.](https://shop.autopi.io/products/autopi-telematics-unit-cm4-4g-lte-edition)

[![](/img/hardware/autopi_canfd_pro/canfd_pro_trans.png) **AutoPi CAN-FD Pro** Based on the Raspberry Pi Compute Module 4. Designed for full-speed automotive data logging across two CAN-FD channels. View pricing.](https://shop.autopi.io/products/autopi-can-fd-pro)

[![](/img/shared/autopi_devices_trans.png) **Comparison of all AutoPi devices** Compare our devices and find the best fit for your requirements.](https://www.autopi.io/hardware/compare/)
