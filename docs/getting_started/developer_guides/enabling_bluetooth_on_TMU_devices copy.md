---
id: enabling_bluetooth_on_TMU_devices
title: Enabling Bluetooth on Devices With STN Chips
---

In this guide we will take a look at how you can enable Bluetooth for AutoPi devices that use the
STN chip. By default the STN chip and Bluetooth don't work well together, so we will need to disable
the STN chip entirely in order to get the Bluetooth functionality to work properly and the device to
be kept running despite the STN chip's absence.

## Enabling Bluetooth
1. **Disable uart_sleep**  
  First, we will need to disable the STN chip's uart sleep functionality. When disabling the
  obd_manager (next step), we also disable a key heartbeat worker that keeps the device up and
  running by communicating to the STN chip. If the STN chip hasn't seen any communication in 15
  minutes (by default), then it will put itself and the Raspberry Pi to hibernation - we want to
  avoid that. Run the following command to disable that functionality:

  ```
  $ stn.uart_sleep enable=False
  ```

  :::caution
  If there are any power related pending syncs on the Cloud to the device you're working with the
  settings we just changed might be reverted back to the default. We recommend that you synchronize
  all changes to your device prior to following this guide. Once the obd_manager is disabled though,
  no settings related to the STN can be changed by the Cloud.
  :::

  You can confirm if this setting was applied correctly by running the following command and looking
  for the uart_sleep value. It should say `OFF, 900 s`.

  ```
  $ stn.power_config

  # example response
  _stamp: '2022-02-08T10:09:04.694796'
  _type: stslcs
  ctrl_mode: NATIVE
  ext_input: LOW = SLEEP
  ext_sleep: ON,  LOW FOR 3000 ms
  ext_wake: ON,  HIGH FOR 500 ms
  pwr_ctrl: LOW PWR = LOW
  uart_sleep: OFF, 900 s
  uart_wake: OFF, 0-30000 us
  vchg_wake: ON,  +2.00V IN 1000 ms
  vl_sleep: ON,  <12.20V FOR 240 s
  vl_wake: ON,  >15.50V FOR 3 s
  ```

2. **Disable obd_manager**  
  Next, the obd_manager needs to be disabled. You can do that by going over to Device > Services
  and selecting the obd_manager entry. The page that opens up should include a tab called
  "Settings" - click on it. On the panel that opens up, there should be a checkbox that's called
  Enabled - uncheck that box. You don't need to synchronize the changes yet, as we will be
  making another change in the next step.

3. **Enable Bluetooth**  
  Finally, you need to enable Bluetooth on the device. You can do that by going over to Device >
  Advanced Settings > Bluetooth and changing the Mode field from `disable` to `miniuart`. After synchronizing
  the changes, the Cloud will ask you to reboot the device. After the reboot you should be able to
  start using the Bluetooth on the AutoPi. Use the `bluetoothctl` command to work with Bluetooth on
  the device.

## Direct Communication With the STN Chip

In case you still need to communicate with the STN chip after disabling the obd_manager, you can.
You need to have `socat` installed in order to successfully establish a communication. You can do
that by typing in:

```
$ sudo apt update && sudo apt install -y socat
```

You can connect to the STN chip with the following command. Feel free to tweak the device parameters
to your own liking:

```
$ sudo socat /dev/serial0,echo=0 -
```

Let's take a look at some example commands:
```
STSLU off, off     # disables the uart_sleep functionality
ATZ                # needed in order to apply the above command's settings
STSLCS             # use this command to double check if the UART SLEEP value is off
```

If you need to execute other commands, you will need to consult the
[STN chip specification](https://www.obdsol.com/solutions/chips/stn2100/).
