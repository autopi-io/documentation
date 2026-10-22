---
sidebar_position: 9990
id: october-2026
title: October 2026
supportedDevices: ['mini','cm4','pro','pro_case']
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />

---

**Generated:** 2026-10-22

## Backend

### Backend 1.28.23

**Release Date:** 2026-10-21

#### Bug Fixes

- Changed uuid of tracking.logger.filtering.stable_mode.motion_veto, so it does not conflict with the previous version
- Only show obd.advanced.listen_only if enabled and supported by device core version

### Backend 1.28.22

**Release Date:** 2026-10-05

#### Features

- Enhance trip health checks with additional validations and refactor for clarity, and split the checks
- Extend trip closing logic with buffer handling and metadata recalculation

#### Bug Fixes

- Fixed issue where trip would sometimes not be extended properly when autoclosed due to missing stop event.

#### Other

- Dispatch update_trip_metadata_V2 at auto-complete sites and self-heal stale finalized trips
- Exclude the base trip from merge candidates
- Add extend_trip_with_buffer admin action
- Track end_time for COMPLETED trips too
- Increase failed count threshold from 2 to 30
- Align movement detection with trip evaluation
- Use local 10-min constant for max data gap
- Anchor the buffer window on the original close point
- Only CONSECUTIVE stationary time closes the cluster
- Count sog >= 1 km/h as movement

---

## Frontend

### Frontend 1.28.29

**Release Date:** 2026-10-20

#### Features

- Add new beta runtime tab with runtime/charging sessions
- Added runtime widget switch on asset_type and runtime/charging session tab
- Added trip tabs toggle to asset-type settings

#### Bug Fixes

- Fix state-timeline left and right margin so dates are not cut off
- Fix associate to busses logic - cold observable never fired so never associated to any bus
- Use correct pipe for date resolution in datepicker and set default period to "last month"

---

## Core

### Core 1.28.6

**Release Date:** 2026-10-21

#### Features

- Added `listen_only_mode` input param to `can_conn`
- Ensured default value for `listen_only` is available in settings for canconn
- Improved GNSS stable filter: driven by accelerometer instead of GPS-speed heuristics
- Refined standstill position and wait for motion event or timeout before emitting
- Converge parked anchor via cumulative median
- Only emit `spm.pin.configured` event when pin state changes

#### Bug Fixes

- Fixed listen only mode not being set correctly

---

**Looking for a summary?** View the [**October 2026 Release highlights**](/releases/october-2026) page.