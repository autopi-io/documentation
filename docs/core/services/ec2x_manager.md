---
id: core-services-ec2x-manager
title: Ec2X Manager
---

## Handlers
### `connection`

Manages current connection.

**OPTIONAL ARGUMENTS**

  - **`close`** (bool): Close serial connection? Default value is `False`. 


----
### `delete_sms`

Delete messages from message storage.

It is possible to list possible for deleting if no indexes are passed and the `delete_all` kwarg is not passed (or set to `False`).

Keyword argumnets:

- index (int): The index of the message to be deleted. Default None.
- delete_all (bool): Set this boolean to true if all messages stored in the modem should be deleted. Default `False`.
- confirm (bool): A confirm flag when deleting messages. Default `False`.


----
### `download`

Downloads a file from the EC2X device.

**ARGUMENTS**

  - **`cmd`** (str): AT command to perform the actual download.
  - **`size`** (int): Size of the file to download.
  - **`dest`** (str): Destination path to which the downloaded file is to be written.


----
### `exec`

Runs an AT command against the EC2X device.

**ARGUMENTS**

  - **`cmd`** (str): AT command to execute.


----
### `list_sms`

List all messages from message storage.

:::note
In order to use this function, you need to first execute `ec2x.sms_format_config value=1`
:::
to set the correct format of the SMS messages.


----
### `power`

Powers down the EC2X device. Afterwards the module will start automatically.
A 30-second wait is included after power off to allow the module time to recover before receiving any new requests.

**ARGUMENTS**

  - **`cmd`** (str): AT command to perform the power down.

**OPTIONAL ARGUMENTS**

  - **`reason`** (str): Reason code that tells why we decided to power down. Default is `unknown`.


----
### `read_sms`

Reads SMS messages stored in the modem and processes them into `system/sms/received` events.
Those events hold information such as the timestamp of the message (when it was received by the
modem), the sender and the text. Messages will be deleted from the modem after being processed.

:::note
This function will configure the SMS format to text mode. This is necessary in order to read
:::
the messages correctly. If necessary, revert the configuration with the `ec2x.sms_format_config`
command.


----
### `sms_format_config`

Gets or sets the SMS format configuration.

Possible values:

- 0: PDU mode - entire TP data units used (hex responses). This is the default value.
- 1: Text mode - headers and body of the message given as separate parameters.


----
### `sync_time`

Synchronizes the system clock with the EC2X device.

**OPTIONAL ARGUMENTS**

  - **`force`** (bool): Default is `False`.


----
### `sync_time`

Ensures following keys for return value:


clock_synced: boolean
npt_enabled: boolean


----
### `upload`

Uploads a file to the EC2X device.

**ARGUMENTS**

  - **`cmd`** (str): AT command to perform the actual upload.
  - **`src`** (str): Destination path to the file to be uploaded.
