# Getting started

> <DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

---

## Welcome to AutoPi CAN-FD Pro Setup

This guide walks you through setting up an AutoPi CAN-FD Pro, from creating an account to configuring data output and remote file access.

## Quick Start Summary

Complete the steps in order. If your device includes an AutoPi Cloud subscription and a pre-installed SIM card, you can skip the SIM installation and APN configuration steps.

* Step 1: Set up your account on [AutoPi Cloud](https://my.autopi.io/), you can read more [in this section](https://docs.autopi.io/getting_started/autopi_canfd_pro/#1-setting-up-user-account).
* Step 2: Register your device on [AutoPi Cloud](https://my.autopi.io/), you can read more [in this section](https://docs.autopi.io/getting_started/autopi_canfd_pro/#2-register-your-device). 
* Step 3: SIM card installation (if you did not purchased one from us), you can read more [in this section](https://docs.autopi.io/getting_started/autopi_canfd_pro/#3-ensure-sim-connectivity).
* Step 4: Attach the External Antenna Kit to your AutoPi CAN-FD Pro device, you can read more [in this section](https://docs.autopi.io/getting_started/autopi_canfd_pro/#4-attach-the-external-antenna-kit).
* Step 5: Locate an OBD port in your vehicle/equipment, you can read more about tips and tricks [in this section](https://docs.autopi.io/getting_started/autopi_canfd_pro/#5-locate-obd-port).
* Step 6: Device installation to your vehicle's OBD-II port, you can read more [in this section](https://docs.autopi.io/getting_started/autopi_canfd_pro/#6-installation).
* Step 7: Connect your device to the [AutoPi Cloud](https://my.autopi.io/), you can read more [in this section](https://docs.autopi.io/getting_started/autopi_canfd_pro/#7-connect-to-wifi). 
* Step 8: Connect to Local Administration on your device, and set up APN User and MTU, you can read more [in this section](https://docs.autopi.io/getting_started/autopi_canfd_pro/#8-connect-to-local-administration). 
* Step 9: Verify connectivity to ensure your APN setting is set properly, you can read more [in this section](https://docs.autopi.io/getting_started/autopi_canfd_pro/#9-verify-connectivity). This setting is only for users using their own SIM card, if you have purchased a device with AutoPi SIM, you can skip this step. 
* Step 10: Change your password, you can read more [in this section](https://docs.autopi.io/getting_started/autopi_canfd_pro/#10-finalization).
* Step 11: Set up output handlers for data (where do you want the captured data to be send to), you can read more [in this guide](https://docs.autopi.io/getting_started/autopi_canfd_pro/pro-user-guide/#step-4-outputs).
* Step 12: Access the files remotely, you can read more [in this guide](https://docs.autopi.io/getting_started/autopi_canfd_pro/accessing-files-via-sftp-on-autopi/).

## Important Safety and Setup Requirements

:::caution

The AutoPi device connects directly to your vehicle's ECU. Follow these requirements before continuing:

1. **Power Off the Vehicle**: Always ensure your vehicle is completely powered off before inserting the device for the first time.
2. **Vehicle Position**: Work on and customize your device only when the vehicle is parked.
3. **Do Not Remove While Driving**: Never disconnect the AutoPi while the vehicle is in operation.
4. **Power Source**: The device can only be powered through the OBD-II port. Direct power to the Raspberry Pi is not supported and may cause damage.
5. **Advanced Settings**: When modifying Advanced Settings, ensure you understand the implications, as changes may affect vehicle performance and battery life.

:::
---

## 1. Set Up Your User Account

1. Go to [my.autopi.io](https://my.autopi.io/).
2. Select **Sign up**.
3. Enter your email address and create a password.
4. Optionally, expand the form and add your name and country. You can also add these details later.
5. Select **Create account**.

![AutoPi sign up](/img/getting_started/getting_started/sign_up.png)

## 2. Register Your Device

After creating an account, you can access the Cloud Platform features for fleet and device management.
The next step is to register your device to unlock the platform’s full potential.  

To add a device to your account, follow one of these methods:  

**Option 1: Via Device Management**
1. See the “Device Management” section of the Platform. 
2. Click on “Devices”. 
3. Find and click the “Register Device” button in the upper right corner. 

**Option 2: Via the Accounts Tab**
1. Navigate to the “Accounts” tab at the bottom of the left side menu on the Platform.
2. Select “Devices”. 
3. Locate and click the “Register Device” button in the upper right corner.

After clicking the “Register Device” button, the registration tab will appear. Enter all necessary information: 

![Register Device](/img/getting_started/getting_started/register_new_device.png)

- **Unit ID**: this is the number on the side of your device. You can also find it in the.
    document attached in the email you received when the device was shipped. 
- **Vehicle Information**: optionally include the make, model and year of the vehicle.
- **Vehicle Type**: choose the type of vehicle (ICE, Battery [Electric Vehicle](https://www.autopi.io/hardware/autopi-mini), Hybrid [Electric Vehicle](https://www.autopi.io/hardware/autopi-mini), or Plug-in Hybrid [Electric Vehicle](https://www.autopi.io/hardware/autopi-mini)).

The device should now appear under **Fleet Management** > **Vehicles** and **Device Management** > **Devices**.

## 3. Ensure SIM Connectivity

:::note
If your AutoPi CAN-FD Pro includes a monthly cloud subscription, the SIM card is already installed. Continue to [Step 4](#4-attach-the-external-antenna-kit).
:::

The hardware-only version requires a nano-SIM card that supports IPv4. Install the SIM card before connecting the AutoPi device to the vehicle:

1. Locate the SIM card slot shown below.
2. Hold the SIM card with the printed side facing up and the angled end pointing into the device.
3. Gently insert the card until it clicks into place. Do not force it.

![AutoPi.io - SIM card location](/img/getting_started/getting_started/sim_card.png)

:::caution
Inserting the SIM card in the wrong orientation or forcing it into or out of the slot may damage the device. Confirm the orientation before insertion.
:::

Recommended US-based SIM providers include:

1. AT&T
2. T-Mobile
3. An MVNO that uses either the AT&T or T-Mobile network

## 4. Attach the External Antenna Kit

The label on the device identifies the correct port for each antenna. The external antenna kit includes:

- Two 4G antennas
- One GPS antenna
- One 2.4 GHz Wi-Fi antenna

Use the label to match each antenna to its port, then screw each antenna into place by hand. Tighten the antennas until they are secure, but do not use tools or overtighten them.

:::caution
Before powering on the AutoPi CAN-FD Pro, verify that every antenna is connected securely to its correctly labeled port. Do not power on or bring the device online unless the complete external antenna kit is attached.
:::

  

**Without the external antenna kit:**

![Pro without external antenna kit](/img/hardware/shared_devices/side_look_device_sticker_antenna_smaller.png)

**With the external antenna kit:**

![Pro with external antenna kit](/img/hardware/shared_devices/side_look_device_4in1_antenna.png)

## 5. Locate the OBD-II Port

Locate the OBD-II port before installing the device. The port is usually underneath the dashboard and looks like this:

  ![AutoPi.io - OBD port](/img/getting_started/getting_started/obd_location.jpg)

Its exact location depends on the vehicle or equipment. The following image shows common locations in passenger vehicles. If you cannot find the port, consult the owner's manual.

![AutoPi.io - OBD port location](/img/getting_started/getting_started/TMU_placement_dashboard_v1_finecut-01.jpg)

## 6. Install the Device

1. Make sure the vehicle or equipment is completely powered off.
2. Connect the AutoPi CAN-FD Pro to the OBD-II port.
3. Position the device with the AutoPi logo and external antennas facing upward toward the sky.
4. Secure the device so it cannot move or interfere with vehicle controls.

If the OBD-II port is difficult to reach or does not provide a safe mounting position, use an appropriate accessory from the [AutoPi shop](https://shop.autopi.io/):

- [OBD-II Extension Cable](https://shop.autopi.io/products/obd-ii-extension-cable?pr_prod_strat=jac&pr_rec_id=f2111200b&pr_rec_pid=8619775328605&pr_ref_pid=14961336746333&pr_seq=uniform): Adds extra reach for flexible placement.
- [Dual Lock Extreme Velcro Strip](https://shop.autopi.io/products/dual-lock-extreme-velcro): Secures the device in a vibration-resistant position.
- [OBD-II Splitter Cable](https://shop.autopi.io/products/obd-ii-splitter-cable?pr_prod_strat=jac&pr_rec_id=70ef610e3&pr_rec_pid=8619777327453&pr_ref_pid=8619774050653&pr_seq=uniform): Connects the CAN-FD Pro and another OBD-II device at the same time.
- [OBD-II to Dual DB9 Cable](https://shop.autopi.io/products/obd2-to-dual-db): Connects two CAN bus nodes to the CAN-FD Pro OBD-II port.

:::tip Performance tips
- Keep the AutoPi logo and external antennas facing the sky.
- Keep the device out of direct sunlight when possible. Excessive heat may reduce CPU performance.
- Do not cover the device or antennas with metal, because this can interfere with GPS and cellular signals.
- Use only a supported OBD-II power connection.
- Make sure the device and antennas are firmly secured before operating the vehicle or equipment.
:::

## 7. Connect to the Device's Wi-Fi Hotspot

After installing the CAN-FD Pro, temporarily connect a phone or computer to its Wi-Fi hotspot. This connection allows you to access Local Administration and configure the device in the next step.

### Find the Hotspot Credentials

The default hotspot credentials are:

- **Network name (SSID):** `autopi-XXXX`, where `XXXX` is the unique ID of your device.
- **Password:** The first 13 characters of your Device ID.

You can find the Device ID in either of these locations:

- In the document attached to your shipping email.
- In the AutoPi Cloud under **Devices** > **Select your device** > **Overview** > **Device specifications widget**.

You can also view the hotspot name and password under **Devices** > **Select your device** > **Advanced Settings** > **Wi-Fi**.

![Advanced Settings - Wi-Fi](/img/getting_started/getting_started/wifi_settings.png)

### Connect to the Hotspot

1. Turn on the vehicle or equipment to supply power to the CAN-FD Pro.
2. Wait for the blue status light to appear. This indicates that the device has power.
3. Open the Wi-Fi settings on your phone or computer.
4. Select the `autopi-XXXX` network.
5. Enter the hotspot password.
6. Confirm that your phone or computer is connected to the hotspot.

:::note
Your phone or computer may report that the Wi-Fi network has no internet connection. Remain connected so you can access Local Administration in the next step.
:::

### Check the Status Lights

- A **blue light** indicates that the device has power.
- A **green light** indicates that the device is connected to the AutoPi Cloud.
- A **flashing green light** indicates that the device has not yet connected to the AutoPi Cloud.

For more information, see [LED and Button States on AutoPi CAN-FD Pro](/hardware/autopi_canfd_pro/pro-led-and-button/).

## 8. Configure the APN in Local Administration

:::note
If your AutoPi CAN-FD Pro includes a monthly cloud subscription, its SIM card and APN are already configured. The APN string for the pre-installed SIM card is **nxt20.net**. You can skip the configuration steps below and continue to [Step 9](#9-verify-connectivity).

The pre-installed SIM card has a monthly data limit. Avoid using the AutoPi hotspot for regular internet access from a phone or computer.
:::

:::note
If you use a **Verizon Wireless** SIM card, follow the dedicated setup guide:
[Setting Up Your Device with Verizon Wireless](https://docs.autopi.io/developer_guides/setting-up-a-device-with-verizon-wireless/).
:::

If you installed your own SIM card, ask your mobile provider for the correct APN string before continuing. APN settings vary by provider, and an incorrect value will prevent the device from establishing a cellular connection.

### Open Local Administration

Remain connected to the AutoPi Wi-Fi hotspot from Step 7, then:

1. Go to [my.autopi.io](https://my.autopi.io/). If you are already signed in, sign out.
2. Select **Login locally on your device** in the upper-right corner. Alternatively, go directly to [local.autopi.io](http://local.autopi.io/).

    

3. Confirm that the page indicates you are connected to a local device.

  

4. Select **Login**. A username and password are not required for local access.

### Configure the 4G/LTE Settings

1. Open the **4G/LTE** tab.
2. In the **APN String** field, replace the existing APN string with the value provided by your mobile provider.
3. If the SIM card has a PIN, enter it in the **SIM PIN** field. Otherwise, leave this field empty.
4. Keep **MTU** set to its default value of **1280**.
5. Select **Save and apply**.
6. Wait for the success notification before leaving the page.
7. Continue to Step 9 to verify the connection.

![4G/LTE settings](/img/getting_started/getting_started/apn_settings.png)

#### Optional: Use an APN Preset

You can select a provider from **APN Presets** at the top of the **4G/LTE** tab. Presets are provided for convenience, but they are not guaranteed to work for every SIM card or subscription. Confirm the APN string with your mobile provider and verify that the preset entered the correct value.

![APN presets list](/img/getting_started/getting_started/apn_settings_list.png)

## 9. Verify Connectivity

Verify both the cellular internet connection and the AutoPi Cloud connection:

1. Keep your phone or computer connected to the AutoPi Wi-Fi hotspot.
2. Open a browser and visit a public webpage.
3. Confirm that the webpage loads. This verifies that the APN settings are correct and the device has internet access.
4. Check the green status light on the CAN-FD Pro:
   - A steady green light indicates that the device is connected to the AutoPi Cloud.
   - A flashing green light indicates that the device has not yet connected to the AutoPi Cloud.
5. Sign in to the [AutoPi Cloud](https://my.autopi.io/) and confirm that the device appears online.

:::tip If the device remains offline
The first cellular connection may take a few minutes. If a webpage does not load or the device does not appear online, confirm the APN string and SIM PIN with your mobile provider. Then return to [Step 8](#8-configure-the-apn-in-local-administration), update the settings, and test the connection again.
:::

## 10. Finalize the Setup

After verifying connectivity, replace the default Wi-Fi hotspot password:

1. In the AutoPi Cloud, open **Devices** and select your CAN-FD Pro.
2. Go to **Advanced Settings** > **Wi-Fi**.
3. Enter a secure password in the **Pass** field.
4. Save and apply the change.
5. Store the new password in a secure location.

Your phone or computer may disconnect from the hotspot after the password changes. Use the new password if you need to connect again.

To avoid unnecessary cellular data usage, disconnect phones, tablets, and computers from the AutoPi hotspot after completing the setup.

## 11. Set Up Output Handlers

Configure an output handler to choose where the CAN-FD Pro sends captured data. The device currently supports output to an Amazon S3 bucket. Follow [Amazon Web Services (AWS) S3 Bucket Creation](/getting_started/autopi_canfd_pro/set_up_AWS_S3_bucket/) to configure the destination.

## 12. Access Files Remotely on AutoPi

You can view and manage captured data remotely by using SFTP or SCP. Follow [Accessing Files via SFTP/SCP on AutoPi](/getting_started/autopi_canfd_pro/accessing-files-via-sftp-on-autopi/) to configure access.

:::note
Review the **sleep timer** settings and adjust them for your use case under **Advanced Settings** > **Power** > **Sleep Timer**. By default, the device enters sleep mode when it receives this event:
`^vehicle/battery/(discharging|unknown)`.

The device remains awake while any of these events are active:
`^vehicle/battery/(charging_slow|charging|overcharging)`.
:::

### Setup Complete

Your AutoPi CAN-FD Pro is connected to the AutoPi Cloud and ready to capture and transmit data. Operate the vehicle or equipment to begin collecting data, then confirm that the configured output handler receives it.

---

## What's Next?

Now that the device is running, you can:

- **Learn about CAN-FD Pro features:** read the [CAN-FD Pro User Guide](/getting_started/autopi_canfd_pro/pro-user-guide/).
- **Explore the AutoPi Cloud:** try real-time monitoring, analytics, and configurable alerts in the [AutoPi Cloud](https://my.autopi.io/).
- **Read more documentation:** learn about advanced features and troubleshooting on the [AutoPi documentation site](https://docs.autopi.io/).
- **Create nested accounts and invite users:** learn how AutoPi Cloud securely separates data, configurations, and access for multiple accounts in [Account Management](https://docs.autopi.io/cloud/accounts/).
