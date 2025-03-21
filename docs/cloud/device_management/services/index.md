---
id: services-intro
title: Introduction
---
import CardGrid from "/components/CardGrid";

This sub-section of the guides goes into detail about services, also known as managers. Services
are essentially a separate, child process, that is running in the background that is managed by a
parent process (more specifically, the salt minion). If that process fails, salt will make sure
that it is started up again and the error is reported as needed. 

More importantly however, the default services that come with an [AutoPi](https://www.autopi.io) are the preferred point of
communication between the Core software and their hardware counterpart. For example the OBD manager
is responsible of communicating directly with the STN chip to get communications with a vehicle
working. This makes services a very convenient place for operations that are closely related to
specific parts of an [AutoPi](https://www.autopi.io) device.

It is also possible to create custom services that run on the device. You are able to define PIP
package requirements for them as well. These services will be started alongside the rest of the
services - when the device boots up.

<br>
</br>
### Let's keep in touch!
Thank you for choosing AutoPi. We're excited to see what you will achieve with your AutoPi device! 
<CardGrid home>
[![](/img/shared/favicon.ico) **Contact our sales team** You can build on top of AutoPi.](https://www.autopi.io/contact/)

[![](/img/shared/support_icon.png) **Get help from our support team** Let us know about your technical questions.](https://www.autopi.io/support/)

</CardGrid>