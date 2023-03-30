---
id: core-commands-usbutil
title: Usbutil
---

## `usbutil.check_expected_devices`

Triggers `system/usb/<vendor>/<product>/not_connected` events when specified (must be present) devices
are missing, i.e. not seen for whatever reason when running the `usbutil.devices` command.


----
## `usbutil.devices`

Returns the lsusb bash command result as a list of dictionaries, each dict is a separete device.
An example dict structure is presented below:


- bus: `001`                          # the linux system bus number
device: `001`                       # the linux system device number
name: Linux Foundation 2.0 root hub # the name of the device
product: `0002`                     # the product number (hex) of the device
vendor: 1d6b                        # the vendor number (hex) of the device


----
## `usbutil.devices_changed_trigger`

Triggers `system/usb/<vendor>/<product>/connected` and `system/usb/<vendor>/<product>/disconnected`
events when USB devices are connected or disconnected.

Expects the result to be in the format as `usbutil.devices` return format.


----
## `usbutil.help`

Shows this help information.
