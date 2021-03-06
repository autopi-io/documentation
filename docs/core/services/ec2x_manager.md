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
### `power`

Powers down the EC2X device. Afterwards the module will start automatically.
A 30-second wait is included after power off to allow the module time to recover before receiving any new requests.

**ARGUMENTS**

  - **`cmd`** (str): AT command to perform the power down.

**OPTIONAL ARGUMENTS**

  - **`reason`** (str): Reason code that tells why we decided to power down. Default is `unknown`.


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
