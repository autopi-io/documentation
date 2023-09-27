---
id: 4g-internet-setup-troubleshooting
title: 4G internet setup troubleshooting
---

You are experiencing issues connecting to the internet, when connected to the WiFi hotspot on the AutoPi Dongle. 

### Prerequisites:
Before following this guide, you must have completed the initial setup guide found here:

https://www.autopi.io/getting-started

### Check SIM card

1. Your SIM card must be setup for data. To check this, insert the SIM into another device, like a smartphone or similar. When inserted in the other device you must be able to browse the web.

1. If you ordered a branded version of the AutoPi (Verizon/AT&T), please verify that the network carrier of the SIM card is the same as the brand of the AutoPi.

1. Verify that the SIM card is not pin locked and if it is that you have entered the pin code in the settings. 

### Check Modem on Hardware
In the terminal on the WiFi, check that the modem has been found. This can be done by writing the following command:

`cmd.run "lsusb" `

The output of the command should be similar to this:

![lsusb](../../static/img/guides/4g_internet_setup_troubleshooting/lsusb.jpg)

The important part to look for is the Modem. The ID will be different depending on which modem your device is equipped with:

| **Modem Manufacturer** | **ID**      |
|------------------------|-------------|
| Quectel                | `2c7c:0121` |
| Telit                  | `1bc7:1031` |

If you ordered a 4G edition and you don't find the modem in your list, then please contact support@autopi.io

There's a command you can run to verify that the modem has been set up correcty.

`modem.connection execute AT+CGDCONT?`

this should retrun a message that looks like either 
**data: '+CGDCONT: 1, "IPV4V6","",0,0,0,0'**
or
**Data:**
**'+CGDCONT:1,"IPV4V6","",0,0,0,0'**
**'+CGDCONT:2,"IPV4V6","ims","",0,0,0,0'**

if you get the second message then you can reconfigure the modem by running these three commands.

`cmd.run "systemctl stop qmi-manager"`

`modem.connection execute AT+CGDCONT=2`

`cmd.run "systemctl restart qmi-manager"`

after restarting your devices you can run the first command again to verify you get the first message. 

### Checking qmi-manager status
The device contains a software manager, which ensure stable connection to the internet. This is called qmi-manager. To check status, please write the following command in the terminal:

`cmd.run "qmi-manager status"`

The output should be similar what you can see in the image below:

![qmistatus](../../static/img/guides/4g_internet_setup_troubleshooting/qmistatus.jpg)

### Further checking of network

If your device still isn't online, you can try running the following two commands. They will tell you a bit more about why the network manager fails:

`cmd.run "qmi-manager down"`
`cmd.run "qmi-manager up"`

If the last command reports issue with detecting the SIM card, then double check the orientation of the SIM card and try again.

### Tweaks

If you experience connection issues where the connection drops sometimes and/or if it is online, but not shown as online on my.autopi.io, then you can try to tweak the MTU from the default value: 1500, to a lower value, in increments (ex. 1500 -> 1450 -> etc).
This can be done on the local configuration tool, by connecting to the device hotspot and opening local.autopi.io in your browser.

From the terminal located in the top right corner on the webpage, you can run the following two commands to update the MTU and save the changes.

`grains.set qmi:mtu xxxx`
`state.sls network.wwan.qmi.config.`

To verify that these changes have been saved, you can run the following two commands, here you want to check that first command retruns the same value you set, and that the seconed command where mtu= the same value as the one we set.    

`grains.get qmi:mtu`
`cmd.run "cat /etc/udhcpc/qmi.override"`

**NOTE**: For US Verizon customers, please try this MTU: 1428.

If the connection is still not online, then please contact support@autopi.io for additional help.

### Discussion

If you'd like to discuss this topic with us or other fellow community members, you can do so on our community page dedicated for this guide:
[4G internet setup troubleshooting](https://community.autopi.io/t/4g-internet-setup-troubleshooting/235)