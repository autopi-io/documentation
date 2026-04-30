---
id: autopi-pro-casing-intro
title: Introduction
---
import CardGrid from "/components/CardGrid"; 

The [AutoPi CAN-FD Pro + IP67 Casing](https://shop.autopi.io/products/autopi-can-fd-pro-ip67-casing) is our most powerful automotive data logging device, engineered for full-speed dual CAN-FD channel capture. Built on the Raspberry Pi Compute Module, it features 32 GB of onboard storage (expandable via flash drive) and an integrated 4G/LTE modem for secure, real-time data delivery to your cloud environment.

Designed for demanding deployments, the device is housed in a durable, IP67-rated aluminum enclosure — resistant to dust, dirt, and water ingress — making it well-suited for rugged, outdoor, and industrial installations.

### Device dimensions

<p align="center">
<img src="/img/hardware/autopi_canfd_pro/canfd_pro_casing_measurements.png" alt="AutoPi CAN-FD Pro/IP67 casing" width="60%" />
</p>

### Key benefits

| Feature | Description |
|:---:|:---:|
| **4G/LTE with global coverage** | Integrated modem with worldwide connectivity support. |
| **Dual CAN-FD interface** | Native automotive-grade dual CAN bus connectivity. |
| **OEM or aftermarket deployment** | Suitable for factory-integrated OEM builds or aftermarket installations. |
| **Power fail-safe** | Proven, integrated power protection prevents data loss on unexpected shutdowns. |
| **Full Linux OS** | Runs a stable, well-tested Linux environment with long-term reliability. |
| **Highly extensible** | Adaptable to a wide range of business and personal use cases. |
| **Upgradeable storage & memory** | Supports up to 32 GB storage and 4 GB RAM. |
| **Automotive certified (CE/FCC)** | Meets automotive certification standards for global deployment. |
| **Secure element** | Onboard NXP SE51 security chip for hardware-level encryption and data signing. |
| **External antenna connectors** | SMA connectors for 2× 4G/LTE, 1× GPS, and 1× Wi-Fi/BLE. |

For full technical specifications, download the official datasheet: [**AutoPi CAN-FD Pro Datasheet**](https://www.autopi.io/static/pdf/autopi_CAN_FD_Pro_datasheet.pdf).

---

### Highlighted features

#### CAN Bus logging from dual interface
Configure loggers in the AutoPi Cloud to capture full CAN-FD traffic from both interfaces simultaneously. Remotely adjust bitrate, CAN bus termination, and bus auto-detection settings — no physical access required.

#### Flexible storage endpoints
Define where your data goes. Route data to Amazon AWS S3, store it locally on the eMMC, or write to an external flash drive — all configured from the cloud.

#### On-device CAN bus decoding
Offload decoding to the edge device rather than processing it in the cloud. Upload proprietary DBC files to decode raw CAN data directly on the device before transmission.

#### Remote live debugging
Connect to the CAN-FD Pro via Tailscale for secure remote access. Interact with live CAN bus traffic and deploy custom projects using Docker images — without being on-site.

#### Advanced CAN bus filtering
Reduce data volume by applying pass or block filters based on individual CAN frame message IDs, ensuring only the most relevant data is captured and transmitted.

#### Data enrichment and encryption
Augment CAN data with additional sources such as onboard IMU and GPS, or integrate external sensors. All data can be encrypted and cryptographically signed using the onboard NXP SE51 secure element.

---


### Useful links

- [Getting started](https://docs.autopi.io/getting_started/autopi_canfd_pro_casing/) — Steps to follow after receiving your device.

**Accessories:**
- [OBD-II Extension Cable](https://shop.autopi.io/products/obd-ii-extension-cable?pr_prod_strat=jac&pr_rec_id=f2111200b&pr_rec_pid=8619775328605&pr_ref_pid=14961336746333&pr_seq=uniform) — Extends reach for more flexible device placement.
- [Dual Lock Extreme Velcro Strip](https://shop.autopi.io/products/dual-lock-extreme-velcro) — Vibration-resistant mounting solution for secure installation.
- [Global SIM Card Solution](https://shop.autopi.io/products/global-sim-card-solution) — Connectivity in 188 countries for reliable worldwide deployment.
- [DoIP HAT](https://shop.autopi.io/products/doip-hat-v1-3) — Advanced interface module for vehicle diagnostics over the DoIP protocol.
- [OBD-II Power Cable](https://shop.autopi.io/products/obd-ii-power-cable?pr_prod_strat=jac&pr_rec_id=17052e989&pr_rec_pid=8619774050653&pr_ref_pid=8609919074653&pr_seq=uniform) — Powers the CAN-FD Pro from any 12–24V DC supply.
- [OBD-II Splitter Cable](https://shop.autopi.io/products/obd-ii-splitter-cable?pr_prod_strat=jac&pr_rec_id=70ef610e3&pr_rec_pid=8619777327453&pr_ref_pid=8619774050653&pr_seq=uniform) — Y-splitter for running an additional OBD-II device alongside the AutoPi.
- [Tesla OBD-II Adapter Cable (Model 3 / Y)](https://shop.autopi.io/products/tesla-obd2-adapter-cable-for-model-3-and-y) — Adds an OBD-II port to compatible Tesla vehicles.
- [CAN Bus Testing/Loop Cable](https://shop.autopi.io/products/can-bus-testing-cable) — Designed for internal communication testing between two CAN bus systems.
- [Micro USB to USB-A Adapter Cable](https://shop.autopi.io/products/micro-usb-to-usb-a-adapter-cable) — Fits the external Micro USB port on the CAN-FD Pro device.
- [OBD-II to Dual DB9](https://shop.autopi.io/products/obd2-to-dual-db9) — Connects two CAN bus nodes to the OBD-II port of the CAN-FD Pro.
 