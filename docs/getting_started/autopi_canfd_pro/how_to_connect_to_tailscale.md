---
id: how_to_connect_to_tailscale
title: How to connect to Tailscale on your Autopi device
supportedDevices: ['cm4','pro','pro_case']
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import SideBySide from '@site/src/components/SideBySide';
import CardGrid from "/components/CardGrid" ;
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

Tailscale enables secure, software-defined networking that connects users, services, and devices over a private network. Your AutoPi device comes with Tailscale pre-installed but inactive, giving you full control over when to enable it. This guide walks you through setting up Tailscale to establish secure remote access to your AutoPi device.


:::tip
For a visual walkthrough, check out this [Tailscale quickstart video guide](https://youtu.be/sPdvyR7bLqI).
:::

---

## 1. Enable Tailscale on Your Device

Before connecting to Tailscale, you must first enable it on your AutoPi device:

1. Navigate to **Devices** on [AutoPi Cloud](https://my.autopi.io/).
2. Click the device you want to configure.
3. Go to **Advanced Settings** > **Tailscale**.
4. Check if Tailscale is already enabled. If enabled, it will look like this:

    ![Tailscale Enabled](/img/getting_started/autopi_canfd_pro/tailscale_enabled.png)

5. If not enabled, click to enable it. Your device will create a pending sync that needs to be applied:

    ![Tailscale Pending Sync](/img/getting_started/autopi_canfd_pro/pending_sync.png)

6. Click the sync button to apply the change to your device. 


## 2. Create a Tailnet

Visit [Tailscale.com](https://tailscale.com/) and select **Get Started**. Alternatively, download and install the Tailscale client on your computer, then sign up.

## 3. Open Tailscale on Your Computer

There are several ways to access Tailscale:

- **Windows/macOS/Linux**: Open the Tailscale app from the system tray or menu bar.
- **Android/iOS**: Open the Tailscale app from your app drawer.
- **CLI (Linux/macOS/Windows)**: Open a terminal and run:

```
tailscale up
```

## 4. Log In to Tailscale

Complete the authentication process on your computer:

1. If not already logged in, the app will prompt you to authenticate.
2. Click **Log In**, and a browser window will open.
3. Choose your authentication method (Google, Microsoft, GitHub, or custom SSO).
4. After logging in, approve the request to connect your device to the network.

## 5. Generate and Configure Auth Key

Generate an authentication key for your AutoPi device:

1. Generate an auth key at [Tailscale Settings](https://login.tailscale.com/admin/settings/keys).
2. Use one of the following options to configure the key on your device:

**Option 1: Via AutoPi Cloud Settings**

1. Navigate to **Devices** on [AutoPi Cloud](https://my.autopi.io/).
2. Click your device.
3. Go to **Advanced Settings** > **Tailscale**.
4. Paste the auth key and verify Tailscale is enabled.

**Option 2: Via Terminal Command**

Run the following command in the device terminal:

```
cmd.run 'tailscale up --authkey=tskey-KEYKEY-KEYKEYKEYKEY'
```

:::note
Replace the example auth key with your actual key generated in the previous step.
:::


## 6. Confirm Connection

Verify that your device is connected:

1. Your device should appear in the [Tailscale admin panel](https://login.tailscale.com/admin/machines).
2. In the Tailscale app, you should see **Connected** with an assigned Tailscale IP (e.g., 100.x.x.x).
3. If using CLI, check your connection status:

```
tailscale status
```

## 7. Test Your Connection

Verify everything is working correctly:

1. Check your [Tailscale admin panel](https://login.tailscale.com/admin/machines) to confirm both your computer and device are listed.
2. You can now SSH from your computer to your device for full remote access. 


## 8. Optional: Configure Exit Node

To route all traffic through another device on your network:

1. Open the Tailscale app.
2. Click **Use Exit Node** and select a device.
3. Alternatively, on CLI, run:

```
tailscale up --exit-node=100.x.x.x
```


## 9. Disconnect When Needed

To disconnect from Tailscale:

1. In the Tailscale app, click **Disconnect**.
2. Alternatively, on CLI, run:

```
tailscale down
```

:::note
**Manage Tailscale Service**

To prevent excessive data usage, you can permanently disable Tailscale:

**Disable and stop service:**

```
cmd.run 'systemctl disable tailscaled'
cmd.run 'systemctl stop tailscaled'
```

**Re-enable and start service:**

```
cmd.run 'systemctl enable tailscaled'
cmd.run 'systemctl start tailscaled'
```
:::

---

**You're all set!** Your AutoPi device is now connected to Tailscale, providing you with secure remote access to your device from anywhere.

