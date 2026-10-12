# Getting Started

> <DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

---

## Welcome to AutoPi Setup

This guide walks you through setting up an AutoPi TMU CM4 4G/LTE Edition, from creating an account to connecting the device to the AutoPi Cloud.

## Quickstart

Complete the steps in order. If your device includes an AutoPi Cloud subscription and a pre-installed SIM card, you can skip the SIM installation and APN configuration steps.

- Create and configure your [AutoPi Cloud account](https://docs.autopi.io/getting_started/autopi_tmu_cm4/#1-setting-up-user-account). 
- [Register](https://docs.autopi.io/getting_started/autopi_tmu_cm4/#2-register-your-device) your device on the AutoPi platform. 
- Verify [SIM connectivity](https://docs.autopi.io/getting_started/autopi_tmu_cm4/#3-ensure-sim-connectivity) (if required).
- Locate and prepare your vehicle's [OBD port](https://docs.autopi.io/getting_started/autopi_tmu_cm4/#4-locate-obd-port). 
- Physically [install the device](https://docs.autopi.io/getting_started/autopi_tmu_cm4/#5-installation) for optimal performance. 
- [Connect to the device's Wi-Fi hotspot](https://docs.autopi.io/getting_started/autopi_tmu_cm4/#6-connect-to-device-wifi-hotspot).
- [Open Local Administration and configure the APN](https://docs.autopi.io/getting_started/autopi_tmu_cm4/#7-connect-to-local-administration) (APN) for 4G/LTE connectivity.
- [Verify the device's internet and cloud connectivity](https://docs.autopi.io/getting_started/autopi_tmu_cm4/#8-verify-connectivity).
- [Change the default Wi-Fi password and finalize the setup](https://docs.autopi.io/getting_started/autopi_tmu_cm4/#9-finalization).

## Important Safety and Setup Requirements

:::caution

The AutoPi device connects directly to your vehicle's ECU. Follow these requirements before continuing:

1. **Turn off the vehicle:** make sure the vehicle is completely powered off before connecting the device for the first time.
2. **Park before making changes:** install or configure the device only while the vehicle is parked.
3. **Keep the device connected while driving:** never disconnect the AutoPi device while the vehicle is moving.
4. **Use the OBD-II power source:** power the device only through the OBD-II connector. Powering the Raspberry Pi directly is not supported and may damage the device.
5. **Change advanced settings carefully:** incorrect settings may affect vehicle performance or battery life.

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

- **Unit ID:** find this number on the side of the device or in the document attached to your shipping email.
- **Vehicle information:** optionally enter the vehicle's make, model, and year.
- **Vehicle type:** select ICE, battery electric, hybrid electric, or plug-in hybrid electric.

The device should now appear under **Fleet Management** > **Vehicles** and **Device Management** > **Devices**.

## 3. Ensure SIM Connectivity

:::note
If you purchased an AutoPi TMU CM4 with a monthly cloud subscription, the SIM card is already installed. Continue to Step 4.
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

## 4. Locate OBD Port

Next step is to locate your OBD port in your car, it is usually found underneath the dashboard and
looks something like this:

  ![AutoPi.io - OBD port](/img/getting_started/getting_started/obd_location.jpg)

The location of the OBD port varies from make and model, but is typically fund in one of the
locations shown below:

![AutoPi.io - OBD port location](/img/getting_started/getting_started/TMU_placement_dashboard_v1_finecut-01.jpg)

## 5. Installation

When installing the AutoPi, always make sure that the **device is positioned with 
the logo facing upwards towards the sky**. This orientation is crucial because the GPS antenna 
is located within the device, and incorrect positioning may result in a weak GPS signal. 

If the OBD port is in an inconvenient spot or gets in the way, 
you can buy an [extension cable](https://shop.autopi.io/products/obd-ii-extension-cable) 
to move your AutoPi to a better location. You can also use a holder or a 
[velcro strip](https://shop.autopi.io/products/dual-lock-extreme-velcro) to secure it 
on the side or underneath — just make sure the logo is still facing upwards.

This is the OBD-II extension cable:

  

Velcro Strip:

  

:::tip **Tips on getting the best performance of your device**:
- Make sure that the AutoPi logo is facing the sky.
- Try to avoid installing the device in direct sun. Direct sun will heat up the device and,
  in the summertime, this can cause the CPU to throttle down, if the temperature gets too hot.  
- The device contains a GPS antenna inside. 
  Make sure there is no metal covering the device as this can affect its performance. 
- When powering the device, make sure you only power it through the OBD connector.
  The device cannot be powered through any of the other ports. 

:::

## 6. Connect to the Device's Wi-Fi Hotspot

After installing the AutoPi device, temporarily connect a phone or computer to its Wi-Fi hotspot. This connection allows you to access Local Administration and configure the device in the next step.

### Find the Hotspot Credentials

The default hotspot credentials are:

- **Network name (SSID):** `autopi-XXXX`, where `XXXX` is the unique ID of your device.
- **Password:** the first 13 characters of your Device ID.

You can find the Device ID in either of these locations:

- In the document attached to your shipping email.
- In the AutoPi Cloud under **Devices** > **Select your device** > **Overview** > **Device specifications widget**.

You can also view the hotspot name and password under **Devices** > **Select your device** > **Advanced Settings** > **Wi-Fi**.

![Advanced Settings - Wifi](/img/getting_started/getting_started/wifi_settings.png)

### Connect to the Hotspot

1. Turn on the vehicle to supply power to the AutoPi device.
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

For more information, see the [status LED descriptions](/core/power_management/#status-leds).

## 7. Configure the APN in Local Administration

:::note
If your AutoPi TMU CM4 includes a monthly cloud subscription, its SIM card and APN are already configured. The APN string for the pre-installed SIM card is **nxt20.net**. You can skip the configuration steps below and continue to [Step 8](#8-verify-connectivity).

The pre-installed SIM card has a monthly data limit. Avoid using the AutoPi hotspot for regular internet access from a phone or computer.
:::

:::note
If you use a **Verizon Wireless** SIM card, follow the dedicated setup guide:
[Setting Up Your Device with Verizon Wireless](https://docs.autopi.io/developer_guides/setting-up-a-device-with-verizon-wireless/).
:::

If you installed your own SIM card, ask your mobile provider for the correct APN string before continuing. APN settings vary by provider, and an incorrect value will prevent the device from establishing a cellular connection.

### Open Local Administration

Remain connected to the AutoPi Wi-Fi hotspot from Step 6, then:

1. Go to [my.autopi.io](https://my.autopi.io/). If you are already signed in, sign out.
2. Select **Login locally on your device** in the upper-right corner. Alternatively, go directly to [local.autopi.io](http://local.autopi.io/).

    

3. Confirm that the page indicates you are connected to a local device as shown on the screenshot below: 

  
    
  

4. Select **Login**. A username and password are not required for local access.

### Configure the 4G/LTE Settings

1. Open the **4G/LTE** tab.
2. In the **APN String** field, replace the existing APN string with the value provided by your mobile provider.
3. If the SIM card has a PIN, enter it in the **SIM PIN** field. Otherwise, leave this field empty.
4. Keep **MTU** set to its default value of **1280**.
5. Select **Save and apply**.
6. Wait for the success notification before leaving the page.
7. Continue to Step 8 to verify the connection.

![AutoPi.io - Settings Page](/img/getting_started/getting_started/apn_settings.png)

#### Optional: Use an APN Preset

You can select a provider from **APN Presets** at the top of the **4G/LTE** tab. Presets are provided for convenience, but they are not guaranteed to work for every SIM card or subscription. Confirm the APN string with your mobile provider and verify that the preset entered the correct value.

![AutoPi.io - Settings Page](/img/getting_started/getting_started/apn_settings_list.png) 

## 8. Verify Connectivity

Verify both the cellular internet connection and the AutoPi Cloud connection:

1. Keep your phone or computer connected to the AutoPi Wi-Fi hotspot.
2. Open a browser and visit a public webpage.
3. Confirm that the webpage loads. This verifies that the APN settings are correct and the device has internet access.
4. Check the green status light on the AutoPi device:
  - A steady green light indicates that the device is connected to the AutoPi Cloud.
  - A flashing green light indicates that the device has not yet connected to the AutoPi Cloud.
5. Sign in to the [AutoPi Cloud](https://my.autopi.io/) and confirm that the device appears online.

:::tip If the device remains offline
The first cellular connection may take a few minutes. If a webpage does not load or the device does not appear online, confirm the APN string and SIM PIN with your mobile provider. Then return to [Step 7](#7-configure-the-apn-in-local-administration), update the settings, and test the connection again.
:::

## 9. Finalize the Setup

After verifying connectivity, replace the default Wi-Fi hotspot password:

1. In the AutoPi Cloud, open **Device**.
2. Go to **Advanced Settings** > **Wi-Fi**.
3. Enter a secure password in the **Pass** field.
4. Save and apply the change.
5. Store the new password in a secure location.

Your phone or computer may disconnect from the hotspot after the password changes. Use the new password if you need to connect again.

To avoid unnecessary cellular data usage, disconnect phones, tablets, and computers from the AutoPi hotspot after completing the setup.

### Setup Complete

Your AutoPi device is now connected to the AutoPi Cloud and ready to collect and transmit vehicle data. Take the vehicle for a drive to begin gathering trip data.

:::note
For a TMU DIY Edition, see [Set Up Your TMU DIY Edition](/hardware/legacy_devices/autopi_dongle_gen3/setup_your_tmu_diy_edition.md).

For an older Generation 2 device, see [Set Up Your Gen 2 Edition](/hardware/legacy_devices/autopi_dongle/setup_your_gen_2_diy_edition.md).
:::

---
**What's Next?**

Now that your device is up and running, here are a few suggestions to help you 
get the most out of your AutoPi experience: 
- **Explore the AutoPi Cloud**: dive into the AutoPi Cloud platform to explore all 
  the features available to you, such as real-time vehicle monitoring, 
  advanced analytics, and customizable alerts. 
- **Check Out Our Documentation**: our [documentation page](https://docs.autopi.io/) 
  is a great resource for learning more about advanced features, troubleshooting, 
  and getting the most out of your device. 
- **Build your Nested Accounts and Invite New Users**: AutoPi Cloud uses a multi-tenant architecture, which means multiple accounts (tenants) share the same platform and infrastructure, while all data, configurations, and user access remain securely isolated. You can read more here: [Account management](https://docs.autopi.io/cloud/accounts/).
