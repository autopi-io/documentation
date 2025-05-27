---
id: rfid-integartion
title: RFID Reader Integration
supportedDevices: ['cm4','pro']
---
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

This is a short guide about how you can integrate an RFID reader with your [AutoPi](https://www.autopi.io) device.

:::tip
The RFID device that you're using must be connected to the [AutoPi](https://www.autopi.io) through a USB cable and it should be such a reader
that acts as a keyboard device. It might be possible to use RFID readers that use another connectivity approach, but we
aren't sure if [AutoPi](https://www.autopi.io) devices will work well with those.
:::

## Enabling the RFID Component

1. **Power on the device**  
   The RFID reader must first be connected to the [AutoPi](https://www.autopi.io) device. Power on the device, as we will need to gather some
   information for the RFID reader, namely, the vendor and product IDs.

2. **Get the RFID reader's vendor ID and product ID**  
   Once the device is powered on, you can run the following command:
   ```
   $ usbutil.devices
   ```
   This will show you a list of devices that are currently connected to the [AutoPi](https://www.autopi.io). There should be a set of devices
   that are always there:
   - Quectel Wireless Solutions modem (not present on DIY devices)
     - vendor: 2c7c
     - product: 0125
   - Linux Foundation 2.0 root hub
     - vendor: 1d6b
     - product: 0002
   - Our custom hub
     - vendor: 0000
     - product: 0000

   Any other devices that have been connected will appear on the list as well. One of them should be the RFID reader.
   Note that sometimes the RFID reader might not have a name, similarly to our custom hub. Grab the vendor and product
   values for your RFID reader and note them down for the next step.

3. **Type in the RFID reader's information in the [Cloud](https://www.autopi.io/software-platform/cloud-management)**  
   Now, it's time we enable the RFID reader from the [Cloud](https://www.autopi.io/software-platform/cloud-management). Navigate to [my.autopi.io](https://my.autopi.io) and go to
   the Device > Advanced Settings > RFID page.

   :::note
   If you don't see the RFID section in the Advanced Settings, you should reach out to our sales department by writing
   an email to sales@autopi.io.
   :::

   Now, we need to first enable the RFID reader functionality by clicking the Enabled field. It should say True. Next,
   we need to type in the vendor and product ID combo that we noted down for the RFID reader under the Device Vendor
   Product Id field. The format is the following: `<vendor_id>:<product_id>`. Here's an example: `2c7c:0125`. With those
   two settings set, hit the save button. The device will synchronize the changes and restart.

Only after following the steps above you can start populating the Authorized Tokens setting. The reason for that is that
this setting requires an RFID command that is otherwise not present. If you try to set the Authorized Tokens as you're
enabling the RFID functionality, the changes will fail. However, that's okay, as you can simply reboot the device and it
will try to apply the settings again and they should be applied on the retry.

## Using the RFID Reader

Once you've setup your RFID reader, you can start using it with chips or cards. The device will report events whenever
an RFID chip/card was held close to the reader and will also report authorized or rejected events based on the
Authorized Tokens setting we discussed above. You can view those events [here](/cloud/device_management/events/system.md#rfid-events).

