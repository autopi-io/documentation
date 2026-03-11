---
id: how-to-ssh-to-your-device
title: How to SSH to Your Device
supportedDevices: ['cm4','pro','pro_case']
---
import CardGrid from "/components/CardGrid" ;
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

There are several ways to connect to your AutoPi device. This guide explains how to access your device remotely using **SSH (Secure Shell)**. SSH allows you to open a terminal session on your AutoPi device and run commands remotely.

:::note
SSH access is **not available for AutoPi Mini devices**.
:::


## How to SSH into Your Device

You can connect to your AutoPi device using several different methods depending on your setup:

* Connect to the device's **Hotspot**.
* Connect through your **local Wi-Fi network**.
* Connect using **Tailscale**. 
* Connect using **WireGuard**.

---

## Connect to the Device's Hotspot

The simplest way to connect to your device is directly through its Wi-Fi hotspot.

### Step 1: Connect to the Hotspot

Use the following credentials:

* **SSID:** `AutoPi-XXXXXXXXXXXX` *(“AutoPi-” followed by the last 12 characters of your Unit ID)*. Unit ID is the unique ID on the side of your device. Alternatively, you can find your Unit ID by navigating to Devices > Select your device > Overview: Device specifications: Unit ID.

* **Password:** the **first 13 characters of your Device ID**, including dashes. You can find your Device ID either by navigating to Devices > Select your device > Overview: Device specifications; or in the documentation attached to your shipping email. 


Additionally, you can access hotspot information directly from the AutoPi Cloud. To do this, navigate to Devices > Select Your Device > Advanced Settings > Wi-Fi. Here, you will find the Wi-Fi hotspot's password and SSID credentials.

![Hotspot Advanced Settings](/img/guides/ssh_access/wifi_hotspot.png)

:::note
You can change the hotspot SSID and password in **Advanced Settings → WiFi** in the AutoPi Cloud.
:::

### Step 2: Connect via SSH

Once connected to the hotspot, open your SSH client and connect using the following details:

- **Host:** `local.autopi.io`  
- **User:** `pi`  
- **Password:**
  - for devices with **board versions earlier than 7.0** the password: `autopi2018` .
  - for devices with **board version 7.0 and newer** the password: First 13 characters of the Device ID (including dash).

Example:
```python
ssh pi@local.autopi.io
```

---

## Connect Through Your Home Wi-Fi
If your AutoPi device is connected to your local Wi-Fi network, you can also access it through SSH.
By default, SSH access through Wi-Fi is disabled for security reasons, especially when using public networks.

### Enable SSH on Wi-Fi:
* Open AutoPi Cloud.
* Navigate to Device → Advanced Settings.
* Go to WiFi → Client.
* Enable Allow SSH.
* Once enabled, connect using the IP address assigned by your router.

![Wifi Client](/img/guides/ssh_access/advanced_wifi_client.png)

Example:
```python
ssh pi@192.168.1.50
```

---

## Connect Using Tailscale
You can also use Tailscale for secure remote access to your AutoPi device from anywhere. If you want to read about the whole setup, check out this guide: [How to connect to Tailscale on your Autopi device](https://docs.autopi.io/getting_started/autopi_canfd_pro/how_to_connect_to_tailscale/)

### Setup Steps:
* Open Advanced Settings on your device.
* Navigate to Tailscale.
* Enable Tailscale and provide your Auth Key.
* For a full setup guide, refer to the [Tailscale documentation](https://docs.autopi.io/getting_started/autopi_canfd_pro/how_to_connect_to_tailscale/#2-create-a-tailnet). 
* Once configured, connect using the device’s Tailscale IP address.

![Tailscale Advanced Settings](/img/guides/ssh_access/advanced_tailscale.png)


Example:
```python
ssh pi@tailscale_IP
```

---

## Connect Using WireGuard
If you operate your own VPN server, you can connect to the device using WireGuard. You can read more about specific settings here: [Wireguard settings](https://docs.autopi.io/cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-wireguard/)

### Setup Steps:
* Navigate to Device → Advanced Settings.
* Open the WireGuard configuration.
* Enable:
  * Allow SSH.
  * Enable WireGuard.
* After enabling these settings, configure the Interface and Peer parameters according to your WireGuard setup.

![Wireguard Advanced Settings](/img/guides/ssh_access/advanced_wireguard.png)

---

## Transfer Files Using SCP
If you are using an AutoPi CAN-FD Pro device, you can also transfer files from the device using SCP (Secure Copy Protocol).

Example command:
```python
scp pi@192.168.0.100:/opt/autopi/can0/log.csv ~/Downloads
```

For more details, see the guide: [Accessing files via SFTP/SCP on AutoPi](https://docs.autopi.io/getting_started/autopi_canfd_pro/accessing-files-via-sftp-on-autopi/#option-2-connect-via-command-line-scp)

---

## Executing AutoPi Commands via SSH
Most AutoPi commands that you normally run from the Cloud Terminal can also be executed directly through SSH.
To run them from the SSH terminal, prepend the command with `autopi`.

Example of `power.status` command:
```python
autopi power.status
```

If you want to learn more about different commands you can use, check out this part of AutoPi documentation: [Commands](https://docs.autopi.io/core/commands/).

Running commands through SSH can be useful for:
* Local development.
* Troubleshooting devices.
* Adjusting configurations directly on the device.
