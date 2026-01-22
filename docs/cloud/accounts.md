---
id: accounts
title: Accounts
supportedDevices: ['mini','cm4','pro','pro_case']
---
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

Welcome to the Account Management guide. This section explains how to set up and manage your AutoPi cloud environment, including accounts, customers, users, devices, and access permissions. By the end of this guide, you’ll understand how to organize your platform efficiently while ensuring secure and controlled access for all users.

AutoPi Cloud uses a **multi-tenant architecture**, which means multiple accounts (tenants) share the same platform and infrastructure, while all data, configurations, and user access remain securely isolated.
Account management 

---


## Account  
An Account represents your organization’s main account in AutoPi Cloud. Each account can have multiple customers, and you can easily create as many as needed.

![Account Information](/img/cloud/accounts/account_overview.png)

### Account Owner 
The account owner is typically associated with the email address used to purchase the AutoPi devices.

### General settings for Account creation
When creating an account, you configure:
* Name, email, and country
* Cloud settings, including: Time zone, Time format and Units. These settings define how data is displayed across the platform.



## Customers 
**Customer (Main Account)** - The Customer is the top level in the hierarchy and usually represents a company. Customers are used to define the organizational structure within an account.

Example: If your company is called AutoPi, you would create a Customer named AutoPi HQ.


### Nested Customer
**Nested Customers (Sub-Accounts)** - nested customers are sub-accounts under a main Customer. They are useful for companies with branches, departments, or divisions that need separate environments while remaining under the same main account.

Example:
* Main Customer: AutoPi HQ.
* Nested Customer: AutoPi Denmark.
* Nested Customer 2: Autopi Norway.

#### Create customer
![Create nested customer](/img/cloud/accounts/create_nested_customer.png)

To create a new (nested) customer:
* Go to Accounts page and click on Customers tab.
* Click Create in the right upper corner.
* Enter the company name, main work email, and country. 
* Configure cloud settings (time zone, time format, units).
* Specify the security settings. 
* Confirm by clicking Create.
* A confirmation pop-up will appear once the customer is created successfully.

Each Nested Customer can manage its own users and data but cannot access data from the parent or sibling customers. For example "AutoPi Denmark" can manage its own users and data but can not access any users or data from "AutoPi Norway". This also means that in this case the main customer "AutoPi HQ" can access all data for both AutoPi Denmark and AutoPi Norway.



## Users
Users are the people who log in and interact with the platform. You can create multiple users under any Customer or Nested Customer.
With users, you can:
* Set permissions (groups)— decide who gets access to what.
* Assign users to locations — make sure they only see the data they need.
* Keep control — users under a Nested Customer won’t see data from the higher levels.

### Creating or editing a user 
![User creation modal](/img/cloud/accounts/create_new_user_updated.png)

To create a user:
* Go to Users and click Create
* Enter the user’s email and username
* Choose how to handle the password:
  * Send a welcome email (recommended): sends setup instructions automatically
  * Set a password manually (users should change it after first login)
* Select the Customer or Nested Customer the user belongs to
* (Optional) Add additional details such as full name or phone number
* Set the user status:
    * Active – user can log in (default).
    * Inactive – user cannot log in.
* Click Create. 


### Modifying User Permissions
![Group Permissions](/img/cloud/accounts/create_new_user_permissions.png)

Permissions define what actions a user can perform. Users are assigned to permission groups. Available permission groups include:

**1. Account Administrator** - manages the assigned customer account. This permission is best for team leaders managing users.
* Can create/edit/delete users.
* Manage permission groups associated with the users. 
* Access only to the Users and Accounts tabs (limited view).

**2. Full Device Access** - access to all devices and vehicles. This permission group needs to be paired with Device Management or Fleet Management to be fully useful. This permission is best for device specialists or fleet managers handling all vehicles.

**3. Device Management** - full access to the Device Management section of the cloud including Overview, Devices (no devices listed unless paired with Full Device Access), OBD Library and Templates. When combined with Full Device Access, you get the full device list and settings control. This permission is best for technicians managing devices directly.

**4. Nested Customer Administrator** - manages nested customers (sub-accounts). This permission is best for admins overseeing sub-branches or regional accounts. This permission works alongside:
* Fleet Manager — to create new nested customers and users.
* Account Administrator — to handle user creation.

**5. Fleet Management** - access to the Fleet Management section of the cloud including Overview; Vehicles - Vehicles List,Geofences, Groups; Locations; Reports; Users; Diagnostics; Alerts and Configurations - Dashboards, Fault Codes, Notification Channels, States. This permission is best for fleet managers that needs full access to their fleet. 

**6. Access Control Management** - access to the RFID token history. This feature is an add-on and therefore if you are interested in using this, you can contact us at sales@autopi.io .


### Assign Locations to Users
![Assigning locations to users](/img/cloud/accounts/create_new_user_location_access.png)

If you use Locations, users can be assigned access to one or more locations. This ensures users only see relevant data to the associated location.
Learn more about Locations here: [Locations](https://docs.autopi.io/cloud/fleet_management/locations/)


## Devices 
The Devices section lists all devices associated with your account. Clicking a device name opens its overview page.
Key actions include:
* Register device - add a new device to the account.
* Manage devices - manage the devices within the different nested customers.

![Manage devices](/img/cloud/accounts/manage_devices.png)


## API Tokens
API Token allows the user to access the [AutoPi's REST API](https://api.autopi.io). API tokens can be used in many ways, below are some examples: 
* [Getting started with REST API](https://docs.autopi.io/getting_started/api/)
* [Command webhook callbacks](https://docs.autopi.io/getting_started/api/command-webhook-callbacks/)
* [Change device's settings from the REST API](https://docs.autopi.io/getting_started/api/change-device-settings-from-api/)
* [Export data from API](https://docs.autopi.io/getting_started/api/export-data-from-api/)
* [Forward device data to your own server](https://docs.autopi.io/getting_started/api/send-device-data-to-own-server/)

![API Token creation](/img/cloud/accounts/create_api_token.png)

To create a token:
* Go to API Tokens tab.
* Click create. 
* Enter a name.
* Select an expiration date.
* Press create.

--
## Profile Settings
![Profile settings](/img/cloud/accounts/profile_settings.png)

### Profile 
In your profile settings, you can:
* View your email address and username
* Adjust cloud preferences: time zone, time format and units. These settings affect how timestamps and data are displayed across the platform.
* Change your password. 


### Security 
For enhanced security, AutoPi Cloud supports Multi-Factor Authentication (MFA):
* Use an authenticator app of your choice to protect your account.
* Users with Account Administrator permissions can enforce MFA for all users during login. This helps ensure secure access to your platform and data.

