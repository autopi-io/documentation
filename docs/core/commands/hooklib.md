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
## `hooklib.battery_nominal_voltage_event_trigger`

Looks for battery results and triggers `vehicle/battery/nominal_voltage/*` event when the nominal voltage state changes.
All possible events are:

- vehicle/battery/nominal_voltage/unknown
- vehicle/battery/nominal_voltage/autodetected
- vehicle/battery/nominal_voltage/predefined


----
## `hooklib.context_cache_handler`

Manages cached data in the context.


----
## `hooklib.echo_handler`

Mainly for testing.


----
## `hooklib.geofence_event_trigger`

Listens for position results and triggers geofence inside/outside and enter/exit events
inside/outside - triggered on startup
enter/exit - triggered during driving
Change happens when the same result is repeated [repeat_count_to_trigger_change] times


----
## `hooklib.kernel_error_blacklist_filter`

Filters out blacklisted kernel errors.


----
## `hooklib.kernel_error_event_trigger`

Triggers `system/kernel/error` events.


----
## `hooklib.load_geofences_handler`

Loads geofence file


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


----
## `hooklib.temperature_event_trigger`

Looks for temperature results and triggers `system/temperature/*` event when temperature changes.
