---
id: core-commands-hooklib
title: Hooklib
---

## `hooklib.alternating_readout_filter`

Filter that only returns alternating/changed results.


----
## `hooklib.battery_converter`

Converts a voltage reading result with battery charge state and level.


----
## `hooklib.battery_event_trigger`

Looks for battery results and triggers `vehicle/battery/*` event when voltage changes.


----
## `hooklib.echo_handler`

Mainly for testing.


----
## `hooklib.kernel_error_blacklist_filter`

Filters out blacklisted kernel errors.


----
## `hooklib.kernel_error_event_trigger`

Triggers `system/kernel/error` events.


----
## `hooklib.module_direct_handler`

Calls a Salt execution module directy from current process.


----
## `hooklib.module_handler`

Calls a Salt execution module from within the minion process.


----
## `hooklib.returner_call_handler`

Calls a Salt returner module directy from current process.


----
## `hooklib.skip_empty_filter`

Filters out empty results.
