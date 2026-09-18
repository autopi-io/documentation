# Introduction

> <DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

---

:::warning
**Performance impact notice** - changing advanced settings can significantly affect your device's performance, battery life, data consumption, and overall stability. Only modify settings if you understand their implications. If you are unsure about any setting or need assistance, please contact our support team at **support@autopi.io** for guidance.
:::

This guide provides a comprehensive overview of all advanced configuration settings available for your AutoPi TMU CM4 device. Advanced settings enable fine-tuned control over device behavior, power management, data logging, connectivity, and specialized features. Each setting is configurable through the AutoPi Cloud platform and can be customized to match your specific operational requirements.

![AutoPi Cloud Advanced Settings](/img/cloud/device_management/advanced_settings/autopi_tmu_cm4/intro/advanced_settings_updated.png)

## Available Settings

The following advanced settings are available for the AutoPi TMU CM4. Click on any setting to view detailed configuration options and parameters:

### Device 
- **[Accelerometer](https://docs.autopi.io/cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-accelerometer/)** - configure accelerometer and gyroscope sampling rates and ranges for motion detection and logging.
- **[System](https://docs.autopi.io/cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-system/)** - configure core system parameters and device behavior. 
- **[Audio](https://docs.autopi.io/cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-audio/)** - configure speak alerts to let the device speak out important events immediately when they occur. [Learn more here](https://docs.autopi.io/cloud/device_management/advanced_settings/audio-on-your-device/).

### Connectivity & Communication
- **[Bluetooth](https://docs.autopi.io/cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-bluetooth/)** - enable and configure Bluetooth connectivity options.
- **Cellular** - manage cellular network settings and mobile connectivity, edit SIM settings, and adjust MTU. 
- **[WiFi](https://docs.autopi.io/cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-wifi/)** - configure WiFi network parameters and connectivity.
- **[MQTT](https://docs.autopi.io/cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-mqtt/)** - enable the MQTT broker, specify the returner, and add custom configuration for the broker to support messaging. [Learn more here](https://docs.autopi.io/developer_guides/configuring-mqtt/).
- **[Tailscale](https://docs.autopi.io/cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-tailscale/)** - configure Tailscale VPN connectivity. [Learn more here](https://docs.autopi.io/getting_started/autopi_canfd_pro/how_to_connect_to_tailscale/).
- **[WireGuard](https://docs.autopi.io/cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-wireguard/)** - set up WireGuard VPN for secure connections. 

### Vehicle & Data Logging
- **[OBD](https://docs.autopi.io/cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-obd/)** - enable OBD protocol autodetection and configure advanced OBD settings including adaptive timing, passthrough interval, print spaces, and response timeout.
- **[DoIP](https://docs.autopi.io/cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-doip/)** - configure Diagnostics over IP protocol for vehicle diagnostics. [Learn more here](https://docs.autopi.io/developer_guides/setting-up-doip/). 
- **Vehicle** - set vehicle-specific parametersfor trips.
- **[Tracking](https://docs.autopi.io/cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-tracking/)** - configure GPS and driving settings.
- **[Trip](https://docs.autopi.io/cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-trip/)** - manage trip detection and trip logic. [Learn more here](https://docs.autopi.io/cloud/fleet_management/vehicles/trips/).

### Power & Energy Management
- **[Power](https://docs.autopi.io/cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-power/)** - specify your battery's critical level, safety cut-out, sleep timers, and wake triggers to manage device power consumption and behavior. [Learn more here](https://docs.autopi.io/core/power_management/core-power-sleep-timers/).

### Cloud & Storage
- **Cloud Hub** - manage cloud hub connectivity and synchronization settings.
- **[Cloud Storage](https://docs.autopi.io/cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-cloud-storage/)** - configure data storage and synchronization with the AutoPi Cloud platform.
- **[Update Release](https://docs.autopi.io/cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-update-release/)** - manage firmware and software update settings. [Learn more here](https://docs.autopi.io/cloud/device_management/software-updates/).

### IoT & Integration
- **[Alerts](https://docs.autopi.io/cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-alerts/)** - configure any events you want to show up as alerts on the cloud. [Learn more here](https://docs.autopi.io/cloud/fleet_management/fleet-alerts/).
- **[Docker](https://docs.autopi.io/cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-docker/)** - enable Docker container deployments. [Learn more here](https://docs.autopi.io/developer_guides/setting-up-docker/).
- **[Key Fob](https://docs.autopi.io/cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-key-fob/)** - configure key fob pairing and control settings. [Learn more here](https://docs.autopi.io/hardware/accessories/keyfob-hat/keyfob-intro/).
- **Modbus** - set up Modbus protocol support for industrial device integration. [Learn more here](https://docs.autopi.io/developer_guides/modbus-server/).
- **[RFID](https://docs.autopi.io/cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-rfid/)** - set up RFID reader and tag detection parameters. [Learn more here](https://docs.autopi.io/developer_guides/rfid-integartion/).

:::tip
All advanced settings can also be modified programmatically through the AutoPi REST API. For API documentation and examples, see our [API docs page](https://api.autopi.io/).
:::
