---
id: device-install-procedure
title: Device Install Procedure 
supportedDevices: ['mini','cm4','pro']
---
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

This guide provides clear instructions on how to connect your AutoPi device to a vehicle. While most users will pair their device with a single vehicle, the AutoPi system also supports switching between multiple vehicles. If you plan to move the device between different vehicles, ensure that the device synced the changes once plugged into the new vehicle to avoid any data loss.

## Connecting Your AutoPi Device to a Vehicle

Follow the steps below to connect your AutoPi device to either a new or existing vehicle.

### Step-by-Step Instructions

1. **Log in** to the [AutoPi Cloud Platform](https://my.autopi.io/) using your account credentials.
2. From the main dashboard, go to the **Devices** tab.  
   ![Main screen - Devices tab](/img/cloud/device_management/device_install_procedure/main_screen_devices.jpg)
3. **Select the device** you want to configure.  
   ![Device selection screen](/img/cloud/device_management/device_install_procedure/device_screen.jpg)
4. Click the **Settings** button in the upper-right corner.  
   ![Device settings button](/img/cloud/device_management/device_install_procedure/selected_device_settings.jpg)

---

### Option A: Pair with a New Vehicle

If you haven't created a vehicle yet, follow these steps:
1. In the settings pop-up, go to the **Vehicles Editor** tab.  
   ![Vehicles editor tab](/img/cloud/device_management/device_install_procedure/device_settings_new_vehicle.png)
2. Click the **New Vehicle** button.
3. Fill in the required vehicle details, such as:
   - Make  
   - Model  
   - Year  
   - Vehicle type  
   ![New vehicle form](/img/cloud/device_management/device_install_procedure/create_new_vehicle_screen_button.png)
4. (Optional) Set up CAN bus settings if applicable.
5. Click **Save** to store the changes. Your AutoPi device is now paired with the new vehicle.  
   ![Return to device settings](/img/cloud/device_management/device_install_procedure/return_to_device_settings.png)

---

### Option B: Connect to an Existing Vehicle

If a vehicle is already set up, follow these steps:

1. In the settings pop-up, go to the **Device** tab.  
   ![Device tab](/img/cloud/device_management/device_install_procedure/device_settings_new_vehicle.png)
2. At the top of the device settings, there is a **dropdown menu** showing the currently connected vehicle.
3. Click the dropdown to view a list of all existing vehicles. Select the one you want and click **Save**.  
   ![Vehicle selection dropdown](/img/cloud/device_management/device_install_procedure/device_settings_select_vehicle.png)

---

## Final Step

Your AutoPi device is now successfully paired with a vehicle and ready for use!

