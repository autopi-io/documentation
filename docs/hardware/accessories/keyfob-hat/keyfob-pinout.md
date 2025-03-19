---
id: keyfob-hat-pinout
title: Keyfob HAT Pinout
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import CardGrid from "/components/CardGrid";

:::note
The keyless entry solution described here only works with the [AutoPi](https://www.autopi.io) [TMU CM4](https://www.autopi.io/hardware/autopi-tmu-cm4) and newer editions
:::

The keyless keyfob extension HAT enables two new ports on the [AutoPi](https://www.autopi.io) device. These can be seen here during the install:

<p align="center">
<img src="/img/hardware/accessories/keyfob/keyfob_installed_top-pinout.jpg" alt="Keyfob HAT pinouts" width="60%" />
</p>

After assembly of the device, the ports can be seen from the picture below:

<p align="center">
<img src="/img/hardware/accessories/keyfob/keyfob_ports.jpg" alt="Keyfob HAT pinouts" width="60%" />
</p>

## Pinout Conn 1 - RPI
Connection 1 on the Keyfob HAT is controlled from the [AutoPi](https://www.autopi.io) base board, by the standard [AutoPi](https://www.autopi.io) setup. 

The pinout for this connector is:

| **Pin No.** | **Wire Color** | **Name** | **Description** | **Comments** |
|:-----:|--------|--------|--------|--------|
|   1   |   Red      |   Vcc3v3_switched   |   Controllable 3.3V power supply   |   Controlled by the [AutoPi](https://www.autopi.io) base board MCU   | 
|   2   |   Black    |   GND               |   Internal ground                  |   |
|   3   |   Yellow   |   Vcc5v_switched    |   Controllable 5V power supply     |   Controlled by the [AutoPi](https://www.autopi.io) base board MCU   |
|   4   |   Green    |   RPI_ID_SD         |   Digital input/output             |   Controlled by the RPi   |
|   5   |   Blue     |   RPI_GPIO24        |   Digital input/output             |   Controlled by the RPi   |
|   6   |   White    |   RPI_ID_SC         |   Digital input/output             |   Controlled by the RPi   |
|   7   |   Orange   |   RPI_GPIO27        |   Digital input/output             |   Controlled by the RPi   |
|   8   |   Purple   |   RPI_GPIO23        |   Digital input/output             |   Controlled by the RPi   |

## Pinout Conn 2 - Local

Connection 2 on the Keyfob HAT is controlled locally on the keyfob extension board. 

The pinout for this connector is:

| **Pin No.** | **Wire Color** | **Name** | **Description** | **Comments** |
|:-----:|--------|--------|--------|--------|
|   1   |   Red      |   Vcc3v3_switched    |   Controllable 3.3V power supply   |   Controlled by the HAT's onboard MCU   | 
|   2   |   Black    |   GND                |   Internal ground                  |   |
|   3   |   Yellow   |   Vcc5v_switched     |   Controllable 5V power supply     |   Controlled by the HAT's onboard MCU   |
|   4   |   Green    |   DIO9               |   Digital input/output             |   Controlled by the HAT's onboard MCU   |
|   5   |   Blue     |   DIO10              |   Digital input/output             |   Controlled by the HAT's onboard MCU   |
|   6   |   White    |   DIO3               |   Digital input/output             |   Controlled by the HAT's onboard MCU   |
|   7   |   Orange   |   DIO2               |   Digital input/output             |   Controlled by the HAT's onboard MCU   |
|   8   |   Purple   |   DIO0               |   Digital input/output             |   Controlled by the HAT's onboard MCU   |


<br>
</br>

## Let's keep in touch!
Thank you for choosing AutoPi. We're excited to see what you will achieve with your AutoPi device! 
<CardGrid home>
[![](/img/shared/favicon.ico) **Contact our sales team** You can build on top of AutoPi .](https://www.autopi.io/contact/)

[![](/img/shared/support_icon.png) **Get help from our support team** Let us know about your technical questions.](https://www.autopi.io/support/)

</CardGrid>