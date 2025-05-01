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

**What is CAN Logging?**
CAN Logging captures traffic from your vehicle’s CAN bus using two dedicated interfaces: can0 and can1. These logs can include raw or decoded data, depending on your configuration.

![CAN logging](/img/getting_started/autopi_canfd_pro/can_logging_tab.png)

---

## Channels
A channel is a pathway through which the device listens to or communicates on the CAN bus. Most vehicles have one or two CAN buses. The [AutoPi CAN-FD Pro](https://shop.autopi.io/products/autopi-can-fd-pro) supports two channels out of the box: **can0 and can1**.
CAN communication is based on an agreed bitrate (speed of the amount of data processed within 1 second). Think of it like tuning two radios to the same frequency—you need to match speeds to understand each other. If you don’t know the bitrate, [AutoPi CAN-FD Pro](https://shop.autopi.io/products/autopi-can-fd-pro) device has functionality to **Autodetect** to help you find the correct bitrate - by selecting one or more methods to detect the CAN bus and the active protocol(s). A passive method will only listen for broadcast traffic. An active method will attempt to send a request and then wait for a valid response. 


### How to Configure CAN Channels?
By default, can0 and can1 channels are preconfigured with standard values. But you can fully customize them. 

#### Opening the configuration of the CAN channel 
![Open configuration of the CAN channel](/img/getting_started/autopi_canfd_pro/configure_channel.png)

* Go to the Devices section.
* Click on the device you want to configure.
* Select the CAN Logging tab.
* Click on the channel you want to edit.
* Click the "Configure" button in the top-right corner.

#### Detailed description of steps to configuring/creating CAN channel
##### Step 1: Name & Description of the CAN channel
* **Name** the channel or update the existing name.
* Add a **description** to clarify its purpose.

![Name and description](/img/getting_started/autopi_canfd_pro/name_description.png)
      
##### Step 2: Enable or Disable CAN channel
* Use the checkbox to either **enable** or **disable** this channel. When disabled, CAN channel is not running and therefore not listening to CAN Bus. 

![Enabled channel](/img/getting_started/autopi_canfd_pro/user_guide/channel_enabled.png)

##### Step 3: Autodetect (How to find the correct bitrate)
* This is a way to detect the CAN Bus. Type of the CAN bus can different from vehicle to vehicle (with different bitrates (speed)). Therefore, we need to detect the correct type of CAN Bus but also find the correct bitrate before we can start recording data from the device. 
* Choose from three **detection strategies** to ensure there is data:
      * **Any (passive)** – Passively listens for CAN messages on the bus without actively sending any messages. This is set as default, as it is the safest strategy because you are just trying to find out if there is any activity on the bitrate.
      * **OBD (active)** – Sends an OBD-II PID request message and waits for a response to detect if the protocol is supported. If the response is received that means that the protocol is supported.
      * **J1939 (active)** – Sends a J1939 PGN request message and waits for a response to detect if the protocol is supported. If the response is received that means that the protocol is supported.

  ![Autodetect](/img/getting_started/autopi_canfd_pro/autodetect.png)

  :::warning 
  Choose the active strategy (OBD ACTIVE AND J1939 ACTIVE) only if the Passive strategy didn't work. In some edge cases, vehicle can receive warning errors on a dashboard when picking the active strategies. 
  :::

Every time the Autodetection is used, it triggers an **events** that could be seen in the events section. This should help users to understand a little better what is happening on a device. These are some of the examples for the events: 
- vehicle/bus/can0/autodetected 
- vehicle/bus/can0/autodetect/any_passive/successful 
- vehicle/bus/can0/autodetect/any_passive/unsuccessful 

##### Step 4: Try Bitrates or Use Fixed Bitrate
* As mentioned above, you need to find the correct bitrate for your vehicle. The deafult list for Try Bitrates includes some of the most common used bitrates to make this process easier for you. This step allows you to make sure that you can receive any data by listening to these settings. 
* You have 2 options here: 
  * **1. Try Bitrates (Auto Mode):**
      If you're unsure about your vehicle’s bitrate, this is the best choice.
        The device will automatically scan through a list of common CAN 2.0 and CAN FD bitrates.
        It opens one channel, listens for about a second, then tries the next—until it locks onto the right one, basically the device tries different bitrates until it finds the one that matches your vehicle.
![Try bitrates](/img/getting_started/autopi_canfd_pro/try_bitrates.png)

:::note
You can reorder the bitrate list and add your own based on your specific setup. Just use the 2 line icon on the left side.
:::

  * **2. Fixed Bitrate (Manual Mode):**
    Already know the exact bitrates for your CAN 2.0 and/or CAN FD? Just input them directly. This saves time and ensures consistent communication.
  ![Fixed bitrates](/img/getting_started/autopi_canfd_pro/fixed_bitrate.png)

##### Step 5: Advanced Channel Settings
![Advanced channel settings](/img/getting_started/autopi_canfd_pro/advanced_channel_settings.png)

Under **Advanced Settings** you’ll find a few more options for extra settings: 
* **Enable Termination** – Enables physical CAN bus termination of ~120 ohms for this channel. We support this setting to adjust the software. 
* **Allow Changing Interface** – Permit to make changes to the underlying CAN interface? This includes changing the bitrate and bringing the interface up and down etc. If disabled, the CAN interface will be used as is without any prior setup.
* **Allow Sending** – Permit sending of CAN frames for this channel. If disabled, an error will be returned when attempting to send a CAN message.
* **Receive Own Messages** – Allows the device to also listen to messages it sends (useful for testing/debugging).

:::warning
Make sure you know what you are doing if you are changing the advanced settings, as this will affect the behavior of the device.
:::

---

## Loggers
Every channels can have one or multiple loggers set up. A CAN logger records all the CAN bus traffic detected through the can0 and can1 interfaces. This data can be raw or decoded, depending on how you configure the logger.

### How to create CAN Logger?
Setting up a CAN logger is easy and flexible. We’ve provided default values for most fields, but you can customize everything to match your specific requirements.

##### Step 1: Basic information
* Start by entering:
  * **Name** – the name you want to give to this logger.
  * **Description** – optional, but helpful if you want to add details about its purpose.

![Basic information](/img/getting_started/autopi_canfd_pro/basic_information.png)


##### Step 2: Filters 
Use filters to control which types of CAN frames are logged. This settings allow you to filter the type of data you want to be logged for your specific use case. 

:::note
  If you set up decoder for your CAN logger, the filters are automatically applied even tho they are not visible in this step. 
  :::

**Settings for filters:**
  * **Allowed Frame Types:** choose from normal, error, and remote frames (all of the CAN messages has at least one of these frames). 
  * **Allowed identifier Bits:** supports both 11-bit (standard) and 29-bit (extended) identifiers. 
  * **Pass filters:** only CAN frames that match these filters will be logged.
    * To add a new filter, you'll need to specify the identifier bit length, ID, and a mask.

:::warning
If you don't know anything about a bit masking, it is better to use the default value inside the Pass Filters (there are different default values for 11 bit and 29 bits). 
:::

![Filters](/img/getting_started/autopi_canfd_pro/filters_tab.png)

##### Step 3: Decoders
This step allows you to decode (translate) raw CAN data using Standard decoder or ASAM decoder. This step doesn't come up with pre set default values, as this is fully customizable for user. User has to import a DBC file and set up some additional settings in order for device to be able to decode the data. 

  ![Decoders](/img/getting_started/autopi_canfd_pro/decoders_tab.png)

* **Add Standard decoder:** 
  * **Decoder name:** name your decoder.
  * **DBC File Path:** provide the DBC file path.
  * **Select a DBC collection:** Select a DBC collection from the dropdown where all imported DBC files should be already presented. 
  * **Add a DBC collection:** automatically add filters for all DBC message IDs. 
  
  After you **choose the DBC file** you want to use, you then get presented with all the signals below where you can choose which ones you want to use for decoding. There is also 1 important technical value that needs to be set correctly: Frame ID Mask. Frame ID Mask will help you determine how much needs to match before you have a match.

    :::note
    Frame ID Mask: is a bitmask used to match the CAN message identifiers defined in the DBC file. **If this value is incorrect, no CAN messages will be decoded. For the J1939 protocol the recommended bitmask is ´1FFFFF00´.**
    :::

    Extra setting: Automatically add pass filters for all DBC message identifiers - this setting just make sure that all of the data that can not be decoded won't be send over. 

    ![Standard decoder](/img/getting_started/autopi_canfd_pro/user_guide/standard_decoder.png)

* **Add ASAM decoder** (capable of doing MDF4 - a binary file format for recording e.g. CAN and CAN FD data):
  * **Decoder name:** name your decoder.
  * **DBC File Path:** provide the DBC file path.
  * **Select a DBC collection:** select a DBC collection from the dropdown where all imported DBC files should be already presented. 
  * **Add a DBC collection:** automatically add filters for all DBC message IDs. 

![ASAM decoder](/img/getting_started/autopi_canfd_pro/user_guide/asam_decoder.png)

* **How to import a DBC file:**
    When importing a DBC file, you are able to set up the CAN messages and signals based on your preference. After you validate the file, you will be presented with the list of CAN messages and signals. You can decide if you want to create or ignore the specific message or signal. If you create one that was already created, it will be updated. 


##### Step 4: Outputs
This step represent the settings for the output of your data. You can choose where do you want the data to be transferred to, and adjust the settings. At the moment we support upload to AWS S3 bucket but data are also stored locally on a device. 

  :::note
  If you make 2 identical loggers, you will have 2 identical pairs of the same data. Meaning that you will receive the identical data but more instances are logging the same data at the same time - this could be used for testing purposes.  
  :::

At the moment [AutoPi CAN-FD Pro](https://shop.autopi.io/products/autopi-can-fd-pro) is capable of getting data in 2 formats: Raw data - everything is logged; and Decoded data - data is translated before being transferred. Within both of these formats, data are logged and accessible locally on a device or could be set up to be transfered to a S3 bucket (read more below). 

**Data format: Raw data (raw output)** 
* **Local Cache** - raw data are logged on a local disk. Logger will always log to local disk first (not possible to disable). When Disk is running full, Disk Housekeeper is deleting these files (starting with the oldest). You can however configure these settings: 
  * **Folder Pattern** - Local folder where the output files containing raw CAN frames are saved to. 
  * **File Name Pattern** - The format string used to name the output files in a consistent manner. Raw files will be named with using this pattern. This patern includes the timestamp (year, month, day, hour, minute), and therefore every time new file is made it has the timestamp as a name. 
  * File Format - by default it is set to log file, however we offer a different file formats to pick from: asc, blf, csv, db and jsonl. 
  * Max File Size Rollover Trigger - The maximum allowed size before rollover of the output file. In order to avoid having big files, the default size is set - this is a recommended step. 
  * Max File Age Rollover Trigger - The maximum allowed age before rollover of the output file.


  :::note
  If you want to access the files through the wifi hotspot, you can follow this guide: [Accessing files via SFTP/SCP on AutoPi CAN-FD Pro device](https://docs.autopi.io/getting_started/autopi_canfd_pro/accessing-files-via-sftp-on-autopi/). 
  :::

  If you have enabled the **Advanced Settings** (in the right upper corner) you will get access to extra settings: 
    * **Worker Interval** 
    * **Dump Limit** 
    * **Buffer Line Flush Limit** 
    * **Buffer Line Size** 

![Raw local data](/img/getting_started/autopi_canfd_pro/user_guide/raw_local.png)

       

* **S3** - raw data will be uploaded to a S3 bucket. Settings that you need to set up for device to be able to upload the data to S3 bucket are these: 
  * **Access Key ID** - Access key ID of AWS account to be used.
  * **Access Secret Key** - Access secret key for the AWS account.
  * **Destination Path** - URL path to the S3 bucket container for storing output files. 

  If you have enabled the **Advanced Settings** (in the right upper corner) you will get access to extra settings: 
    * **Exclude Patterns** - Rule patterns used to exclude specific files or directories.
    * **Sync Interval** - Time gap between each sync operation, specifying how often files should be synchronized automatically.
    * **Error Retry Interval** - Period of time in seconds that the handler waits before retrying an operation after encountering an error.
    * **Job Timeout** - Maximum duration allowed for the output handler task to run before it is automatically terminated.

![Raw S3 data](/img/getting_started/autopi_canfd_pro/user_guide/raw_s3.png)


**Data format: Decoded data (decoded output)**
* **Local Cache** - decoded data are also stored on a local disk. Logger will always log to local disk first (not possible to disable). When Disk is running full, Disk Housekeeper is deleting these files (starting with the oldest). You can however configure these settings: 
  * **Folder Pattern** - Local folder where the output files containing raw CAN frames are saved to. 
  * **File Name Pattern** - The format string used to name the output files in a consistent manner. Decoded files will be named with using this pattern. This patern includes the timestamp (year, month, day, hour, minute), and therefore every time new file is made it has the timestamp as a name. 
  * **File Format** - by default it is set to log file, however we offer a different file formats to pick from: csv and jsonl.


   :::note
    If you want to access the files through the wifi hotspot, you can follow this guide: [Accessing files via SFTP/SCP on AutoPi CAN-FD Pro device](https://docs.autopi.io/getting_started/autopi_canfd_pro/accessing-files-via-sftp-on-autopi/). 
    :::

  If you have enabled the **Advanced Settings** (in the right upper corner) you will get access to extra settings: 
    * **Worker Interval** 
    * **Buffer Line Flush Limit** 
    * **Buffer Line Size** 
    * **Duration Limit**
    * **Message Limit** 
    * **Ignore "Message Not Found" in Error File** 
    * **Include stacktrace in Error File**

  ![Decoded local data](/img/getting_started/autopi_canfd_pro/user_guide/decoded_local.png)

* **S3** - decoded data will be uploaded to a S3 bucket. Settings that you need to set up for device to be able to upload the data to S3 bucket are these: 
  * **Access Key ID** - Access key ID of AWS account to be used.
  * **Access Secret Key** - Access secret key for the AWS account.
  * **Destination Path** - URL path to the S3 bucket container for storing output files. 

  If you have enabled the **Advanced Settings** (in the right upper corner) you will get access to extra settings: 
    * Exclude Patterns - Rule patterns used to exclude specific files or directories.
    * Sync Interval - Time gap between each sync operation, specifying how often files should be synchronized automatically.
    * Error Retry Interval - Period of time in seconds that the handler waits before retrying an operation after encountering an error.
    * Job Timeout - Maximum duration allowed for the output handler task to run before it is automatically terminated.

    ![Decoded S3 data](/img/getting_started/autopi_canfd_pro/user_guide/decoded_s3.png)

##### Step 5: Frame listeners
It's a way to react on can messages received and possibility to do custom stuff with that. 

If you enable "show Advanced setttings" in the right top corner, you get access to 1 extra step, frame listeners, this tab will rearrange the original steps and becomes the third step in the flow. 

:::note
This feature is still under development. More will come!
:::

![Frame listeners](/img/getting_started/autopi_canfd_pro/frame_listeners.png)

### How to edit CAN Logger?
Need to make changes to a CAN logger? No problem, it’s super simple. Just follow these steps:
* Go to the Devices section in the menu.
* Select the device you want to work with.
* Click on CAN Logging tab.
* Under Loggers, find the specific logger you’d like to edit.
* Click the three dots icon in the top-right corner of that logger.
* From the dropdown menu, select Edit.
* Make your changes and save when you’re done.

![Editing CAN Logger](/img/getting_started/autopi_canfd_pro/edit_logger.png)

---

## Advanced settings
Our newest [AutoPi CAN-FD Pro](https://shop.autopi.io/products/autopi-can-fd-pro) device has some additional advanced settings that can be modified. These settings are namely: Can Logging (only available for [AutoPi CAN-FD Pro](https://shop.autopi.io/products/autopi-can-fd-pro) ) and Tailscale (available not only for [AutoPi CAN-FD Pro](https://shop.autopi.io/products/autopi-can-fd-pro) but also for [AutoPi TMU CM4](https://shop.autopi.io/products/autopi-telematics-unit-cm4-4g-lte-edition)). 

### Advanced settings for Disk Housekeeper
Steps to get into advanced settings for disk housekeeper:
* Go to the Devices section in the menu.
* Select the device you want to work with.
* Click on Advanced settings.
* Click on Can Logging. 

![Advanced settings for Disk Housekeeper](/img/getting_started/autopi_canfd_pro/user_guide/disk_housekeeper.png)

Settings for disk housekeeper: 
* **Critical use limit**: this setting allows you to set an event based on critical use limit (user customizable). Disk usage percentage that is considered critical and which causes an event to be triggered.
* **Enabled**: this settings allows you to enable Disk Housekeeper, that prevents your disk from running full with old files. By clicking on True, you enable automatic disk cleanup to prevent the disk from running full. The oldest files will be deleted first.
* **Use limit**: disk usage percentage which is the limit for when file deletion should begin. This means that when this limit is hit or exceeded, the housekeeper starts to clean up and then it cleans up until it reaches 85% (to reach the Use Target - customizable in the setting below). And in order for you to not loose data, it takes always the oldest files first.
* **Use target**: disk usage percentage which is the target to reach when deleting files.
* **Worker delay**: represents delay after startup of the device before performing the first check for files to cleanup. This simply means that after device is woken up, it does all the neccesary functions first and Disk housekeeper is delayed by default by 60 seconds to give device enough time to postpone to a little later, the better for the performance and start up time.
* **Worker interval**: represent time period between each check for files to cleanup.

Every time the Disk Housekeeper deletes anything, it triggers an event that could be seen in the events section. This should help users to understand a little better what is happening on a device. We have 2 events: 
* system/disk_housekeeper/ordinary_purge - this event is triggered when it reaches ordinary limits (customizable in the advanced settings).
* system/disk_housekeeper/critical_purge - this event is triggered when it reaches critical limits (customizable in the advanced settings).

### Advanced settings for Output Handler 
Steps to get into advanced settings for output handler: 
* Go to the Devices section in the menu.
* Select the device you want to work with.
* Click on Advanced settings.
* Click on Can Logging. 

![Advanced settings for Output Handler](/img/getting_started/autopi_canfd_pro/user_guide/output_handler.png)

At the moment if you want to use [AWS S3 Cloud storage](https://aws.amazon.com/free/?trk=b45f363b-5d02-4b3f-87df-b7b1908ff05c&sc_channel=ps&ef_id=CjwKCAjwktO_BhBrEiwAV70jXi39jOGqTVzMppg3DxhsoIWS-bbtstEGVIVceNP95c9u0Id1n_q5XBoCGkMQAvD_BwE:G:s&s_kwcid=AL!4422!3!536452769228!e!!g!!aws%20s3!12198535626!120978772550&trk=b45f363b-5d02-4b3f-87df-b7b1908ff05c&sc_channel=ps&targetid=kwd-20982008831&gclid=CjwKCAjwktO_BhBrEiwAV70jXi39jOGqTVzMppg3DxhsoIWS-bbtstEGVIVceNP95c9u0Id1n_q5XBoCGkMQAvD_BwE&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all) as an output handler, you will need to fill out these fields: 
* **Worker delay** - delay after startup before executing of the AWS S3 sync process.
* **Worker interval** - time period between each check of the executing AWS S3 sync process. Checking the upload job by default every 10 seconds, making sure the files are uploaded. If the job is hanging, it will close it, to ensure you won't loose any data.

### Advanced settings for Tailscale
Steps to get into advanced settings for Tailscale: 
* Go to the Devices section in the menu.
* Select the device you want to work with.
* Click on Advanced settings.
* Click on Tailscale. 

![Advanced settings for Tailscale](/img/getting_started/autopi_canfd_pro/user_guide/tailscale_settings.png)

At the moment if you want to access your device remotely using [Tailscale](https://tailscale.com/) you will need to configure these fields: 
* **Auth Key** - Specify the Tailscale auth key to be used by the device. Generate a new key on the Tailscale console below 'Settings' > 'Keys'.
* **Enabled** - by default this setting is not enabled, but if you want to use Tailscale, you just have to enable it here. 

For more information check out this guide: [How to connect to Tailscale on your AutoPi device](https://docs.autopi.io/getting_started/autopi_canfd_pro/how_to_connect_to_tailscale/)

<br>
</br>

### Let's keep in touch!
Thank you for choosing AutoPi. We're excited to see what you will achieve with your AutoPi device! 
<CardGrid home>
[![](/img/shared/favicon.ico) **Contact our sales team** You can build on top of AutoPi.](https://www.autopi.io/contact/)

[![](/img/shared/support_icon.png) **Get help from our support team** Let us know about your technical questions.](https://www.autopi.io/support/)

</CardGrid>