---
id: core-services-event-reactor
title: Event Reactor
---

## Converters
### `detained_composite_event`

Ensures a worker thread is scheduled for events with a detain period specified.
Only one scheduled worker thread can exist at a time.

Example scenario 1:

- (00:00:00) tag=`vehicle/ignition/on`, detain_period=0   ->` The event is immediately passed on to the trigger
- (00:00:01) tag=`vehicle/ignition/off`, detain_period=5  ->` The trigger is scheduled to run in 5 seconds
- (00:00:02) tag=`vehicle/ignition/on`, detain_period=0   ->` The scheduled trigger is cancelled and the event is immediately passed on to the trigger

Example scenario 2:

- (00:00:00) tag=`vehicle/ignition/off`, detain_period=5  ->` The trigger is scheduled to run in 5 seconds
- (00:00:01) tag=`vehicle/ignition/off`, detain_period=5  ->` The event is enqueued to the already scheduled trigger that will run in now 4 seconds

Example scenario 3:

- (00:00:00) tag=`vehicle/ignition/on`, detain_period=5   ->` The trigger is scheduled to run in 5 seconds
- (00:00:01) tag=`vehicle/ignition/off`, detain_period=5  ->` The scheduled trigger is cancelled and and a new trigger is scheduled to run in 5 seconds

## Filters
### `alternating_cache_event`

Filter that only returns alternating/changed events from cache.

## Handlers
### `cache`

Manages cached data.


----
### `composite_event`

Creates composite events that are based on other events.

## Returners
### `module_result_cache`

Stores/caches a module result in context.

## Triggers
### `composite_event`

Triggers a composite event and updates its triggered at timestamp.
