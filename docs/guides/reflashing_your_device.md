---
id: reflashing-your-device
title: Reflashing your device
---

Your device contains an SD card with the AutoPi Core preinstalled. The SD card is located inside the device. 

If you find yourself in need of reflashing your device, then you can always get the latest AutoPi
Core image from [here](https://github.com/autopi-io/autopi-core/releases).

Make sure that you select the right image for your device. Generation 2 devices should use the
autopi\_core\_gen2\_\*.img.gz image while generation 3 (TMU) devices should use the
autopi\_core\_tmu\_\*.img.gz image. We recommend using [Etcher](https://etcher.io) for flashing -
it will take the GZ image directly and flash it.

Once you have flashed your device, you will need to have it re-accepted in the AutoPi Cloud. To do
so, you need to first have the device boot up and connect to the internet. After that, log in to
[my.autopi.io](https://my.autopi.io). You should immediately see a notification letting you know
that the device's key isn't accepted.

:::note
If you are a business customer and have a dedicated environment, there is an extra step that you need
to take. Take a look at [this](business/move_to_dedicated_environment.md) guide for more information.
:::

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
If you'd like to discuss this topic with us or other fellow community memebers, you can do so on
our community page dedicated for this guide:
[Guide: Reflashing your device](https://community.autopi.io/t/guide-reflashing-your-device/668)