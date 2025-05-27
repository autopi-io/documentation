---
id: cloud-jobs
title: Jobs
supportedDevices: ['cm4','pro']
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

Jobs can be scheduled to execute [commands](/core/commands/index.md) on the device and are
configured from the [AutoPi](https://www.autopi.io) [Cloud](https://www.autopi.io/software-platform/cloud-management). The command results can then be uploaded to the [AutoPi](https://www.autopi.io) [Cloud](https://www.autopi.io/software-platform/cloud-management) or
other system by using [returners](/core/returners/index.md).

**SCHEDULING**

Job execution is scheduled with standard _cron_ expressions for the ease of use and flexibility.

> Simply put, _cron_ is a basic utility available on Linux systems. It enables users to schedule tasks to run periodically at a specified date/time or interval.

![AutoPi Cloud Jobs](/img/cloud/device_management/jobs/jobs.jpg)

:::tip
Like any [AutoPi](https://www.autopi.io) [Cloud](https://www.autopi.io/software-platform/cloud-management) functionality, jobs can be managed programmatically through the [AutoPi](https://www.autopi.io) REST
API. For more information see: https://api.autopi.io/#dongle
:::

