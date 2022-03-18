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


----
## `usbutil.devices_changed_trigger`

Triggers `system/usb/<vendor>/<product>/connected` and `system/usb/<vendor>/<product>/disconnected`
events when USB devices are connected or disconnected.

Expects the result to be in the format as `usbutil.devices` return format.


----
## `usbutil.help`

Shows this help information.
