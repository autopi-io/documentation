---
id: connection-overview
title: Connection Overview
---

## Connectivity

### Front Side

This diagram shows the 3<sup>rd</sup> generation frontside connections possibilities

1. USER EXT 1
2. USER EXT 2
3. GPIO pins for RPi and external connections
4. GPIO Jumper to always force 5V on the RPi
5. JST connector for external speaker
6. OBD-II connector to the vehicle
7. RTC battery connector
8. Micro USB connectors for external use
9. SD card slot

![connection overview front](/img/hardware/legacy_devices/autopi_dongle_gen3/connection_overview/side1.png)

### Back Side

This diagram shows the 3<sup>rd</sup> generation backside connections possibilities

1. AP EXT2 - BLE module connector
2. Upstream USB connector to RPi
3. AP EXT1 - OBD2 pass-through connector
4. Modem slot

![connection overview back](/img/hardware/legacy_devices/autopi_dongle_gen3/connection_overview/side2.png)

## Pinouts

### GPIO Pins

This image is an overview of the GPIO pinout of the 3<sup>rd</sup> generation (TMU) AutoPi.

Pins marked with "in use" cannot be used for anything else. This will interrupt the functionality
of the AutoPi. This I2C bus is used by the AutoPi, but can be shared with other devices. 

All other pins are free and their functionality follows that of the Raspberry Pi.

![Third generation AutoPi GPIO Pinout](/img/hardware/legacy_devices/autopi_dongle_gen3/connection_overview/gpio_pinout_gen3.png)

:::note
If you'd like to discuss this topic with us or other fellow community members, you can do so on
our community page dedicated for this guide:
[AutoPi GPIO Pinout](https://community.autopi.io/t/autopi-gpio-pinout/271)
:::


### AutoPi Extension Port 1

![AP EXT 1 connector pinout](/img/hardware/legacy_devices/autopi_dongle_gen3/connection_overview/AP_EXT1.png)

### AutoPi Extension Port 2

![AP EXT 2 connector pinout](/img/hardware/legacy_devices/autopi_dongle_gen3/connection_overview/AP_EXT2.png)

### User Extension Port 1

![USER EXT 1 connector pinout](/img/hardware/legacy_devices/autopi_dongle_gen3/connection_overview/USER_EXT1.png)

### User Extension Port 2

![USER EXT 2 connector pinout](/img/hardware/legacy_devices/autopi_dongle_gen3/connection_overview/USER_EXT2.png)

