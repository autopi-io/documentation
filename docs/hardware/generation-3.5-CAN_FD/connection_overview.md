---
id: connection-overview
title: Connection overview
---


This is a diagram shows the connection possibilities of the 3.5 CAN-FD generation AutoPi.

1. Sim card slot    
2. USER EXT 1
3. ETH CONN
4. GPIO pins for RPi and external connections
5. GPIO Jumper to always force 5V on the RPi
6. JST connector for external speaker
7. OBD-II connector to vehicle
8. RTC battery connector
9. Micro USB connectors for external use

<br/>
<br/>

![connection overview front](/img/hardware/gen_3.5/side1.png)

<br/>
<br/>

This is a diagram shows the connection possibilities of the  generation AutoPi.

1. AP EXT 2 - BLE module connector
2. Upstream USB connector to RPi
3. AP EXT 1 - OBD2 pass through connector
4. Modem slot



<br/>
<br/>


![connection overview back](/img/hardware/gen_3.5/side2.png)

<br/>
<br/>

## Pinout

This image is an overview of the GPIO pinout of the 3.5 CAN-FD generation (TMU) AutoPi.

Pins marked with "in use" cannot be used for anything else. This will interrupt the functionality
of the AutoPi. This I2C bus is used by the AutoPi, but can be shared with other devices. 

All other pins are free and their functionality follows that of the Raspberry Pi.

![GPIO pinout](/img/hardware/gen_3.5/gpio_pinout_gen3.5.png) 

<br/>
<br/>

![AP EXT 1 connector pinout](/img/hardware/gen_3.5/AP_EXT1.png)

<br/>
<br/>

![AP EXT 2 connector pinout](/img/hardware/gen_3.5/AP_EXT2.png)

<br/>
<br/>

![USER EXT 1 connector pinout](/img/hardware/gen_3.5/USER_EXT1.png)

<br/>
<br/>

![ETH connector  pinout](/img/hardware/gen_3.5/ETH_CONN.png)