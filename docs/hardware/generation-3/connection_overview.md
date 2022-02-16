---
id: connection-overview
title: Connection overview
---



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

<br/>
<br/>

![connection overview front](/img/hardware/gen_3/side1.png)

<br/>
<br/>

This diagram shows the 3<sup>rd</sup> generation backside connections possibilities

1. AP EXT2 - BLE module connector
2. Upstream USB connector to RPi
3. AP EXT1 - OBD2 pass-through connector
4. Modem slot



<br/>
<br/>

![connection overview back](/img/hardware/gen_3/side2.png)

<br/>
<br/>

## Pinout

This image is an overview of the GPIO pinout of the 3<sup>rd</sup> generation (TMU) AutoPi.

Pins marked with "in use" cannot be used for anything else. This will interrupt the functionality
of the AutoPi. This I2C bus is used by the AutoPi, but can be shared with other devices. 

All other pins are free and their functionality follows that of the Raspberry Pi.

![Third generation AutoPi GPIO Pinout](/img/hardware/gen_3/gpio_pinout_gen3.png)

:::note
If you'd like to discuss this topic with us or other fellow community members, you can do so on
our community page dedicated for this guide:
[AutoPi GPIO Pinout](https://community.autopi.io/t/autopi-gpio-pinout/271)
:::

 

<br/>
<br/>


![AP EXT 1 connector pinout](/img/hardware/gen_3/AP_EXT1.png)

<br/>
<br/>

![AP EXT 2 connector pinout](/img/hardware/gen_3/AP_EXT2.png)

<br/>
<br/>

![USER EXT 1 connector pinout](/img/hardware/gen_3/USER_EXT1.png)

<br/>
<br/>

![USER EXT 2 connector pinout](/img/hardware/gen_3/USER_EXT2.png)

