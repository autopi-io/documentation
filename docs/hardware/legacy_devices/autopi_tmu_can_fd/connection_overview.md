---
id: connection-overview
title: Connection Overview
---

## Connectivity

### Front side

This diagram shows the 3.5 CAN-FD generation frontside connections possibilities

1. Sim card slot    
2. USER EXT 1
3. ETH CONN
4. GPIO pins for RPi and external connections
5. GPIO Jumper to always force 5V on the RPi
6. JST connector for external speaker
7. OBD-II connector to the vehicle
8. RTC battery connector
9. Micro USB connectors for external use

![connection overview front](/img/hardware/legacy_devices/autopi_tmu_can_fd/connection_overview/side1.png)

### Back side

This diagram shows the 3.5 CAN-FD generation backside connections possibilities

1. AP EXT 2 - BLE module connector
2. Upstream USB connector to RPi
3. AP EXT 1 - OBD2 pass through connector
4. Modem slot


![connection overview back](/img/hardware/legacy_devices/autopi_tmu_can_fd/connection_overview/side2.png)

## Pinout

### GPIO Pins

This image is an overview of the GPIO pinout of the 3.5 CAN-FD generation AutoPi.

Pins marked with "in use" cannot be used for anything else. This will interrupt the functionality
of the AutoPi. This I2C bus is used by the AutoPi, but can be shared with other devices. 

All other pins are free and their functionality follows that of the Raspberry Pi.

![GPIO pinout](/img/hardware/legacy_devices/autopi_tmu_can_fd/connection_overview/gpio_pinout_gen3.5.png) 

### AutoPi Extension Port 1

![AP EXT 1 connector pinout](/img/hardware/legacy_devices/autopi_tmu_can_fd/connection_overview/AP_EXT1.png)

### AutoPi Extension Port 2

![AP EXT 2 connector pinout](/img/hardware/legacy_devices/autopi_tmu_can_fd/connection_overview/AP_EXT2.png)

### User Extension Port 1

![USER EXT 1 connector pinout](/img/hardware/legacy_devices/autopi_tmu_can_fd/connection_overview/USER_EXT1.png)

The power to the extension ports can be controlled using the following commands:

`spm.query ext_pins [high|low|toggle]=ext_sw_3v3`

`spm.query ext_pins [high|low|toggle]=ext_sw_5v`

### Ethernet Connection Port

![ETH connector pinout](/img/hardware/legacy_devices/autopi_tmu_can_fd/connection_overview/ETH_CONN.png)
