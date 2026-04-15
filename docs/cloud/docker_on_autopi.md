---
id: docker-on-autopi
title: Docker
supportedDevices: ['cm4','pro','pro_case']
---
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

## What Is Docker Support on AutoPi?

AutoPi devices and the AutoPi Cloud natively support running **Docker containers** directly on the device. This means you can package any application, script, or service into a container image, push it to a registry, and deploy it to one or more AutoPi devices from the cloud — without physical access to the hardware.

The AutoPi Cloud acts as the control plane: it manages container **registries**, **projects**, and **releases**, and coordinates delivery and startup on target devices.

---

## Why Run Docker on an AutoPi Device?

AutoPi devices are edge computers installed in vehicles. They collect real-time data from the vehicle (CAN bus, GPS, OBD-II, sensors) and have network connectivity. Running Docker containers alongside the AutoPi core software lets you:

| Benefit | Description |
|---|---|
| **Edge processing** | Run computations on the vehicle instead of sending all raw data to the cloud, reducing bandwidth and latency. |
| **Custom integrations** | Deploy any software stack without modifying the AutoPi core system. |
| **Independent updates** | Update your application container independently of the AutoPi firmware. |
| **Isolation** | Containers are isolated from the host system, reducing the risk of conflicts. |
| **Reproducibility** | The same container image runs identically on every device in your fleet. |

---

## How It Works

The deployment flow uses three concepts in the AutoPi Cloud:

```
Docker Registry  →  Project  →  Release  →  Device
```

1. **Registry** — stores and authenticates access to your container images.
2. **Project** — groups related releases of your application.
3. **Release** — defines which image to run, with what configuration (environment variables, network mode, restart policy, etc.).
4. When a release is created, the AutoPi Cloud delivers it to the associated devices. The device applies the release at the next idle window (before sleep), or you can trigger it immediately using the `state.sls docker.release` command.

---

## Example Use Cases

### 1. MQTT Data Bridge

If you want to forward vehicle data to your own MQTT broker without changing the AutoPi returner configuration, you can run a lightweight bridge container:

```python
{
  "version": "1.0.0",
  "containers": [
    {
      "name": "mqtt-bridge",
      "image": "my-registry/mqtt-bridge",
      "tag": "latest",
      "startup_parameters": {
        "network_mode": "host",
        "restart_policy": "always",
        "environment": [
          "BROKER_HOST=broker.example.com",
          "BROKER_PORT=1883",
          "TOPIC_PREFIX=fleet/vehicle-1"
        ]
      }
    }
  ]
}
```

`network_mode: host` is recommended here so the container can reach the AutoPi's local interfaces (CAN, GPS socket, etc.) without extra network configuration.

---

### 2. AI / ML Edge Inference

Deploy a TensorFlow Lite or ONNX model container that runs inference on sensor data locally on the device:

```python
{
  "version": "2.0.0",
  "containers": [
    {
      "name": "anomaly-detector",
      "image": "my-registry/anomaly-detector",
      "tag": "v2.1",
      "startup_parameters": {
        "network_mode": "host",
        "restart_policy": "on-failure",
        "environment": [
          "MODEL_PATH=/models/anomaly_v2.tflite",
          "CONFIDENCE_THRESHOLD=0.85"
        ]
      }
    }
  ]
}
```

The container can read from a local socket or shared volume that the AutoPi core writes vehicle data to, and publish results back — keeping heavy computation at the edge.

---

### 3. Custom Data Processing Pipeline

Run a Python or Node.js service that transforms, filters, or enriches raw CAN/OBD data before forwarding it to your backend:

```python
{
  "version": "1.2.0",
  "containers": [
    {
      "name": "data-processor",
      "image": "my-registry/data-processor",
      "tag": "1.2",
      "startup_parameters": {
        "network_mode": "host",
        "restart_policy": "always",
        "environment": [
          "UPSTREAM_API=https://api.example.com/ingest",
          "API_KEY=<your-api-key>",
          "FILTER_SIGNALS=rpm,speed,throttle"
        ]
      }
    }
  ]
}
```

---

### 4. Fleet-Wide Simultaneous Deployment

Because releases are tied to a **project** that can include multiple devices, you can roll out the same container across your entire fleet at once from the AutoPi Cloud UI — or trigger it immediately via the API:

```
POST /docker/projects/{project_pk}/releases/
```

Then trigger deployment to all devices in the project:

```
state.sls docker.release
```

---

## Hardware Requirements

Docker support is available on the following AutoPi devices:

- **AutoPi TMU CM4**
- **AutoPi CAN-FD Pro**
- **AutoPi CAN-FD Pro + IP67 Casing**

:::note
Docker support is an optional add-on. Contact **sales@autopi.io** to enable it on your account. After that, enable Docker in **Advanced Settings → Docker** for each individual device in the AutoPi Cloud.
:::

---

## Next Steps

Ready to deploy your first container? The step-by-step setup guide walks you through creating a registry, project, and release in detail:
[**Setting Up Docker on Your Device**](https://docs.autopi.io/developer_guides/setting-up-docker/)

For questions or help, reach out at [support@autopi.io](mailto:support@autopi.io).
