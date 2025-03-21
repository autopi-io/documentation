---
id: geofences
title: Geofences
---
import CardGrid from "/components/CardGrid";

Geofences allow you to define a specific are on a map where you want to be notified when a vehicle enters or exits. The way this works is that you visually define an area in the geofence editor, which can be either a polygon shape, or a point with a radius.

This geofence is then syncronized to the device, and the device will then behave in the following ways.

The events are triggered in two different ways.

1. When the device wakes up, it will report the state of the geofences, which geofences it is inside, and which geofences it is outside.
    `vehicle/geofence/GEOFENCE_NAME/inside|outside`


2. Whenever a new position is logged, it will check the defined geofences, and if the state of a geofence has changed, ie. you have either exited or entered a geofence, and the next 2 positions (3 total), are the same state, then the device will trigger an event `vehicle/geofence/GEOFENCE_NAME/enter` or `vehicle/geofence/GEOFENCE_NAME/exit`

This events are triggered on the device, and then uploaded to the [Cloud](https://www.autopi.io/software-platform/cloud-management).
This means that you are able to both create triggers in the [Cloud](https://www.autopi.io/software-platform/cloud-management), but also configure reactors directly on the device that can react to this event, like playing a sound, sending a HTTP request or maybe publish a message on a MQTT broker.

:::note
[Click here](/cloud/device_management/triggers/a_guide_to_triggers.md) to see the guide about how triggers work. 
:::

<br>
</br>
### Let's keep in touch!
Thank you for choosing AutoPi. We're excited to see what you will achieve with your AutoPi device! 
<CardGrid home>
[![](/img/shared/favicon.ico) **Contact our sales team** You can build on top of AutoPi.](https://www.autopi.io/contact/)

[![](/img/shared/support_icon.png) **Get help from our support team** Let us know about your technical questions.](https://www.autopi.io/support/)

</CardGrid>