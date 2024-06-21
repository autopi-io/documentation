---
id: can-bus-configuration
title: CAN Bus configuration
---

This page describes what to do if you've tried autodetecting the CAN bus, and this has not worked.
To be more exact, we'll reiterate on how to use the auto-detect feature, how the feature works and
how to do what it does manually, how to check whether the vehicle supports passive CAN bus 
monitoring.

<!-- ## CAN Concepts

### WIP, the same concept on the cloud means a different thing on the device

General concepts:
- Protocol - a numbered set of configurations, which specify a CAN interface, default baudrate, 
extended header flag, data length, data decoding information and others.
- Baudrate - data transmission speed
- Autodetection - a process that is invoked manually or automatically, which helps find the CAN Bus
configuration used by your vehicle

Cloud portal concepts:
- CAN Bus - a collection of configurations including a protocol and baudrate that get translated to
device configurations
- Default bus
- Autodetected bus
- Vehicle

Core concepts:
- Baudrate
- CAN Interface/Channel
- Header Length -->

## Common causes of failures, and how to troubleshoot
Under normal circumstances, the device will boot for the first time and will try to autodetect the
protocol automatically, then send the results back to us, where we create a CAN Bus for your device,
flagged as autodetected.

![Alt text](/img/guides/can_bus_configuration/autodetected_bus.png)

Sometimes, this will not happen. This can be because of multiple reasons:
- The device is in an incorrect state
- Internet connectivity issues
- The vehicle does not support OBD-II
- The vehicle supports OBD-II, but the ECUs are not on
- The vehicle supports OBD-II, the ECUs are on, but they are not active
- The vehicle uses a configuration, which is not checked by the autodetect
- A combination of 2 or more of the above 

### The device is in an incorrect state
Whenever an AutoPi device is powered on, sleep timers are created, which will turn the device off in a few
minutes. Check the status of the LEDs on the side of the device to make sure the device has not gone to sleep.
Both the green and blue LEDs should be lit constant and bright. If the blue LED is breathing (varying in its 
bringtness from dim to bright), it's sleeping. The easiest way to get it to turn back on is to disconnect it
from the OBD-II port, and reconnect. Wait until both LEDs are solid, then move on to further steps.

:::note
You can learn more about the power cycle on the [Power Management Documentation](/core/power_management/index.md).
:::

### Internet connectivity issues
These can make it seem like the autodetect is not working. Unless you're connecting to the device through 
its Wireless Access Point and running commands from its local terminal, you should test the connectivity
before checking for any of the further issues. Try running the following command from the terminal in the
cloud portal: `test.ping`. Note that just because you see some data in the dashboard, doesn't mean that 
there's a good enough connection for commands to be received by the device, and for it to be able to send
the command results back. If you get a response that looks something like the screenshot below, you may
move on further. Otherwise, check out the [4G Troubleshooting Guide](/guides/4g_internet_setup_troubleshooting.md).

![Alt text](/img/guides/can_bus_configuration/test_true.png)

### The vehicle supports OBD-II, but the ECUs are not running
This is the most probable explanation. Most ECUs will not be running while the vehicle is off, therefore,
if you're trying to run the autodetect with the engine turned off, you're almost sure to not succeed.
The fix for this is to turn the ignition on.

### The vehicle does not support OBD-II
This is the simplest explination of why autodetect is not working. In the section 
"[How Bus Autodetection Works](#how-bus-autodetection-works)", we explain that the feature relies on
responses to a specific OBD-II query that should be supported by all OBD-II compliant vehicles.

