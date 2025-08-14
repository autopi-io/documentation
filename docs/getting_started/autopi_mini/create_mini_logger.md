---
id: create-mini-loggers
title: Create Loggers
supportedDevices: ['mini']
---
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

Compared to other [AutoPi](https://www.autopi.io) devices, the [Mini](https://www.autopi.io/hardware/autopi-mini) only supports a predefined list of PID and CAN loggers (It also support listening on some system [AutoPi](https://www.autopi.io) [Mini](https://www.autopi.io/hardware/autopi-mini) system changes, like the current sleep condition).

In this guide, we will take a look on how you can create and edit loggers for the [AutoPi](https://www.autopi.io) [Mini](https://www.autopi.io/hardware/autopi-mini) but also learn more about the default loggers set on a device. 

## Default Set of [Mini](https://www.autopi.io/hardware/autopi-mini) Loggers 
To ensure your [AutoPi Mini](https://www.autopi.io/hardware/autopi-mini) device works right out of the box, we preconfigure it with a set of commonly used loggers based on the most frequently requested data from our users. These default loggers are automatically installed on your device before delivery.

During the device registration process (covered in Step 2: Registration of the device of [Getting started guide](https://docs.autopi.io/getting_started/autopi_mini/#2-register-your-device)), you’ll be asked to enter your vehicle’s make, model, year, and type. **Vehicle types** include: Internal Combustion Engine (ICE), Battery Electric Vehicle (BEV), Plug-in Hybrid Electric Vehicle (PHEV) or Hybrid Electric Vehicle (HEV).

Once you select your vehicle type, the system automatically adjusts the logger configuration to better match your vehicle’s requirements. Any loggers that are updated during this process will be marked with a "modified" status. After the changes are successfully applied to your device, this status will disappear.

![Modified logger](/img/getting_started/autopi_mini/create_mini_loggers/modified.png)


Once the default setup is complete, you can create additional custom loggers and sync them to your device. Instructions for creating and managing custom loggers can be found in the next section.

### Default Set of Loggers for Internal Combustion Engine (ICE) Vehicle

![Default ICE loggers](/img/getting_started/autopi_mini/create_mini_loggers/ice_default_loggers.png)

### Default Set of Loggers for Battery Electric Vehicle (BEV) Vehicle

![Default BEV loggers](/img/getting_started/autopi_mini/create_mini_loggers/ev_default_loggers.png)

### Default Set of Loggers for Hybrid Electric Vehicle (HEV) Vehicle

![Default HEV loggers](/img/getting_started/autopi_mini/create_mini_loggers/hybrid_default_loggers.png)

### Default Set of Loggers for Plug-in Hybrid Electric Vehicle (PHEV) Vehicle

![Default BEV loggers](/img/getting_started/autopi_mini/create_mini_loggers/plug_hybrid_loggers.png)

---
## Creating a [Mini](https://www.autopi.io/hardware/autopi-mini) Logger
Let's create a logger for your [AutoPi](https://www.autopi.io) [Mini](https://www.autopi.io/hardware/autopi-mini).
Open up the [AutoPi](https://www.autopi.io) [Mini](https://www.autopi.io/hardware/autopi-mini) device view and head over to the loggers page.
Here, you will see a 'Create' and a 'Restore default' button on the left-hand side.
Clicking on the 'Create' button will open a new window, that looks like the following screenshot:

![Create PID Logger Window](/img/getting_started/autopi_mini/create_mini_loggers/create_logger.png)

:::note
The 'Restore default', as the name suggests, deletes the current loggers and applies default loggers.
:::

### Configure a Logger Fields

Let's look through the fields you can configure when creating a logger:

#### 1. Parameter
This is the parameter you would like to use. Select one of them from the dropdown menu.
Note that, some parameter share the same name but can be distinguished by the group they belong to.
Next to the parameter you can also modify if you want the logger to be **Enabled** or not by clicking the checkbox.

![Set parameter](/img/getting_started/autopi_mini/create_mini_loggers/parameter.png)

#### 2. Periodic monitoring
By enabling this setting, this logger will be available in all messages from the [AutoPi](https://www.autopi.io) [Mini](https://www.autopi.io/hardware/autopi-mini). This means that it collects all data there is and eventually upload it. 
This setting is set up by default when you are creating a logger, as it functions the most efficiently when logging a data from the device.  

![Periodic monitoring](/img/getting_started/autopi_mini/create_mini_loggers/periodic_monitoring.png)

#### 3. Event on
This setting allows you to select an event that should trigger a record in the dropdown list.
When selecting an event, you get presented with dropdown of options: Range Exit, Range Enter, Range Both, Hysteresis, Change and Delta Change. These options are a way to configure how that event behaves.

![Create PID Logger With Event on](/img/getting_started/autopi_mini/create_mini_loggers/event_on.png)

As an example, when selecting `Ranges Both` - contains a range start and range end field, which allows to configure the range that `Ranges Both` should generate records based on, this can also be seen in the following image:

![Create Event on Range both](/img/getting_started/autopi_mini/create_mini_loggers/range_both.png)

:::warning
When setting logger to trigger `Event on` set to `Change`, some of the loggers, like external voltage, are not static by nature — they can fluctuate frequently, even by small amounts. When these loggers are **set to trigger on change**, it can lead to a high volume of events being logged. This not only results in **excessive data usage** but **can also prevent the device from entering sleep mode**, as it’s constantly active processing these changes.
Switching these loggers to periodic monitoring helps manage this by reducing unnecessary events and allowing the device to function more efficiently. 
:::


Once you save the [Mini](https://www.autopi.io/hardware/autopi-mini) Logger, you will see it appear in the Loggers page.
Once the settings have been synchronized to your device, your device will start sending the newly created logger.
