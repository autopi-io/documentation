---
id: setting-up-a-device-with-verizon-wireless
title: Setting Up a Device with Verizon Wireless
---

We have had serveral different users report issues with setting up the 4G Dongle on Verizon Wireless.

The issue is that Verizon requires an IMEI number to register the SIM. And while the AutoPi does have an IMEI, this is just not recognized by Verizon’s system and the setup fails.

This is a verified method of setting it up:

1. If you have a brand-new SIM you must use another device (Tablet or smartphone) to register the SIM with Verizon. Use the IMEI from that device.
2. If you have a SIM that is already registered on Verizon’s network, you can go ahead and use the SIM.
3. Follow this guide for inserting the SIM in the device: https://www.autopi.io/getting-started
4. Instead of the preselected APN settings, use this string: vzwinternet

This should be all.

