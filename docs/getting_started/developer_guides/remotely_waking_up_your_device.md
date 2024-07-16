---
id: remotely-waking-up-your-device
title: Remotely Waking up Your Device
---

When your vehicle is parked and ignition is off, your device will go to sleep to save power. But if you are working on a project remotely and want to access your device, its possible to wake up your device from sleep.

To do so, simply send a TEXT/SMS to the phone number associated with your SIM card. This will wake up the device. 

Its also possible to list the TEXT/SMS send to the device (if you are using a pre-paid plan and want to check status). This can be done from the `ec2x` module:

Try this command from the terminal:

```
ec2x.list_sms
```

If you find your device not to respond to the SMS wake up, then there is two things you can check:

1) Check if the modem is "Power save" mode, during sleep. If you go to Device > Advanced Settings > Power there is a new section called "modem"
"Put modem into lower power mode during sleep? When enabled it is no longer possible to wakup device on SMS."

2) The modem/SIM has a limit on how many unread messages it can contain. To clear the message you can use this command:
```
ec2x.query 'AT+CMGD=1,4'
```


**Please note:** *Remotely waking up the device is not possible if your device is in hibernation/deep sleep. This will happen if your battery is in poor condition and voltage drops below 12.2V. This is a precausive measure, to ensure that the AutoPi will never drain your battery.*

### Discussion

If you'd like to discuss this topic with us or other fellow community members, you can do so on our community page dedicated for this guide:
[Remotely waking up your device](https://community.autopi.io/t/remotely-waking-up-your-device/280)