If this seems to be the case, all is not lost yet. It is likely that the vehicle supports another protocol
like J1939, UDS or something proprietary to that manufacturer. Check out the section
on non-OBD-II queries (COMING SOON) and [Passive CAN Traffic](#passive-can-traffic).

### The vehicle supports OBD-II, the ECUs are on, but they are not active
This is the most complicated case. There's multiple ways this issue can present itself:
1. The bus is autodetected, but the vehicle is periodically not responding to queries that have worked before
2. Manufacturer-made OBD-II scanners work, however, the AutoPi can not read the same data
3. The manufacturer claims to support OBD-II, however, whichever configuration you try, no data can be read
4. Others not mentioned

In this case, there's a few things you can try:
- If you've got an OBD-II adapter that's able to read data, you can connect both the adapter and the AutoPi to
the vehicle's bus and see what the adapter does. One common case is that it sends some CAN frames, 
which activate the ECUs and they start to respond afterwards. You can then set up workflows that send these same
frames at startup to active the ECUs. It can also be the case that the vehicle does not support OBD-II and 
this can help you find out what protocol it is actually using.
- Browse the internet to see if anyone has already tried reverse engineering the CAN bus on your vehicle. Sometimes,
what works on one car from the manufacturer will work for another.
- Contact the manufacturer to find out how the ECUs expect to be communicated with.
- Try and reverse engineer the bus yourself. This can be a tedious and time consuming task. Depending on your 
preferred workflow, you may prefer to [ssh into the device](/guides/how_to_ssh_to_your_device.mdx) and use the Linux 
[can-utils command line utility](https://manpages.debian.org/testing/can-utils/index.html). The most notable commands
in this are *candump* and *cansend*. To change the configuration of the CAN connection, you can use the 
[socketcan.up and socketcan.down](/core/commands/socketcan.md) commands. 

### The vehicle supports OBD-II, but the vehicle uses a configuration, which is not checked by the autodetect
If you take a look at the [how bus autodetection works](#passive-can-traffic) section, you'll learn that the
device checks a pre-defined list of configurations. It's possible that your vehicle uses one that is not in this list.
Check the [Finding configuration manually](#finding-configuration-manually) section to see further steps.

## How bus autodetection works 
The easiest way to run autodetection is through the cloud portal from the Vehicles Editor. This will do 2 things.
First it will try to find the correct configuration for CAN connectivity (see 
[Finding Configuration Manually](#finding-configuration-manually) for an explanation). Second, it will try to find
the supported OBD-2 PIDs and create them in your Library.

### Automatic autodetection flow

When first installing a device, an autodetect will be run automatically for cars, which would normally 
support the OBD-II protocol. Expressed programmatically, this set of conditions must be met for automatic 
bus autodetection to happen:

- The device is associated to a vehicle
- The vehicle is of "Internal Combustion Engine" (ICE) type
- The vehicle has a car model
- The vehicle does not already have an auto-detected bus, which supports one or more standard OBD-II PIDs

If all these conditions are met, the device will follow this flow when booting:
1. The device downloads configurations from our backend
    1. The backend checks the conditions listed above
    1. The backend adds an `obd.commands` command to the "startup modules" in the configuration
1. The device executes the startup modules, one of which is the `obd.commands` command
1. `obd.commands` runs a `0100` PID query with a predefined list of configurations
1. If none of the configurations returns a result, raise an `Unable to autodetect OBD protocol` error
1. If we see a response, run the rest of the `obd.commands` functionality which queries for supported PIDs,
using the just found configuration.  
1. The device sets its currently used protocol to the autodetected protocol, and updates its internal 
'supported PID database'
1. The device returns the protocol and supported commands to the backend through the cloud returner
1. The backend uses this to create a bus for the device's currently assigned vehicle, creates OBD-II 
PIDs in your library and adds the most common ones to the bus

### Protcol autodetection flow
When autodetection is invoked, it will first try to find the correct interface and baudrate, then the 
set of supported PIDs. To find the interface and baudrate, the device goes through the following flow:
1. Destroy the current connection if one exists
2. Set up a new connection with a set of configurations from a predefined list.
3. Send an OBD-II `0100` request
4. If we don't get a response, go back to step 1 and try again until we either see a response, or we run 
out of configurations to try.
5. If we get a response, that's the valid protol. 

## Finding configuration manually
Protocol determines which bus (HSCAN or MSCAN) and what bitrate is being used:
- 31 - HSCAN (can0), 11-bit
- 32 - HSCAN (can0), 29-bit
- 51 - MSCAN (can1), 11-bit
- 52 - MSCAN (can1), 29-bit

The most common baudrates are 125000, 250000 and 500000.

Go through all combinations of these: protocol 31 and baudrate 125000, protocol 31 and baudrate 250000, etc. 
Once you find a combination that works, note down the protocol number, interface, the header length and the 
baudrate. You can then create the bus in the Cloud Portal, and set up loggers for it. 

Note that if you run the `obd.protocol` command, you will see many more than the 4 protocols listed above. 
Some of these are legacy and  are no longer supported by the hardware. However, some add message decoding 
information to the queries, which can have a difference whether a response is received or not. It's worth 
trying some of these if the 4 listed above do not work.

### OBD-II
If you have reason to think the vehicle should support OBD-II, but autodetect is unable to find the protocol,
you may try and find it manually. What this essentially entails is trying to retrieve the OBD-II commands PID
(`0100`) from the vehicle with the configurations listed above. This can be one with the `obd.commands` query:

```bash
$ obd.commands protocol=32 baudrate=500000
```
```yaml
# Configuration invalid
: error: No data received when trying to verify connectivity of protocol '<class 'can_obd_conn.HSC_ISO_11898_11bit_500k'>'

# Configuration valid
_stamp: '2000-01-01T10:10:10.100000'
protocol:
  autodetected: false
  baudrate: 500000
  ecus:                   
  - 2
  id: '32'
  name: HS CAN (ISO 11898, 29bit, 500kbps, var DLC)
supported:                                            
  ABSOLUTE_LOAD: Absolute load value (PID 0x0143)
  ACCELERATOR_POS_D: Accelerator pedal position D (PID 0x0149)
  ...
```


### Passive CAN traffic
:::important
From Core sofware version 1.24.0, the obd.monitor command will show both 11-bit header and 29-bit header messages, no
matter if the selected protocol is 11-bit or 29-bit. When setting up CAN Signal loggers, the bus' default protocol must
be of the same header length as the messages being received. 
:::

Many vehicles nowadays also have ECUs broadcasting data on the CAN bus. To find out if this is the case, you
can follow the same idea as with OBD-II, except you're trying to listen to any data on the bus:



```bash
$ obd.monitor duration=5 verify=False protocol=32 baudrate=500000
```

```yaml
# Configuration invalid:
: error: No data received from vehicle within timeout

# Configuration valid:
_stamp: '2000-01-01T10:10:15.100000'
_type: raw
values:
- _stamp: '2000-01-01T10:10:10.100000'
  value: 17fc007b03918511aabbccdd
- _stamp: '2000-01-01T10:10:11.100000'
  value: 07fc007b127abbfd12412381
- ...
```


<!-- ## Stage 5: Acceptance; AKA: Giving Up
The notion of "giving up" often carries a negative connotation, frequently associated with failure, defeat, or a lack of willpower. However, there's an underrated glory in giving up when it leads to a reevaluation of priorities, the lifting of unnecessary burdens, or the freeing up of energy and resources for more meaningful pursuits. Sometimes, giving up is a courageous act of self-awareness, acknowledging that a path we've started down isn't serving us—or anyone else—well. In such cases, the decision to step back can lead to new opportunities, renewed focus, and the kind of growth that stubborn persistence might never have afforded us. -->