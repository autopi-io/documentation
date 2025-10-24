---
id: create-mini-loggers
title: Create Loggers
supportedDevices: ['mini']
---
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---
Logging is one of the core features of the [AutoPi Mini](https://www.autopi.io/hardware/autopi-mini), allowing you to automatically record key data from your device for analysis, monitoring, or integration with other systems. In this guide, you’ll learn how to create and configure loggers for your AutoPi Mini, from understanding what are the available loggers, to setting up your own custom data collection workflows.

We’ll start with a step-by-step walkthrough on how to create, manage, and verify loggers directly from your AutoPi Cloud, followed by a quick overview of the available loggers and their specifications. Whether you’re setting up your first logger or fine-tuning advanced data capture, this guide will help you get started quickly and confidently.

---

## Default Set of [Mini](https://www.autopi.io/hardware/autopi-mini) Loggers 
To ensure your AutoPi mini device works right out of the box, we preconfigure it with a set of commonly used loggers based on the most frequently requested data from our users. These default loggers are automatically installed on your device before delivery.

During the device registration process (covered in Step 2: Registration of the device of [Getting started guide](https://docs.autopi.io/getting_started/autopi_mini/#2-register-your-device)), you’ll be asked to enter your vehicle’s make, model, year, and type. **Vehicle types** include: Internal Combustion Engine (ICE), Battery Electric Vehicle (BEV), Plug-in Hybrid Electric Vehicle (PHEV) or Hybrid Electric Vehicle (HEV).

Once you select your vehicle type, the system automatically adjusts the logger configuration to better match your vehicle’s requirements. Any loggers that are updated during this process will be marked with a "modified" status. After the changes are successfully applied to your device, this status will disappear.

![Modified logger](/img/getting_started/autopi_mini/create_mini_loggers/modified.png)


Once the default setup is complete, you can create additional custom loggers and sync them to your device. Instructions for creating and managing custom loggers can be found in the next section.

---
## Creating a [Mini](https://www.autopi.io/hardware/autopi-mini) Logger
Let's create a logger for your [AutoPi](https://www.autopi.io) [Mini](https://www.autopi.io/hardware/autopi-mini).
Open up the [AutoPi](https://www.autopi.io) [Mini](https://www.autopi.io/hardware/autopi-mini) device view and head over to the loggers page.
Here, you will see a 'Create' and a 'Restore default' button on the left-hand side.
Clicking on the 'Create' button will open a new window, that looks like the following screenshot:

![Create PID Logger Window](/img/getting_started/autopi_mini/create_mini_loggers/create_logger.png)

:::note
The 'Restore default', as the name suggests, deletes the current loggers and applies default loggers based on your vehicle type. 
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

---
## List of Available Loggers with Specifications 
Compared to other [AutoPi](https://www.autopi.io) devices, the [Mini](https://www.autopi.io/hardware/autopi-mini) only supports a predefined list of PID and CAN loggers (It also support listening on some system [AutoPi](https://www.autopi.io) [Mini](https://www.autopi.io/hardware/autopi-mini) system changes, like the current sleep condition).

Down below, you can find the table of available loggers with specifications:

| Name                                        | Description                                                            | Bytes | Type     | Min     | Max       | Multiplier | Units | 
|---------------------------------------------|------------------------------------------------------------------------|-------|----------|---------|-----------|------------|-------|
| Accelerometer Axis X                        | X axis value                                                           | 2     | Signed   | -8000   | 8000      | —          | mG    | -
| Accelerometer Axis Y                        | Y axis value                                                           | 2     | Signed   | -8000   | 8000      | —          | mG    | -
| Accelerometer Axis Z                        | Z axis value                                                           | 2     | Signed   | -8000   | 8000      | —          | mG    | -
| Ambient air temperature                     | Ambient air temperature                                                | 1     | Signed   | -128    | 127       | —          | °C    | -
| Battery Current                             | Battery current                                                        | 2     | Unsigned | 0       | 65535     | 0.001      | A     | -
| Battery Level                               | Battery capacity level                                                 | 1     | Unsigned | 0       | 100       |  —         | %     | -
| Battery Voltage                             | Battery voltage                                                        | 2     | Unsigned | 0       | 65535     | 0.001      | V     | 
| Engine RPM                                  | Engine RPM                                                             | 2     | Unsigned | 0       | 16384     | —          | rpm   | -
| Engine Oil Temperature                      | Engine oil temperature                                                 | 1     | Unsigned | 0       | 215       | —          | °C    | -
| External Voltage                            | External voltage                                                       | 2     | Unsigned | 0       | 65535     | 0.001      | V     | -
| Fuel level                                  | Fuel level                                                             | 1     | Unsigned | 0       | 100       | —          | %     | 
| GSM Signal                                  | Value in range 1-5                                                     | 1     | Unsigned | 0       | 5         | —          | —     | - 
| Ignition                                    | 0 - Ignition Off; 1 - Ignition On                                      | 1     | Unsigned | 0       | 1         | —          | —     | - 
| Intake air temperature                      | Intake air temperature                                                 | 1     | Signed   | -128    | 127       | —          | °C    | -
| Network Type                                | 0 - 3G; 1 - GSM; 2 - 4G; 3 - LTE CAT M1; 4 - LTE CAT NB1; 99 - Unknown | 1     | Unsigned | 0       | 1         | —          |  —    | -  
| Number of DTC                               | Number of DTC                                                          | 1     | Unsigned | 0       | 255       | —          |  —    | -  
| OBD OEM Total Mileage                       | Total mileage (from OEM PID)                                           | 4     | Unsigned | 0       |  —        | —          | km    | -
| OBD Vehicle Speed                           | Vehicle speed                                                          | 1     | Unsigned | 0       | 255       | —          | km/h  | -
| OEM Battery charge level                    | Represents battery charged level                                       | 1     | Unsigned | 0       | 100       | —          | %     | -
| OEM Battery State Of Health                 | Battery health percentage                                              | 2     | Unsigned | 0       | 65535     | —          | %     | -
| OEM Battery Temperature                     | Battery pack temperature                                               | 2     | Signed   | -32768  | 32767     | —          | °C    | - 
| OEM Distance Until Service                  | Distance till next service received by requesting PID                  | 4     | Unsigned | 0       | —         | —          | —     | 
| OEM HV Battery Current                      | Current used by high-voltage battery                                   | 2     | Unsigned | 0       | 65535     | 0.1        | A     |
| OEM HV Battery Max Cell Temperature         | Maximum measured cell temperature                                      | 2     | Signed   | -32768  | 32768     | 0.1        | °C    | -
| OEM HV Battery Max Cell Voltage             | Maximum battery cell voltage                                           | 2     | Unsigned | 0       | 65535     | 0.1        | V     | - 
| OEM HV Battery Max Energy                   | Maximum energy capacity                                                | 2     | Unsigned | 0       | 65535     | 0.1        | kWh   | -
| OEM HV Battery Measured Energy              | Measured current energy capacity                                       | 2     | Unsigned | 0       | 65535     | 0.1        | kWh   | -
| OEM HV Battery Min Cell Temperature         | The lowest measured cell temperature                                   | 2     | Signed   | -32768  | 32768     | 0.1        | °C    | -
| OEM HV Battery Min Cell Voltage             | Minimum battery cell voltage                                           | 2     | Unsigned | 0       | 65535     | 0.1        | V     | -         
| OEM HV Battery Current                      | Current used by high-voltage battery                                   | 2     | Signed   | -3276   | 3276      | 0.1        | A     | -  
| OEM HV Battery Voltage                      | High voltage battery voltage                                           | 2     | Unsigned | 0       | 65535     | 0.1        | kWh   | -
| Total Odometer                              | Total Odometer value in meters                                         | 4     | Unsigned | 0       | 2147483647| —          |       | - missing unit
| Trip Odometer                               | Trip odometer value                                                    | 4     | Unsigned | 0       | 2147483647| —          | m     | - 
| VIN                                         | Vehicle Identification Number                                          | 17    | ASCII    | 0       |  —        | —          | —     | -

