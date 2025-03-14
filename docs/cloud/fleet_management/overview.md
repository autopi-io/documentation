---
id: fleet-overview
title: Overview
---

import SideBySide from '@site/src/components/SideBySide';



This section provides an overview of your entire fleet, showcasing all vehicles 
associated with your account. With access to real-time data and advanced fleet 
management tools, you can efficiently manage, monitor, and optimize your fleet’s 
operations. 

![Fleet map overview](/img/cloud/fleet_management/overview/Fleet_overview_world_map.png)


## Fleet Tracking

The first thing you’ll notice is a world map displaying all your vehicles as icons,
each positioned based on their latest known location and their last online status.
If you set-up geofences and locations, you’ll see them on the map as well. You can
edit the map view from the top right corner and choose what do want to see on the 
map. You can zoom in and out of the map, and each vehicle is marked with a colored
circle that indicates its current state:
- Green: Driving
- Orange: Idling
- Red: Engine off 
- Grey: Offline 

<p align="center">
    <img src="/img/cloud/fleet_management/overview/Fleet_managment_vehicle_state.png" alt="Fleet overview vehicles status" width="50%" />
</p>

When you hover over a vehicle icon, detailed information about the vehicle will 
be shown. This includes the vehicle’s name, model, VIN, license plate, speed over
ground (while driving), distance traveled since the trip began, and the last 
communication timestamp (showing when it was last online). 

If you're zoomed out, you may see an icon showing two cars, indicating that 
multiple vehicles are close together. Hovering over this cluster icon will 
provide details on the number of vehicles in the group, along with their 
respective states, color-coded for quick identification. 

Clicking on a vehicle icon will zoom the map into that vehicle’s precise location. 

<div class="image-container">
    <img src="/img/cloud/fleet_management/overview/Map_overlay_options.png" class="image-margin" alt="Fleet map overlay" width="30%" />
    <img src="/img/cloud/fleet_management/overview/Map_options.png" class="image-margin" alt="Fleet map options" width="30%" />
</div>

In the map’s right corner, you can choose to check mark options you want to see 
on the map. If you only want to view vehicles, or only geofences or location or 
everything, you have the option to choose your map view.  

In the bottom right corner of the map, you can customize your view by selecting 
which elements to display. You can opt to view only vehicles, geofences, 
locations, tailoring the map to your preferences. 

## Fleet Overview

![Fleet map overview](/img/cloud/fleet_management/overview/Fleet_overview_widgets.png)

Here you can find widgets that provide statistics and insights into your fleet. 
In “Fleet Total” section you will see the total number of all your vehicles. 
Clicking “Show” will take you to the Vehicle section, where you can get more 
detailed information about each vehicle.

Next to it, you will find widgets for **Driving Now**, **Driven Today** and two 
widgets providing insight on vehicles **Driven in the last 30 days** and 
**Not Driven in the last 30 days**. These insights can help fleet managers 
understand vehicle usage and identify underutilized vehicles. Clicking Show 
within a widget will take you to a vehicle table, offering a detailed view of 
the relevant vehicles. For example, if you want to see which vehicles were not 
driven in the in the last 30 days, simply click on the widget, and you will be 
redirected to the filtered vehicle table displaying those specific vehicles. 

There are also widgets for **Off Location** and **On Location**. Each vehicle can
be assigned to a predefined [location](/cloud/fleet_management/locations.md), 
allowing you to track how many vehicles are outside or inside their assigned 
locations. This information will be useful to get a better overview of your 
vehicle's locations. Clicking show within a widget will take you to a 
filtered vehicle view for more detailed analysis. 

In the **Time and Distance** section, you can view the average time and distance
driven by both individual vehicles and the entire fleet for today and for the 
current month.  

The Location widget will display your top five locations – the ones with the most
vehicles associated to the location. It shows how many vehicles are on and off 
the location. To view all your locations, click on **View Locations**. 

