---
id: reflashing-your-device
title: Reflashing Your Device
supportedDevices: ['cm4','pro','pro_case']
---
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

This guide explains how to reflash your AutoPi device with a fresh AutoPi OS image. Reflashing is useful for recovery and troubleshooting, but it changes low-level device software and should be performed carefully. Before you begin, confirm your device version, use the correct image, and follow each step in order to reduce the risk of configuration issues or data loss.

:::warning
Only use this guide if you are comfortable working directly with device firmware. Reflashing should not be performed on a fully operational production device unless necessary. If you are unsure about any step, contact our [Support team](mailto:support@autopi.io) before proceeding.
:::

The reflashing process varies slightly depending on your AutoPi hardware version and host operating system. The steps in this guide were verified on Pop!_OS 6.1 (Debian-based) and Windows 10.

**Reflashing Quick Start Summary:**

1. Download the AutoPi OS image.
2. Set up Balena Etcher (or an alternative tool).
3. Connect the device storage media:
    - Pre-CM4 devices (versions 3.0-6.3)
    - CM4 devices (version 7.x+)
4. Flash the image.
5. (Optional) Ensure your device is connecting to the correct environment.
6. Complete initial device setup.
7. Update your device from the Cloud.

---

## 1. Download the [AutoPi](https://www.autopi.io) OS Image

:::warning
Make sure you select **the correct image** for your device. In the AutoPi Cloud, find your board version under **Device > Overview > Device Specifications > Board Version:**
![Board Version of the Device](/img/guides/reflashing/board_version.png)
:::

After confirming your board version, download the matching image from the table below:

| Generation | Board Version | Release Page | Image Link |
|:------------:|:------------:|:-----------: | :------------------------------------------------------:|
|      2     | 3.2        | v27.05.20 | https://github.com/autopi-io/autopi-core/releases/tag/v27.05.20 |
|      2     | 3.4        | v27.05.20 | https://github.com/autopi-io/autopi-core/releases/tag/v27.05.20 |
|      2     | 3.4.1      | v27.05.20 | https://github.com/autopi-io/autopi-core/releases/tag/v27.05.20 | 
|      2     | 3.4.2      | v27.05.20 | https://github.com/autopi-io/autopi-core/releases/tag/v27.05.20 | 
|      2     | 4.0        | v27.05.20 | https://github.com/autopi-io/autopi-core/releases/tag/v27.05.20 | 
|      3     | 5.0        | v1.21 | https://github.com/autopi-io/autopi-core/releases/tag/v1.21     |
|      3     | 5.1        | v1.21 | https://github.com/autopi-io/autopi-core/releases/tag/v1.21     | 
|      3     | 5.2        | v1.21 | https://github.com/autopi-io/autopi-core/releases/tag/v1.21     |
|      3     | 6.0        | v1.21 | https://github.com/autopi-io/autopi-core/releases/tag/v1.21     |
|      3     | 6.1        | v1.22 | https://github.com/autopi-io/autopi-core/releases/tag/v1.22     | 
|      3     | 6.2        | v1.22 | https://github.com/autopi-io/autopi-core/releases/tag/v1.22     | 
|      3     | 6.3        | v1.22 | https://github.com/autopi-io/autopi-core/releases/tag/v1.22     | 
|      4     | 7.0        | v1.22.9 | https://github.com/autopi-io/autopi-core/releases/tag/v1.22.9 |
|      4     | 7.1        | v1.26.0 | https://github.com/autopi-io/autopi-core/releases/tag/v1.26.0 |
|      4     | 7.1 (CAN-FD Pro only)    | v1.28.0 | https://github.com/autopi-io/autopi-core/releases/tag/v1.28.0 |

