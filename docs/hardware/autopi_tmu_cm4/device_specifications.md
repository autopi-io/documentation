---
id: device_specifications
title: Technical Specifications
supportedDevices: ['cm4']
---
import CardGrid from "/components/CardGrid" ;
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

This guide contains everything you need to know about the AutoPi TMU CM4 device's technical specifications. You can also read more on how to [Get started with AutoPi TMU CM4](https://docs.autopi.io/getting_started/autopi_tmu_cm4/). 

Download the official datasheet here: <br/>
[TMU CM4 Datasheet](https://www.autopi.io/static/pdf/autopi_TMU_CM4_datasheet.pdf)

| **Name** | **Description** |
|:-----:|--------|
|   Processor **(NEW)**   |   Broadcom BCM2711 Quad-core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz    | 
|   Memory    |  1GB LPDDR4 SDRAM <br/> **Upgrade:** 2GB, 4GB or 8GB LPDDR4 SDRAM (depending on model)     | 
|   Storage **(NEW)**    |   8GB on board eMMC <br/> **Upgrade:** 16GB and 32GB (depending on model)     | 
|   Size, Weight and Casing    |   **Casing:** Improved expansion options with exchangeable back shield for external antennas, additional USB ports, ethernet port.     | 
|   Modem    |   Integrated 4G/LTE Cat 4 connection (3G/EDGE fallback) <br/> 150Mbit DL / 50Mbit UL <br/> Worldwide support in a single device <br/> **4G LTE Bands (Global):** B1 / B2 / B3 / B4 / B5 / B7 / B8 / B12 / B13 / B18 / B19 / B20 / B25 / B26 / B28 / B38 / B39 / B40 / B41 <br/> **3G Fallback (WCDMA):** B1 / B2 / B4 / B5 / B6 / B8 / B19 <br/> **EDGE Fallback:** B2 / B3 / B5 / B8 / Quad-band     |  
|   Certifications    |   EN 301 489-1 v2.2.0, EN55025:2008, EN 50498 and Directive 2004/104/EC, ISO 7637-2:2011, EN 301 489-3 V2.1.1, FCC 47 CFR Part 15, Class A:10–1–17 Edition     |  
|   Security Element **(NEW)**    |   Hardware Based Secure Key Management <br/> **Public Key Algorithms:** RSA and ECC asymmetric, AES and DES symmetric cryptography algorithms. HMAC, CMAC, SHA-1, SHA-224/256/384/512 operations <br/> **Crypto Curves:** ECC NIST, Brainpool, Twisted Edwards Ed2551, Montgomery Curve25519, Koblitz, Barreto-Naehrig Curve, Montgomery Curve448 <br/> Secure Storage of Keys, Certificates and Data <br/> Unique Serial Number <br/> Intrusion Detection   | 
|   GPS    |   Integrated GPS + A-GPS. <br/> **Supports:** GPS/GLONASS/BeiDou/Galileo/QZSS     |  
|   Power    |  **Line Voltage:** 12.5V AC (Car battery power). Up to 35V (Trucks). <br/> Support for trucks with up to 35V <br/> Built-in Power Management system to prevent the vehicle’s battery from being drained     | 
|   Expansion **(NEW)**   |  **2 X USB:** USB 2.0 <br/> **Ethernet:** Built in Ethernet <br/> **GPIO:** UART/I2C/SPI  |  
|   Wireless    |  Built on Cypress CYW43455 Chipset <br/> **WiFi:** 2.4GHz and 5GHz IEEE 802.11.b/g/n/ac wireless LAN <br/> **Bluetooth:** Bluetooth 5.0 + Bluetooth Low Energy (BLE      |  
|   Accelerometer    |  Built in 3-axis accelerometer      |  
|   Gyroscope   |   Built in 3-axis gyroscope     |  
|   Automotive Interface    |  **2 X CAN:** CAN interface with up to 1Mbps Data rate with integrated CAN data filter <br/> **DoIP:** Upgradeable to allow support for DoIP      | 
|   Input slots     |  **SIM Card:** Nano SIM – Not Included      |  
|   Audio    |  Built-in speakers      | 
|   Video Out    |  HDMI @ 1080P60 Video Output      |   
|   Absolute Maximum <br/> Operating Environment    |  **Operating Temperature:** -20° TO 70° C (-4° TO 158° F) <br/> **Relative Humidity:** 0% TO 75% Noncondensing      |  
|   Operating System    |  Raspbian OS with preconfigured AutoPi Core      |  


