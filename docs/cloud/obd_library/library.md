---
id: car-explorer-library-manual
title: My Library
---

In this page we go through the Library section of our Cloud. Below is a screenshot of an example
Library that is already filled with some PIDs and CAN messages. Open the screenshot in a
new tab to get a better overview of the whole page.

![Full library screenshot](/img/cloud/obd_library/library/full-screenshot.jpg)

We will start off this guide by going through some of the basic actions that you can do in the
library page, including a section on how to use the Community Library to find new PIDs and CAN
messages. Then, we will move on to the process of creating a PID, testing it out and sharing it
with the community. We'll repeat the process but for CAN messages and their CAN signals instead.
Lastly, we will show you some quick steps for importing a DBC file.

## Basic Actions

There are a few buttons that will allow you to accomplish different tasks in the library. The main
element is the table filled with PIDs and CAN messages. You are able to delete a single entry in
the table by clicking on the trash icon to the far right of each item in the list. You can also
select multiple items and then execute a specific action from the '*Actions*' dropdown menu on the
bottom-right of the page. You are also able to filter the items that are shown using the filters
at the top of the page. You are also able to copy PIDs and CAN messages from the community library.
You are also able to create new PIDs and CAN messages and can also import external DBC files into
your library which you can later on share with the rest of the community. We are going to review
these actions in the following sections.

:::tip
If you're unsure of the difference between *PIDs* and *CAN message signals*, you can take a look
at our [OBD-II introduction](../obd-ii/index.md) guide, which goes into more details about
that.
:::

## Community Library

The community library tab will show you a list of PIDs or CAN messages available for the vehicle
that's assigned to your currently active device. If there is no vehicle assigned at the moment, no
filters will be applied, so you will need to add them manually for the vehicle you're interested in.

