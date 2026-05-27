---
id: locations
title: Locations
supportedDevices: ['mini','cm4','pro','pro_case']
---
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

The **Locations** feature helps you organize your fleet by creating and managing operational areas for your company—such as regional offices, headquarters, distribution centers, or service hubs. You can assign vehicles to specific locations and control user access based on their assigned areas. Users will only see vehicles and manage operations tied to the locations they have access to.

To begin, navigate to the **Locations** tab, where you'll see a world map of your existing locations and a list view for easy navigation. 

![Locations overview](/img/cloud/fleet_management/locations/new_locations_table.png)

---

## Creating a Location

1. Click **Create** and enter the location details:
   - **Location name** (required): An internal identifier for the location
   - **Contact email** (required): The main contact for this location
   - **Phone number, address, and notes** (optional): Additional information to describe the location

2. Configure geofence settings:
   - Enter an address to zoom in on the map
   - Choose a color for the geofence if desired
   - Select the default enter and exit notifications
   - Notification channels are configured once under [Notification Channels](https://docs.autopi.io/cloud/fleet_management/configurations/notification-channels/) and then reused here

3. Draw the geofence:
   - Use the tools on the left side to create and edit the geofence
   - Click on the map to draw a circle or polygon that outlines your desired area
   - Additional tools allow you to edit, drag, remove, or rotate layers

4. Click **Create** to save the location

![Create Location](/img/cloud/fleet_management/locations/create_new_location.png)

---

## Managing Locations

Once created, your location appears in the list. To edit or delete a location, click **Actions** (the three dots) next to the location name. Use the **Search for Location** filter to quickly find specific locations when you have multiple entries. 



### Assigning Vehicles to a Location

* Click on a location from the list to open the **Edit vehicles in location** dialog.
* Search for and select vehicles to assign to this location.
* Enable the vehicles you want to assign to this location. You can enable multiple vehicles at once.
* Click **Confirm**. A confirmation notification will confirm the changes have been saved.

![Location and vehicles](/img/cloud/fleet_management/locations/new_add_vehicles.png)

:::tip
The **Vehicles** column on the Locations list shows the number of vehicles assigned to each location. Click this number to view the vehicles assigned to that location in the Vehicle section.
:::



### Assigning Users to a Location

You can assign users to specific locations to control their access to vehicles and operations in those areas. For detailed instructions on assigning locations to users, see [Assigning Locations to Users](https://docs.autopi.io/cloud/accounts/#assign-locations-to-users).

![Assign locations](/img/cloud/fleet_management/locations/location_access.png)

---

## Using Locations with Templates

Combine Locations with **Templates** to efficiently configure vehicles across your fleet with consistent location assignments.

1. Open the template you want to use for your vehicles.
2. Set the desired **Location** on the template.
3. Apply the template to your selected vehicles or groups.

![Assign Locations to Template](/img/cloud/fleet_management/locations/template_settings.png)

This allows you to maintain consistent location configurations across your entire fleet.