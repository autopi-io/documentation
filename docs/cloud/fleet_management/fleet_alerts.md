---
id: fleet-alerts
title: Alerts
---
import CardGrid from "/components/CardGrid" ; import SideBySide from '@site/src/components/SideBySide';

The **Fleet Alerts** page is your centralized place for monitoring all active alerts across your entire fleet. No need to check each vehicle one by one - this view shows you everything that requires attention in one place.This guide should help you quickly assess and manage any issues across your fleet using the Fleet Alerts feauture available on [AutoPi cloud](https://my.autopi.io/#/login). 

![Fleet alerts](/img/cloud/fleet_management/alerts/alerts_page.png)

### Getting started with Alerts
At the top of the Fleet Alerts page, you’ll see a summary of **open alerts only**. These represent current issues that need fixing or investigation. Closed alerts are still stored, but the focus here is on what’s actionable right now.

![Open alerts](/img/cloud/fleet_management/alerts/open_alerts.png)

### How to Interact with Alerts: 

Feauture 1: **View More Info**  
To see additional details about an individual alert:
- Click the **arrow icon** on the left of the alert row to expand it.
- This will reveal more technical and contextual information.

![Alert information](/img/cloud/fleet_management/alerts/description_alert.png)

Feature 2: **Go to Vehicle**  
To jump directly to the affected vehicle:
* Click the **chain link icon** next to the vehicle name.
* You’ll be redirected to the **Vehicle Overview** page for that vehicle.


### Alert Severity Levels
Alerts are grouped by severity so you can prioritize your actions:
1. **Critical** – Needs immediate attention  
2. **High** – Important but not urgent  
3. **Medium** – Worth monitoring  
4. **Low** – Informational or minor issues  

### Managing Alerts
Each alert has a **three-dot Actions menu** on the right-hand side. This gives you two main options:

**1. Resolve an alert**
- Marks the alert as resolved.
- Logs **who resolved it** (your username by default, or you can assign it to another team member).
- Allows you to **add a note**, such as:
  - Date of resolution
  - Fix applied
  - Any relevant comments for tracking

> Useful for maintaining accountability and documentation.

![User resolved alert](/img/cloud/fleet_management/alerts/user_resolved.png)

**2. Dismiss an alert**
- Use this if the alert doesn’t need action (e.g., false positive or known condition).
- The alert is closed but recorded in the alert history as “dismissed.”
- You’ll still see **when it occurred and when it was dismissed**, but it won’t clutter the list of active alerts.


### Filters and Columns

You can **filter** alerts based on. 

<SideBySide>
	<p>
		<strong> State: </strong> 
        * **Open** - an alert needs your attention
        * **Dismissed** - alert was marked as not important
        * **Resolved** - usually happens automatically from system
        * **Resolved by user** - user marked the alert as resolved 

        <strong> Severity: </strong>
        * **Critical**
        * **High**
        * **Medium**
        * **Low**
	</p>
	<img alt="State" src={require('@site/static/img/cloud/fleet_management/alerts/filters.png').default}/>
</SideBySide>
<br/>


Customize the table view by selecting which **columns** to display.

<SideBySide>
	<p>
		<strong> Columns: </strong> 
        * **Vehicle** - name of the vehicle
        * **Severity** (critical, high, medium, low)
        * **First occurrence** - first time this problem occured on a vehicle
        * **Last occurrence** - last time this problem occured on a vehicle
        * **Count** - number of times this alert has occurred
	</p>
	<img alt="Columns" src={require('@site/static/img/cloud/fleet_management/alerts/columns.png').default}/>
</SideBySide>
<br/>



