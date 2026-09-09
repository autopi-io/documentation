# Introduction

> <DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

---

This guide provides a comprehensive reference for returners, which are responsible for transferring command results, events, and other data from your device to specified systems and endpoints. Learn how to configure different returner types to route data to cloud storage, external systems, event handlers, and message brokers.

### Returner Types:
Returners enable flexible data routing to multiple destinations. The following returner types are available:

- **[Cloud Returner](https://docs.autopi.io/core/returners/core-returners-cloud/)** — transfer data directly to the AutoPi Cloud platform for storage and analysis.
- **[Cloud JSONL Returner](https://docs.autopi.io/core/returners/core-returners-cloud-jsonl/)** — export data to cloud storage in JSONL (JSON Lines) format for efficient data handling.
- **[Event Returner](https://docs.autopi.io/core/returners/core-returners-event/)** — route events to AutoPi Cloud event system for real-time processing and triggering.
- **[Event Result Returner](https://docs.autopi.io/core/returners/core-returners-event-result/)** — handle and return results from event-triggered actions.
- **[JSONL Returner](https://docs.autopi.io/core/returners/core-returners-jsonl/)** — export command results and data in JSONL format for external processing. 
- **[MQTT Returner](https://docs.autopi.io/core/returners/core-returners-mqtt/)** — stream device data and events to MQTT brokers for integration with IoT systems.

### Key features:
- Multiple returner types for different use cases.
- JSONL format support for structured data exchange.
- Cloud platform integration.
- Event and result handling.
- MQTT messaging support.
- Python support for custom returners.
- Flexible data routing to multiple endpoints.

:::tip
You can also create custom returners for specialized use cases. See [Creating Custom Returners](https://docs.autopi.io/cloud/device_management/services/create-custom-returners/) for detailed instructions on building your own returner solutions.
:::
