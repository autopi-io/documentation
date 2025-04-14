---
id: local-api-overview
title: AutoPi Local API Overview
---

# AutoPi Local API Overview

The AutoPi Local API provides a set of REST endpoints to interact with your local AutoPi device. The API is typically accessible on port `9000` of the device.

---

## Authentication

### `POST /auth/login/`

Returns a static token and information about the local user and device.

**Curl Example:**

```bash
curl -X POST http://<device-ip>:9000/auth/login/
```

**Response:**

```json
{
  "token": "<jwt_token>",
  "user": {
    "pk": 0,
    "username": "local user",
    "has_devices": true,
    "is_local": true,
    "devices": [
      {
        "unit_id": "<uuid>",
        "display": "Local device"
      }
    ],
    "timezone": "UTC"
  }
}
```

---

## Device Info

### `GET /`

Returns the device's unique unit ID.

**Curl Example:**

```bash
curl http://<device-ip>:9000/
```

**Response:**

```json
{
  "unit_id": "<uuid>"
}
```

---

### `GET /dongle/devices/`

Returns a list of available local devices.

**Curl Example:**

```bash
curl http://<device-ip>:9000/dongle/devices/
```

**Response:**

```json
[
  {
    "unit_id": "<uuid>",
    "display": "Local device"
  }
]
```

---

## Log File Download

### `GET /download_log/?file=<filename>`

Downloads a specified log file from the device.

**Query Parameters:**

- `file`: Name of the log file to download (e.g., `syslog`, `salt/minion`)

**Curl Example:**

```bash
curl -O http://<device-ip>:9000/download_log/?file=syslog
```

---

## Command Execution

### `POST /dongle/<unit_id>/execute/`

Executes a structured command on the device.

:::tip 
The reason that you need the unit_id is because we need to make sure that the request is actually meant for that specific device when using the endpoint from another connected device, like when using the local configuration tool.


The unit_id can be retrieved one of the following ways 
A.	Calling the root route
```
GET localhost:9000
```

B.	Reading it from the file 
```
/etc/salt/minion_id
```
:::

**Request Body:**

```json
{
  "command": "cmd.run",
  "arg": ["ls", "-l"],
  "kwarg": {}
}
```

**Curl Example:**

```bash
curl -X POST http://<device-ip>:9000/dongle/<unit_id>/execute/ \
  -H "Content-Type: application/json" \
  -d '{"command": "cmd.run", "arg": ["ls", "-l"], "kwarg": {}}'
```

**Response:**

Returns the command output as JSON.

---

### `POST /dongle/<unit_id>/execute_raw/`

Executes a raw command string.

**Request Body:**

```json
{
  "command": "cmd.run ls -l"
}
```

**Curl Example:**

```bash
curl -X POST http://<device-ip>:9000/dongle/<unit_id>/execute_raw/ \
  -H "Content-Type: application/json" \
  -d '{"command": "cmd.run ls -l"}'
```

**Response:**

Returns the command output as JSON.

---

## APN Settings

### `GET /dongle/<unit_id>/settings/apn/`

Retrieves current APN settings.

**Curl Example:**

```bash
curl http://<device-ip>:9000/dongle/<unit_id>/settings/apn/
```

**Response:**

```json
{
  "apn": "internet",
  "user": "user",
  "pass": "pass",
  "pin": "0000",
  "mtu": 1280
}
```

---

### `PUT /dongle/<unit_id>/settings/apn/`

Updates the APN configuration.

**Request Body:**

```json
{
  "apn": "internet",
  "user": "user",
  "pass": "pass",
  "pin": "0000",
  "mtu": 1280
}
```

**Curl Example:**

```bash
curl -X PUT http://<device-ip>:9000/dongle/<unit_id>/settings/apn/ \
  -H "Content-Type: application/json" \
  -d '{"apn": "internet", "user": "user", "pass": "pass", "pin": "0000", "mtu": 1280}'
```

**Response:**

Returns the updated APN configuration.

---

## Error Responses

All endpoints return structured error responses if something goes wrong.

**Example:**

```json
{
  "error": "unit_id does not match the id configured on this device"
}
```

---
