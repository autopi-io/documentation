---
id: device-install-procedure
title: Device Install Procedure 
supportedDevices: ['mini','cm4','pro']
---
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---


This is a detailed description of how to infleet new devices to any fleet, how to pair devices to vehicles and how to assign devices to templates. 

## Procedure for Pairing a Device and Vehicle. 
In this section we will go over the process of a device with either an existing vehicle or creating a new vehicle. 

1. Login to your fleet managment [Cloud](https://www.autopi.io/software-platform/cloud-management) service such as cloud.autopi.io

2. From the main screen go to Devices. 
![main_screen_devices](/img/cloud/device_management/device_install_procedure/main_screen_devices.jpg)

3. Select the device you want to pair a new vehicle with from the list of available devices or search for a specific device.
![device_scrren](/img/cloud/device_management/device_install_procedure/device_screen.jpg)

4. Once you have selected the device you want to pair a vehicle with go to settings. 
![selected_device_settings](/img/cloud/device_management/device_install_procedure/selected_device_settings.jpg)

5. If you want to pair the devices with an existing vehicle follow the steps if not go to 6.   

        I. At the top of the device settings there's a dropdown menu of all the registered vehicles.
    ![device_settings_select_vehicle](/img/cloud/device_management/device_install_procedure/device_settings_select_vehicle.png)

        II. Scrolling down in the drop down menue are all of the unassigned vehicles.
    ![select_vehicle_from_list_of_unassigned](/img/cloud/device_management/device_install_procedure/select_vehicle_from_list_of_unassigned.png) 

        III. Once you have selected the vehicle you wish to pair the device with you can click save    
             at the bottom of the pop-up window.

6. If you are looking to create a new vehicle to pair the device to follow the steps outlined.       
  
    
        I. Go to Vehicles Editor at the top of the pop-up window.
    ![device_settings_new_vehicle](/img/cloud/device_management/device_install_procedure/device_settings_new_vehicle.png)

        II. From the Vehicle Editor click the new vehicle button and fill in the relevant details for the vehicle,   
            such as make and model.   
    ![create_new_vehicle_screen_button](/img/cloud/device_management/device_install_procedure/create_new_vehicle_screen_button.png)

        III. Once you have filled in the details for the vehicle and optionally added any CAN busses you can return   
             to Device.   
    ![return_to_device_settings](/img/cloud/device_management/device_install_procedure/return_to_device_settings.png)

        IV. Verify that the device is connected to the newly created vehicle and click save. 
    ![device_settings_select_vehicle](/img/cloud/device_management/device_install_procedure/device_settings_select_vehicle.png)
7. The device is now paired to a vehicle.

## Procedure for Assigning Devices to Templates. 

1. Login to your fleet management [Cloud](https://www.autopi.io/software-platform/cloud-management) service such as cloud.autopi.io

2. From the main screen go to Templates. 
![main_screen_templates](/img/cloud/device_management/device_install_procedure/main_screen_templates.png)

3. Find the template you want to assigned devices to from and click on it. 
![template_screen](/img/cloud/device_management/device_install_procedure/template_screen.png)

4. To add a device to the template click the add button.
![template_device_add](/img/cloud/device_management/device_install_procedure/template_device_add.png)

5. In the popup window, either select the device you want to assign to the template or search for it in the drop down menu.
![select_devices_for_template](/img/cloud/device_management/device_install_procedure/select_devices_for_template.png)

6. once you have assigned one or all the devices you want to have on the template you can.
    
    A. Click apply template and click apply all async.
    ![Apply_templates_all_async](/img/cloud/device_management/device_install_procedure/Apply_templates_all_async.png) 

    B. Or if you don't want to apply the template to all devices you want to apply the template to from the list below Select Apply Template async from the dropdown menu and click run.
    ![apply_to_selected](/img/cloud/device_management/device_install_procedure/apply_to_selected.png)

7. You've now assigned one or more devices to a template and applied that template to the device.

### What are Templates?
Templates are a feature the allows for the setup and configuration of several devices quickly and easily. 
Once a template has been defined it is as simple as assigning a device to template and the configurations, custom code,
services, and much more can be applied to all the devices by the click of a button.   

Templates are customizable to make as many or as few changes to the devices as needed if you are interested in learning more about how to create templates you can read more about here: [Templates](/cloud/device_management/templates.md)


## Update Devices and Clear Pending Syncs From Fleet Management.

1. Login to your fleet management [Cloud](https://www.autopi.io/software-platform/cloud-management) service such as cloud.autopi.io

2. From the main screen go to Devices. 
![main_screen_devices](/img/cloud/device_management/device_install_procedure/main_screen_devices.jpg)

3. Select the device you would like to verify is updated and has no pending syncs from the list of registered devices. 
![device_scrren](/img/cloud/device_management/device_install_procedure/device_screen.jpg)

4. From the overview scrren you can see the installed verion of the device, the text below the version number indicates whether an update are avaliable. 
![device_software_version](/img/cloud/device_management/device_install_procedure/device_software_version.png) 

5. If and update is aviiable click the more button and then software updates.
![Device_more_software_updates](/img/cloud/device_management/device_install_procedure/Device_more_software_updates.png)

6. From set the device to update the next time it goes to sleep or on startup depending on the button you click.
![software_update_buttons](/img/cloud/device_management/device_install_procedure/software_update_buttons.png) 

7. To clear the any pending syncs click the circle with an arrow pointing down in it, on the bottom right of the screen.
![Pending_button_highlighted](/img/cloud/device_management/device_install_procedure/Pending_button_highlighted.png)

8. In the pop-up window, you'll see any changes that are pending sync clicking the sync button will   
still the syncing process if the devices is connected to the [Cloud](https://www.autopi.io/software-platform/cloud-management).
![sync_button_highlighted](/img/cloud/device_management/device_install_procedure/sync_button_highlighted.png)

9. You have now made sure the device is up to date and any changes have been synced ot the device. 

### What Pending Syncs 
Pending Syncs are changes made to a device from a [Cloud](https://www.autopi.io/software-platform/cloud-management) service such as the cloud.autopi.io or my.autopi.io that 
   needs to be applied to the devices before they take effect.   
The Pending sync will automatically be applied the next time it starts or when manually asked to sync
   if the device is online while changes are being made. 


## Check List for Setting Up a New Car.
1.	Ensure that the device is assigned to the correct template and that the template has been applied to the device. 
2.	Make sure the device is paired with the correct vehicle.
3.	Update the device to the latest version. 
4.	Clear any pending syncs. 

## Procedure for Changing Vehicle Assigned to a Device.
1.	Make sure that the template that is assigned is appropriate for the new vehicle, if not then assign the device   
    to a template that is appropriate for the new vehicle.
2.	create a new vehicle to connect the device to if it hasn’t already been created.
3.	Pair the device with the newly created vehicle or from the list of unassigned vehicles.  
4.	Make sure the device is updated.
5.	Make sure the has no changes waiting to be synced. 

