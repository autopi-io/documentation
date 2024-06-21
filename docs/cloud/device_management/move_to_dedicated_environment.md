---
id: move-to-dedicated-environment
title: Move Device to a Dedicated Environment
---

Hello everyone!

In this short guide we will talk about how you can move your device from the default production
environment to your dedicated environment provided by AutoPi. Unfortunately, this process moves
only one device at a time, so you will need to repeat the steps for each device you need to move.

## 1. First we need to change the host to which the device connects.
How this is done depends on what version of the core you have on your device.

:::tip
Find the version currently deployed on your device by going to the "Software Updates" page.
:::

### A. For versions **AFTER** 2021.08.05

For all versions after **2021.08.05**, you will only need to run the *change_master* command.

```bash
# First we change the master host.
$ minionutil.change_master yourcompany.autopi.io confirm=True

# Then we restart the minion
$ minionutil.restart
```

### B. For versions **BEFORE** 2021.08.05

This version of the core also requires you to modify the `/boot/host.aliases` file to
point to your dedicated environment. Firstly, we need to change the master URL to point to your
dedicated server, in this example it is `yourcompany.autopi.io`.

```bash
$ cmd.shell 'echo "hub yourcompany.autopi.io" > "/boot/host.aliases"'
```

Next, we need to make sure that the master is specified correctly in the salt-minion configuration
file:

```bash
$ minionutil.change_master hub confirm=True
```

The above command will ensure the salt-minion configuration is set correctly and restart the
salt-minion.

## 2. Accepting the device in the dedicated environment.

Lastly, we need to accept the new device's keys. You can do that by logging in to your
webpage (https://dedicated.autopi.io/#account/devices) and registering your device if it isn't
already.

Once you have it registered and you have brought the device online, accept the key.

![Key state denied](../../../static/img/guides/move_to_dedicated_environment/key_state_denied.jpg)

:::tip
When accepting the key you might receive a 404 error saying that the key for that device was not
found. If that's the case, most likely your device was unable to get connected to the environment
yet. Make sure that you have internet connection and that you have typed in the URL of your dedicated
environment correctly.
:::

When that is done, you'll need to restart the salt-minion once more, either by waiting for it to go to sleep, or by issuing the following command:

```bash
# if running the command directly on the device (e.g. SSH)
$ sudo systemctl restart salt-minion

# if running the command through a web terminal
$ minionutil.restart
```

## 3. Re-applying any custom settings.

Since you just moved the device from one environment to another, it is important that you recognize that any settings that was applied on the old environment, will not be migrated automatically unless we explicitly let you know this has been done.

This means that you must ensure that the device is using the right settings for your use case.
To make sure that the device has all the right configuration applied (They might differ between environments), you should go to the `Software Updates` page, and reapply the current version, by clicking `enqueue update`, that way you ensure that the device is fully in sync with the current environment.

You should now be able to make configuration changes, execute commands and so on.
If you experience any issues with the process, please send a mail to our support team over at support@autopi.io.
