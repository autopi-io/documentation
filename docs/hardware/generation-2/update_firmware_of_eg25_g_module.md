---
id: update-firmware-of-eg25-g-module
title: Update Firmware of EG25-G Module
---

:::caution
This firmware update applies to 2nd Generation 4G/LTE dongles, shipped out before September 1st
2019 (i.e. **ONLY the EG25 modem**). All devices shipped after this date have their firmware
upgraded.
:::

This guide shows how to install the firmware revision *EG25GGBR07A07M2G_01.002.01.002* onto the
EG25-G module. This firmware update fixes the GNSS auto-start issue (505 - Session not active). To
check if your device is affected, please look in your minion logs for this line:

```bash
Unable to determine GNSS location: {'reason': '505', 'type': 'CME'}
```

This firmware update only applies to the 2nd generation 4G/LTE AutoPi dongles with the EG25-G
module installed. If you are unsure which generation your 4G/LTE AutoPi dongle is then please
contact [support@autopi.io](http://mailto:support@autopi.io) and provide your device ID.

You can always check your current firmware version by running the following command in the Cloud
terminal:

```bash
ec2x.query "at+qgmr"
```

If you see the revision number below you already have this firmware update installed:

```
EG25GGBR07A07M2G_01.002.01.002
```

## Installation Steps

1. Power on the AutoPi Dongle by inserting it into the OBD-II connector of the vehicle. It is
  highly recommended to have the engine running to prevent any sleep timers from powering the
  device off.

2. [Connect via SSH](/guides/how_to_ssh_to_your_device.mdx).

3. Download the firmware package on the device by running the shell command below (please note that
  the package size is 90MB):

  ``` bash
  sudo wget -P /opt/ https://www.autopi.io/media/share/EG25GGBR07A07M2G_01.zip
  ```

4. Unpack the zip file:
  ```bash
  sudo unzip /opt/EG25GGBR07A07M2G_01.zip -d /opt/
  ```

5. Run the installation script:
  ```bash
  sudo /opt/EG25GGBR07A07M2G_01/install.sh /opt/EG25GGBR07A07M2G_01/
  ```

6. Allow system to reboot automatically when announced. During the update the system will speak and
  notify what is happening. 

7. After installation of the firmware and a final reboot, the revision can be checked by running
  the shell command:
  ```bash
  autopi ec2x.query "at+qgmr"
  ```

## Discussion
If you'd like to discuss this topic with us or other fellow community members, you can do so on
our community page dedicated for this guide:
[Update firmware of EG25-G module](https://community.autopi.io/t/update-firmware-of-eg25-g-module/1464)