---
id: remote-can-access
title: Remote CAN Access with AutoPi Devices 
supportedDevices: ['pro','pro_case']
---
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

This guide explains how to use **Remote CAN Access** with AutoPi devices. It follows the structure and tone of AutoPi’s basic technical guides and demonstrates how AutoPi can be used to securely access, bridge, and log CAN data remotely over the Internet.

:::note
Make sure you contact our sales team at sales@autopi.io in order to have this new `remote-can` add-on enabled for your account. 
:::

Check out our Youtube video on real life case of [AutoPi CAN Bridge over the Internet](https://www.youtube.com/watch?v=8bIkRO_IYas).

---

## Overview

Remote CAN access enables engineers and technicians to interact with a vehicle’s CAN bus without being physically present. By using AutoPi devices connected to the Internet, CAN traffic can be securely accessed, monitored, and forwarded to remote tools in real time.


This capability is especially useful for:

* Remote diagnostics and troubleshooting.
* Development and testing of CAN-based applications.
* Fleet-wide data collection and analysis.
* Supporting vehicles in the field without on-site visits.

---

## What Is Remote CAN Access?

Remote CAN access is the ability to read, forward, and interact with a vehicle’s Controller Area Network (CAN) bus from a remote location. Traditionally, CAN access requires a physical connection using a diagnostic interface or test tool plugged directly into the vehicle. However, with AutoPi, CAN data can be:

* Read directly from the vehicle.
* Streamed securely over the Internet.
* Accessed by remote CAN-based diagnostic or testing tools.

This makes it possible to observe live vehicle data, analyze CAN frames, and perform diagnostics as if you were physically connected to the car.

---

## Using AutoPi for Remote CAN Logging and Bridging

AutoPi devices provide native CAN access combined with cloud connectivity. A common and powerful use case is **remote CAN logging and bridging**.


### Example Use Case: Secure Remote CAN Bridge

Two **AutoPi CAN-FD Pro** devices can be used together to create a secure CAN bridge over the Internet:

* **ON SIDE** - AutoPi CAN-FD Pro as remote CAN master: 
  * This device is nstalled in the vehicle and connected to the CAN bus.
  * Reads CAN traffic in real time.
  * Sends data securely via AutoPi Cloud.
  * Configurable in the AutoPi's management cloud.

  Recommended settings for remote CAN master  

  picture 



* **REMOTE SIDE** - AutoPi CAN-FD Pro as remote CAN slave:
  * Connected to a technician’s CAN-based test equipment. 
  * Receives CAN frames from the vehicle.
  * Exposes the CAN frames locally as if directly connected to the car.
  * Configurable in the AutoPi's management cloud.

  Recommended settings for remote CAN slave: 

  Picture 


This setup allows technicians to perform **remote diagnostics** using standard CAN tools (e.g. CAN analyzers, diagnostic software, or custom test setups) without being physically near the vehicle.

---

## Requirements

Before starting, ensure you have:

* Two AutoPi devices - [AutoPi CAN-FD Pro](https://shop.autopi.io/products/autopi-can-fd-pro) recommended for CAN bridging use cases.
  * [OBD-II extension cable](https://shop.autopi.io/products/obd-ii-extension-cable) (optional) - for relocating the AutoPi device if needed. 
* Internet connectivity for both AutoPi devices - we recommend using WIFI connection. 
* Access to the AutoPi Cloud - allows you to change the configurations on both devices. 
* OBD-II diagnostic tool - possible to use any OBD-II diagnostic tool or test tool in order to communicate remotely with the vehicle and perform data readout and programming.
* Connector of AutoPi device and CAN based diagnostic tool. 
* External power supply - in order to power up the remote side of AutoPi CAN-FD Pro device. Make sure the device is getting enough power (~ 12.8 V). 

![Example Setup of the remote CAN access](/img/guides/remote_can_access/setup_for_remote_can_access.png)

---

## Device Configuration

To enable remote CAN access, certain settings must be configured on the AutoPi devices through **AutoPi Cloud**.

:::note
The exact configuration options depend on your intended use case (logging, bridging, diagnostics). The steps below describe the general approach.
:::

### Configuration via AutoPi Cloud

Using AutoPi Cloud, you can:

* Enable CAN interfaces on each device.
* Configure CAN bus parameters (bitrate, interface selection, etc.). 
* Define secure communication between the two AutoPi devices.
* Control which CAN frames are forwarded or logged.
* Manage access permissions and authentication.

These cloud based settings allow you to fully tailor how CAN data is captured, transmitted, and exposed on the remote side. This section is intentionally flexible, as AutoPi Cloud allows advanced customization depending on project requirements.

---

## Example Setup and Demonstration

A practical example of a remote CAN access setup is demonstrated in our YouTube video: [AutoPi CAN Bridge over the Internet](https://www.youtube.com/watch?v=8bIkRO_IYas).

In the video, you can see:

* An AutoPi CAN-FD Pro device connected to a vehicle and reading CAN data.
* CAN frames being transmitted securely over the Internet. 
* Real-time CAN data being accessed from a remote location.

The key takeaway is that **vehicle data can be read in real time from anywhere** meaning that this is achievede **remotely**, without the physical access to the car. This example highlights how AutoPi enables powerful remote diagnostics and development workflows that would otherwise require on-site access.

---

## Summary

Remote CAN access with AutoPi devices enables secure, real-time interaction with vehicle CAN buses from anywhere in the world. By leveraging AutoPi Cloud and AutoPi CAN-FD Pro devices you can:

* Perform remote CAN logging.
* Create secure CAN bridges over the Internet.
* Use standard CAN tools for remote diagnostics.
* Reduce the need for physical vehicle access.

This makes AutoPi a powerful solution for engineers, technicians, and fleet operators working with CAN-based vehicle systems.

---

## Next Steps

* Watch the full YouTube demonstration to see the setup in action.
* Explore AutoPi Cloud configuration options for CAN access.
* Adapt the setup for logging, diagnostics, or development use cases.
