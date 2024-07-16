---
id: create-pid-loggers
title: Create PID Loggers
---

As explained in the [introduction](index.md), PIDs are used to request and receive
data from the vehicle. It can be real-time data, such as RPM, Speed, Fuel Level and so on, but it
can also be in the form of Diagnostic Trouble Codes (DTCs) and other troubleshooting data useful to
vehicle technicians.

In this guide, we will take a deeper look at how PIDs are structured and will also create a custom
PID Logger for our AutoPi device.


## Dissecting a PID


#### Request
Let's take a deeper look at the PID request that was presented in the introduction.

```
# PID request
7DF # 02 01 0C 00 00 00 00 00
```

Let's start with the general structure of the message. Firstly, we have the header (`7DF`). The
header is a CAN identifier which defines who is sending the message and if it is a request or a
response. In this case, `7DF` is the header used by external test equipment to make requests towards
ECUs in the vehicle. The hashtag symbol (#) simply separates the header from the body of the
request.

Now, let's shift our focus on the body of the PID. The first byte of the body shows the length
(in bytes) of the rest of the body. In this case, we only have two relevant bytes, so the length is
`02`. The next byte defines which diagnostic service should be queried, while the third byte defines
exactly which value is being queried. Mode `01` is the current data diagnostic service, while `0C`
queries for the RPM value stored in that diagnostic service - i.e. the current value.

The rest of the body isn't going to be read by the ECU, so it is left empty.


#### Response
The response from the ECU will look very similar with a few differences:

```
# response from ECU
7E8 # 04 41 0C 0F A0 00 00 00
```

In this case the header is `7E8` which is the header used when ECUs send responses towards external
test equipments (i.e. requests made with the `7DF` header). Again, the header is separated from the
body with a hash sign and the first byte of the body defines the length of the data.

However, the second byte changes a bit - it is the same as the query's second byte, except that
0x40 is added to the value. The value after that is identical to the code sent with the request
(`0C` for RPM), while the rest of the body is the actual value returned. Usually, all you need to
do is to transform the hexadecimal value to a decimal value, but that's not always the case.
Sometimes there's extra calculations that need to be done in order to get the value, for example
in this case - the total value needs to be divided by 4, making the result:

```
0F A0 in hex is 4000 in decimal
4000 / 4 = 1000 RPM
```


### Requesting PIDs
You can send a PID request on the CAN bus manually using one of two commands:
[`obd.send`](/core/commands/obd.md#obdsend) or [`obd.query`](/core/commands/obd.md#obdquery). Here
are examples of how to use both of them to send the aforementioned PID.

```
$ obd.query MY_RPM header=7DF mode=01 pid=0C

$ obd.send '7DF#010C' auto_format=True expect_response=True
```

The `obd.query` command is relatively simple - you need to provide some arbitrary name for the PID
(*MY_RPM*). The `header` argument is the header of the PID. `mode` is the diagnostic service that's
being queried and the `pid` argument is the exact value you want to query. If you compare the
command to what was presented above, you will find many of the bytes are overlapping.

The `obd.send` command does exactly the same, but in a different format. You must specify the full
PID to be sent in a string. Note that the length of the body is omitted. If the `auto_format`
argument is set to `True` it will automatically calculate the length byte and prepend it to the
body. You can also skip this argument and add the length byte and empty bytes yourself. The
`expect_response` argument will make sure that you receive a response back from the vehicle, if one
was provided. If you skip adding the `expect_response` argument, you will only send the PID on the
CAN bus.


## Creating a PID Logger
Let's now create a PID Logger for your vehicle. Firstly, we will create the PID itself, so that it
is present in your Library. Next, we will use the PID from the Library to create a PID for your
AutoPi device.


### Creating the PID
Let's create the RPM PID that we've examined in the previous section. Firstly, we will need to open
the OBD Library > My Library page. On that page, you will see a '+ Create' button. One
of the options should be PID - select that one. The following pop-out window should show up:

![Create a PID window](/img/cloud/obd_ii/create_pid_loggers/create_pid_window.jpg)

Let's go through the different fields that are available in this view:

**Name**: This is an arbitrary name you can give to your PID. This name will be used to create
data points for this PID logger, hence will be the name you use to create widgets on your Dashboard.

**Description**: Some description for your own readability.

**Mode and Code**: The mode (diagnostic service) and code together form the PID.

**Header**: This defines the header of the PID.

**Bytes**: This defines the expected length of the PID response.

**Enhanced PID**: This menu allows you to set some more specific details about how the PID should
be sent on the CAN bus and how the response should be found. See [Enhanced PID](#enhanced-pid) below.

**Formula**: This is where any parsing formulas can be inputted. Any valid python code can be
written in this field and will be evaluated during the execution of a PID Logger.

**Unit**: You can specify the measurement units in this field.

**Min and Max**: These two fields define what are the minimum and maximum values that this PID can
produce.

**Vehicle bus(es)**: In this dropdown menu, you are able to select the CAN busses on which this PID
is valid.

What means for a PID to be valid in this case? It means that if this PID was sent on the CAN bus of
a vehicle, the vehicle would recognize it and return a valid response. So now the question is, how
can we test the PID? On the right hand side of the window, there is a "Run in Terminal" button which
allows you to run the PID if your device is online and plugged into your vehicle. Remember to have
your engine running while you execute the command.

Once you've confirmed that the PID returns valid data that you can use, you can click the Save
button and move on to the next section.

### Enhanced PID

![Enhanced PID drowdown](/img/cloud/obd_ii/create_pid_loggers/enhanced_pid_dropdown.png)

**Frames**: how many frames the message is expected to consist of

**Strict**: enforce frame and byte count

**CAN Extended Address**: CAN Extended Address byte. Note that this does not refer to 29-bit headers, 
but to an ELM327 specification. 

Before working with the CAN Flow Control Enhanced PID settings, it is highly recommended that you understand how the 
`can_flow_control_` prefixed parameters work on the obd.query command. This is explained in
[non-OBD2 queries](using_the_can_bus_commands.mdx#non-obd2-queries). The Enhanced PID
section essentially allows you to enrich your loggers with the same functionality. The filter and
mask correspond to the `can_flow_control_filter` parameter's 2 comma seperated values in that order. The
same applies to the Transmitter ID and Receiver ID.

### Creating the Logger
Now that we have a PID registered in our library, we can finally add a logger to our device which
will report data. Remember that in order to be able to register a PID as a logger on the device,
the device's vehicle bus needs to be added to the PID (look at vehicle busses in the last section).

:::tip
If you're using your AutoPi with an internal combustion engine vehicle, you should see some default
loggers setup for you already.
:::

Open up the Device > Loggers page. You will see a page with a '+ Create' button on the
right-hand side. Click on that button and select the PID option. A new window should show up that
looks like the following screenshot:

![Create PID Logger Window](/img/cloud/obd_ii/create_pid_loggers/create_pid_logger_window.jpg)

Let's look through the fields available:

**PID**: This is the PID that you would like to use. Select it from the dropdown menu. If the PID
you want to assign doesn't appear in the list, remember that you need to add your vehicle's bus
to the supported vehicle busses when editing the PID itself.

**Interval**: How often should the PID be queried (in seconds)?

**Advanced**: If you are familiar with [AutoPi services](index.md), you might
recognize these options - the advanced options are going to be set on the pid_logger worker
responsible for querying the CAN bus.
  - **Converter**: The converter that should be used to convert the response from the PID Logger.
  - **Filter**: The filter that should be used to identify if the response should be filtered out.
  Default is `alternating_readout` which filters out consecutive repeating values.
  - **Trigger**: The trigger function to be used if any events should be triggered based on this
  PID Logger. Default for RPM is `rpm_engine_event`.
  - **Returner**: Which returner should be used to store the data.

Once you save the PID Logger, you will see it appear in the Loggers page. Once the settings have
been synchronized to your device, your device will start sending PID requests on the CAN bus using
the provided parameters and you should start receiving data.

If for some reason, you aren't getting any data back from the logger, you can take a look at the
log files for some clues about what's going wrong. Take a look [here](/getting_started/developer_guides/autopi_logs.md) for
more information on how to view those logs.

You can also take a look at the obd_manager workers(Device > Services > obd_manager > Workers).
There, you can notice that a new worker was created: pid_logger_10sec. If you view that worker
you'll see that the parameters setup for the PID are also available there. We discourage you to
make changes directly on the worker, as the worker is auto-generated based on what parameters are
provided to the PID and the PID Logger. Instead, make the necessary changes on the PID and PID
Logger.


## Conclusion
In this guide we talked more in-depth about PIDs and PID Loggers. We setup a custom PID that was
then used to create a PID Logger and got a very small insight into the automated processes that
exist in the AutoPi ecosystem.

If you need some help with setting a logger up, feel free to reach out to us by writing us a mail
to support@autopi.io\. We also are very happy to receive any feedback, so don't hesitate to let us
know your thoughts.
