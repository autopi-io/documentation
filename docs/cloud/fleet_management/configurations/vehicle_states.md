---
id: vehicle-states
title: Vehicle States
supportedDevices: ['mini','cm4','pro','pro_case']
---
import CardGrid from "/components/CardGrid" ;
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

## Vehicle States 

For more information about the state of your vehicles within your fleet, you can 
now create Vehicle States. Some might be created for you by default, but you can 
create custom ones. You can create a ‘parent’ state like for example ‘Maintenance’
and then add a state under this including more specific information about what 
the vehicle. This will be then shown in the Vehicle List for more streamlined 
fleet management. 

![Vehicle groups](/img/cloud/fleet_management/configurations/vehicle_states/vehicle_states.png)

## Vehicle Fleet States 

If you want to include even more information, you can create ’Fleet States’. It 
is up to you to define what the states mean, how you want to define them.  We 
have created some by default, but this is customizable or can be deleted.

![Vehicle groups](/img/cloud/fleet_management/configurations/vehicle_states/vehicle_fleet_states.png)

