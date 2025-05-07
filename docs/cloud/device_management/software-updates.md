---
id: software-updates
title: Software Updates
---
import CardGrid from "/components/CardGrid";

In this section, we'll first review how you can update your device and then will move on to reviewing
your device's update attempts.

## Updating Your Device

You can update your device in two main ways:
1. Update through the [Cloud](https://www.autopi.io/software-platform/cloud-management)
2. Update with a command

### Update Through the [Cloud](https://www.autopi.io/software-platform/cloud-management)

This is the method used most often to update a device, as it allows the rest of the system to interact
with the device nicely. To update the device, we will first navigate over to the Software Updates page
of the Cloud ([my.autopi.io](https://my.autopi.io)). There you'll see a page similar to the screenshot
below.

![software-updates-page](/img/cloud/device_management/software-updates/software-updates-page.jpg)

On the right-hand side, at the top of the page, there is the 'Queue Update' button. If your device
doesn't have automatic updates enabled (which is the default behavior), you'll need to manually
queue the update. Once you press the button, an update will be queued and you'll be asked if you
want to update the device right now.

If you don't update the device right now, the device will try to perform the update before going to
sleep. Whether or not the update is performed successfully, the device will go to sleep right after,
but if the update failed, it will be retried after it wakes up every time until the update goes
through.

In case you *have* enabled automatic updates for your device, then the device will attempt those
updates as soon as they are available based on the setting you've set. That can either be "Before
sleep" or "At start (or before sleep)".

### Update With a Command

:::tip
Be careful with this update procedure. If you're trying to update your device, we recommend that you
follow the steps above (Update Through the [Cloud](https://www.autopi.io/software-platform/cloud-management)), as they are the standard way of updating your
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

### Check if Your Device is Already Performing an Update

There are two general ways that you can determine if an update is currently being run on your device:
using the events or by running a command.

#### Events

One of the ways to determine if the device is being updated right now is to check the Events page
under Device > Events. Here, we're looking for [`system/release/*`](/cloud/device_management/events/system.md#release-events)
events, more specifically the `system/release/pending`, `system/release/retrying` or `system/release/forcing`
events. All of those events signify that the device had started an update attempt. If you see a
`system/release/failed`, `system/release/updated` or an event that means the device [shut down](/cloud/device_management/events/system.md#power-events),
then the device has likely stopped updating.

**It is also possible to fetch the events from the reactor cache with the following command, directly on the device**

`reactor.manage context cache`

If this list of events contains the above mentioned `system/release/pending`, that means the device us currently applying the update.
Either during the `startup` states, or during the `power.sleep` command.

#### Running `saltutil.running`

With the `saltutil.running` command you can check the jobs the device is currently running. Using this command,
you can also determine if your device is currently updating. Here are two general responses you may get:

```
$ saltutil.running
- fun: state.sls
  jid: req
  pid: 1124
  ret: ''
  arg:
    - - startup
```

The above response is returned usually when the device has just booted up. It signifies that the
`startup` state is being executed (there is a small startup procedure whenever the device starts up
and is connected to the server). If you have enqueued an update or your device is setup to try the
update as soon as it starts up, a response like the one above would mean that the update is being
attempted. Let's take a look at the next possible response:

```
$ saltutil.running
- jid: '20220610114357378648'
  pid: 1630
  _stamp: '2022-06-10T11:43:57.382915'
  ret: event_result
  arg:
    - shutdown
    - pillar:
        allow_auto_update: true
      __kwarg__: true
  fun: state.sls
- tgt_type: glob
  jid: '20220610114357091317'
  tgt: 629c06b123213bf84126afecd44a0340
  pid: 1627
  ret: ''
  user: 2
  arg:
    - __kwarg__: true
      confirm: true
  fun: power.sleep
```

This one is a bit more complex to look at, but there are a few key things to look at here. The response shows
us that there are two jobs running - let's start with the second job. That job tells the reader that the device is
going to go to sleep (notice the `fun: power.sleep` line). The `power.sleep` function will put the device
to sleep, but first, it will execute the `shutdown` state. That `shutdown` state is the first job on the list
returned above and it is the one that triggers the update as well. Notice the `allow_auto_update: true` argument,
which signifies the device is most likely attempting the update right now. This type of response is usually seen
when the device has been "forced" to update or it has been setup to attempt updates right before shutting down.

## Viewing Update Attempts

You are able to review the update release attempts (aka Update Release Runs). They show the update
procedure, which operations (states) have been completed successfully and which haven't. There are
three times of operations (states) that you can see in an update release run - successful, changed
and failed.

![update-release-run](/img/cloud/device_management/software-updates/viewing-update-release-run.jpg)

* Successful states are states that have been executed without error, but have made no changes on
  the device.
* Changed states are states that have been executed without error and have made a change on the
  device.
* Failed states are states that have been executed with an error. Those states usually have comments
  to try and explain what has gone wrong.

