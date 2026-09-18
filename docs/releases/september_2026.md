---
sidebar_position: 9960
id: september-2026
title: September 2026
supportedDevices: ['mini','cm4','pro','pro_case']
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />

---

# September 2026 Releases

## New Features

### Asset Types

*Where to find it: Configuration → Asset Types.*

You can now create and manage Asset Types and associate vehicles with a specific asset type. This makes it easier to organize your vehicles and identify them based on their type.

![Asset Types Table](/img/releases/september_2026/asset_types_updated.png)

:::Note
All asset type related changes (creating and editing) are available only to users with Account Administrator permission. Read more here: [User Permissions](https://docs.autopi.io/cloud/accounts/#modifying-user-permissions). 
:::

Read more about how to use this new functionality here: [Asset Types Guide](https://docs.autopi.io/cloud/fleet_management/configurations/asset-types/). 


### Terminology 

*Where to find it: Accounts → Terminology.*

On this page, you can customize wording for driving-related terms across the app and for the vehicle itself.  Select terms from dropdown options, or create custom terms.

![Terminology Tab](/img/releases/september_2026/terminology_updated.png)

### Vehicle avatar 

*Where to find it: Vehicles List → pick a Vehicle → Edit Vehicle → Avatar: upload.*

You can add a vehicle avatar image for your vehicle. Once the image is uploaded, it shows up on the Overview page. 

![Vehicle Avatar](/img/releases/september_2026/avatar_updated.png)


### Position map widget: show or hide event overlays

*Where to find it: Device/Vehicle → Dashboard → Position widget → Edit → Show event overlays.*

You can now choose whether events should be displayed on top of the position widget on the map. Simply disable this option if you prefer a cleaner map without event markers displayed on top of the position widget.

![Position Map Setting](/img/releases/september_2026/position_map.png)



### GPS filtering for smooth positions

*Where to find it: Device → Advanced Settings → Tracking → Stable Mode.*

GPS filtering now provides better calculation of smooth GPS positions, helping to reduce noise and inaccuracies in location data. This is particularly useful when your device is parked or stationary, where GPS signals can be unstable.

![GPS Filtering](/img/releases/september_2026/advanced_gps.png)

If your device is experiencing issues with GPS positions when parked or in similar conditions, we recommend the following settings:

* **Mode** - Stable (noise-reducing, LE910CX only).
* **Standstill Emit Distance** - 40.
* **Sog Moving Threshold** - 5.



### PGN logging support

*Where to find it: Device → Loggers → Create: PGN.*

PGN logging is now supported in the device logger. You can now create a PGN logger in addition to the existing PID and CAN loggers.

![PGN Logger](/img/releases/september_2026/pgn_logger.png)

### More information in CSV exports

*Where to find it: Vehicles List → pick a Vehicle →Dashboard → Download all data or Download CSV on widget.*

Dashboard CSV exports now include two additional columns:
* Widget – shows which dashboard widget the data comes from.
* Field name – shows the specific field the data represents.

This makes exported data easier to identify and work with.

![CSV Export Columns](/img/releases/september_2026/csv_export.png)


### More control over Redis buffering

*Where to find it: Device → Advanced Settings → System → Redis → Maxmemory.*

A new Redis setting gives you more control over how data is buffered in the system.

![Redis Buffering](/img/releases/september_2026/redis_memory.png)

---

For a full list of all changes, see the [**September 2026 Changelog**](../changelog/September_2026).
