---
id: pro-user-guide
title: User guide
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import SideBySide from '@site/src/components/SideBySide';
import CardGrid from "/components/CardGrid" ;

Our newest [AutoPi CAN-FD Pro](https://shop.autopi.io/products/autopi-can-fd-pro) device has some new feature that are not available on our other devices. **CAN Logging** differs from [Loggers page](https://docs.autopi.io/cloud/device_management/templates/#loggers) for our other devices [AutoPi CM4](https://shop.autopi.io/products/autopi-telematics-unit-cm4-4g-lte-edition) or [AutoPi Mini](https://shop.autopi.io/products/autopi-mini). There are also some new fields in Advanced settings for Pro devices.

## Channels
Description: channels are....
### Configure Channel
### Add Channel


## Loggers
Logs all frames received on SocketCAN interface 'can0'and 'can1'.

### Create CAN Logger
This is an easy step by step guide on how to create CAN logger. All of the fields have default value already suggested for you, however everything is customizable so you can fit it for your needs.
* **1. Basic information:** here you need to fill out 2 fields: name that you want to name this logger and Description if you want to add any information related to this logger. 
picture 1

* **2. Filters:** 
  * Allowed Frame Types: normal frames, error frames, remote frames
  * Allowed identifier Bits: 11 Bit, 29 Bit
  * Pass filters: Only CAN frames with identifiers that match a pass filter will be included.
    
If you want to add an extra Pass  Filters, you would have to fill out ID bits (11 or 29), ID and mask. 
picture 2

* **3. Decoders:** 
  * **Add Standard decoder:** 
    1. Decoder name 
    2. DBC File Path
    3. Select a DBC collection
    4. Add a DBC collection
  
  Automatically add pass filters for all DBC message identifiers

  * **Add ASAM decoder:** 
    1. Decoder name 
    2. DBC File Path
    3. Select a DBC collection
    4. Add a DBC collection
    
  Automatically add pass filters for all DBC message identifiers
picture 3 

* **4. Outputs**
  * Raw data 
  * Decoded data 
picture 4

If you enable "show Advanced setttings" in te right top corner, you get access to 1 extra step. 
* Frame listeners 
picture 5

### Edit CAN Logger


## Queries
Queries are ....
### Add Query

Types: 
1. RAW Query
2. OBD Query
3. J1939 Query



## Advanced settings
picture 6

### Disk Housekeeper
* Critical use limit: this setting allows you to set an event based on critical use limit (user customizable). Disk usage percentage that is considered critical and which causes an event to be triggered.
* Enabled: this settings allows you to enable Disk Housekeeper, that prevents your disk from running full with old files. By clicking on True, you enable automatic disk cleanup to prevent the disk from running full. The oldest files will be deleted first.
* Use limit: disk usage percentage which is the limit for when file deletion should begin.
* Use target: disk usage percentage which is the target to reach when deleting files.
* Worker delay: represents delay after startup before performing the first check for files to cleanup.
* Worker interval: represent time period between each check for files to cleanup.

### Output Handler 
* For [AWS S3 output handler](https://aws.amazon.com/free/?trk=b45f363b-5d02-4b3f-87df-b7b1908ff05c&sc_channel=ps&ef_id=CjwKCAjwktO_BhBrEiwAV70jXi39jOGqTVzMppg3DxhsoIWS-bbtstEGVIVceNP95c9u0Id1n_q5XBoCGkMQAvD_BwE:G:s&s_kwcid=AL!4422!3!536452769228!e!!g!!aws%20s3!12198535626!120978772550&trk=b45f363b-5d02-4b3f-87df-b7b1908ff05c&sc_channel=ps&targetid=kwd-20982008831&gclid=CjwKCAjwktO_BhBrEiwAV70jXi39jOGqTVzMppg3DxhsoIWS-bbtstEGVIVceNP95c9u0Id1n_q5XBoCGkMQAvD_BwE&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all): worker delay (delay after startup before executing of the AWS S3 sync process) and worker interval (time period between each check of the executing AWS S3 sync process). Both settings are in seconds. 
