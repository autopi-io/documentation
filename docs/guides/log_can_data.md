---
id: log-can-data
title: Log all CAN data from your vehicle
---

It is possible to listen for raw CAN data on the OBD port without having to set up any Loggers
which would convert that raw data into values that are human readable. There are a couple of
ways that this can be accomplished - a slower python implementation and a faster, C implementation.
In this guide we will explore those two options and show the differences between the two. Later on
we will also explore how you can make sense of this raw data after it has been recorded.

It is important to note that the way those monitoring tools are used is as a part of a
[OBD service](../core/services/obd_manager.md) workflow. We won't get into details about how
you can create a service worker in this guide, however we do have the
[Create Service Workers](./create_service_workers.md) guide which you can take a look at
for more details on how to create a worker and setup its workflow.

### `obd.monitor`
The first and simplest way to monitor CAN data is with the
[`obd.monitor`](https://docs.autopi.io/core/services/core-services-obd-manager#monitor) handler.
The `monitor` handler will continuously listen on the OBD port listening for any data. This data
will then be transferred down on the workflow and there you will be able to use the different
hooks to transform the data and finally return the data to the cloud, or save it to a file.

An important note for this is that the `obd.monitor` implementation is very slow, as it is written
in python, while `obd.export`, which we will explore in the next section is much faster, as it is
running a separate process implemented in C. However, `obd.monitor` may be preferred, as it does
allow the device to occasionaly query for OBD data while the CAN bus is being monitored, while the
`obd.export` handler does not.

### CAN Converter
While `obd.monitor` only records the raw data and passes it down the workflow, one of the hooks
that can be setup for a workflow is a converter. The OBD service has a converter called
[`obd.can`](https://docs.autopi.io/core/services/core-services-obd-manager#can). This converter
will take a look at the CAN database file that you have for your vehicle's protocol and transform
the data that it can and pass that data down the rest of the workflow. This can be very useful
to directly have the data transformed into human readable format before getting it to the returner.

### `obd.export`
[`obd.export`](https://docs.autopi.io/core/services/core-services-obd-manager#export) is basically
`obd.monitor` on steroids. It is much faster than it's python counterpart and doesn't clog up the
AutoPi's resources as much. It starts up a separate process that does the monitoring, instead of running as a part of the salt-minion process.

This however means that the external process will have to attach to the OBD serial port
(`/dev/serial0`), which means that the possibility to use any `obd` command will be removed.
This is because the `obd.export` handler needs to be sure to catch all CAN messages.

This handler is also a bit different than other handlers, as it does not pass any meaningful
data down the workflow, instead it saves the CAN messages to external files, which can then be
imported by `obd.import`. The files are located in `/opt/autopi/obd/export/protocol_N` where `N` is
the protocol number for your vehicle. In that directory you will be able to see a number of log
files which contain the raw data that has been recorded.

### `obd.import`
After recording the data through `obd.export`, we would sometimes need to transform that data into
more sensible, readable values. This can be done with the
[`obd.import`](https://docs.autopi.io/core/services/core-services-obd-manager#import) handler.
This handler will read out the log files in the directory where `obd.export` has saved them to and
with the help of a DBC file stored for your vehicle's protocol try to translate it into
sensible data.