---
id: fleet-groups
title: Groups
supportedDevices: ['mini','cm4','pro','pro_case']
---
import CardGrid from "/components/CardGrid" ;
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />

## What Are Groups?

The **Groups** section in the Vehicles tab lets you organize multiple vehicles
into reusable sets. Groups make fleet operations faster and more consistent,
because you can apply configurations and workflows to a full set of vehicles
instead of selecting each vehicle one by one.

Common use cases include applying geofences, configuring templates, and creating
reports for a specific segment of your fleet.

![Vehicle groups](/img/cloud/fleet_management/vehicles/groups/new_groups.png)

## Create a Vehicle Group

1. Go to **Vehicles -> Groups**.
2. Click **Create**.
3. Enter a clear group name (for example, `Office Parking` or `Service Fleet`).
4. Use the search field to find and select the vehicles you want to include.
5. Click **Confirm** to save.

The new group will appear in the Groups list and can be reused across other
fleet features.

## Edit or Delete a Group

1. Open **Vehicles -> Groups**.
2. Click the group you want to update.
3. Add or remove vehicles as needed, then save your changes.
4. Delete the group if it is no longer needed.

![Vehicle group creation](/img/cloud/fleet_management/vehicles/groups/create_group.png)

---

## Use Groups with Other Features

Groups are designed to work across multiple AutoPi Cloud workflows.

### 1. Templates

You can configure a group in a template so that devices added through that
template are already associated with the same group. This adds another layer of
fleet identification and keeps device organization consistent.

To assign a group to a template:

1. Navigate to **Device Management -> Templates**.
2. Select an existing template from the list, or click **Create** to set up a new one.
3. Open the template's **Settings** tab.
4. Locate the **Vehicle Group** field and select the group you want to associate with this template.

Any device subsequently added to the template will automatically inherit this group assignment.

![Vehicle group in the Template](/img/cloud/fleet_management/vehicles/groups/template_groups.png)

Read the main guide: [Templates](/cloud/device_management/templates.md)

### 2. Fleet Geofences

When creating a fleet geofence, you can select one or more groups instead of
adding vehicles individually. All vehicles in the selected group will be
included in the geofence setup.

![Vehicle group in the Fleet Geofence](/img/cloud/fleet_management/vehicles/groups/geofence_group.png)

Read the main guide: [Fleet Geofences](/cloud/fleet_management/vehicles/geofence.md)

### 3. Reports

When creating a one-time report or scheduling a recurring report, you can select
a full group of vehicles instead of choosing vehicles one by one.

![Vehicle group in the Report Creation](/img/cloud/fleet_management/vehicles/groups/report_group.png)

Read the main guide: [Geofence Summary Report](/cloud/fleet_management/reports/geofence_report.md)

