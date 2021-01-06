---
id: core-services-tracking-manager
title: Tracking Manager
---

## Converters
### `gnss_location_to_position`

Converts a GNSS location result into position type.


----
### `nmea0183_readout_to_position`

Converts NMEA0183 sentences result into position type.

## Filters
### `significant_position`

Filter that only returns significant non duplicated positions.

## Handlers
### `context`

Gets current context.


----
### `gnss_query`

Reads GNSS data and settings synchronously from EC2X module.


----
### `nmea0183_readout`

Reads all available NMEA0183 sentences through serial connection.


----
### `status`

Gets current status.

## Triggers
### `position_event`

Listens for position results and triggers position unknown/standstill/moving events.
