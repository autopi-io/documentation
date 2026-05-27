---
id: reports-intro
title: Introduction
supportedDevices: ['mini','cm4','pro','pro_case']
---
import CardGrid from "/components/CardGrid" ;
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

The Reports feature in the [AutoPi](https://www.autopi.io) [Cloud](https://www.autopi.io/software-platform/cloud-management) platform empowers fleet managers with actionable insights into fleet performance and driver behavior. Reports deliver detailed data on critical events and patterns, enabling informed decision-making to optimize operations and enhance safety. 

## Key Capabilities:

- **Understand vehicle and geofence interactions:** Quickly see how your vehicles interact with geofenced areas.
- **Monitor fleet performance:** Identify where your fleet spends the most time, analyze parking duration, and evaluate route efficiency.
- **Track driver behavior:** Monitor idling times to reduce fuel waste, measure geofence entries and exits, and review distance traveled.
- **Measure utilization:** Analyze vehicle usage patterns to optimize fleet operations and reduce operational costs.

Reports can be accessed directly through the [AutoPi](https://www.autopi.io) [Cloud](https://www.autopi.io/software-platform/cloud-management) or downloaded as PDF files for offline use.

## List Tab

Use the **List** tab to review reports that have already been generated. This is the main place to open previous reports, export results, and remove reports you no longer need.

![Reports overview](/img/cloud/fleet_management/reports/geofence_reports/reports_list.png)

- Access a list of all generated reports. The list includes:
  - Report name (editable during creation).
  - Report type (for example, Geofence Report or Utilization Report).
  - Date range (from/to).
  - Creator name.
  - Date and time when the report was generated.
  - Actions: Download as PDF or delete the report.
- Click on a report to open its preview.

## Schedules Tab

Use the **Schedules** tab to manage recurring reports. It gives you a clear overview of active schedules and quick access to edit or delete them.

![Schedules overview](/img/cloud/fleet_management/reports/geofence_reports/reports_scheduled_table.png)

- View all scheduled reports, including:
  - Report name.
  - Report type (for example, Geofence Report or Utilization Report).
  - Frequency and time of day.
  - Last generated date.
  - Schedule creation date.
  - Creator name.
  - Actions: Edit or delete a scheduled report.

## Available Report Types

- [Geofence Summary Report](./geofence_report.md) — Available
- [Utilization Report](./utilization_report.md) — Available
- Location Compliance — Coming soon
- Connected Vehicles — Coming soon
- Maintenance — Coming soon
- Fleet Utilization — Coming soon

:::note
As new report types become available, additional features and enhancements will 
be added to the platform. Stay tuned for updates to make the most of your [AutoPi](https://www.autopi.io) 
[Cloud](https://www.autopi.io/software-platform/cloud-management) Reports.
:::