You may also check the [autopi-core releases page](https://github.com/autopi-io/autopi-core/releases) for a newer **board-version-compatible** image.

---

## 2. Set Up Balena Etcher (or an Alternative)

We recommend [Etcher](https://etcher.io) because it can flash the compressed `.gz` image directly.
* On **Windows**, install Etcher through the standard `.exe` installer.
* On **Linux**, follow the instructions in [Balena's Etcher repository](https://github.com/balena-io/etcher?d_id=fae0960a-c0ca-432e-af94-7e81c00d32a9&s_id=1677580787961#debian-and-ubuntu-based-package-repository-gnulinux-x86x64). If the first command fails, run `sudo apt update` and try again.
    > **Note for Linux users** - on Linux, this guide uses the Balena package repository and a package manager install, but an `.AppImage` is also available on [Balena's website](https://www.balena.io/). 

---

## 3. Connect the Device Storage Media

AutoPi devices come in two types based on board version, each with a different storage setup. Follow the subsection that matches your device's board version (determined in Step 1):

* **Pre-CM4 devices** (Board Versions 3.0-6.3): use an internal SD card.
* **CM4 devices** (Board Version 7.x+): use onboard eMMC flash storage.

### 3.a. Pre-CM4 Devices (Board Versions 3.0-6.3)

Pre-CM4 devices use an internal SD card with AutoPi Core preinstalled.

1. Open the device enclosure and remove the SD card.
2. If needed, follow [Upgrade/Replace Your Raspberry Pi Computer](/developer_guides/upgrading_your_raspberrypi.mdx) for disassembly guidance.
3. Insert the SD card into an SD card reader and connect it to your computer.
4. Navigate to next step: 4. Flash the device. 

### 3.b. TMU CM4 Devices (Board Version 7.x+)

CM4 devices do not use an SD card. The operating system is stored on onboard eMMC flash, so setup differs from pre-CM4 devices.

> Note: altough possible to do on a Windows machine, it's highly recommended to use Linux instead, as the utility for accessing the Raspberry Pi's flash memory s easier to set up and is more stable on Linux.

You must:

1. Set up `rpiboot` on your host computer using Windows or Linux.
2. Put the device into **EMMC FLASHING** state.
3. Connect the device to your computer over micro-USB.

#### Step 1: Set Up rpiboot

`rpiboot` is a Raspberry Pi utility that enables read/write access to the CM4 flash chip. Most of this setup is one-time per host computer.

**Set Up `rpiboot` on Windows**

* Download the [rpiboot installer](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe) 
* Complete the installation. 
* Then run `rpiboot` from the Start menu.

> Note: For more details, see the complete guide: [Raspberry Pi Windows installer documentation](https://www.raspberrypi.com/documentation/computers/compute-module.html#windows-installer). When that documentation refers to jumper cables, on AutoPi hardware this corresponds to changing device state using the side button.


**Set up `rpiboot` on Linux**


* Follow the setup steps in the [Raspberry Pi usbboot documentation](https://github.com/raspberrypi/usbboot). 
* Once `rpiboot` is running, your computer will start waiting for a connected CM4 device.
    ![rpiboot setup](/img/getting_started/developer_guides/reflashing_your_device/rpiboot_setup.png)

#### Step 2: Put the Device Into EMMC FLASHING State

The device must be powered on from a vehicle or external power supply with adapter cable. Do not use the micro-USB port for power. 

> Note: For button location and full state transition details, see [AutoPi TMU CM4 LED and button behavior](https://docs.autopi.io/hardware/autopi_tmu_cm4/led-and-button/).

Quick sequence:

1. If the device was just powered on, wait for the blue LED to become solid.
2. Short-press the side button (located in one of the holes on the side of the device) to initiate a gentle shutdown.
3. Wait until the LED becomes dim (hibernation).
4. Long-press once to enter **USER SETUP** (slow blink, about 1 blink/second).
5. Long-press again to enter **EMMC FLASHING** (rapid blink).

#### Step 3: Connect the Device With a Micro-USB Cable

:::warning
Do not use the rear USB Type-A ports for flashing.
:::

With `rpiboot` running and the device in **EMMC FLASHING** state:

1. Connect the micro-USB end to the side micro-USB port on the device.
2. Connect the other end to your computer.
3. Wait for `rpiboot` to detect the device and expose partitions (if present).

At this point, you can access the internal file system through mounted drives. On Windows, at least one partition should appear in File Explorer. On Linux, typical mount points are `/media/<user>/boot` and `/media/<user>/rootfs`: 

![device detected output](/img/getting_started/developer_guides/reflashing_your_device/device_detected.png)


---

## 4. Flash the Device

**Flashing steps**

In Balena Etcher (or your preferred tool):
    * Select the image downloaded in Step 1.
    * Select the correct target storage device.
    * Start flashing and wait for completion.
    ![balena configured with image and device](/img/getting_started/developer_guides/reflashing_your_device/configured_balena.png)

If flashing **fails** on the first attempt, retry once before troubleshooting further.

:::warning
Do not remove power while the device is running or booting. The safest time to disconnect power is immediately after unmounting storage.
:::


**After flashing**

* Unmount the storage device.
* For pre-CM4 devices: remove the SD card from the reader and reinstall it in the device.
* For [TMU CM4](https://www.autopi.io/hardware/autopi-tmu-cm4) devices: disconnect the USB cable, press the button to return to hibernation, then short-press to boot.

---

## 5. Optional: Ensure Your Device is Connecting to the Correct Environment

    > Complete this step only if your company uses a dedicated AutoPi environment.

If your portal URL is not `my.autopi.io` (for example, `my_company.autopi.io`), follow [Move to a Dedicated Environment](/developer_guides/move-to-dedicated-environment).

---

## 6. Set Up the Device

After reflashing, complete device connectivity and key acceptance in [AutoPi Cloud](https://my.autopi.io/#/login).

### 6.1. Bring the Device Online and Configure APN

1. Power on the device and confirm internet connectivity. See **Verify Connectivity** in [Getting Started Guide](https://docs.autopi.io/getting_started/autopi_tmu_cm4/#8-verify-connectivity).
2. If you use an AutoPi-provided SIM, configure APN:
   * Follow **Setup APN** in [Getting Started Guide](https://docs.autopi.io/getting_started/autopi_tmu_cm4/#7-connect-to-local-administration).
   * Use APN string: `nxt20.net` (AutoPi SIM cards).
3. Sign in to [my.autopi.io](https://my.autopi.io/#/login).

### 6.2. Accept the Device Key

The device's encryption key requires acceptance in Cloud before it can authenticate.

**Finding the Key Status:**

1. Open the device page. The Key Status widget shows the current state:
   ![Key Status unaccepted](/img/guides/reflashing/device_with_unaccepted_key.png)

**Accepting the Key:**

1. Click **Edit device** (top-right corner).
2. Locate the **Key state** field. It will display **Your key is not accepted**:
   ![Key State Not Accepted](/img/guides/reflashing/accept_keystate.png)
3. Click **Accept**.
4. Click **Save** to apply the change.


**Verification:**

The Key state will update to accepted and device overview now shows:

![Key State Accepted](/img/guides/reflashing/device_with_accepted_key.png)

### 6.3. Configure Wi-Fi Hotspot

When the device comes online for the first time, the Wi-Fi hotspot is configured as:
* **SSID**: AutoPi-Initial  
* **Password**: autopi2018

:::tip
For security reasons, change the hotspot password immediately:
**Devices > [your device] > Advanced settings > WIFI > Hotspot**
:::

---

## 7. Finalize by Updating the Device

After reflashing, update the device from AutoPi Cloud > [Software Updates](https://docs.autopi.io/cloud/device_management/software-updates/) page. This ensures all configuration values are reapplied (including Wi-Fi settings) and that the correct authentication token is in place for data upload.

To confirm the update completed successfully:

1. Open **Software Updates** in AutoPi Cloud.
2. Open your latest release attempt.
3. Verify that a **success** result is shown for that attempt, as in the example below:
    ![Software update release attempt status](/img/guides/reflashing/software_updates.png)

For more information, see also: [How to update your device](https://docs.autopi.io/cloud/device_management/software-updates/).

:::note
If the update initially fails after reflashing, let the device run for a few minutes. The device will retry the update automatically, and it can succeed after a short stabilization period.
:::