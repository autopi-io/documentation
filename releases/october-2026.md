# October 2026

> <DeviceSupportBanner supported={frontMatter.supportedDevices} />

---

# October 2026 Releases

## New Features

### Listen-only mode for AutoPI TMU CM4 device 
*Where to find it:Device -> Advanced Settings -> OBD -> Listen Only*

Added support for CAN Listen-Only Mode on the AutoPi TMU CM4, configurable through Advanced Settings. When enabled, the entire device operates in passive listening mode, allowing it to monitor and receive CAN bus traffic without transmitting messages, sending requests, or actively participating in bus communication. This is particularly useful for monitoring and diagnostics where non-intrusive data collection is required, ensuring the device does not interfere with existing CAN bus communication.

![Listen-only Mode](/img/releases/september_2026/listen_only_mode.png)

:::note
Device needs to be updated to version `1.28.6` in order for you to see this advanced setting. 
:::

### Improved GPS filtering and position accuracy

*Where to find it: Device -> Advanced Settings -> Tracking* 

Enhanced GPS filtering provides smoother and more accurate positioning by reducing noise and inaccuracies in location data, particularly when a device is parked or stationary and GPS signals may fluctuate. An additional filtering layer now incorporates **accelerometer data** to detect changes in movement, helping to identify and calculate the most reliable GPS positions.

![Improved GPS Setting](/img/releases/september_2026/gps_improved_setting.png)

---

For a full list of all changes, see the [**October 2026 Changelog**](/changelog/october-2026).
