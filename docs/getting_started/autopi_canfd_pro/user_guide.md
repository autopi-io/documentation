---
id: pro-user-guide
title: User guide
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import SideBySide from '@site/src/components/SideBySide';
import CardGrid from "/components/CardGrid" ;

Our newest [AutoPi CAN-FD Pro](https://shop.autopi.io/products/autopi-can-fd-pro) device has some new features that are not available on our other devices. This guide will walk you through everything you need to know about the CAN Logging feature on our AutoPi CAN-FD Pro device. Whether you're setting up your first logger or exploring advanced options, we've made it easy to follow and fully customizable to suit your needs.
:::note
**CAN Logging** on the AutoPi CAN-FD Pro is different from the Loggers feature available on our other device [AutoPi TMU CM4](https://shop.autopi.io/products/autopi-telematics-unit-cm4-4g-lte-edition). 
:::

![CAN logging](/img/getting_started/autopi_canfd_pro/can_logging_tab.png)


## Loggers
A CAN logger records all the CAN bus traffic detected through the can0 and can1 interfaces. This data can be raw or decoded, depending on how you configure the logger.

### Create CAN Logger
Setting up a CAN logger is easy and flexible. We’ve provided default values for most fields, but you can customize everything to match your specific requirements.
* **1. Basic information:** 
* Start by entering:
  * **Name** – the name you want to give to this logger.
  * **Description** – optional, but helpful if you want to add details about its purpose.

![Basic information](/img/getting_started/autopi_canfd_pro/basic_information.png)

* **2. Filters:** use filters to control which types of CAN frames are logged.
  * Allowed Frame Types: choose from normal, error, and remote frames.
  * Allowed identifier Bits: supports both 11-bit (standard) and 29-bit (extended) identifiers. 
  * Pass filters: only CAN frames that match these filters will be logged.
    * To add a new filter, you'll need to specify the identifier bit length, ID, and a mask.

![Filters](/img/getting_started/autopi_canfd_pro/filters_tab.png)

* **3. Decoders:** this step allows you to decode raw CAN data using Standard decoder or ASAM decoder. 
  * **Add Standard decoder:** 
    1. Decoder name: name your decoder.
    2. DBC File Path: provide the DBC file path.
    3. Select a DBC collection: Select a DBC collection.
    4. Add a DBC collection: automatically add filters for all DBC message IDs.
  
  Automatically add pass filters for all DBC message identifiers

  * **Add ASAM decoder:** 
    1. Decoder name 
    2. DBC File Path
    3. Select a DBC collection
    4. Add a DBC collection
    
  Automatically add pass filters for all DBC message identifiers
![Decoders](/img/getting_started/autopi_canfd_pro/decoders_tab.png)

* **4. Outputs**
  * Raw data 
  * Decoded data 
![Outputs](/img/getting_started/autopi_canfd_pro/outputs_tab.png)

If you enable "show Advanced setttings" in the right top corner, you get access to 1 extra step, frame listeners.

* **5. Frame listeners** 
:::note
This feature is still under development. More will come!
:::

![Frame listeners](/img/getting_started/autopi_canfd_pro/frame_listeners.png)

### Edit CAN Logger
Need to make changes to a CAN logger? No problem, it’s super simple. Just follow these steps:
* Go to the Devices section in the menu.
* Select the device you want to work with.
* Click on CAN Logging tab.
* Under Loggers, find the specific logger you’d like to edit.
* Click the three dots icon in the top-right corner of that logger.
* From the dropdown menu, select Edit.
* Make your changes and save when you’re done.

![Editing CAN Logger](/img/getting_started/autopi_canfd_pro/edit_logger.png)


## Advanced settings
Our newest [AutoPi CAN-FD Pro](https://shop.autopi.io/products/autopi-can-fd-pro) device has some additional settings that can be modified. 

![Advanced settings](/img/getting_started/autopi_canfd_pro/advanced_settings_pro.png)

### Advanced settings for Disk Housekeeper
* Critical use limit: this setting allows you to set an event based on critical use limit (user customizable). Disk usage percentage that is considered critical and which causes an event to be triggered.
* Enabled: this settings allows you to enable Disk Housekeeper, that prevents your disk from running full with old files. By clicking on True, you enable automatic disk cleanup to prevent the disk from running full. The oldest files will be deleted first.
* Use limit: disk usage percentage which is the limit for when file deletion should begin.
* Use target: disk usage percentage which is the target to reach when deleting files.
* Worker delay: represents delay after startup before performing the first check for files to cleanup.
* Worker interval: represent time period between each check for files to cleanup.

### Advanced settings for Output Handler 
* For [AWS S3 output handler](https://aws.amazon.com/free/?trk=b45f363b-5d02-4b3f-87df-b7b1908ff05c&sc_channel=ps&ef_id=CjwKCAjwktO_BhBrEiwAV70jXi39jOGqTVzMppg3DxhsoIWS-bbtstEGVIVceNP95c9u0Id1n_q5XBoCGkMQAvD_BwE:G:s&s_kwcid=AL!4422!3!536452769228!e!!g!!aws%20s3!12198535626!120978772550&trk=b45f363b-5d02-4b3f-87df-b7b1908ff05c&sc_channel=ps&targetid=kwd-20982008831&gclid=CjwKCAjwktO_BhBrEiwAV70jXi39jOGqTVzMppg3DxhsoIWS-bbtstEGVIVceNP95c9u0Id1n_q5XBoCGkMQAvD_BwE&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all): worker delay (delay after startup before executing of the AWS S3 sync process) and worker interval (time period between each check of the executing AWS S3 sync process). Both settings are in seconds. 
