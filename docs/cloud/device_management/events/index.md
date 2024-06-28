---
id: cloud-events-intro
title: Introduction
---

import useBaseUrl from '@docusaurus/useBaseUrl';

An event describes a specific state change or condition encountered on the device.
The system running on the device may listen and respond to events and perform additional actions when they occur. Events are also transferred to the cloud where they can be used in triggers, historic logging etc.

All events are divided into two top level areas:

  - [System](system.md)
  - [Vehicle](vehicle.md)

Each event consist of a timestamp, a tag and some additional data fields.

![AutoPi Cloud Events](/img/cloud/device_management/events/events.jpg)

