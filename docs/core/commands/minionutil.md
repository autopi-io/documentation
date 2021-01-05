---
id: core-command-minionutil
title: Minionutil
---

## `minionutil.change_master`

Change to different master host.

**ARGUMENTS**

  - **`host`** (str): Hostname of the new master to change to.

**OPTIONAL ARGUMENTS**

  - **`confirm`** (bool): Acknowledge the execution of this command. Default is `False`.


----
## `minionutil.help`

Shows this help information.


----
## `minionutil.last_errors`

Get last errors from minion log.

**OPTIONAL ARGUMENTS**

  - **`file`** (str): Default is `minion`.
  - **`until`** (str): Default is `$`.
  - **`level`** (str): Default is `error`.
  - **`count`** (int): Default is `0`.
  - **`before`** (int): Default is `0`.
  - **`after`** (int): Default is `0`.
  - **`limit`** (int): Default is `100`.


----
## `minionutil.last_logs`

Get last log lines from minion log.

**OPTIONAL ARGUMENTS**

  - **`file`** (str): Default is `minion`.
  - **`until`** (str): Default is `$`.
  - **`match`** (str): Default is `.*`.
  - **`count`** (int): Default is `0`.
  - **`before`** (int): Default is `0`.
  - **`after`** (int): Default is `0`.
  - **`limit`** (int): Default is `100`.


----
## `minionutil.last_startup`

Get log lines for last startup sequence.

**OPTIONAL ARGUMENTS**

  - **`file`** (str): Default is `minion`.
  - **`until`** (str): Default is `$`.
  - **`match`** (str): Default is `Setting up the Salt Minion`.
  - **`limit`** (int): Default is `100`.


----
## `minionutil.log_files`

List all minion log files.


----
## `minionutil.master_status`

Get status of connection to master.
Implementation originates from the `status.master` command but without the logic to trigger events.


----
## `minionutil.request_restart`

Request for a future restart of the minion service.

**OPTIONAL ARGUMENTS**

  - **`pending`** (bool): Default is `True`.
  - **`immediately`** (bool): Default is `False`.
  - **`delay`** (int): Default is `10`.
  - **`expiration`** (int): Default is `1200`.
  - **`reason`** (str): Reason code that tells why we decided to restart. Default is `unknown`.


----
## `minionutil.restart`

Restart the minion service immediately.

**OPTIONAL ARGUMENTS**

  - **`reason`** (str): Reason code that tells why we decided to restart. Default is `unknown`.


----
## `minionutil.run_job`

Run a job by passing it to the minion process.
This function makes it possible to run states and also get pillar data from external processes (engines etc.).


----
## `minionutil.status_schedule`

Dedicated to be called from schedule and trigger minion status events.


----
## `minionutil.trigger_event`

Triggers an event on the minion event bus.


----
## `minionutil.update_release`

Update a minion to newest release by running a highstate if not already up-to-date.

**OPTIONAL ARGUMENTS**

  - **`force`** (bool): Default is `False`.
  - **`dry_run`** (bool): Default is `False`.
  - **`only_retry`** (bool): Default is `False`.
