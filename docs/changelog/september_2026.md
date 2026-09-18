---
sidebar_position: 10000
id: september-2026
title: September 2026
supportedDevices: ['mini','cm4','pro','pro_case']
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />

---

# September 2026 Changelog

**Generated:** 2026-09-18


## Backend


### Backend 1.28.18

**Release Date:** 2026-09-09

#### Features

- Enhance logger data structure by adding source_id to improve signal identification

#### Bug Fixes

- Changed datafields to return logger id, min max in object. Also changed to exclude the unit fields
- Fixed issue causing raw query to return no data in certain situations
- Fixed naming issues in the datafields
- Enhance logger data structure with descriptions and improve name formatting
- Fixed issue with uuid identifier and added logger types to enhance data structure for loggers

### Backend 1.28.17

**Release Date:** 2026-09-02

#### Features

- Implement model merging functionality with UI support

#### Bug Fixes

- Fixed vehicle count on asset type not including non registered devices.
- Fixed issue where archive action could be done on an already archived device
- Fixed issue with tracking.last_driven.source
- Fixed issue where callback would fail due to incorrect type

### Backend 1.28.16

**Release Date:** 2026-09-01

#### Features

- Improve scheduled report email subject format
- Add range_interval_and_offset function for ES date_histogram params and update DataReadView to utilize it
- Parse ISO strings to datetime in range_interval_and_offset function
- Changed to skip certain invalid values per data parameter logger
- Add translation_overrides_vehicle_icon field to Customer model and serializer
- Add edition filtering to health check configurations and implement related tests
- Add device health summary reporting to Discord and implement related tests
- Enhance device health summary reporting with ASCII table and additional filters
- Update device health summary reporting with improved failure counts and links to detailed reports
- Restrict asset type assignment to AccountAdministrators in FleetVehicleSerializer
- Added min, max and use_logger_bounds parameters to the datareadview

#### Bug Fixes

- Added asset_type column in vehicle selection in groups and locations and changed asset_type field to be obj but support integer id as value.
- Changed to use correct cache TTL for queried keys in DataFields view
- Improve handling of cached JSON data in DataFields and event processing
- Enhance error message for asset type deletion to clarify vehicle association
- Rename migrations after rebase
- Added missing files
- Fixed issue in trip logic that could cause issues when attempting to merge trips.

#### Refactor

- Enhance inherited asset type check for customer ownership
- Streamline logger resolution in DataFields API view

---


## Frontend


### Frontend 1.28.26

**Release Date:** 2026-09-09

#### Bug Fixes

- Update trip address handling and improve display logic for locations
- Enhance address formatting to include county in location display
- Update logger field structure in StorageField and DataField interfaces to include source_id and type
- Update terminology for asset labels in settings garage component
- Update component names and improve address formatting in tests

### Frontend 1.28.25

**Release Date:** 2026-09-04

#### Bug Fixes

- Fixed issue where asset types and access control components was not centered.
- Fixed missing validation errors in location view
- Changed the device link in template device list to open in new tab
- Changed the datafields and dashboard generator to use new logger field on datafields response. Now logger bounds is only available for the fields where a logger is found, and it defaults to false.


---

**Looking for a summary?** View the [**September 2026 Release highlights**](../releases/September_2026) page.
