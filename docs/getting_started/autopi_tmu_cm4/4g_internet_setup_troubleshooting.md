---
id: 4g-internet-setup-troubleshooting
title: 4G Internet Setup Troubleshooting
description: Facing issues connecting to the internet? 
supportedDevices: ['cm4']
---
import CardGrid from "/components/CardGrid" ;
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

This guide helps you diagnose and resolve common 4G connectivity issues on your [AutoPi](https://www.autopi.io) device. If you cannot access the internet while connected to the device hotspot, follow the steps below in order.

:::tip Our support team is here to help you.
If you need assistance, contact support@autopi.io.
:::

### Prerequisites
Before starting, complete the initial [setup guide](https://docs.autopi.io/getting_started/autopi_tmu_cm4/).

---

### Check SIM Card

* Confirm that your SIM card is enabled for mobile data. Test the SIM in another device (for example, a smartphone) and verify that internet access works.
* If you are using a data-only SIM, confirm with your carrier that the data plan is active and roaming is enabled when required.
* Verify that the SIM card is not PIN-locked. If it is PIN-locked, enter the correct PIN in the device advance settings.
* Remove and reinsert the SIM card, and inspect both the SIM and slot for physical damage. Bent contacts, debris, or a loose SIM slot can prevent modem detection.
* Make sure the SIM orientation is correct. The text side of the SIM card must face up, and the triangle end must point into the device.

    <img src="/img/getting_started/getting_started/sim_card.png" alt="AutoPi.io - SIM card location" style={{width: '80%'}} />

:::caution
When inserted correctly, you should hear a small click as the card locks into position.
Do not force the SIM card out after the click, as this can damage the slot.
Always verify orientation before insertion.
:::

---

### Check Modem Detection (Hardware)

* Connect to the device hotspot and open [AutoPi Local](http://local.autopi.io). 
* Open the terminal and run:

    ```python
    cmd.run "lsusb"
    ```
* The output should look similar to this:

    ![lsusb](/img/getting_started/autopi_tmu_cm4/4g_internet_setup_troubleshooting/lsusb.jpg)

* Look for your modem in the list. The USB ID will vary depending on the modem installed in your device:

    | **Modem Manufacturer** | **USB ID** |
    |------------------------|------------|
    | Quectel                | `2c7c:0121` |
    | Telit                  | `1bc7:1031` |

* If you ordered a 4G-enabled device and the modem does not appear in the list, please contact support@autopi.io.

:::tip
If `lsusb` is unavailable, run `cmd.run "dmesg | grep -i usb"` to check USB detection events.
:::

---

### Check Modem Setup

#### Check PDP Context

PDP context controls how the modem connects to the mobile network. Incorrect values can prevent data sessions from starting.

For software version `1.22.7` or newer:

```python
modem.connection pdp_context
```

For `older` versions:

```python
modem.connection execute AT+CGDCONT?
```

Expected output is either:

```python
# Single context
value:
- apn: ''
  cid: 1
  pdp_type: IPV4V6

# Dual context (includes ims)
value:
- apn: ''
  cid: 1
  pdp_type: IPV4V6
- apn: 'ims'
  cid: 2
  pdp_type: IPV4V6
```

If the dual-context result causes connectivity issues, reconfigure with:

```python
cmd.run "systemctl stop qmi-manager"
modem.connection execute AT+CGDCONT=2
cmd.run "systemctl restart qmi-manager"
```

Run the PDP command again to confirm the result.

---

**Check Firmware Switch**

An incorrect firmware switch setting can prevent the modem from connecting to the network correctly.

**If you are using software version `1.22.7 or newer`, run:**

```python
modem.connection active_firmware_image
```

The expected output looks like this:

```python  
_stamp: "<current date>" 
_type: active_firmware_image
net_conf:global
storage_conf: ram  
```

Confirm that `net_conf` is set to `global`.



**Incase your software version is `older than 1.22.7`, you can run the following command to get the same information:**
```python  
modem.connection execute AT#FWSWITCH?'
```

Expected output:

```python
Data:'FWSWITCH:40:1'
```

If the value does not start with `40`, configure it manually:

```python
modem.connection execute AT#FWSWITCH=40,1
```

Restart the device and verify again.

:::tip
For additional modem commands and examples, see [Core Commands - Modem](https://docs.autopi.io/core/commands/core-commands-modem/).
:::

---

### Check APN Configuration

A missing or incorrect APN can block internet access even when the modem is detected.

:::note
If you are using the AutoPi SIM card (included with monthly cloud subscription), APN is pre-configured on newly shipped devices.
In most cases, you can skip this section.
If you want to verify manually, APN should be set to **nxt20.net**.
:::

Check the current APN:

```python
modem.connection pdp_context
```

If APN is missing and your carrier requires it, set it manually:

```python
modem.connection execute AT+CGDCONT=1,"IPV4V6","<your-apn>"
```

Then restart the manager:

```python
cmd.run "systemctl restart qmi-manager"
```

:::tip
If you do not know your APN, check your carrier documentation or support channel.
:::

---

### Check qmi-manager Status

`qmi-manager` maintains the cellular data connection.

Check status:

    ```python
    cmd.run "qmi-manager status"
    ```

Expected response: 

    ![qmistatus](/img/getting_started/autopi_tmu_cm4/4g_internet_setup_troubleshooting/qmistatus.jpg)

If needed, restart it:

    ```python
    cmd.run "systemctl restart qmi-manager"
    ```

---

### Restart the Network Interface

If `qmi-manager` is running but internet is still unavailable, cycle the interface:

```python
cmd.run "qmi-manager down"
cmd.run "qmi-manager up"
```

If SIM detection fails on `up`, power down the device, check SIM orientation and seating, then try again.

Check interface state and IP address:

```python
cmd.run "ip link show wwan0"
cmd.run "ip addr show wwan0"
```

If `wwan0` has no IP address, the mobile session is not established.

---

### Adjust the MTU Setting

If connection is unstable (drops, intermittent cloud status), tune MTU. Based on your board version, the default MTU is either `1500` or `1280`.

If your default is `1280`, change it to `1500` and check whether the device comes online.
If your default is `1500`, change it to `1280` and check whether behavior improves.
This quick comparison helps confirm whether MTU is causing the issue.

Apply MTU:

```python
grains.set qmi:mtu <value>
state.sls network.wwan.qmi.config
```

Verify:

```python
grains.get qmi:mtu
cmd.run "cat /etc/udhcpc/qmi.override"
```

Confirm that both outputs match the configured MTU.

:::note
* **US Verizon**: start with MTU `1428`.
* **Other carriers**: start with MTU `1280`.
:::

---

### Check Internet and Cloud Connectivity

Test internet over cellular:

```python
cmd.run "ping -c 5 -I wwan0 google.com"
```

Test AutoPi Cloud access:

```python
cmd.run "curl -v my.autopi.io"
```

If ping works but cloud access fails, test DNS:

```python
cmd.run "nslookup my.autopi.io"
```

If DNS fails, try a temporary public DNS value:

```python
cmd.run "echo 'nameserver 8.8.8.8' > /etc/resolv.conf"
```

Then re-run ping and curl.

---

### Collect Logs for Support

If the issue persists, collect logs before opening a support request.
Follow this guide to export relevant logs: [AutoPi Logs Guide](https://docs.autopi.io/developer_guides/autopi-logs/)

---

### Summary

By this point, you should have verified:

1. SIM compatibility, orientation, and slot condition.
1. Modem detection and modem configuration (PDP and firmware switch).
1. APN settings.
1. `qmi-manager` and `wwan0` status.
1. MTU tuning and DNS/cloud connectivity tests.

:::note
If you open a support case, include the full output from all commands used in this guide, along with the collected [Logs](https://docs.autopi.io/developer_guides/autopi-logs/).
:::

