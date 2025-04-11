---
id: core-services-gnss-manager
title: Gnss Manager
---

## Converters
### `gnss_location_to_position`

Converts a GNSS location result into position type.


----
### `nmea_gga_to_dict`

Parses NMEA0183 GGA messages to a dictionary that can be serialized.

Example values:

$GPGGA,143824.00,5702.167555,N,00956.116128,E,1,09,0.6,13.9,M,43.0,M,,*55
$GPGGA,,,,,,0,,,,,,,,*66


----
### `nmea_vtg_to_dict`

Parses NMEA0183 VTG messages to a dictionary that can be serialized.

Example values:

$GPVTG,,T,0.3,M,0.0,N,0.0,K,A*0E
$GPVTG,,T,,M,,N,,K,N*2C

## Filters
### `significant_position`

Filter that only returns significant non duplicated positions.

## Handlers
### `connection`

Queries a given command down to the connection class.

**ARGUMENTS**

  - **`cmd`** (str): The command to query.


----
### `nmea0183_readout`

Read and parse all available NMEA0183 sentences through serial connection.

## Triggers
### `position_event`

Listens for position results and triggers position unknown/standstill/moving events.
