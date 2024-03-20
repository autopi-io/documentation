---
id: reflashing-your-device
title: Reflashing your device
---

## Reflashing Workflow
The process for reflashing an AutoPi device differs a little depending on the device version you have and the OS you are running. The steps in this guide were tested on Pop-os 6.1 (a Debian-derived Linux distribution) and Windows 10. The general workflow for the reflashing process is:

1. Download the AutoPi OS image
2. Set up Balena Ethcher (or alternative)
3. Connect the device storage media
    - Pre-CM4 devices (versions 3.0 - 6.3)
    - CM4 devices (version 7.x+)
        - Windows
        - Linux
4. Perform the flash
6. Ensure your device is connecting to the correct environment
5. Set up the device

### 1. Download the AutoPi OS image

Make sure that you select the right image for your device. You can check what version your device is by finding `board version` in
settings:

![settings button location](/img/guides/reflashing_your_device/settings_button_location.jpg)

Once there, find the board version.

![board version](/img/guides/reflashing_your_device/board_version.jpg)

Once you have the board version, see which image you need from the table below and download it.

| Generation | Board Version | Release Page                                                    | Image Link                                                                                                                     |
|------------|------------|-----------------------------------------------------------------|
|      2     | 3.2        | [v27.05.20](https://github.com/autopi-io/autopi-core/releases/tag/v27.05.20) |
|      2     | 3.4        | [v27.05.20](https://github.com/autopi-io/autopi-core/releases/tag/v27.05.20) |
|      2     | 3.4.1      | [v27.05.20](https://github.com/autopi-io/autopi-core/releases/tag/v27.05.20) | 
|      2     | 3.4.2      | [v27.05.20](https://github.com/autopi-io/autopi-core/releases/tag/v27.05.20) | 
|      2     | 4.0        | [v27.05.20](https://github.com/autopi-io/autopi-core/releases/tag/v27.05.20) | 
|      3     | 5.0        | [v1.21](https://github.com/autopi-io/autopi-core/releases/tag/v1.21)     |
|      3     | 5.1        | [v1.21](https://github.com/autopi-io/autopi-core/releases/tag/v1.21)     | 
|      3     | 5.2        | [v1.21](https://github.com/autopi-io/autopi-core/releases/tag/v1.21)     |
|      3     | 6.0        | [v1.21](https://github.com/autopi-io/autopi-core/releases/tag/v1.21)     |
|      3     | 6.1        | [v1.22](https://github.com/autopi-io/autopi-core/releases/tag/v1.22)     | 
|      3     | 6.2        | [v1.22](https://github.com/autopi-io/autopi-core/releases/tag/v1.22)     | 
|      3     | 6.3        | [v1.22](https://github.com/autopi-io/autopi-core/releases/tag/v1.22)     | 
|      4     | 7.0        | [v1.22.9](https://github.com/autopi-io/autopi-core/releases/tag/v1.22.9) |


You may also check the [autopi-core releases page](https://github.com/autopi-io/autopi-core/releases) for a newer **board-version-compatible** image.

### 2. Set up Balena Ethcher (or alternative)

We recommend using [Etcher](https://etcher.io) for flashing - it will take the GZ image directly and flash it. If using Windows, the 
installation can be done through a regular .exe file. For Linux, follow the steps on [Balena's Etcher repository](https://github.com/balena-io/etcher?d_id=fae0960a-c0ca-432e-af94-7e81c00d32a9&s_id=1677580787961#debian-and-ubuntu-based-package-repository-gnulinux-x86x64). We've noticed that the first command does not always work on the first try. If that happens, update your package list through `sudo apt update` and try again. 

:::note for Linux users
On Linux, we are installing by adding the Balena package repository and installing through our package manager, but keep in mind than
an .AppImage file is available on [Balena's website](https://www.balena.io/).
:::

### 3. Connect the device storage media

#### 3.a. Pre-CM4 devices
Your device contains an SD card with the AutoPi Core preinstalled. The SD card is located inside
the device. You will need to unscrew the device to access and remove the SD card. For that you can follow
the [Upgrade/Replace Your Raspberry Pi Computer guide](https://docs.autopi.io/guides/upgrading-your-raspberry-pi/). Once you have the
SD card in hand, place it in an SD card reader and connect it to your computer.

#### 3.b. CM4 devices
On Compute Module 4 devices there is no SD card. The Operating System is stored on a flash chip embedded on
the Raspberry Pi board. This means that reflashing is a little more complicated than just taking an SD
card out of the AutoPi device and flashing it through an SD card reader. These are the steps you'll need to take:

<!-- Although possible to do on a Windows machine, it's highly recommended to use Linux instead, as the utility for accessing the 
Raspberry Pi's flash memory is easier to set up and is more stable on Linux.  -->

1. Set up rpiboot (allows your computer to read/write the Raspberry Pi's flash memory)
2. Put the device into EMMC FLASHING state
3. Connect the device with a usb cable

##### 3.b.1. Setting up rpiboot

Rpiboot is a utility provided by Raspberry Pi that allows your computer to read and write the flash chip. Most of the steps below need to be done only once per host computer. After the initial setup, all you should be required to do for this step is run the rpiboot utility.

###### 3.b.1.a. Windows
Download the [rpiboot installer](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe) and go through the setup. Once
the installation is complete, run the newly added rpiboot program, which you can find in the Start menu. 

:::info
More details on the rpiboot setup for Windows can be found on the [Raspberry Pi Documentation site](https://www.raspberrypi.com/documentation/computers/compute-module.html#windows-installer). But keep in mind that where the documentation is talking about jumper cables, on the AutoPi board, that means changing the device state. 
:::


###### 3.b.1.b. Linux
Follow the setup steps in the [Raspberry Pi usbboot documentation](https://github.com/raspberrypi/usbboot).
Once you've started the rpiboot utility, your computer will start looking for a connected Compute Module
device. The setup should look something like pictured below:

![rpiboot setup](/img/guides/reflashing_your_device/rpiboot_setup.png)

##### 3.b.2. Put the device into the EMMC FLASHING state
To do this, your device will need to be receiving power from either a vehicle, or a power supply with an adapter cable (the USB port can not be used for power). Details for button location and state transitions can be found in the [AutoPi CM4 TMU documentation](https://docs.autopi.io/hardware/autopi_tmu_cm4/led-and-button/). 

To put the task in more simple terms: press the button (located in one of the holes on the side of the device) until the blue LED starts flashing very fast. If you've just plugged your device into power, wait until the blue LED turns solid. Then do a short press of the button, to do a gentle shutdown. Once the blue LED turns dim, it has gone into hibernation. From here long press the button until the LED starts flashing slowly (approx 1 flash per second). The device is now in the USER SETUP state. After another long press, the LED should start flashing rapidly, at which point the device is in the correct EMMC FLASHING state. 

##### 3.b.3. Connect the device with a Micro-USB cable

Once you have both the rpiboot utility running on your computer and the device is in the correct state, you can connect the 2. Plug the micro-USB end of the cable into the exposed micro-USB port on the side of the device (the regular USB type-A ports on the back of the device can not be used for flashing), and the other end into your computer. If everything has gone according to plan, the rpiboot utiliy has now detected the device and mounted the device partitions if there are any. That should look something like pictured below:

![device detected output](/img/guides/reflashing_your_device/device_detected.png)

At this point you can access the internal file system of the AutoPi's Raspberry Pi through the mounted drives. On this Linux distribution the mounting points are `/media/<user>/boot` and `/media/<user>/rootfs`. On Windows you should be able to see at least one of the partitions in the File Explorer.

### 4. Flashing the device
Using Balena Etcher or alternative, select the image file you downloaded earlier, and the storage device. Once that's done, click flash and wait for it to complete. It's worth noting, that if it fails on the first try, try again. 

![balena configured with image and device](/img/guides/reflashing_your_device/configured_balena.png)

:::warning
It is unsafe to remove the device from power while it is on or booting. The safest point when to unplug the device from power is right after unmounting.
:::

Once the flashing is complete, unmount the storage device. After that you can remove the SD card from its reader and put it back into the 
AutoPi device. If using a CM4 device, unplug the CM4 device's USB cable and press the button to put the device into hibernation, then a short press to start up the device. 

### 5. Ensure your device is connecting to the correct environment
This step is required only if your company is using a dedicated environment. You can find out whether this is the case by checking what website you're going to to access your device. If it's different from my.autopi.io, for example my_company.autopi.io, then this is a dedicated environment and you need to follow this [Guide: Move to a dedicated environment](/guides/business/move_to_dedicated_environment.md/).

### 6. Set up the device
Next, you will need to have the device re-accepted in the AutoPi Cloud. To do
so, you need to first have the device boot up and connect to the internet. If you're using an AutoPi-provided SIM card, 
you must set the APN. See the **Setup APN** in the [Getting Started](/guides/index.md/#8-setup-apn) guide. After that, log in to
[my.autopi.io](https://my.autopi.io). You should immediately see a notification letting you know
that the device's key isn't accepted.

![Not accepted notification](/img/guides/reflashing_your_device/not_accepted_notification.png)

Another way of accepting the key is to go to the Settings page and navigating to your device's
general settings. There you should be able to see that the "Key state" field says unaccepted and a
green "Accept" button should be showing. Clicking on the button, accepts the key.

![Accept device button](/img/guides/reflashing_your_device/accept_device.png)

When your device comes online the first time, the WiFi hotspot will have the following setup:

**SSID**: AutoPi-Initial  
**Password**: autopi2018

:::tip
Remember to update your device from the Cloud after you reflash it, as that will ensure that all
the configuration values are properly configured (like the WiFi, SSID and password), and that the
device has the correct authentication token for uploading data to the cloud.
:::

## Discussion
If you'd like to discuss this topic with us or other fellow community members, you can do so on
our community page dedicated for this guide:
[Guide: Reflashing your device](https://community.autopi.io/t/guide-reflashing-your-device/668)