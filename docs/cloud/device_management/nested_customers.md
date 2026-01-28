---
id: nested-customers
title: Nested Customers
supportedDevices: ['mini','cm4','pro','pro_case']
---
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

The account section allows an account administrator to manage nested customers, 
which makes it possible to create an isolated account, assign devices and users 
to it, so that a customer can manage a fleet of devices, and it's own users.

It makes it possible to have a structure like this.

```
Customer
    users:
        |_ user admin
    accounts:
        |_ nested customer A
            users:
                |_ user A
        |_ nested customer B
            users:
                |_ user B
```

The permissions model follows a top down approach, and only in that direction, 
this means that any users created on the nested customers, will only ever be 
able to see the devices directly associated to that account, at most, ie. full 
device access for a user on a nested account will see only the devices actually 
associated to the account, and not devices from the parent account / top account.

So in the example above, `user A` can only see devices in the `nested customer A` 
account, and the same for `user B`, but the `admin` user can see devices from both
the top account, and any nested customers.

## Managing Nested Customers

The typical steps are

    * Create a nested customer
    * Assign some devices to the new customer
    * Create an administrator user on the new account

All interaction with this happens in the `Account` page.

#### Create a Nested Customer
* Click the `Customers` tab
* Click the `Create` button
* Fill out the settings and click `Create`

#### Assign Some Devices to the New Customer
* Click `Devices`
* Click `Manage devices`
* Click the newly created customer
* Now select one or more devices in the dropdown, or toggle the mode below the 
   dropdown to input the `unit id` or `device ids`
* Now click `Process`
* The devices are now re-assigned to the new customer

#### Create an Administrator User On the New Account
* Now click the `Customers` tab
* Click the customer that was created
* Click `Users` to manage the users for the customer
* Click `Create`
* Now create a new user, and remember to set the account to have 
    `Account Administration` rights, this will make the user have access to the
    assigned devices, and also to manage the users on the customer.

You should now have a nested customer with some devices associated, and a user.
