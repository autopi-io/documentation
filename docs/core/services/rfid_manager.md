---
id: core-services-rfid-manager
title: Rfid Manager
---

## Handlers
### `authenticate_rfid`

If there are any authorized_tokens saved in context, this handler will attempt to authenticate
an RFID against those tokens. Triggers `system/rfid/<rfid>/rejected` and
`system/rfid/<rfid>/authenticated` events.

If the tokens get updated in /opt/autopi/rfid/settings.yaml the manager needs to know about
the changes - use `load_settings_handler` to reload the settings.


----
### `load_settings`

Read the settings file stored in /opt/autopi/rfid/settings.yaml and load it.


----
### `reader`

Reads input from the RFID reader.

## Triggers
### `rfid_read`

Triggers `system/rfid/<rfid>/read` events when RFID chips are read.

:::note
Use in conjunction with reader_handler.
:::
