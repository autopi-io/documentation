---
id: core-commands-hostapd
title: Hostapd
---

## `hostapd.clients`

Returns all connected clients indexed by their MAC address.

**OPTIONAL ARGUMENTS**

  - **`interface`** (str): Specific network interface. Default is `uap0`


----
## `hostapd.clients_changed_trigger`

Triggers `system/hotspot/client/<mac>/connected` and `system/hotspot/client/<mac>/disconnected` events.

The trigger expects the result to be given in the format of what hostapd.clients returns,
which is also the main use case for this trigger.


----
## `hostapd.expect_allow_list_handler`

This handler triggers `system/hotspot/client/<mac>/not_connected` events for clients that aren`t
connected from the hostapd allow list.

In order for the handler to work properly the allow list must be stored in the default hostapd.accept
file, which will be the case if the allow list is set through the Advanced Settings in the Cloud.


----
## `hostapd.help`

Shows this help information.
