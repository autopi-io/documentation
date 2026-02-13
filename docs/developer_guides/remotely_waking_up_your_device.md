---
id: remotely-waking-up-your-device
title: Remotely Waking up Your Device
supportedDevices: ['cm4','pro','pro_case']
---
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

When a vehicle is parked and the ignition is turned off, the AutoPi device will automatically go to sleep to reduce power consumption and protect the vehicle battery. If you are working on a project remotely and need to access your AutoPi device while the vehicle is off, it is possible to wake the device from sleep remotely.

## Overview
AutoPi devices enter sleep mode when the ignition is off. While asleep, the device is offline and consumes minimal power. For many development, diagnostics, or fleet use cases, however, it can be necessary to regain access without physically interacting with the vehicle. AutoPi supports SMS-based wake-up, allowing the device to be woken remotely by sending a text message to the SIM card installed in the device. You can find all the information under Device > Overview > AutoPi SIM. 


## Waking Up the Device via SMS
To wake up an AutoPi device from sleep:
* Send a TEXT/SMS to the phone number associated with the SIM card installed in the AutoPi device.

Upon receiving the SMS, the device will wake up and reconnect. No specific message content is required—the arrival of the SMS itself triggers the wake-up.

### Reading SMS Messages on the Device
Depending on the hardware version of your AutoPi device, SMS messages can be listed or read directly from the device.

**Pre-CM4 Devices**

For pre-CM4 AutoPi devices, SMS messages can be listed using the `ec2x` module.
Run the following command from the terminal:
```python
ec2x.list_sms
```

This can be useful when using prepaid SIM plans or when checking message status.

**CM4 Devices**

For CM4-based AutoPi devices, SMS messages can be read using the modem module:
```python
modem.read_sms
```

---

## Troubleshooting SMS Wake-Up Issues
If your AutoPi device does not respond to an SMS wake-up, check the following:
1. Modem Power Save Mode

    The modem can be configured to enter a **Power save** mode during sleep. When this mode is enabled, SMS wake-up is not possible. Check the setting in AutoPi Cloud:
        * Go to Device → Advanced Settings → Power → Modem.
        * You can also adjust other settings under Advanced Settings → Power; such as sleep timers or wake trigger.

    ![Power Save Modem](/img/guides/advanced_settings_modem.png)

2. SIM Card SMS Storage Limit

    Modems and SIM cards have a limit on how many unread SMS messages they can store. If the storage is full, new SMS messages (including wake-up messages) may not be received. You can clear stored messages using the following commands: 
    * Pre-CM4 devices: 
    ```python
    ec2x.query 'AT+CMGD=1,4'
    ```

    * CM4 devices: 
    ```python
    modem.connection execute AT+CMGD=1,4
    ```


:::warning
Remotely waking up the device is not possible if the device is in hibernation (deep sleep). Hibernation occurs when the vehicle battery voltage drops below 12.2 V. This is a precautionary safety measure to ensure that AutoPi will never drain the vehicle battery.
:::

:::note
For **AutoPi Mini devices**, remote wake-up via SMS or terminal commands is not supported.
These devices cannot be woken from sleep remotely and require ignition or physical interaction to become active again.
:::

---

SMS based wake-up allows you to regain access to your AutoPi device remotely while the vehicle is parked and ignition is off. This is especially useful for development, diagnostics, and fleet operations.

Key points:
* Wake-up is triggered by sending an SMS to the device SIM.
* Commands differ between pre-CM4 and CM4 devices. 
* Modem power-saving settings can disable SMS wake-up.
* Deep sleep (hibernation) cannot be overridden remotely.
* AutoPi Mini devices do not support remote wake-up. 


