---
id: autopi-pro-intro
title: Introduction
---
import CardGrid from "/components/CardGrid";

The AutoPi CAN-FD Pro is our most powerful device to date, purpose-built for full-speed automotive data logging across dual CAN-FD channels. It ships with 32 GB of onboard storage — expandable via USB flash drive — and features a built-in 4G/LTE modem for secure, reliable data transmission to your cloud solution. The device is powered by the Raspberry Pi Compute Module.

### Quick Links 
[Getting started](https://docs.autopi.io/getting_started/autopi_canfd_pro/) | [User Guide](https://docs.autopi.io/getting_started/autopi_canfd_pro/pro-user-guide/) | [Device Dimensions](https://docs.autopi.io/hardware/autopi_canfd_pro/device_dimensions/) | [Specifications](https://docs.autopi.io/hardware/autopi_canfd_pro/device_specifications/) | [State of a Device](https://docs.autopi.io/hardware/autopi_canfd_pro/pro-led-and-button/) | [OBD Connector Pinout](https://docs.autopi.io/hardware/autopi_canfd_pro/pro-obd-connector-pinout/) | [Use Tailscale for Remote Access](https://docs.autopi.io/getting_started/autopi_canfd_pro/how_to_connect_to_tailscale/) | [Access Files](https://docs.autopi.io/getting_started/autopi_canfd_pro/accessing-files-via-sftp-on-autopi/) | [Data Troubleshooting](https://docs.autopi.io/getting_started/autopi_canfd_pro/pro-data-troubleshooting/) | [4G Troubleshooting](https://docs.autopi.io/getting_started/autopi_canfd_pro/pro-4g-internet-setup-troubleshooting/)

<p align="center">
<img src="/img/hardware/autopi_canfd_pro/canfd_pro_trans.png" alt="AutoPi CAN-FD Pro" width="60%" />
</p>

### Key Benefits

| Benefit | Description |
|:---:|:---:|
| **4G/LTE with Global Coverage** | Integrated modem with worldwide connectivity for uninterrupted data transmission. |
| **Dual CAN-FD Interface** | Native support for two simultaneous CAN-FD channels for comprehensive automotive data capture. |
| **Flexible Deployment** | Suitable for both factory-integrated OEM installations and aftermarket add-on use cases. |
| **Power Fail-Safe** | Proven power fail-safe functionality protects data integrity during unexpected power loss. |
| **Full Linux OS** | Runs a stable, well-tested Linux operating system for maximum reliability and flexibility. |
| **Highly Extensible** | Easily extended to support a wide range of business and personal applications. |
| **Upgradeable Storage & Memory** | Supports up to 32 GB storage and 4 GB memory for demanding workloads. |
| **Automotive Certified (CE/FCC)** | Certified to automotive standards for global deployment. |
| **Hardware Security Element** | Onboard NXP SE51 secure element for data encryption and signing. |
| **External Antenna Connectors** | SMA connectors for 2× 4G/LTE, 1× GPS, and 1× Wi-Fi/BLE antennas. |

For full technical details, download the official datasheet: [**AutoPi CAN-FD Pro Datasheet**](https://www.autopi.io/static/pdf/autopi_CAN_FD_Pro_datasheet.pdf)

### Highlighted Features

#### Dual-Channel CAN Bus Logging
Configure loggers in the AutoPi Cloud to capture full CAN-FD traffic from both interfaces simultaneously. Remotely adjust bitrate, enable CAN bus termination, configure bus auto-detection, and more — all without physical access to the device.

#### Flexible Storage Endpoints
Define where your data goes. Route captured data to Amazon AWS S3, store it locally on the onboard eMMC, or write it to an external USB flash drive. Storage endpoints are fully configurable from the cloud.

#### On-Device CAN Bus Decoding
Offload CAN decoding to the edge device rather than relying on expensive cloud-side processing. Upload your proprietary DBC files to decode raw CAN data directly on the device and receive clean, structured data in the cloud.

#### Remote Live Debugging
Use Tailscale to securely connect to the CAN-FD Pro from anywhere and perform live debugging and real-time CAN bus interaction. Deploy custom software using Docker images directly to the device.

#### Advanced CAN Bus Filtering
Set up precise pass and block filters based on CAN message IDs to control exactly which frames are captured and transmitted. Reduce bandwidth usage and focus on the data that matters most.

#### Data Enrichment and Encryption
Combine CAN bus data with additional sources — such as onboard IMU and GPS — or integrate external sensors for a richer dataset. Encrypt and cryptographically sign your data using the onboard NXP SE51 secure element.


### Accessories

| Accessory | Description |
|:---:|:---:|
| [OBD-II Extension Cable](https://shop.autopi.io/products/obd-ii-extension-cable?pr_prod_strat=jac&pr_rec_id=f2111200b&pr_rec_pid=8619775328605&pr_ref_pid=14961336746333&pr_seq=uniform) | Adds extra reach for more flexible device placement. |
| [Dual Lock Extreme Velcro Strip](https://shop.autopi.io/products/dual-lock-extreme-velcro) | Provides secure, vibration-resistant mounting on any surface. |
| [Global SIM Card Solution](https://shop.autopi.io/products/global-sim-card-solution) | Connectivity in 188 countries for truly global deployments. |
| [OBD-II Power Cable](https://shop.autopi.io/products/obd-ii-power-cable?pr_prod_strat=jac&pr_rec_id=17052e989&pr_rec_pid=8619774050653&pr_ref_pid=8609919074653&pr_seq=uniform) | Powers the CAN-FD Pro from any 12–24 V DC power supply. |
| [OBD-II Splitter Cable](https://shop.autopi.io/products/obd-ii-splitter-cable?pr_prod_strat=jac&pr_rec_id=70ef610e3&pr_rec_pid=8619777327453&pr_ref_pid=8619774050653&pr_seq=uniform) | Y-splitter for connecting an additional OBD-II device simultaneously. |
| [Tesla OBD-II Adapter Cable (Model 3 & Y)](https://shop.autopi.io/products/tesla-obd2-adapter-cable-for-model-3-and-y) | Adds an OBD-II port to Tesla Model 3 or Model Y. |
| [CAN Bus Testing/Loop Cable](https://shop.autopi.io/products/can-bus-testing-cable) | Designed for internal communication testing between two CAN bus systems. |
| [Micro USB to USB-A Adapter Cable](https://shop.autopi.io/products/micro-usb-to-usb-a-adapter-cable) | Purpose-fitted for the external Micro USB port on the CAN-FD Pro. |
| [OBD-II to Dual DB9](https://shop.autopi.io/products/obd2-to-dual-db9) | Connects two CAN bus nodes to the OBD-II port of the CAN-FD Pro. |
| [IP67 Aluminum Casing](https://shop.autopi.io/products/autopi-can-fd-pro-ip67-casing) | Rugged, weatherproof enclosure for demanding environments. |


