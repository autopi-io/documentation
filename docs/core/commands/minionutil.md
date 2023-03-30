---
id: core-commands-minionutil
title: Minionutil
---

## `minionutil.change_master`

Change to different master host.

**ARGUMENTS**

  - **`host`** (str): Hostname of the new master to change to.

**OPTIONAL ARGUMENTS**

  - **`confirm`** (bool): Acknowledge the execution of this command. Default is `False`.
  - **`show_changes`** (bool): Show the changes made in the file `/etc/salt/minion`. Default is `False`.

:::note
When the master (hub) is changed, the API endpoint URL won't be updated automatically
:::
unless there is a pending sync (for example coming from an update) that will execute the
minion.config state.

:::note
When moving back and forth between envs and the key hasn't been accepted,
:::
the device will keep retrying to connect to the master. If then the salt-minion service
is restarted, the service won`t shutdown until a SIGKILL is sent to the process (i.e. the
salt-minion service will keep retrying to connect to the salt-master)


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

  - **`force`** (bool): Default is `False`. Force an update, skipping all checks that would stop the update from occuring.
  - **`demand`** (bool): Default is `False`. Demand an update, even if the device is already in the latest version.
  - **`dry_run`** (bool): Default is `False`. Don`t actually perform the update.
  - **`only_retry`** (bool): Default is `False`. Perform an update only if it is in the retrying state.
  - **`reset_attempts`** (bool): Default is `False`. Set this to true if you want to reset the attempts counter that limits the amount of failed update retries.

Notes:

- The difference between the `force` and `demand` arguments is that `demand` is used to perform an update even if the device is already up-to-date.
It will not skip over the maximum allowed failed update retries. `force` on the other hand will do both, it will perform an update on the device,
even if it`s already up to date, but will also skip over the maximum allowed failed updates. In other words, they are almost the same, except that
`force` will skip over the retry limit.
