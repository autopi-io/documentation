---
id: enabling_uart_on_TMU_devices
title: Enabling an External UART on AutoPi TMU CM4 Devices
----------------------------------------------------------

import CardGrid from "/components/CardGrid";

## Overview

A UART (Universal Asynchronous Receiver/Transmitter) is the simplest and most widely supported way to move serial data between two devices. On an AutoPi TMU CM4 you already have one UART occupied by the automotive interface, but many real‑world projects—GPS receivers, CAN bridges, industrial sensors or even another microcontroller—need a *second* serial interface.

> **Goal** – Re‑purpose the built‑in **UART 2** of the CM4 and break it out on the HAT so your add‑on hardware can talk to the AutoPi at 300 baud or 4 Mbit/s and everything in between.

By the end of this page you will have:

* **Wired** the right pins
* **Edited** the Raspberry Pi firmware so it exposes `/dev/ttyAMA1`, and
* **Verified** data can flow both ways with a quick loop‑back test.

## When should I use an external UART?

| Scenario                                                                           | Why a second UART helps                                                                     |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Adding a GNSS (GPS) module                                                         | NMEA sentences at 9600 or 115200 baud stream continuously—best handled on a dedicated port. |
| Talking to an OBD‑II dongle while keeping the main AutoPi vehicular interface free | Avoids contention and keeps logs clean.                                                     |
| Bridging to RS‑232/RS‑485 industrial sensors                                       | A 3‑wire TX/RX/GND connection keeps wiring simple.                                          |
| Debugging another microcontroller’s boot output                                    | Power up your MCU and capture console logs without a USB serial dongle.                     |

## Quick facts

* **Signal names** – `TXD2` transmits *from* the Pi, `RXD2` receives *into* the Pi.
* **Pin numbers** – Physical pins 27 & 28 on the 40‑pin header map to GPIO 0 & 1 (ID_SD and ID_SC on the HAT).
* **Logic level** – 3.3 V; never connect directly to 5 V RS‑232 without level shifting.

---

## Prerequisites

2. **SSH access** or Physical HDMI/USB console.
3. Micro‑jumper wires or a breakout header to reach pins 27/28.
4. A multimeter (optional but handy for continuity checks).

---

## Why GPIO 0/1?

The CM4 has six UART blocks but only **GPIO 0 & 1** expose the pins for **UART 2 (alt‑function 4)**. Your other free pins—`GPIO22‑24, 27`—can do many clever things (SPI, PCM, PWM) but *not* TX/RX. Hence we use the HAT‑EEPROM I²C pins (`ID_SD`, `ID_SC`) for serial use.

:::tip EEPROM probe vs. UART
Normally the Pi firmware tugs `GPIO0/1` low during the first 200 ms of boot while it looks for a HAT EEPROM. The `force_eeprom_read=0` flag in the next section disables that so your external device sees a clean idle‑high line from power‑up.
:::

---

## 1  Hardware wiring

| HAT label   | BCM GPIO | UART2 signal           | Connect to                |
| ----------- | -------- | ---------------------- | ------------------------- |
| **ID\_SD**  | 0        | **TXD2** (Pi → device) | RX of the external device |
| **ID\_SC**  | 1        | **RXD2** (device → Pi) | TX of the external device |
| I2C1\_SDA\* | 2        | CTS2 (optional)        | RTS of the device         |
| I2C1\_SCL\* | 3        | RTS2 (optional)        | CTS of the device         |
| **GND**     | —        | —                      | Common ground             |

*Wire CTS/RTS only if you need hardware flow control and intend to enable it in the `dtoverlay`.*

```
       AutoPi TMU CM4       External Device
      ┌──────────────┐     ┌────────────┐
 ID_SD│27   TXD2  ➔──┼────►│ RX         │
 ID_SC│28   RXD2  ◄──┼─────│ TX         │
 SDA  │ 3   CTS2  ◄──┼─────│ RTS  (opt) │
 SCL  │ 5   RTS2  ➔──┼────►│ CTS  (opt) │
  GND │ 6   GND   ───┼─────│ GND        │
      └──────────────┘     └────────────┘
```

