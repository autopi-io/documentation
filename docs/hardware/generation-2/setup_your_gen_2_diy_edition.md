---
id: setup-your-gen-2-diy-edition
title: Setup your Gen 2 DiY Edition
---

Congratulations on your AutoPi Device, DiY Edition! We're sure that you have some great plans on how to use
the device to your liking, but of course, first, you need to set it up. This is a guide that shows the
steps that need to be taken to get the device in running condition.

:::note
This guide is for Gen 2 DiY boards. For Gen 3 (TMU) DiY boards, take a look at
[this](../generation-3/setup_your_tmu_diy_edition.md) guide.
:::

## Connecting the Raspberry Pi
Here is a small guide on connecting a RPi Zero to you AutoPi.

1. Get your Raspberry Pi Zero and the 40-pin header that came with your AutoPi:
![rpi_zero_pinless](/img/guides/setup_your_gen_2_diy_edition/rpi_zero_pinless.jpeg) 

2. Solder the pin header to the Raspberry Pi:
![rpi_zero_pins_attached](/img/guides/setup_your_gen_2_diy_edition/rpi_zero_pins_attached.jpeg) 

3. Connect the flat micro-USB cable that came with your AutoPi. One end needs to be connected to the
vertical USB connector on the AutoPi board and the other end needs to be connected to the USB out on
the Raspberry Pi: 
![connect_diy_board_usb](/img/guides/setup_your_gen_2_diy_edition/connect_diy_board_usb.jpeg) 

4. Mount the Raspberry Pi on the AutoPi. Use the screws that came with your AutoPi, to fasten the
Raspberry Pi: 
![fasten_rpi_with_diy_board](/img/guides/setup_your_gen_2_diy_edition/fasten_rpi_with_diy_board.jpeg) 

## Connecting to the Cloud
Should you want to use the AutoPi Cloud, then you can use this image found here to setup your device:

https://github.com/autopi-io/autopi-core/releases

The image has been optimized for Raspberry Pi Zero.

:::tip
Etcher can write the compressed image directly to the SD card. We recommend using a Class 10
SD card with minimum 8Gb storage.
:::

### Logging in to the device

The device is initially configured to use the following credentials:

*WiFi*  
SSID: AutoPi-Initial  
Password: autopi2018  

*SSH*  
User: pi  
Password: autopi2018  

**You should consider changing these to something else once you get up and running.**

### Getting access to the cloud
To get your device on the AutoPi Cloud you need to get an ID for your device, see the below steps.

1. Ensure that the `/etc/salt/minion` config file has the master specified. Look for the line:

    ```
    master: hub01.autopi.io
    ```

2. Remember to configure the APN settings.
3. Write to support with your unit_id (Find by logging into the local hotspot, or see file
`/etc/salt/minion_id`) and ask (support@autopi.io) for it to be approved in the system (the dongle
needs to be online at least once before this can be done).

:::caution
The AutoPi *always* needs to be powered through the OBD connector to function properly.
Powering the board through the micro-USB (or USB-C for RPi 4) power plug on the Raspberry Pi could damage your
board. If you need to test the AutoPi in a lab environment, we encourage you to get the
[OBD power connector](https://shop.autopi.io/en/products/obd-ii-power-cable-10/) from our shop.
:::

## Discussion
If you'd like to discuss this topic with us or other fellow community members, you can do so on our community
page dedicated for this guide: [Getting started with your DiY Edition](https://community.autopi.io/t/getting-started-with-your-diy-edition/428).