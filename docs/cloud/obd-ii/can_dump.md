---
id: create-valid-can-dump
title: Create a Valid Can Dump
---

The following is a guide to obtain a Valid CAN dump.

The first step involves capturing a valid CAN (Controller Area Network) dump from
the vehicle you are working with. This dump contains all the data traffic 
exchanged between various ECUs (Electronic Control Units) within the vehicle. 
It is essential to ensure that the captured data accurately reflects the 
operational state and configuration of the vehicle’s CAN bus.

Tools such as candump or other diagnostic software compatible with the vehicle's 
CAN system are typically used to retrieve this data.

## Set Up a Virtual CAN Interface on the Device:

Next, you need to configure a virtual CAN (vcan) interface on the device where 
the CAN loop will be tested. A virtual CAN allows for emulation of a physical 
CAN interface, enabling testing and simulation without needing actual CAN 
hardware. This step is especially useful during development or in situations 
where physical hardware is not available.

The setup can be done using Linux utilities like ip link to create a virtual CAN 
interface, followed by configuring its bitrate and bringing the interface up.

To set up the interface use the command ip link set vcan0 type vcan bitrate “num”
– Replace num with the desired bitrate value, matching the data in the CAN bus dump.

## Load CAN Dump Data Into Virtual CAN:

After configuring the virtual CAN interface, the CAN dump previously captured 
needs to be loaded into the system. Use canplayer to replay the CAN traffic from 
the dump file over the virtual interface, simulating the behavior of the vehicle's
CAN bus on your device.

Canplayer is a command line tool where canplayer invokes the application
the following are the valid input parameter:

- `-I` followed by the path of your CAN dump
- `-l (num)` num being number of times you want the file repeated `-i` for infinite
- `-t` ignore timestamps
- `-g<ms>` gap in milliseconds, default 1
- `-s<s>` skips gaps in timestamp (s = seconds)
- `-x` disable local loopback of sent CAN frames
- `-v` verbose – print sent CAN frames

