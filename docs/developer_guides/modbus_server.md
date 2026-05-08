---
id: modbus-server
title: Modbus Server
supportedDevices: ['cm4','pro','pro_case']
---
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

The AutoPi device can function as a Modbus server (slave), exposing vehicle data — including OBD-II readings, Diagnostic Trouble Codes (DTCs), and other logged values — as Modbus registers. Any standard Modbus client (such as a PLC, SCADA system, or HMI) can read these registers over TCP, UDP, or serial.

---

## How It Works

1. Loggers (e.g. OBD) run on the device and continuously write values to an internal cache.
2. When a Modbus client requests a register, the Modbus server reads the corresponding value from that cache.
3. You define which Modbus register address maps to which data field.

No polling is required from the client side — the device keeps the cache up to date based on the configured logger intervals.

---

## Setup

### Step 1 — Enable the Modbus Server Engine

Navigate to **Advanced Settings → Engines** and enable the `modbus_server` engine.

---

### Step 2 — Configure the Transport

Set the `mode` field to one of the following options:

|Mode|Description|Default port|
|:---:|:---:|:---:|
|tcp|Modbus TCP over Ethernet/WiFi|5020|
|udp|Modbus UDP|5020|
|serial|RTU/ASCII over serial port|/dev/ttyUSB0|

#### TCP example

```yaml
mode: tcp
host: 0.0.0.0
port: 5020
```

#### Serial example

```yaml
mode: serial
framer: rtu
port: /dev/ttyUSB0
baudrate: 9600
parity: N
stopbits: 1
bytesize: 8
```

Supported framers for serial mode: `socket` (default), `rtu`, `ascii`, `binary`.

---

### Step 3 — Define the Register Map

Registers map Modbus addresses to data fields from your loggers. If no register map is provided, the following defaults apply:

- Register 0 → Engine RPM
- Register 1 → Vehicle speed

#### Example

```yaml
registers:
  - register: 0
    redis_key: obd.rpm
    default_value: 0
  - register: 1
    redis_key: obd.speed
    default_value: 0
  - register: 2
    redis_key: obd.coolant_temp
    default_value: 0
```

#### Fields

| Field | Description |
|:---:|:---:|
| `register` | Modbus register address (0-based) |
| `redis_key` | Data field name as produced by the logger |
| `default_value` | Value returned if no data is available (default: `0`) |

All register values are stored as `uint16` (range: 0–65535). Floating-point values are automatically rounded.

---

### Step 4 — Ensure Loggers Are Running

Register values depend on active loggers. The `redis_key` in your register map must match the output field name of the corresponding logger.

Common OBD `redis_key` values:

| redis_key | Description |
|:---:|:---:|
| `obd.rpm` | Engine RPM |
| `obd.speed` | Vehicle speed |
| `obd.coolant_temp` | Coolant temperature |
| `obd.fuel_level` | Fuel level |
| `obd.throttle_pos` | Throttle position |

Logger update intervals determine how frequently register values are refreshed. To adjust the interval, navigate to **Loggers → `Logger Name`** and update the configuration for the relevant PID logger.

---

## DTC (Diagnostic Trouble Codes)

To expose DTCs over Modbus, you must allocate a block of registers: one register for the total DTC count, followed by one register per DTC slot.

#### Example

```yaml
registers:
  - register: 10
    redis_key: obd.dtc.count
    default_value: 0
  - register: 11
    redis_key: obd.dtc.0
    default_value: 0
  - register: 12
    redis_key: obd.dtc.1
    default_value: 0
  - register: 13
    redis_key: obd.dtc.2
    default_value: 0
  - register: 14
    redis_key: obd.dtc.3
    default_value: 0
  - register: 15
    redis_key: obd.dtc.4
    default_value: 0
```

#### DTC Encoding

DTC codes are encoded as integers using the following scheme:

| Category | Prefix | Example DTC | Encoded Value |
|:---:|:---:|:---:|:---:|
| Powertrain | P | P0301 | 10301 |
| Body | B | B1234 | 21234 |
| Chassis | C | C1234 | 31234 |
| Network | U | U9999 | 49999 |

- A value of `0` indicates an empty slot.
- The default maximum number of DTCs is **5**, which can be increased via the `max_dtcs` configuration option.

---

## Connecting a Modbus Client

Connect your Modbus client to the device's IP address on port `5020` (or whichever port you configured in Advanced Settings).

The following Modbus function codes are supported:

- **Function Code 3** — Read Holding Registers
- **Function Code 4** — Read Input Registers

Both function codes return the same register values.

#### Python Example

```python
from pymodbus.client.sync import ModbusTcpClient

client = ModbusTcpClient("192.168.4.1", port=5020)
client.connect()
result = client.read_holding_registers(0, 2, unit=1)
print(result.registers)  # [rpm, speed]
client.close()
```

---

## Full configuration example

```yaml
mode: tcp
host: 0.0.0.0
port: 5020

registers:
  - register: 0
    redis_key: obd.rpm
    default_value: 0
  - register: 1
    redis_key: obd.speed
    default_value: 0
  - register: 2
    redis_key: obd.coolant_temp
    default_value: 0

  - register: 10
    redis_key: obd.dtc.count
    default_value: 0
  - register: 11
    redis_key: obd.dtc.0
    default_value: 0
  - register: 12
    redis_key: obd.dtc.1
    default_value: 0
```
