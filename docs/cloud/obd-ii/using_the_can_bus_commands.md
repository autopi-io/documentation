---
id: using-the-can-bus-commands
title: Using the CAN Bus Commands
supportedDevices: ['cm4']
---
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

:::caution
Working with the [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) bus is on your own risk. Playback and sending commands to the vehicle can be
used to control functions in the vehicle affecting the behavior of the vehicle. We recommend that
you NEVER do testing on a vehicle in motion and that you have the parking brake enabled while you
test.
:::


In this guide, we will explore how you can communicate and interact with your vehicle's [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) bus.
Typically, there are two types of [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) busses.

One type responds to requests for data, that is to say, it almost acts like an HTTP server - it
receives a request for a specific data point (let's say speed or RPM) and it sends the requested
data back. This type of [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) bus is usually handled with PIDs.

The second type sends all the vehicle's data on the [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) bus. This means that there is going to be
large amounts of data being streamed. We call this type of data [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) Messages. Within those [CAN](https://www.autopi.io/hardware/autopi-canfd-pro)
messages are the so-called [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) signals. Each signal usually represents a specific data point, like
speed or RPM.

##  Sending PID's

Let's start off with the [`obd.query`](/core/commands/core-commands-obd/#obdquery) command. This command is
used to query the first type of [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) busses. Let's take a look at an example:

```console
obd.query test mode=01 pid=0C
```

:::note
You may need to add the ``force=True`` parameter to make sure the ECU in the vehicle accepts the
command. 
:::

This command can be run from [my.autopi.io](https:/my.autopi.io) or
[local.autopi.io](http://local.auotpi.io)'s web consoles. Let's try to explain each element of the
command. Firstly, `obd.query` - that is simply the command that we're attempting to execute. Next is
`test`. This is the name that the PID will use. It makes no difference to the comand's execution
what the name is going to be, but if you end up setting up a logger, the name will be used to save
that data on your account, so you can later reference it using the name to create a widget.

Next, there is the `mode=01` and `pid=0C` pieces of the puzzle. These are the specifications of
which data point you'd like to query for. In this case, we are asking the ECU of the vehicle to
respond with the current RPM. You can see a full list of standard PID's
[here](https://en.wikipedia.org/wiki/OBD-II_PIDs). Your vehicle may be able to support more or less
PID's than shown on Wikipedia. 

:::tip
If you'd like to run this command directly
from the device (through [SSH](/developer_guides/how_to_ssh_to_your_device.mdx) or similar), you will need to
prepend the `autopi` keyword, like so:

```console
autopi obd.query test mode=01 pid=0C
```
:::

## The [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) Interface
The CAN interface is somewhat different than just sending standard PID's. It relies more on
parcing the full data stream on the [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) bus. This is far more advanced, but it also opens up to a
whole new level of fun. 

### Setting the Protocol

The [AutoPi](https://www.autopi.io) is able to support a wide range of protocols. When you insert it into your vehicle it
will try to autodetect the protocol used by the vehicle. It is not always going to be the case that
the same protocol is used for all [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) traffic. In fact, [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) traffic may flow on more than one
protocol in your vehicle. Switching the protocol on the [AutoPi](https://www.autopi.io) makes it listen for traffic on
different electrical pins. You can check the current protocol settings using this command:

```
obd.protocol
```

This will give you a list of all the protocols you can set. Changing the protocol can be done with
this command:

```
obd.protocol set=<num>
```

Where `<num>` is the protocol number.

### Dumping/Reading Data From the [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) Bus

The new interface opens up for dumping data from the [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) bus on the protocol selected. This can be
done using the [`obd.dump`](/core/commands/core-commands-obd/#obddump) command. Using the command is very easy:

```
obd.dump duration=5
```

Optional parameters:
* `duration=<seconds>`: How many seconds to record data. Default is `2` seconds.
* `file=<path>`: Write data to a file instead of displaying it on the screen.

This will dump a list of messages recorded within 5 seconds of starting the execution of the
command. Those messages might not make much sense at first glance, but that's okay. Usually, DBC
files are used to parse those messages into human readable data.

### Playback of a Recorded File

A file recorded with the ``obd.dump`` command can be played/replayed to the vehicle using the
[`obd.play`](/core/commands/core-commands-obd/#obdplay) command. Here's an example usage:

```
obd.play file=<path>
```

The will playback the entire file on the [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) bus. 

Optional parameters:
* `slice=<T|B>`: Slice the list of messages before sending on the [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) bus. Based one the divide
  and conquer algorithm. Multiple slice characters can be specified in continuation of each other.
  * `T`: Top half of remaining result.
  * `B`: Bottom half of remaining result.
* `filter=<expression>`: Filter out messages before sending on the [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) bus. Multiple filters can
  be specified if separated using comma characters.
  * `+[id][#][data]`: Include only messages matching string.
  * `-[id][#][data]`: Exclude messages matching string.
  * `+duplicate`: Include only messages where duplicates exist.
  * `-duplicate`: Exclude messages where duplicates exist.
  * `+mutate`: Include only messages where data mutates.
  * `-mutate`: Exclude messages where data mutates.
* `group=<id|msg>`: How to group the result of sent messages. This only affects the display
  values returned from this command. Default is `id`.
* `test=<true|false>`: Run command in test-only (dry-run) mode. No data will be sent on [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) bus.
  Default is `false`.

All the filter parameters can be used to find the specific commands that you are seeking. With
filters you can remove data that you know is not relevant for finding your specific command (like
data that appears a lot). With the slice parameter you can use the "divide and conquer" technique
to find the specific command. 

### Sending a Single Message

The `obd.dump` and the `obd.play` commands is typically used for finding a single specific
command you want to send to the car. This can be lock/unlock or something else controlling your
vehicle. 

When you have the specific command, you can send it directly using the
[`obd.send`](/core/commands/core-commands-obd/#obdsend) command. Here's an example:

```
obd.send 2101#280000000003E800 expect_response=True auto_format=True
```

The first part before the # is the ECU number (the header) and the last part is the data payload.
You may need to remove the `expect_response` if the ECU doesn't respond on the message you've
send.

### Non-OBD2 Queries
Sometimes a vehicle supports non-OBD-2 queries. An example of this is manufacturer proprietary
protocols. When this is the case, you need to enrich the queries with [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) Flow Control parameters.

Let's look at an example of a proprietary query, where the request data is `1AA # 02 00 01 00 00 00 00 00`, 
and the response is `2AA # 02 XX XX 00 00 00 00 00`, where the `XX` bytes are the data bytes. For 
the sake of having the example complete, let's assume that this queries for the speed in kph. If 
we try to do this query as we might with any other OBD-2 PID, we won't get a response. This is 
because the device does not know how the message looks like. This might seem pointless if these 
request-response messages are the only traffic on the [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) bus, however, imagine if there are hundreads
of [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) frames being sent on the bus every second. How is the device to know which [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) frame is the
response? We need to specify this manually.  

If you take a look at the [obd.query](/core/commands/core-commands-obd/#obdquery) command, you'll notice several
arguments dedicated to can flow control. The 2 relevant ones are **`can_flow_control_filter`** and
**`can_flow_control_id_pair`**. 

**`can_flow_control_filter`** - filters out all non-query related can frames from the traffic. Although you
might get an expected response without specifying this parameter, you should still add it. The format for
it is `can_flow_control_filter=<Pattern>,<Mask>`. In the current example, that would look like this:
`can_flow_control_filter=2AA,7FF`.

**`can_flow_control_id_pair`** - pairs the query request header (Transmitter ID) to the response header (Receiver ID)
in format `can_flow_control_id_pair=<Transmitter ID>,<Receiver ID>`. In this example, it would be: `can_flow_control_id_pair=1AA,2AA`.

All this taken into account, the command would look like this:
```
$ obd.query PROPRIETARY_SPEED header=1AA mode=00 pid=01 can_flow_control_filter=2AA,7FF can_flow_control_id_pair=1AA,2AA force=True
_stamp: '2023-08-28T12:22:31.253543'
_type: proprietary_speed
value: 2aa0200430000000000
```

Next, we'll need to extract the speed data with a formula. In this case, all the data bytes correspond to
the data we're looking for, so we can use the simple formula of `bytes_to_int(message.data)`:

```
$ obd.query PROPRIETARY_SPEED header=1AA mode=00 pid=01 can_flow_control_filter=2AA,7FF can_flow_control_id_pair=1AA,2AA force=True formula='bytes_to_int(message.data)'
_stamp: '2023-08-28T12:22:35.052518'
_type: proprietary_speed
value: 67
```

:::tip
There are a few quirks to keep in mind when working with these and with [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) bus in general:
- As long as the vehicle's bus is autodetected, the `obd.query` command will try to verify that the
protocol is still valid by sending a known valid OBD-2 message onto the bus and waiting for a reply. If
the vehicle does not support standard OBD-2, this will cause the command to fail. To prevent this, either
ensure the vehicle supports OBD-2, or create a new bus, which does not have the 'autodetected' flag.
- The selected protocol's header length must match the header length of the sent/received messages. For
example, you can not specify `protocol=7`, which has a 29-bit header length, and then query for an 11-bit
message. You will not get the expected result. Keep in mind that there will always be a protocol selected,
even when one is not specified in the command. When the command is being run through the logger, this will
be the `default` protocol.
:::

:::note
For those closely familiar with [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) flow control, it might seem confusing that these parameters have
the can\_flow\_control\_ prefix, as [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) flow control usually refers to multi-frame messages. The naming is
related to how older versions of the [AutoPi](https://www.autopi.io) communicated on the [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) bus.
:::

## Using the [Cloud](https://www.autopi.io/software-platform/cloud-management) [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) Analyzer
All the above commands are how the interface to the vehicle works. We have combined all of this in
an interactive [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) Analyzer, which is accessible from the [AutoPi](https://www.autopi.io) [Cloud](https://www.autopi.io/software-platform/cloud-management) in
Device > [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) Analyzer. If you don't see that menu link, you need to make sure that you've
installed the [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) Analyzer add-on from the Add-ons page.

The [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) Analyzer makes working with your car much simpler. To find your specific command follow
these steps:

1. Configure your [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) Bus interface. On the account page under "Vehicles" you can autodetect the
most common [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) Bus. If you need to work with a special [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) bus, make sure you have the right baud
rate configured.

2. Select the Bus you want to use and press record. The device will make a "beep" sound when the
recording begins and another one when the recording ends. Make sure that the [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) command you want
to record is happening between the two sounds (like door unlock or window control).

3. The recording is now stored on the device and you can play it back immediately using the [CAN](https://www.autopi.io/hardware/autopi-canfd-pro)
player on the right-hand side of the screen.

4. You will see that a lot of data is returned from the bus, so to find the specific command for
your function, we recommend using the filters on the right-hand side. Typically, a lot of the data
is repetetive, so you can start out by removing all the duplicates.

5. With the filters, narrow down the results to as few as possible. Then you can replay the
commands one by one and see if you can find the command controlling the function you are looking
for.

6. When you have found your command you can always resend it by using the `obd.send` command
described above.

