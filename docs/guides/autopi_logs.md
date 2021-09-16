---
id: autopi-logs
title: AutoPi Logs
---

In this guide we will talk about how you can manage your AutoPi's logs. The topics that we will
cover are how you can view your device's logs and how you can download the log files to your
computer.

## Viewing logs

There are two primary methods for viewing your AutoPi's logs. The first method uses some commands
that you can write in the web terminal from the [Cloud](https://my.autopi.io) or the local admin
for your device. The second method retrieves the log files directly from the device through SSH.

### Viewing logs from the Cloud

To retrieve the primary logs from the device, we have some terminal commands that can be executed
(on [my.autopi.io](https://my.autopi.io/) and [local.autopi.io](http://local.autopi.io/)):

```
$ minionutil.last_logs
$ minionutil.last_errors
$ minionutil.last_startup
```

These functions can also take various parameters. You can check the documentation for those commands
[here](../core/commands/minionutil.md) or by running the following command:

```
$ minionutil.help
```

### Viewing logs directly on the device

If you are logged onto the system using SSH ([How to SSH to your device](how_to_ssh_to_your_device.mdx))
you can view the log file by running the following command:

```bash
$ less /var/log/salt/minion
```

:::tip
Remember that the timestamps in the log files are in UTC.
:::

## Downloading logs

Sometimes, if we're having a back and forth on our support channel (support@autopi.io), we might
ask you to provide some log files from your device. Most of the time, it will be the minion log
file (`/var/log/salt/minion`), but sometimes it might also be the syslog file (`/var/log/syslog`).
There are three ways that you can download log files from your device: downloading the files
from the local admin page ([local.autopi.io](http://local.autopi.io)), copying it to your own computer with
the `scp` command or by uploading it to your dropbox account.

### Local admin page download

To download the log files from the local admin page, you will need to connect to the device's WiFi
hotspot first. After you've done that, you can navigate your browser to http://local.autopi.io.

:::tip
If the browser is unable to load the web page because it can't resolve the URL, try typing in the
IP address instead: http://192.168.4.1.
:::

Once you've opened the local admin page, on the right-hand side, you should see a list of the log
files available for downloading. Click on the one you'd like to download.

![local_admin_log_files](/img/guides/autopi_logs/local_admin_log_files.jpg)

### SCP (SSH copy)

You are able to download the minion log file using the `scp` command from your computer. First,
you'll need to have the file in the home directory of the `pi` user. The first two commands should
be run directly on the device (through SSH) and the last one should be run from your own computer.

```bash
# copy the file to the home directory
$ sudo cp /var/log/salt/minion /home/pi

# make sure the pi user owns the file
$ sudo chown pi:pi /home/pi/minion

# finally, exit SSH and run the scp command from your own computer
scp pi@local.autopi.io:~/minion ./
```

After executing those commands, you should have a minion file in your current working directory.

### Uploading the log file to your dropbox

If you're not familiar with SSH or you don't have access to it at the moment, you can instead
upload the log file to your dropbox account. Here are the steps you need to take to get the log
file uploaded:

1. Create a Dropbox app by going here and input like so:
  [https://www.dropbox.com/developers/apps/create](https://www.dropbox.com/developers/apps/create)

  ![dropbox_create_app](/img/guides/autopi_logs/dropbox_create_app.png) 

2. Now click the "Generate" button under **Generated access token**.

3. You can now use the below commands to send files to your new dropbox folder located in
"dropbox/Apps/AutoPi Logfiles". Execute them in the web terminal, or in the SSH terminal by
prepending `autopi` before the command.
:::note
Remember to replace the YOUR_ACCESS_TOKEN with the actual token you received in the last step.
:::

  ```bash
  # web terminal
  $ fileutil.upload /var/log/salt/minion gzip=True service=dropbox token=YOUR_ACCESS_TOKEN

  # SSH
  $ autopi fileutil.upload /var/log/salt/minion gzip=True service=dropbox token=YOUR_ACCESS_TOKEN
  ```

4. You should now be able to see the uploaded file in your dropbox folder.

5. You can also upload the file to dropbox using raw Linux commands. Here are the commands:

  ```
  cmd.run 'gzip --keep -f /var/log/salt/minion'
  ```

  And then run the following command to upload the data:

  ```bash
  cmd.run 'curl -X POST https://content.dropboxapi.com/2/files/upload \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --header "Dropbox-API-Arg: {\"path\": \"/minion.gz\"}" \
  --header "Content-Type: application/octet-stream" \
  --data-binary @/var/log/salt/minion.gz'
  ```

  **NOTE**: If the above command does not work, you can try this one instead (*Same command on a
  single line, without the slashes*)

  ```bash
  cmd.run 'curl -X POST https://content.dropboxapi.com/2/files/upload --header "Authorization: Bearer YOUR_ACCESS_TOKEN" --header "Dropbox-API-Arg: {\"path\": \"/minion.gz\"}" --header "Content-Type: application/octet-stream" --data-binary @/var/log/salt/minion.gz'
  ```

## Log rotation
Every so often the logs on your AutoPi device will [rotate](https://en.wikipedia.org/wiki/Log_rotation).
This essentially means that the current log files will be compressed and renmaed so that a new log
file can start being used. This is done in order to keep the size of the log files relatively small.

#### `/var/log/salt/minion`
By default, the salt minion log file is being rotated every week. Also by default, there will be 7
older versions of the log file that will be kept on the SD card before being removed. You can
double check those defaults if you read the `/etc/logrotate.d/salt-common` file which has those
definitions.

#### `/var/log/syslog`
By default, the syslog file is being rotated every day. Also by default, there will be 7 older
versions of the log file that will be kept on the SD card before being removed. You can double check
those defaults if you read the `/etc/logrotate.d/rsyslog` file which has those definitions.

## Discussion
If you'd like to discuss this topic with us or other fellow community members, you can do so on
our community pages dedicated for this guide:
[Guide: How to retrieve logs from your device](https://community.autopi.io/t/guide-how-to-retrieve-logs-from-your-device/551) and
[Tip: Send device logfile to dropbox with one command](https://community.autopi.io/t/tip-send-device-logfile-to-dropbox-with-one-command/1159).