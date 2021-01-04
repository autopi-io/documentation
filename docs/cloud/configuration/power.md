---
id: cloud-config-power
title: Power
---

## Battery

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| READ INTERVAL | How often should the battery voltage be read out and checked? Disabled if set to zero. | int | 5 | s |

#### Critical Level

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| VOLTAGE | Specifies the voltage threshold where the device should trigger the 'vehicle/battery/critical_level' event and then go into hibernation. To have any effect, this value must be greater than the safety cut-out voltage. | float | 12.3 | V |
| DURATION | How long should the specified voltage remain before triggering the 'vehicle/battery/critical_level' event. | int | 180 | s |

## Firmware

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| AUTO UPDATE | Automatic update of the firmware on the power management chip? | bool | True | - |
| VERSION | Version number of the power management firmware. | str | 1.1.1.0 | - |

## Modem

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| POWER SAVE | Put modem into lower power mode during sleep? When enabled it is no longer possible to wakup device on SMS. | bool | True | - |

## Safety Cut-Out

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| VOLTAGE | Specifies at what voltage the device will be forcibly powered off to prevent battery drain. It is never recommended to go below 12.1 volts, as it may damage the battery and shorten its life. | str | 12.20 | V |
| DURATION | How long time should the specified voltage remain before taking effect? It is important that this value is lower than any sleep timer period, otherwise the device can power down normally before this condition is met. | int | 240 | s |

## Sleep Timer

#### Event Driven

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| EVENT REGEX | On which event(s) should this sleep timer be enabled? | str | ^vehicle/engine/stopped | - |
| PERIOD | How long time after the event has triggered should the device go to sleep? | int | 1800 | s |
| INTERVAL | How long time should the device sleep before waking up again? | int | 3600 | s |
| DELAY | How long delay before the actual shutdown takes effect? | int | 10 | s |
| REASON | Explanatory reason for sleeping. | str | engine_stopped | - |

#### Inactivity After Sleep

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| PERIOD | When waking up after sleep, how long time will the device stay awake before going to sleep again? | int | 300 | s |
| INTERVAL | How long time should the device sleep before waking up again? | int | 7200 | s |
| DELAY | How long delay before the actual shutdown takes effect? | int | 10 | s |

#### Inactivity Fallback

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| PERIOD | How long time should the device stay awake until it is powered down due to inactivity? | int | 300 | s |
| INTERVAL | How long time should the device sleep before waking up again? | int | 7200 | s |
| DELAY | How long delay before the actual shutdown takes effect? | int | 10 | s |

#### Suppress

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| EVENT REGEX | Which event(s) should disable current sleep timers and prevent new ones from being enabled? | str | ^vehicle/engine/running | - |

## Wake Trigger

| Name | Description | Type | Default | Unit |
| ------ | ------ | ------ | ------ | ------ |
| VOLTAGE CHANGE | How much should the voltage change for the device to power up on engine start? Be careful about changing this parameter too much, as it could prevent your dongle from powering on. | str | +0.40 | V |
| VOLTAGE CHANGE DURATION | How long should the specified voltage change be observed before the device powers up on engine start? | int | 1000 | ms |
| VOLTAGE LEVEL | At what voltage level should the device power on? | - | >13.20 | V |
| VOLTAGE LEVEL DURATION | How long should the specified voltage level be observed before the device powers on? | int | 3 | s |
