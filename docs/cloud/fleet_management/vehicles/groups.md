---
id: fleet-groups
title: Groups
supportedDevices: ['mini','cm4','pro','pro_case']
---
import CardGrid from "/components/CardGrid" ;
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />

Within the Vehicles tab, we have three subsections. One of our new features for 
improved fleet management is the ability to create vehicle groups.  This tool 
is ideal for grouping multiple vehicles together, providing a better overview 
and streamlined management. You can reuse the group anytime in the future. For 
example, if you want to create a geofence you can apply it to all the vehicles 
within the group at once. This can be done in the subsection called **Groups**.

![Vehicle groups](/img/cloud/fleet_management/vehicles/groups/new_groups.png)

Choose the **Groups** subsection to see a list of existing vehicle groups, if any.
To create a new group, click **Create**. In the pop-up, name the group for easy 
identification, such as “Office Parking” for vehicles usually parked at the same 
spot. Use the search bar to find and add vehicles to this group, then click Confirm 
to save the changes. Clicking on the group will allow you to edit or make changes,
and you can also delete the group if needed. 

![Vehicle group creation](/img/cloud/fleet_management/vehicles/groups/create_group.png)

