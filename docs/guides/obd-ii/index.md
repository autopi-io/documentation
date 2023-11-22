---
id: obd-ii-intro
title: Introduction
---

:::caution
Working with the CAN bus is on your own risk. Playback and sending commands to the vehicle can be
used to control functions in the vehicle affecting the behavior of the vehicle. We recommend that
you **NEVER** do testing on a vehicle in motion and that you have the parking brake enabled while you
test.
:::


Most, if not all, vehicles have an OBD-II port. It is a port that allows technicians to communicate
with the vehicle, diagnose problems and so on. Using this port with the AutoPi you are able to get
real time data from the vehicle and display that data on your Cloud dashboard. In this guide, we
will explore the basics of OBD-II communication: we will explore the two main ways vehicles
communicate on their CAN bus and in further guides we will talk about how they can be used to
log data (create the so-called loggers) through an AutoPi device.

## PIDs (Parameter IDs)
Parameter IDs or PIDs are specific codes that can be used to request data from the vehicle. An
external device (usually known as external test equipment device) can send a PID request on the CAN
bus and an ECU (Electronic Control Unit) in the vehicle will send a PID response containing the
data that was requested in hexadecimal format. Here is an example PID request:

```
7DF # 02 01 0C 00 00 00 00 00
```

This PID, when sent to the CAN bus of a vehicle that implements the OBD-II standard, will request
the current RPM value (Revolutions Per Minute). We won't spend time trying to completely understand
what this PID means, that is done in one of the following guides.

However, the general structure of a PID is the following. There is a header that defines who sent
the PID. The hashtag symbol (#) separates the header from the payload. The payload holds data that
is to be interpreted by the receiver of this PID request.

:::tip
The OBD-II standard is followed strictly only by vehicles that have an internal combustion engine
(ICE vehicles). Some ICE vehicles might have some extended functionality on top of the standard
defaults.

On the other hand, hybrid and electric vehicles don't always follow that standard. In fact, in our
experience those types of vehicles have an entirely different set of PIDs available. This means
that it is much more difficult to find out how to communicate on the CAN bus of a non-ICE vehicle
as they are usually different than what the OBD-II standard defines.
:::

After the PID has been sent on the CAN bus, an ECU on the vehicle will see the request and respond
with another PID:

```
# request, same as above
7DF # 02 01 0C 00 00 00 00 00

# response from ECU
7E8 # 04 41 0C 0F A0 00 00 00
```

The response will hold the information that was requested - the current RPM value. If we take a
look at the 4th and 5th bytes of the response body (`0F A0`), convert them to decimal values and
follow the formula `VALUE / 4` we will find out that the current RPM is 1000.

Each PID has to be interpreted differently. Some PIDs have formulas, others just need to be
converted from hex form to decimal. Now, let's move on to explaining the other way vehicles
communicate on their CAN busses.


## CAN Messages and CAN Signals
CAN messages look very similar to how PIDs are represented. They also have a header (also known as
identifier) and a payload (body) separated by a hash sign. However, the difference between CAN
messages and PIDs is that CAN messages are continuously sent on the CAN bus of a vehicle without
the need to make a specific request.

The body of a CAN message is constructed from the so-called CAN signals. A simple way to understand
CAN signals is by looking at an example CAN message:

```
256 # 94 19 00 30 00 92 00 C7
```

As you can see, it is not much different than the PID presented above. However, this is a CAN
message and so the structure is different - for example, the first byte of a PID usually tells the
receiver how long the response body is, while for CAN messages that is not the case. Instead, there
is a DBC file, usually created by the manufacturers of the vehicle, that defines the structure of
CAN messages and CAN signals. We will take a look at those in a different guide.


## Loggers for Your Device

With your AutoPi device you are able to setup loggers that will communicate on the CAN bus and extract data for you to view on demand in the Cloud's dashboard.
You can setup loggers with PIDs or with CAN messages, depending on what your vehicle's type of communication is.

In the following couple of guides we will explore how you can create [PID Loggers](/guides/obd-ii/create_pid_loggers.md)
and [CAN Signal Loggers](/guides/obd-ii/create_can_signal_loggers.md).


:::note
Since the introduction of the AutoPi Mini, we have introduced a new type of loggers for the Mini devices. A guide to setup loggers on the Autopi Mini can be accessed through [Mini Loggers](/guides/obd-ii/create_mini_loggers.md)
:::


## Conclusion
To finalize this introduction, we now know there are two major types of communication that can
happen on a CAN bus - there's the PIDs and CAN messages. PIDs are less chatty on the CAN bus, they follow the
request-response model. The ECUs in a vehicle will only report data if they are asked about it.

On the other hand, we also have vehicles that communicate with CAN messages. The ECUs in those
types of vehicles will continuously communicate on the CAN bus, reporting the latest available data.
This makes the CAN bus of vehicles that communicate in this manner much more chatty, usually
dumping large amounts of data at a time.
