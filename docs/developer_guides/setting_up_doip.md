---
id: setting-up-doip
title: Setting up DoIP
---
import useBaseUrl from '@docusaurus/useBaseUrl'; import CardGrid from "/components/CardGrid" ;

:::caution Before proceeding with the install
The DoIP solution described here only works with the [AutoPi](https://www.autopi.io) [TMU CM4](https://www.autopi.io/hardware/autopi-tmu-cm4) and newer editions.

When installed, the Ethernet port on the AutoPi devices will internally be used for DoIP. Do not connect anything on the Ethernet port. 

Never install the upgraded device in a vehicle that does not support DoIP. Using an Ethernet based protocol in a vehicle that only supports CAN can affect the performance of the vehicle.   
:::


## Introduction
DoIP is a modern protocol used in the automotive industry for diagnostics and communication between vehicle components and external diagnostic equipment. This technology plays a crucial role in diagnosing and maintaining vehicles, ensuring they operate efficiently and safely.
As vehicles become more connected and complex, the need for advanced diagnostic capabilities increases. DoIP provides a robust framework that allows for faster, more reliable data transmission compared to older protocols. 

## Contents
This guide covers configuring Diagnostics over IP on the AutoPi [TMU CM4](https://www.autopi.io/hardware/autopi-tmu-cm4/) or [CAN-FD Pro](https://www.autopi.io/hardware/autopi-canfd-pro/) devices. Paired with the AutoPi [DoIP HAT](https://shop.autopi.io/products/doip-hat-v1-3), these devices can be upgraded to support DoIP. See this guide on how to install the [`DoIP HAT`](/hardware/accessories/doip-install/). It's also possible to order the device pre-installed with the DoIP Solution. 


## Ethernet Pin assignment at OBD Connector
Installing the DoIP HAT on the AutoPi devices, transforms you device into that is capeable of communication over an Ethernet based protocol instead of a CAN Based protocol. This is a protocol used on some newer vehicles. The standard Pin out then changes in the 16pin OBD connector.   

After the upgrade four pins are used for Ethernet and one pin is used for activation. Two different types of pinout is defined in the DoIP standard and both are supported by the AutoPi HAT. Its only the Ethernet Rx lines that changes place.

### DoIP main pinout
<p align="center">
  <img src={useBaseUrl('img/guides/doip_main_pinout.jpg')} alt="DoIP Main pinout" width="600"/>
</p>

| **OBD pinout**         | **DoIP usage** |
|------------------------|------------|
| Pin 3  | Ethernet Rx (+)    |
| Pin 11 | Ethernet Rx (-)    |
| Pin 12 | Ethernet Tx (+)    |
| Pin 13 | Ethernet Tx (-)    |
| Pin 8  | DoIP Activation    |

### DoIP alternative pinout
<p align="center">
  <img src={useBaseUrl('img/guides/doip_alt_pinout.jpg')} alt="DoIP Alternative pinout" width="600"/>
</p>

| **OBD pinout**         | **DoIP usage** |
|------------------------|------------|
| Pin 1  | Ethernet Rx (+)    |
| Pin 9 | Ethernet Rx (-)    |
| Pin 12 | Ethernet Tx (+)    |
| Pin 13 | Ethernet Tx (-)    |
| Pin 8  | DoIP Activation    |

### Controlling the DoIP port
From the AutoPi Core software, it is possible to control the pinout variant to be used.

## Using the DoIP software

The AutoPi DoIP integration is based on the [udsoncan library](https://github.com/autopi-io/py-udsoncan). The integration implements all the services and helper classes from the [library](https://udsoncan.readthedocs.io/en/latest/) and thereby also support UDS. 


## Let's keep in touch!
Thank you for choosing AutoPi. We're excited to see what you will achieve with your AutoPi device! 
<CardGrid home>
[![](/img/shared/favicon.ico) **Contact our sales team** You can build on top of AutoPi .](https://www.autopi.io/contact/)

[![](/img/shared/support_icon.png) **Get help from our support team** Let us know about your technical questions.](https://www.autopi.io/support/)

</CardGrid>