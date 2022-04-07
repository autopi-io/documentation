---
id: software-updates
title: Software Updates
---

In this section, we'll first review how you can update your device and then will move on to reviewing
your device's update attempts.

## Updating Your Device

You can update your device in two main ways:
1. Update through the Cloud
2. Update with a command

#### Update Through the Cloud
This is the method used most often to update a device, as it allows the rest of the system to interact
with the device nicely. To update the device, we will first navigate over to the Software Updates page
of the Cloud ([my.autopi.io](https://my.autopi.io)). There you'll see a page similar to the screenshot
below.

![software-updates-page](/img/user-manual/software-updates/software-updates-page.jpg)

On the right-hand side, at the top of the page, there is the 'Queue Update' button. If your device
doesn't have automatic updates enabled (which is the default behaviour), you'll neeed to manually
queue the update. Once you press the button, an update will be queued and you'll be asked if you
want to update the device right now.

If you don't update the device right now, the device will try to perform the update before going to
sleep. Whether or not the update is performed successfully, the device will go to sleep right after,
but if the update failed, it will be retried after it wakes up every time until the update goes
through.

In case you *have* enabled automatic updates for your device, then the device will attempt those
updates as soon as they are available based on the setting you've set. That can either be "Before
sleep" or "At start (or before sleep)".

#### Update with a command
:::tip
Be careful with this update procedure. If you're trying to update your device, we recommend that you
follow the steps above (Update Through the Cloud), as they are the standard way of updating your
devices. However, in certain cases, you might need to manually ask the device to update, which is
why we have this section here.
:::

To perform a manual update on your device, you can run the command below through the web terminal.
Using this method will still show an update attempt on the Software Updates page in case you need
to review the update afterwards.

```
minionutil.update_release force=True
```

:::warning
Only run this command through the web terminal, not through the device itself. Otherwise, you might
not receive the correct update, as the device might not be able to fetch certain files to perform
the correct update
:::

## Viewing update attempts

You are able to review the update release attempts (aka Update Release Runs). They show the update
procedure, which operations (states) have been compled successfully and which haven't. There are
three times of operations (states) that you can see in an update release run - successful, changed
and failed.

![update-release-run](/img/user-manual/software-updates/viewing-update-release-run.jpg)

* Successful states are states that have been executed without error, but have made no changes on
  the device.
* Changed states are states that have been executed without error and have made a change on the
  device.
* Failed states are states that have been executed with an error. Those states usually have comments
  to try and explain what has gone wrong.
