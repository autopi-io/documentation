---
id: nested-customers
title: Nested customers
---

The account section allows an account administrator to manage nested customers, which makes it possible to create an isolated account, assign devices and users to it, so that a customer can manage a fleet of devices, and it's own users.

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

The permissions model follows a top down appreoach, and only in that direction, this means that any users created on the nested customers, will only ever be able to see the devices directly associated to that account, at most, ie. full device access for a user on a nested account will see only the devices actually associated to the account, and not devices from the parent account / top account.

So in the example above, `user A` can only see devices in the `nested customer A` account, and the same for `user B`, but the `admin` user can see devices from both the top account, and any nested customers.

## Managing nested customers

The typical steps are

    A. Create a nested customer
    B. Assign some devices to the new customer
    C. Create an administrator user on the new account

All interaction with this happens in the `Account` page.

#### Create a nested customer
1. Click the `Customers` tab
2. Click the `Create` button
3. Fill out the settings and click `Create`

#### Assign some devices to the new customer
5. Click `Devices`
6. Click `Manage devices`
7. Click the newly created customer
8. Now select one or more devices in the dropdown, or toggle the mode below the dropdown to input the `unit id` or `device ids`
9. Now click `Process`
10. The devices are now re-assigned to the new customer

#### Create an administrator user on the new account
11. Now click the `Customers` tab
12. Click the customer that was created
13. Click `Users` to manage the users for the customer
14. Click `Create`
15. Now create a new user, and remember to set the account to have `Account Administration` rights, this will make the user have access to the assigned devices, and also to manage the users on the customer.

You should now have a nested customer with some devices associated, and a user.

:::tip
Contact sales@autopi.io to get more information.
:::