:::caution Level shifting
If the external device works at 5 V **TTL** or ±12 V **RS‑232**, you *must* level‑shift or use a proper line driver (e.g.
MAX3232, SN65HVD230 for RS‑485). Direct 5 V into a CM4 pin can permanently damage the SoC.
:::

---

## 2  Enable UART2 in `config.txt`

Open the file with `sudo nano /boot/config.txt` and add:

```ini
# === External UART2 on GPIO0/1 ===
force_eeprom_read=0          # skip HAT‑EEPROM probe on GPIO0/1
dtoverlay=uart2              # TX=GPIO0, RX=GPIO1  => /dev/ttyAMA1
#dtoverlay=uart2,ctsrts      # remove # to enable flow control on GPIO2/3
enable_uart=1                # leave as‑is if already present
```

Save, exit, and `sudo reboot`.

**Check dmesg** after the reboot:

```bash
dmesg | grep -i ttyAMA1
```

You should see a line similar to `ttyAMA1 at MMIO 0x.....` confirming the driver is active.

---

## 3  Verify with a loop‑back test

1. Jumper `GPIO0` to `GPIO1` directly on the HAT.
2. Open a terminal on the Pi and run:

   ```bash
   stty -F /dev/ttyAMA1 115200 raw -echo
   echo "hello" > /dev/ttyAMA1 &
   cat < /dev/ttyAMA1
   ```
3. The word `hello` should appear. Press *Ctrl‑C*, remove the jumper, and connect your real device.

### Alternative: use **`minicom`**

```bash
sudo apt install -y minicom
minicom -b 115200 -D /dev/ttyAMA1
```

Minicom gives you scroll‑back, line‑ending control and macros—handy for debugging.

---

## 4  Using the port in Python

```python
import serial

ser = serial.Serial(
    port='/dev/ttyAMA1',
    baudrate=115200,
    bytesize=serial.EIGHTBITS,
    parity=serial.PARITY_NONE,
    stopbits=serial.STOPBITS_ONE,
    timeout=1
)

ser.write(b'AT\r')      # send a modem‑style command
print(ser.readline())   # read back a line
ser.close()
```

Python’s `pyserial` package makes scripting trivial—ideal for quick sensor polls.

---

## 5  Troubleshooting

| Symptom                                       | Likely cause & fix                                                                                                                                   |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **No `/dev/ttyAMA1`**                         | Overlay typo or missing `enable_uart=1`. Re‑check `/boot/config.txt`.                                                                                |
| **Boot hang with garbage on console**         | Another service (e.g. `serial‑getty@ttyAMA1.service`) grabbed the port. Disable it with `sudo systemctl disable --now serial-getty@ttyAMA1.service`. |
| **Lines held low for \~0.2 s after power‑up** | `force_eeprom_read=0` missing; firmware still probing EEPROM.                                                                                        |
| **Flow‑control ignored**                      | Verify you removed `#` in `dtoverlay=uart2,ctsrts` *and* wired GPIO2/3 correctly.                                                                    |
| **Overruns at >1 Mbit/s**                     | Increase `init_uart_clock` in `config.txt` or use DMA mode via `dwc_uart_fifo_enable=1`.                                                             |

---

## 6  Advanced topics

### Disable I²C on GPIO0/1 entirely

If another overlay or user‑space application tries to re‑enable I²C0, add `dtparam=i2c_vc=off` to `config.txt`.

### Throughput tuning

Use `core_freq_min=250` to keep the UART clock stable during idle throttling, and prefer 8N1 framing for max payload density.


---

## 7  References

* [Raspberry Pi CM4 Datasheet – Alternate‑function table](https://datasheets.raspberrypi.com/cm4/cm4-datasheet.pdf#page=23)
* [Understanding Device Tree Overlays](https://www.raspberrypi.com/documentation/computers/config_txt.html#device-tree-overlays)
* [AutoPi TMU CM4 HAT Pinout](/hardware/autopi_tmu_cm4/using-hat/)
