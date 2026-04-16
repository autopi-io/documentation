---
id: create-custom-returners
title: Create Custom Returners
supportedDevices: ['cm4','pro','pro_case']
---
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

This guide demonstrates how to redirect accelerometer data to a file on disk using a custom returner. The same approach applies to any data type, including OBD, GPS, and others.

1. Create a custom code module of type **Returner**. Navigate to **Device** > **Custom Code**:

  ![Create custom returner](/img/cloud/device_management/services/create_custom_returners/create_custom_returner.png) 

  The default implementation appends results to `/tmp/returner_data.txt`. This can be replaced with any storage backend or external integration.

2. Register the returner as a hook on the **acc_manager** service so it can be used in worker workflows. Navigate to **Device** > **Services** > **acc_manager** > **Hooks** > **Create**:

  ![Register custom returner hook](/img/cloud/device_management/services/create_custom_returners/register_custom_returner_hook.png) 

3. Apply the registered hook to the **xyz_logger** worker's workflow. Navigate to **Device** > **Services** > **acc_manager** > **Workers** > **xyz_logger** and change the returner from *cloud* to *my_returner*:

  ![Use custom returner in workflow](/img/cloud/device_management/services/create_custom_returners/use_custom_returner_in_workflow.png) 

Once the changes have been successfully synced to the device, it will begin logging accelerometer data to the specified file.

To monitor the output in real time over SSH, run the following command:

When logged onto the device using SSH, it is possible to monitor the data in realtime with the
command:
```python 
tail -f /tmp/returner_data.txt
```
