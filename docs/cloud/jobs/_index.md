---
id: cloud-jobs
title: Jobs
---

Jobs can be scheduled to execute [commands](/docs/core/commands/core-cmd-commands) on the device and are configured from the AutoPi Cloud. The command results can then be uploaded to the AutoPi Cloud or other system by using [returners](/docs/core/returners/core-returners).

**SCHEDULING**

Job execution is scheduled with standard _cron_ expressions for the ease of use and flexibility.

> Simply put, _cron_ is a basic utility available on Linux systems. It enables users to schedule tasks to run periodically at a specified date/time or interval.

:::tip
Like any AutoPi cloud functionality, jobs can be managed programmatically through the AutoPi REST API. For more information see: https://api.autopi.io/#dongle
:::