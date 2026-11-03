# November 2026

> <DeviceSupportBanner supported={frontMatter.supportedDevices} />

---

## Backend

### Backend 1.28.24

**Release Date:** 2026-11-02

#### Features

- Add impact detection to motion events and update related configurations
- Add conditional visibility for motion event thresholds based on device release version

#### Bug Fixes

- Add asset type to the device viewset when resolving a device to a vehicle
- Remove unnecessary `select_related` usage in the health check configuration query
- Fix search in the OBD library
- Fix the incorrect error message shown when deleting a PGN that is still in use
- Update recent statistics to support devices without an associated vehicle
- Fix an issue where the driving state could be incorrect for AutoPi Mini devices

---

## Frontend

### Frontend 1.28.30

**Release Date:** 2026-11-02

#### Features

- Add XLSX export functionality and integrate download options for CSV and XLSX formats

#### Bug Fixes

- Use the asset type icon for recent vehicle positions and fall back to the vehicle icon only when no asset type icon is set
- Fix an issue where a PGN could not be associated with a bus
- Add a new `toUserTimezone` method

---

**Looking for a summary?** View the [**November 2026 Release highlights**](/releases/november-2026) page.
