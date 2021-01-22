---
id: log-raw-can-messages
title: Log raw CAN messages
---

It is possible to listen for raw CAN data on the OBD port. There are a couple of
ways that this can be accomplished - a slower python implementation and a faster, C implementation.
In this guide we will explore these two options and show the differences between the two. Later on
we will also explore how you can make sense of this raw data after it has been recorded.

It is important to note that the monitoring tools can only be used as a part of an
[OBD service](../core/services/obd_manager.md) workflow. We won't get into details about how
you can create a service worker in this guide, however we do have the
[Create Service Workers](./create_service_workers.md) guide which you can take a look at
for more details on how to create a worker and setup its workflow.

## Reading raw CAN data

Firstly, we will explore how to read the CAN messages that are visible on the CAN bus. These
messages will be raw, meaning that they will simply be binary data that is structured in a
specific way. Later on we will also explore how we can make sense of this raw CAN data by
transforming it into more readable format using DBC files that can automatically be generated
for your vehicle.

### `obd.monitor`
The first and simplest way to monitor CAN data is with the
[`obd.monitor`](../core/services/core-services-obd-manager#monitor) handler.
This handler will continuously listen on the OBD port looking for any data. This data
will then be transported down the workflow and there you will be able to use the different
hooks to transform the data and finally return the data to the cloud, or save it to a file.

An important note for this is that the `obd.monitor` implementation is very slow, as it is written
in python, while `obd.export`, which we will explore in the next section is much faster, as it is
running a separate process implemented in C. However, `obd.monitor` may be preferred, as it does
allow the device to query for OBD data in between handler executions, while the `obd.export`
handler does not. The image below shows an example setup for an `obd.monitor` worker.

![obd_monitor_worker](../../static/img/guides/log_raw_can_messages/obd_monitor_worker.png)

### `obd.export`
[`obd.export`](../core/services/core-services-obd-manager#export) is basically
`obd.monitor` on steroids. It is much faster than it's python counterpart and doesn't clog up the
AutoPi's resources as much. It starts up a separate process that does the monitoring,
instead of running as a part of the salt-minion process.

This however means that the external process will have to attach to the OBD serial port
(`/dev/serial0`), which means that it won't be possible to use `obd` commands to read CAN data.
This is because the `obd.export` handler needs to be sure to catch all CAN messages and it won't
release the lock on the device.

This handler is also a bit different than other handlers, as it does not pass any meaningful
data down the workflow, instead it saves the CAN messages to external files, which can then be
read by `obd.import`. The files are located in `/opt/autopi/obd/export/protocol_N` where `N` is
the protocol number for your vehicle. In that directory you will be able to see a number of log
files which contain the raw data that has been recorded by the handler. An example setup for a
workflow can be seen below.

![obd_export_worker](../../static/img/guides/log_raw_can_messages/obd_export_worker.png)

### `obd.import`
In order to actually be able to use the recorded data by `obd.export` within the AutoPi Core system,
we need to somehow import it. This is where
[`obd.import`](../core/services/core-services-obd-manager#import) comes in -
it reads the data that was written to the log files by `obd.export` and passes it down the workflow.
It is simply a workflow enabler, meaning that after you read the data, you can transform it in any
way you'd like, execute any triggers and use a returner to save the data on the cloud or a local
file, just like with `obd.monitor`.

![obd_import_worker](../../static/img/guides/log_raw_can_messages/obd_import_worker.png)

## Making sense of raw CAN data

A key converter that can be used in the workflows described above is the
[CAN converter](../core/services/core-services-obd-manager#can). It is able
to read the CAN database file that you have for your vehicle's protocol and transform the binary
data that has been passed to it into a more sensible format. Both `obd.monitor` and `obd.import`
use the CAN converter in the workflows to sanitize the data.

It is important to note however, that the DBC (CAN database) file would only be available if you have
setup CAN loggers for your device. In the [AutoPi Cloud](https://my.autopi.io) navigate to Car
Explorer > Loggers where you'll be able to see all the loggers you currently have. They need to
be of type CAN. There are a few guides that you can take a look at to get them up an running:

1. [How to setup power cycle for an electric vehicle](https://community.autopi.io/t/guide-how-to-setup-power-cycle-for-an-electric-vehicle/1668)

2. [How to import custom DBC files](https://community.autopi.io/t/how-to-import-custom-dbc-files/2091)

