---
id: keyfob-hat-pinout
title: Keyfob HAT Pinout
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import SideBySide from '@site/src/components/SideBySide';

:::note
The keyless entry solution described here only works with the AutoPi TMU CM4 and newer editions
:::

The keyless keyfob extension HAT enables two new ports on the AutoPi device. These can be seen here during the install:

<p align="center">
<img src="/img/hardware/accessories/keyfob/keyfob_installed_top-pinout.jpg" alt="Keyfob HAT pinouts" width="60%" />
</p>

After assembly of the device, the ports can be seen from the picture below:

<p align="center">
<img src="/img/hardware/accessories/keyfob/keyfob_ports.jpg" alt="Keyfob HAT pinouts" width="60%" />
</p>

## Pinout Conn 1 - Local

Connection 1 on the Keyfob HAT is controlled locally on the keyfob extension board. 

The pinout for this connector is:

| **Pin** | **Name** | **Description** | **Comments** |
|:-----:|--------|--------|--------|
|   1   |    Vcc3v3_switched    |   Controlable 3.3V power supply     | Controlled by HAT MCU | 
|   2    |   GND     |  Internal Ground      | |
|   3    |   Vcc5v_switched     |  Controlable 5V power supply      | Controlled by HAT MCU |
|   4    |   DIO9     |  Digital Input/Output      | |
|   5    |   DIO10     |   Directly connected to OBD pin     | |
|   6    |   DIO3     |    Directly connected to OBD pin    | |
|   7    |   DIO2     |  Directly connected to OBD pin      | |
|   8    |   DIO0     |   Directly connected to OBD pin     | |


## Pinout Conn 2 - Main
Connection 2 on the Keyfob HAT is controlled from the AutoPi base board, by the standard AutoPi setup. 

The pinout for this connector is:

| **Pin** | **Name** | **Description** | **Comments** |
|:-----:|--------|--------|--------|
|   1   |    Vcc3v3_switched    |   Controlable 3.3V power supply     | Controlled by AutoPi base board | 
|   2    |   GND     |  Internal Ground      | |
|   3    |   Vcc5v_switched     |  Controlable 5V power supply      | Controlled by AutoPi base board |
|   4    |   RPI_ID_SD     |  Digital Input/Output from RPi      | |
|   5    |   RPI_GPIO24     |   Directly connected to OBD pin from RPi     | |
|   6    |   RPI_ID_SC      |    Directly connected to OBD pin from RPi    | |
|   7    |   RPI_GPIO27     |  Directly connected to OBD pin from RPi      | |
|   8    |   RPI_GPIO23     |   Directly connected to OBD pin from RPi     | |


