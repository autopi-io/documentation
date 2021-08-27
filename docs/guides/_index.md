---
id: guides-intro
title: Getting started
---

This is a step-by-step instructions on how to set-up your AutoPi 4G/LTE Edition. The AutoPi 4G/LTE
Edition is already assembled with your SD card inside and just needs a few steps to complete the
installation.

:::note
The AutoPi Telematics Unit is a highly customizeable and technical device. It contains a direct
interface to your car and communicates with the ECU in your car.

1. When working and customizing your device, make sure that your car is in the parked position.
2. Do not remove the AutoPi while driving.
3. When updating the Advanced settings, make sure you know what you are doing, as it can affect the
  performance of your car and the battery in the car.
4. The device can only be powered through the OBD-II port. Powering the Raspberry Pi directly, is
  not supported, and can cause issues.
:::

#### 1.

First step is to associate the AutoPi Telematics Unit with your user account. This is done by going
to [my.autopi.io](https://my.autopi.io/) and following the signup guide here. Please have your
Unit ID ready. Your unit ID is printed on the side of your device, but also part of the
documentation sent to you per email.

When your device is associated to your account, go to **"Advanced->Settings->WiFi"** to see the
WiFi hotspot password and SSID. You will need these later.

![AutoPi.io - WiFi Password location](/img/guides/getting_started/wifi_pasword_scaled.jpg)

#### 2.

Now its time to install your device in your vehicle. First and foremost, insert your sim-card into
your AutoPi. Do this before powering on the device. The AutoPi uses nano sim sizes, so you may need
an adapter to ensure the right size. The location of the sim-card slot is shown on the picture here:

![AutoPi.io - WiFi SIM card location](/img/guides/getting_started/autopi_sim_slot_scaled.png)

When you insert the sim-card it's important that the sim card is inserted correctly. The picture
below shows the orientation of the sim card. Please notice that the text side of the sim card must
be up and the "triangle" end point into the device.

![AutoPi.io - SIM card location](/img/guides/getting_started/getting_started_gen3.png)

:::caution
**Please notice:** When the sim-card is inserted correctly, you will hear a small "click" when the
card is in position. Don't try do force the SIM out after the click as this will damage the device.
Make sure the orientation is correct before inserting the SIM. Wrong orientation could potentially
damage your device.
:::

Here's a list of the US based SIM providers that we recommend to be used with the AutoPi:
1. AT&T
2. T-Mobile
3. Any MVNO provider that is roaming the networks of the providers above

#### 3.

Next step is to locate your OBD port in your car, it is usually found underneath the dashboard and
looks something like this:

![AutoPi.io - OBD port](/img/guides/getting_started/obd_location.jpg)

The location of the OBD port varies from make and model, but is typically fund in one of the
locations shown below:

![AutoPi.io - OBD port location](/img/guides/getting_started/TMU_placement_dashboard_v1_finecut-01.jpg)

#### 4.

When installing the AutoPi, always make sure that your device faces upwards. The logo needs to face
the sky, due to the GPS antenna in the AutoPi Telematics Unit, otherwise there is a chance you
won’t have a good GPS signal.

#### 5.

If the port is located in an inconvenient place or is in the way of your legs, you can purchase a
relocator cable for your AutoPi to keep it in more convenient area. You can also place it in an
holder or purchase a velcro strip to secure it on the side or underneath the dashboard, just
remember that the logo needs to face upwards. This is the relocator cable:

![AutoPi.io - Relocator cable](/img/guides/getting_started/relocator_cable2.jpg)

#### 6.

Once you have inserted the AutoPi Telematics Unit into the OBD port, turn on your WiFi on your
phone/tablet and then on your phone choose the AutoPi hotspot in order to connect with the device.
The hotspot is named something like autopi-XXXX, where XXX is an ID for your device. The password
for the WiFi hotspot can be found from the My AutoPi Cloud. When the device is powered on, you can
see a blue light on the side indicating power. For a full description of the two status LED's,
please see [this](/core/power_management/_index.md/#status-leds).

#### 7.

Once connected to the WiFi hotspot, you need to configure your APN settings for the sim card
inserted. To do so, go to [my.autopi.io](https://my.autopi.io/). Click on the "Go local" button in
the bottom. This will connect you to the local device and you should see a screen like shown on the
right. This will indicate that you are connected to the local device and you can go ahead and login.
No username/password needed.

![AutoPi.io - Localhost login](/img/guides/getting_started/localhost.jpg)

#### 8.

Once logged in you need to go the settings page and enter your sim card APN settings. You can
usually get these from your network carrier. On the settings page, there is a small button where
you can get help to set up your APN settings from a list of carriers worldwide, in case you have
trouble finding it from your carrier. Please select your carrier or fill out the information
manually. Once the information is saved, it will be applied to the device and you should see a
notification when successfully saved.

Settings Page | APN Presets | Settings Saved
- | - | -
![AutoPi.io - Settings Page](/img/guides/getting_started/settings_page.jpg) | ![AutoPi.io - APN Presets](/img/guides/getting_started/apn_presets.jpg) | ![AutoPi.io - Settings Saved](/img/guides/getting_started/settings_saved.jpg)

#### 9.

To verify that you have set up your APN setting correct, you can use your browser on your phone
and go to any other webpage, when connected to the AutoPi hotspot. If you are able to load this
page, it means your device is online and has started uploading data to the AutoPi Cloud.

#### 10.

Your device is now online and connected to the AutoPi Cloud. When you have completed the setup,
remember to change your device WiFi password. The password your device came with is ment for a one
time setup and it is recommended to change it after you have setup your device. You can change the
password from the AutoPi Cloud Advanced Settings.

:::note
Getting started with you **DiY Edition**? For TMU devices, check [this](/hardware/generation-3/setup_your_tmu_diy_edition.md) guide,
for older, generation 2 devices, check [this](/hardware/generation-2/setup_your_gen_2_diy_edition.md) guide.
:::
