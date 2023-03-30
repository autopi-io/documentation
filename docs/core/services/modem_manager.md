---
id: core-services-modem-manager
title: Modem Manager
---

## Handlers
### `connection`

Queries a given connection class command.

**ARGUMENTS**

  - **`cmd`** (str): The command to query.


----
### `read_sms`

Reads SMS messages stored in the modem and optionally processes them into `system/sms/received` events.
Those events hold information such as the timestamp of the message (when it was received by the
modem), the sender and the text.

Optional parameters:

- status (str): The status of the messages that are to be returned. Look below for avalable options. Default: "ALL".
- clear (bool): Should the returned messages be removed from the modem as well?
- format_mode (str): The format in which the messages should be processed. Currently, only TXT mode is supported. Default: "TXT".
- trigger_events (bool): Should the handler trigger SMS events? Default: False

Available options (status):

- "REC UNREAD" - new messages
- "REC READ" - read messages
- "STO UNSENT" - stored messages not sent yet
- "STO SENT" - stored messages already sent
- "ALL" - all messages


----
### `reset`

Enable or disable the one shot or periodic unit reset.

Optional parameters:

- mode (string): The mode in which to operate the command. For available values, look below. Default: None.
- delay (number): Time interval in minutes after that the unit reboots. Default: 0.
- reason (str): The reason the reset was performed. Default: "unspecified".

Available modes:

- disabled: Disables unit reset.
- one_shot: Enables the unit reset only one time (one shot reset).
- periodic: Enables periodic resets of the unit.
