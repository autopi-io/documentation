---
id: device_specifications
title: Specifications
supportedDevices: ['mini']
---
import CardGrid from "/components/CardGrid" ;
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

Download the official datasheet here: <br/>
[Autopi Mini Datasheet](https://www.autopi.io/static/pdf/autopi_mini_datasheet.pdf)

| **Name** | **Description** |
|:-----:|--------|
|   Physical specifications    |   **Weight:** 63 g <br/> **Dimensions:** 67,2 x 49,6 x 25 mm (L x W x H)   | 
|   Modem (EMEA variant)   |  Integrated 4G/LTE Cat 1 connection <br/> **4G (LTE-FDD):**  B1, B3, B7, B8, B20, B28 <br/> **4G (LTE-TDD):** B38, B40, B41 <br/> **2G (GSM):** B2, B3, B5, B8  | 
|   Modem (APAC/LATAM variant)  | Integrated 4G/LTE Cat 1 connection <br/> **4G (LTE-FDD):**  B1, B2, B3, B4, B5, B7, B8, B20, B28 <br/> **4G  (LTE-TDD):** B40 <br/> **2G (GSM):** B2, B3, B5, B8       | 
|   Modem (NA variant)   |   Integrated 4G/LTE Cat 1 connection (3G/EDGE fallback) <br/> **4G (LTE FDD):** B2, B4, B5, B12, B13 <br/> **3G (WCDMA):** B2, B4, B5     |  
|   Certifications    |   CE/RED/UKCA, E-Mark, EAC, RoHS, REACH, RCM, SDPPI POSTEL, CITC     |   
|   GPS    |   Integrated GPS + A-GPS. <br/> **Supports:** GPS/GLONASS/BeiDou/Galileo/SBAS/QZSS/DGPS <br/> **Receiver:** 33 channel <br/> **Tracking sensitivity:** -165 dBM <br/> **Position Accuracy:** < 2.5 m CEP <br/> **Hot start:** < 1 s <br/> **Warm start:** < 25 s <br/> **Cold start:** < 35 s <br/> **Velocity Accuracy:** < 0.1 m/s (within +/- 15% error) |  
|   Power    |  Built-in Power Management system to prevent the vehicle’s battery from being drained <br/> **Input voltage range:** 10–30 V DC with overvoltage and reverse polarity protection <br/> **Back-up battery:** 170 mAh Li-Ion battery (0.63 Wh) <br/> **Power consumption:** <br/> At 12V < 3 mA (Ultra Deep Sleep) <br/> At 12V < 5 mA (Deep Sleep) <br/> At 12V < 16 mA (Online Deep Sleep) <br/> At 12V < 18 mA (GPS Sleep) <br/> At 12V < 33 mA (nominal)      | 
|   Wireless   |  **Bluetooth:** Bluetooth 4.0 + Low Energy (BLE)  |    
|   Accelerometer   | Built in 3-axis accelerometer |
|   Automotive Interface    |  **Data:** K-Line, CAN bus data <br/> **Data reading:** <br/> Up to 32 vehicle onboard parameters, supported OBD protocols: <br/> ISO 9141-2 (5 baud init, 10.4 kbaud) <br/> ISO 14230-4 KWP (5 baud init, 10.4 kbaud) <br/> ISO 14230-4 KWP (fast init, 10.4 kbaud) <br/> ISO 15765-4 CAN (11 bit ID, 250 kbaud) <br/> ISO 15765-4 CAN (11 bit ID, 500 kbaud) <br/> ISO 15765-4 CAN (29 bit ID, 250 kbaud) <br/> ISO 15765-4 CAN (29 bit ID, 500 kbaud)      |  
|   Data parameters support   |   **30+ Parameters from OBD port** <br/> Mileage / Fuel / RPM / Speed / Engine temperature / DTC / Engine load value / Coolant temperature / Short and long term fuel trim bank / Fuel pressure / Intake MAP / Engine RPM / Vehicle speed / Timing advance / Intake air temperature / MAF throttle position / Run time since engine start / Fuel rail pressure relative / Fuel rail pressure direct / Commanded EGR / EGR error / Fuel level / Distance traveled codes cleared / Barometric pressure / Control module voltage / Absolute load value / OBD Ambient air temperature / Time since codes cleared / Absolute fuel rail pressure / Hybrid battery pack remaining life / Engine oil temperature / Fuel injector timing / Fuel rate / VIN / DTC value / Distance and time traveled since Malfunction Indicator Lamp ON/ EV Milage / EV Range / EV Battery level / Ignition status     |  
|   Input slots     |  **SIM Card:** Nano SIM – Comes with SIM card and subscription pre-installed      |   
|   Absolute Maximum <br/> Operating Environment    |  **Operating Temperature:** -40° to +85° C (-40° to +185° F) <br/> **Relative Humidity:** 5% to 95% Noncondensing      |  


