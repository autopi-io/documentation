---
id: geofences
title: Geofences
supportedDevices: ['cm4']
---
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

> **Note:** This functionality is only available for devices that had **Device Geofences** set up in the past.  
> For new setups, we recommend using **[Fleet Geofences](https://docs.autopi.io/cloud/fleet_management/vehicles/fleet-geofences/)**, which provide improved functionality and easier management.



## Create a Device Geofence

Geofences allow you to define a specific area on a map and receive notifications when a vehicle **enters** or **exits** that area. A geofence can be defined as either:

* A **polygon** (custom shape).
* A **circle** (point with radius).

![Create Device Geofence](/img/cloud/device_management/device_geofences/create_device_geofence.png)

### Steps to Create a Device Geofence

1. Navigate to **Device → Geofence** tab.  
2. Click **Create**.  
3. Fill out the following:

**Basic Information**
* **Name** – name of your geofence.  
* **Description** *(optional)* – additional details  

**Define the Geofence Area**
* Use the **search bar** to locate a specific address.  
* Enable **vehicle position** to draw more precisely.
* Use **zoom controls (+ / -)** to adjust the map view.  
* Draw the geofence using:
  * **Circle**.
  * **Polygon**.
* Adjust the shape using:
  * **Edit layers** – modify points.  
  * **Drag layers** – move the geofence.  
  * **Rotate layers** – rotate the shape of the geofence.  
  * **Remove layers** – delete the geofence.  

**Settings**
* **Enabled** – toggle the geofence on or off. 

---

## How Device Geofences Work

Once created, the geofence is synchronized to the device. The device evaluates its position and triggers events based on geofence state.

### Event Types

#### 1. Wake-Up State Check
When the device wakes up, it reports whether it is inside or outside each geofence:
* `vehicle/geofence/GEOFENCE_NAME/inside`
* `vehicle/geofence/GEOFENCE_NAME/outside`


#### 2. Enter / Exit Events
When a new position is logged:

* The device checks if the geofence state has changed. 
* If **3 consecutive positions** confirm the change, an event is triggered:
    * `vehicle/geofence/GEOFENCE_NAME/enter`
    * `vehicle/geofence/GEOFENCE_NAME/exit`


These events are sent to the AutoPi Cloud, where they can be used for monitoring and automation.

---

## Use Geofences with Templates

Device geofences are typically assigned to a **single device**. To apply the same geofence to multiple devices, use **[Templates](https://docs.autopi.io/cloud/device_management/templates/)**.

![Use geofences with Templates](/img/cloud/device_management/device_geofences/template_geofences.png)

### Steps

1. Navigate to **Templates**.  
2. Select a template or Create a new one.   
3. Open the **Geofences** tab.  
4. Click **Create**.  
5. Configure the geofence (same as above). 
6. Assign devices and apply the template.  

This allows you to deploy geofences across multiple devices efficiently.

---

## Use Device Geofences with Triggers

Geofence events can be used together with **[Triggers](https://docs.autopi.io/cloud/device_management/a-guide-to-triggers/)** to automate actions.

### Example Use Case

* Notify by email when a vehicle enters a restricted area:
    ![Use device geofences with Triggers](/img/cloud/device_management/device_geofences/trigger_geofence.png)

### How It Works

* Geofence events appear under **Device → Events**. 
* You can create a **Trigger** based on:
  * `vehicle/geofence/*/enter`
  * `vehicle/geofence/*/exit`

### Possible Actions

* Send email notifications. 
* Trigger webhook requests. 
* Send an alert on AutoPi Cloud.   

---

> **Recommendation:** For improved usability and fleet-wide management, consider using **[Fleet Geofences](https://docs.autopi.io/cloud/fleet_management/vehicles/fleet-geofences/)**, which provide a more scalable and user-friendly approach.