:::caution
Only the [my.autopi.io](https://my.autopi.io) environment has a populated community library. If you
are a business customer, you won't see any of the community shared library on your dedicated
server.
:::

![Community library screenshot](/img/cloud/obd_library/library/community-library.jpg)

:::note
There is a slight difference between the two types - *OBD-II PID* and *Proprietary PID*. Items that
are created with the *OBD-II PID* type are PIDs that are a part of the OBD-II standard which is
used by most internal combustion engine (ICE) vehicles. On the other hand *Proprietary PID*s are
PIDs that are usually used by vehicle's that don't follow the OBD-II standard, for example electric
vehicles or more advanced ICE vehicles.
:::

After applying the filters for the vehicle you're interested in, you will be presented with a list
of search results. You can browse through them and if you find one that you would like to use or
experiment with you can add it to your library. By clicking on the item you're interested in, a
pop-out window similar to the one below will show up:

![Community library view window](/img/cloud/obd_library/library/community-library-view-window.jpg)

On that window, you can see details such as the exact parameters for the PID like the **header**,
**mode** and PID **code** that it uses, the **formula** that parses the raw bytes into human
readable format and more (for a description of these fields, read the following section). Finally,
if you'd like to use this PID, you can click on the green '*Add to library*' button and a copy of
this PID will show up in your personal library. From there, you can edit it if it needs to be
changed.

## Creating PIDs

Let's now go through the process of creating a PID in your own library. We will use the standard
OBD-II RPM PID as an example. Below is the raw PID that would be send on the CAN bus of a vehicle:

```
7DF # 02 01 0C 00 00 00 00 00
```

Let's try to dissect this PID a little bit. Just as a reminder, PIDs are sent in hexadecimal format.
The most noticeable element is the hash sign (`#`). This sign separates the PID's header from the
PID's body. The header in this case is `7DF`. Next, the first byte of the PID body shows the data
length, in this case, we only have two bytes that need to be read, so the body length is `02`. Next,
the mode is `01` and the code is `0C`. These two values are predefined by the OBD-II standard. More
detailed information can be found in [this guide](../obd-ii/create_pid_loggers.md).

Now, let's shift our focus on the next task - we need to create the PID in the system. Firstly, we
will need to go back to our own library and find the '*+ Create*' button (which should be located
at the top-right section of the page). Clicking on that button will show a dropdown menu with two
options, PID and CAN - select the PID one. This will bring up the following window (the fields in
the screenshot are already filled up, so that it's easier for me to describe them after):

![Creating a PID](/img/cloud/obd_library/library/creating-a-pid.jpg)

Let's go through the fields that are available and how to fit the raw PID we see above into the
PID form.

>**Name:** Short name of the PID that's being created.
>
>**Description:** Optional description of the PID. This can be very useful if plan to share the PID
>with the rest of the community.
>
>**Mode:** This is the mode that the PID is working in. We will type `01` in this field as described
>above.
>
>**Code:** The hexadecimal representation of the requested PID. In this case, the code is `0C` and
>so we will specify that.
>
>**Header:** The header used to request the PID. `7DF` is the standard header value for external
>OBD-II test equipment, so this is the one we'll use.
>
>**Bytes:** This is the expected length of the response. If strict mode is enabled (can be selected
>by opening the Extended PID options) the device will ensure that the response is exactly 8 bytes
>long and if it isn't it'll raise an exception.
>
>**Formula:** This is the formula that will be used to attempt to parse the raw response from the
>vehicle into (usually) numerical data.
>
>**Unit:** The unit of the data (more examples: km/h, percentage, liters, etc.)
>
>**Min:** The minimum value that this PID can return.
>
>**Max:** The maximum value that this PID can return.
>
>**Vehicle Bus(es):** A list of CAN busses that support this PID. If a vehicle is able to recognize
>this PID and return data back, it is recommended that you add the bus of that vehicle to the list.

### Testing The PID
What does it mean for a PID to be supported by a vehicle? It means that if this PID was sent on the
CAN bus of a vehicle, the vehicle would recognize it and return a valid response. So now the
question is, how can we test the PID? On the right hand side of the window, there is a '*Run in
Terminal*' button which allows you to run the PID if your device is online and plugged into your
vehicle. Remember to have your engine running while you execute the command. You are also able
to send a PID on the CAN bus using the [`obd.query`](/core/commands/obd.md#obdquery) and
[`obd.send`](/core/commands/obd.md#obdsend) AutoPi commands.

### Community Sharing
You're also able to share the PID after you've created it and assigned at least one vehicle bus.
Once you save the PID, you can re-open it and a new section will show up on the right-hand side
called '*Community Sharing*'. You need to select (tick) the '*Share with community*' checkbox.


## Creating CAN Messages

Let's try to also create a CAN message in our Library. It is a bit different comparing it to
creating a PID because, as it is mentioned in the [OBD-II introduction guide](../obd-ii/index.md),
PIDs are a simple request sent on the CAN bus, that the vehicle accepts and then returns data
specific for the PID requested. CAN messages, on the other hand, are continuously broadcasted on
the CAN bus and do not require any requests to be made. However, to be able to make any sense of
the CAN messages, we need to specify which bytes within a message corresponds to which data point
from the vehicle.

To start creating a new CAN message, you will need to click the '*+ Create*' button on the top-right
section of the page. From the dropdown that shows up from clicking on the button, select CAN. This
will bring up the following window (again, it is pre-filled for the purposes of this guide):

![Creating a CAN message](/img/cloud/obd_library/library/creating-a-canmsg.jpg)

>**Name:** Short name of the CAN message that's being created.
>
>**Description:** An optional description for this CAN message.
>
>**Header:** The hexadecimal representation of the header that this CAN message is recognized by.
>
>**Bytes:** How long is the CAN message?
>
>**Sender:** The name of the transmitting node of this CAN message - usually defined inside a DBC
>file, but can be any short string.
>
>**CAN Signals:** This is a list of CAN signals that can be found inside a CAN message. Each CAN
>signal has the same form fields:
>
>* **Name:** Short name of the CAN signal.
>
>* **Description:** An optional description of this CAN signal.
>
>* **Endian:** The endianness of this CAN signal - which is the most significant byte. 
>
>* **Sign:** Defines if the CAN signal should be treated as a signed or unsigned number.
>
>* **Start:** Defines the starting bit of the CAN signal.
>
>* **Length:** How long the CAN signal is.
>
>* **Factor:** Used to calculate the real value off of the CAN signal. Formula: `VALUE = (RAW_VALUE * FACTOR) + OFFSET`
>
>* **Offset:** Used to calculate the real value off of the CAN signal.
>
>* **Unit:** The unit of the value returned.
>
>* **Min:** The minimum value possible for this CAN signal.
>
>* **Max:** The maximum value possible for this CAN signal.
>
>* **Receivers:** The name of the receiving node of this CAN message - usually defined inside a DBC
>file, but can be any short string.
>
>**Vehicle bus(es):** A list of CAN busses that support this CAN message. If a vehicle continuously
>writes this CAN message on its CAN bus, it is recommended that you add the bus of that vehicle to
>the list.

### Testing the CAN Message

It is a bit more difficult to test CAN messages. You will need to create CAN Signal Loggers for your
device in order to see if they are able to generate the data you're looking for. Another option you
can try is to use the [`obd.dump`](/core/commands/obd.md#obddump) command to dump all CAN frames
recorded on the CAN bus and compare the frames received to the definitions that you've made - they
should match on the header at least.

### Community Sharing

The process of sharing a CAN message is exactly the same as the process for sharing a PID. After
you assign a bus to the CAN message, you will have the option to share it with the community on the
right-hand side of the Edit CAN Message window. You will need to select (tick) the '*Share with
community* checkbox.


## Importing library items from files
The Library supports importing both CAN messages and signals through DBC files, as well as PIDs through
JSON files. As an example, let's use this simple DBC file:
```
VERSION "1.0"

BO_ 938 FRONT_LEFT: 4 IO
  SG_ LEFT_SEAT_TEMP: 0|8@1+ (1,0) [0|0] "c" ECU1
  SG_ LEFT_BACK_TEMP: 8|16@1+ (1,0) [0|0] "c" ECU1

BO_ 937 FRONT_RIGHT: 4 IO
  SG_ RIGHT_SEAT_TEMP: 0|8@1+ (1,0) [0|0] "c" ECU1
  SG_ RIGHT_BACK_TEMP: 8|16@1+ (1,0) [0|0] "c" ECU1

CM_ SG_ 1 LEFT_SEAT_TEMP "Temperature of the front left seat";
```

### First import
When you first select a file for import, you will be presented with options looking like this:
  ![File options](/img/cloud/obd_library/library/file_options.png) 

Here you can select whether the file's contents are CAN messages & signals or PIDs. You can also set a
namespace, which will prefix all the imported items with the selected Name string. This can help when you need to
manage multiple files, which have conflicting signal or PID names. Once you've set these options, the file will be 
sent for validation. Once that's done, you'll be able to review all the messages and signals that will be imported.
You can also ignore messages and signals, which you'd like to not be imported. For this example, we're ignoring the left
seat's temperature.

  ![Imported and validated messages](/img/cloud/obd_library/library/imported_messages.png) 
  ![Imported and validated signals](/img/cloud/obd_library/library/imported_signals.png) 

### Adding signals to existing messages
Once you've selected what to create and what to ignore, click on the upload button and the messages will be created. If
you now try to import the same file with the same options, you'll see that front right seat, which we imported with all
its signals, is unchanged. Front left, however, is shown as changed, since we ignored one of its signals. Now we have the
option to update the Front Left message by creating the Left Seat Temperature signal.

  ![Library view](/img/cloud/obd_library/library/post_import_messages.png) 
  ![Library view](/img/cloud/obd_library/library/post_import_signals.png) 

### Updating message and signal properties
To update a value, all you need to do is change it in the imported file and import it again with the same options. For this
example, we're changing the unit of the Right Seat Temperature from Celsius to Fahrenheit. 

```
Before: SG_ RIGHT_SEAT_TEMP: 0|8@1+ (1,0) [0|0] "c" ECU1
After:  SG_ RIGHT_SEAT_TEMP: 0|8@1+ (1,0) [0|0] "f" ECU1
```

After uploading the file and validating, the signal shows as changed and the changed property's new and old values can be seen.

  ![Library view](/img/cloud/obd_library/library/updating_a_signal.png) 

:::note
Setting a message's Option to 'Ignore' will force 'Ignore' to all its child signals.
:::

### Deleting signals
You can delete signals by removing them from the DBC file, then importing the file. In this example, we're deleting the Right Seat's
Backrest's Temperature. 
```
Before:
BO_ 937 FRONT_RIGHT: 4 IO
  SG_ RIGHT_SEAT_TEMP: 0|8@1+ (1,0) [0|0] "f" ECU1
  SG_ RIGHT_BACK_TEMP: 8|16@1+ (1,0) [0|0] "c" ECU1

After:
BO_ 937 FRONT_RIGHT: 4 IO
  SG_ RIGHT_SEAT_TEMP: 0|8@1+ (1,0) [0|0] "f" ECU1
```

  ![Library view](/img/cloud/obd_library/library/deleting_a_signal.png) 

### Working with PIDs

Unlike CAN messages and signals, there's no industry standard file format for PIDs. Therefore, there's a custom JSON based format 
that you need to follow. This is an example PID JSON file:

```json
[
	{
		"fields": {
			"type": "PTY",
			"header": "700",
			"mode": "220",
			"code": "0103",
			"bytes": null,
			"frames": null,
			"strict": false,
			"formula": "bytes_to_int(messages[0].data[-3:])",
			"unit": "km",
			"min": null,
			"max": null,
			"datatype": null,
			"parent": null,
			"name": "TractorLighting",
			"description": "Tractor's light emission",
			"hash": "",
			"initial_hash": null,
			"can_extended_address": null,
			"can_flow_control": {
				"filter": {
					"pattern": "708",
					"mask": "7FF"
				},
				"id_pair": {
					"receiver_id": "700",
					"transmitter_id": "708"
				}
			},
			"can_messages": []
		}
	},
	{
		"fields": {
			"type": "PTY",
            ...
        }
	}
]
```

## Legacy importer

  ![Library view](/img/cloud/obd_library/library/import_file_button.png) 

Depending on what version you are using, you might see multiple "Import" buttons in the library. This is
because there are 2 versions of the importer: the new and the legacy. The legacy importer was able to
import CAN messages and signals, but could not handle updates, deleted items or PIDs.

DBC files describe the CAN network traffic of a vehicle. It specifies what modules are within it,
what CAN messages they can send, the messages' signals and details about how to parse them. In this
section we are going to review how you can import these files in your Library, how to keep them up 
to date, how to improve their readability and how you can share them with the rest of the community.

1. Go to **Car Explorer** > **Library** and click on the Import button:
  ![Import button](/img/cloud/obd_library/library/import-button-location.jpg) 
2. Select DBC from the dropdown menu that shows up and select the file from your filesystem.
3. A list of the imported CAN signals will show up in your library.
  ![Library view](/img/cloud/obd_library/library/library_view.png) 

## Adding Descriptions for Better Readability

Some signal names can be very self explanatory. However others might be harder to understand. You
can add descriptions to those messages to make it easier to recognize them in the future or for
other fellow users, if you decide to share those signals with the community.

To add a description for a signal, click on the signal you want to edit. A CAN message editing
window (like the one from the previous section) will pop out. In this window you'll be able to see
the CAN message at the top with all CAN signals associated with it in a list below. The CAN signal
that you clicked on will be already expanded and highlighted in yellow.

![Editing a CAN message](/img/cloud/obd_library/library/editing_a_can_message.png)

Edit the description field of the signal and click Save. You can also associate that CAN message
with a vehicle CAN bus. You should see the CAN signal update with the new description:

![ABS Malfunction example](/img/cloud/obd_library/library/abs_malfunction_example.png)
