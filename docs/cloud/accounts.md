---
id: accounts
title: Accounts
supportedDevices: ['mini','cm4','pro']
---
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

Welcome to the Accounts guide! This documentation is here to help you easily set up and manage your platform. Whether you’re creating a new customer, adding user accounts, or managing your fleet, we’ll walk you through the process step-by-step. You’ll also learn how to assign the right permissions to each user — making sure everyone gets access to exactly what they need (and nothing they don’t). By the end, you’ll have a fully organized setup that keeps your operations running smoothly and securely. 

<ins>Creating customers and users</ins> for your fleet management system can be 
done in the Accounts section. Here you can access and manage your account. 
Upon opening the Accounts tab, you will see the account you are currently under, 
along with the associated email. 

### Create customer

![Accounts customer creation](/img/cloud/accounts/accounts_customer_creation.png)

In the Customers subsection, click on Create to add a new nested customer. 
Start by entering the company name, main work email, and country. For the [Cloud](https://www.autopi.io/software-platform/cloud-management) 
settings, choose a time zone, time format, and units you wish to see the data in.
Click Create to save the changes. A small pop-up will confirm the successful 
account creation. 

![Create new customer](/img/cloud/accounts/create_new_customer.png)

### Create user

![Accounts user creation](/img/cloud/accounts/accounts_user_creation.png)

You can add users associated by going to the Users section and choose 
Create. Add user details, such as their email and username. You can choose 
to send them a welcome email with a password and setup instructions. You may also
fill out additional information like their full name, phone number, or address, 
but this is not required. Required fields are marked with a red mark.

![Create new user](/img/cloud/accounts/create_new_user.png)

### Choosing correct permissions/ Groups
Permissions decide what a user can and can't do. Here’s a breakdown of the main permission groups.

![Groups permissions](/img/cloud/accounts/groups_permissions.png)

**1. Account Administrator** - manages the assigned customer account.
    - Can create/edit users.
    - Access only to the Users and Accounts tabs (limited view).

    :::tip 
    Best for team leads managing users in one account.
    :::

<br>
</br>

**2. Full Device Access** - access to all devices and vehicles.
    - Needs to be paired with Device Management or Fleet Management to be fully useful.

:::tip 
Best for: device specialists or fleet managers handling all vehicles.
 :::

<br>
</br>

**3. Device Management** - full access to the Device Management section:
    - Overview
    - Devices (no devices listed unless paired with Full Device Access)
    - OBD Library

    When combined with Full Device Access, you get the full device list and settings control.

    :::tip 
    Best for: Technicians managing devices directly.
    :::

<br>
</br>

**4. Nested Customer Administrator** -manages nested customers (sub-accounts).
    - Works alongside:
        - Fleet Manager — to create new nested customers and users.
        - Account Administrator — to handle user creation.

:::tip 
Best for: admins overseeing sub-branches or regional accounts.
:::

<br>
</br>

**5. Fleet Management** - access to the Fleet Management section (Overview, Vehicles, Geofences, Locations, Configurations, Alerts)

:::tip 
Best for: Fleet managers needing vehicle, location, and alert control.
:::

<br>
</br>

### Assigning Locations to users
You can choose multiple options. You can also assign users to Locations if 
you have created any, read more at <a href="https://docs.autopi.io/cloud/fleet_management/locations/" target="_blank">Locations</a>. To save the edits, click
Create. A notification table in the right corner will confirm the successful 
user creation. You can now find the user in the list with their e-mail address, 
username, assigned customer, location, last login, permissions group, active 
status either with green check mark or red cross. You can delete the user with 
the last bin icon.  

![Assign locations](/img/cloud/accounts/assign_locations.png)

### Manage devices
Next to Users you can find your **Devices**. All the devices associated to your 
account can be seen here and you can also register a new device. You also have a possibility to Manage devices. 

![Manage devices](/img/cloud/accounts/manage_devices.png)

<br>
</br>

:::note **Key terms explained**

**1. Customer** (Main Account): this is the top level in the hierarchy — think of it as the "head account." Usually, this represents the company. It’s created using the company's email.

    ✅ Example: 
        If the company is called "AutoPi HQ," you create a Customer named "AutoPi HQ" to represent that company.

**2. Nested Customer** (Sub-Account): a Nested Customer works like a sub-account under the main Customer. It’s helpful when a company has branches, departments, or divisions that need their own space — but still stay connected under the main account.

    ✅ Example:
        - The main Customer is "AutoPi HQ."
        - You create a Nested Customer called "AutoPi Denmark" (a branch of AutoPi HQ).
        - "AutoPi Denmark" can manage its own users and data — but it can’t access the main Customer account or other branches.

    Think of it like a family tree — each branch can see its own twigs but not the whole tree above it.

**3. User / Account**: users are the people who log in and interact with the platform. You can create as many user accounts as you need under any Customer or Nested Customer.

    ✅ What you can do:

        - Set permissions (groups)— decide who gets access to what.
        - Assign users to locations — make sure they only see the data they need.
        - Keep control — users under a Nested Customer won’t see data from the higher levels.
:::
