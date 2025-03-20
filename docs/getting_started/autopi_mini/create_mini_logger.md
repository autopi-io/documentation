---
id: create-mini-loggers
title: Create Loggers
---
import CardGrid from "/components/CardGrid";

Compared to other [AutoPi](https://www.autopi.io) devices, the [Mini](https://www.autopi.io/hardware/autopi-mini) only supports a predefined list of PID and CAN loggers (It also support listening on some system [AutoPi](https://www.autopi.io) [Mini](https://www.autopi.io/hardware/autopi-mini) system changes, like the current sleep condition).

In this guide, we will take a look on how we can create loggers for the [AutoPi](https://www.autopi.io) [Mini](https://www.autopi.io/hardware/autopi-mini).

## Creating a [Mini](https://www.autopi.io/hardware/autopi-mini) Logger
Let's create a logger for your [AutoPi](https://www.autopi.io) [Mini](https://www.autopi.io/hardware/autopi-mini).
Open up the [AutoPi](https://www.autopi.io) [Mini](https://www.autopi.io/hardware/autopi-mini) device view and head over to the loggers page.
Here, you will see a 'Create' and a 'Restore default' button on the left-hand side.
Clicking on the 'Create' button will open a new window, that looks like the following screenshot:

![Create PID Logger Window](/img/getting_started/autopi_mini/create_mini_loggers/AutoPiMiniLogger.png)

:::note
The 'Restore default', as the name suggests, deletes the current loggers and applies default loggers.
:::

Let's look through the fields available:

**Parameter**: This is the parameter you would like to use.
Select one of them from the dropdown menu.
Note that, some parameter share the same name but can be distinguished by the group they belong to.

**Periodic monitoring**: Shoulde this logger be available in all messages from the [AutoPi](https://www.autopi.io) [Mini](https://www.autopi.io/hardware/autopi-mini) or only when the logger generates an event (configurable by the 'event on')

**Event on**: Should a records be made on a specific event.
Select an event that should trigger a record in the dropdown list.
When selection an event, new options appear, to configure how that event behaves.
As an example, when selecting `Ranges Both` contains a range start and range end field, which allows to configure the range that `Ranges Both` should generate records based on, this can also be seen in the following image:

![Create PID Logger Window](/img/getting_started/autopi_mini/create_mini_loggers/AutoPiMiniLogger2.png)


**Advanced**: In the advanced section you can modify the sampling rate, which controls how long a value should remain the same before changing.

Once you save the [Mini](https://www.autopi.io/hardware/autopi-mini) Logger, you will see it appear in the Loggers page.
Once the settings have ben synchronized to your device, your device will start sending the newly created logger.

### Let's keep in touch!
Thank you for choosing AutoPi. We're excited to see what you will achieve with your AutoPi device! 
<CardGrid home>
[![](/img/shared/favicon.ico) **Contact our sales team** You can build on top of AutoPi .](https://www.autopi.io/contact/)

[![](/img/shared/support_icon.png) **Get help from our support team** Let us know about your technical questions.](https://www.autopi.io/support/)

</CardGrid>