module.exports = {
    "deviceSidebar": {
        "Device": [
            "device/device-overview"
        ]
    },
    "cloudSidebar": {
        "Cloud": [
            "cloud/cloud-overview",
            {
                "type": "category",
                "label": "Jobs",
                "items": [
                    "cloud/jobs/cloud-jobs"
                ]
            },
            {
                "type": "category",
                "label": "Trips",
                "items": [
                    "cloud/trips/cloud-trips"
                ]
            },
            {
                "type": "category",
                "label": "Triggers",
                "items": [
                    "cloud/triggers/cloud-triggers"
                ]
            },
            {
                "type": "category",
                "label": "Configuration",
                "items": [
                    "cloud/configuration/cloud-config-power",
                    "cloud/configuration/cloud-config-bluetooth",
                    "cloud/configuration/cloud-config-accelerometer",
                    "cloud/configuration/cloud-config-obd",
                    "cloud/configuration/cloud-config-cloud-api",
                    "cloud/configuration/cloud-config-trip",
                    "cloud/configuration/cloud-config-update-release",
                    "cloud/configuration/cloud-config",
                    "cloud/configuration/cloud-config-system",
                    "cloud/configuration/cloud-config-tracking",
                    "cloud/configuration/cloud-config-mqtt",
                    "cloud/configuration/cloud-config-audio",
                    "cloud/configuration/cloud-config-wifi"
                ]
            },
            {
                "type": "category",
                "label": "Events",
                "items": [
                    "cloud/events/cloud-events-vehicle",
                    "cloud/events/cloud-events",
                    "cloud/events/cloud-events-system"
                ]
            }
        ]
    },
    "guidesSidebar": {
        "Guides": [
            "guides/create-service-workers",
            "guides/guides-overview"
        ]
    },
    "coreSidebar": {
        "Core": [
            "core/core-overview",
            {
                "type": "category",
                "label": "Services",
                "items": [
                    "core/services/core-services-audio-manager",
                    "core/services/core-services-api-service",
                    "core/services/core-services-event-reactor",
                    "core/services/core-services-spm-manager",
                    "core/services/core-services-key-fob-manager",
                    "core/services/core-services-cloud-manager",
                    "core/services/core-services-obd-manager",
                    "core/services/core-services-ec2x-manager",
                    "core/services/core-services-ble-manager",
                    "core/services/core-services",
                    "core/services/core-services-tracking-manager",
                    "core/services/core-services-acc-manager"
                ]
            },
            {
                "type": "category",
                "label": "Power Management",
                "items": [
                    "core/power_management/core-power-low",
                    "core/power_management/core-power-high",
                    "core/power_management/core-power"
                ]
            },
            {
                "type": "category",
                "label": "Returners",
                "items": [
                    "core/returners/core-returners-event",
                    "core/returners/core-returners",
                    "core/returners/core-returners-mqtt",
                    "core/returners/core-returners-event-result",
                    "core/returners/core-returners-cloud"
                ]
            },
            {
                "type": "category",
                "label": "Commands",
                "items": [
                    "core/commands/core-commands-power",
                    "core/commands/core-commands-acc",
                    "core/commands/core-commands-fileutil",
                    "core/commands/core-commands-log",
                    "core/commands/core-commands-rpi",
                    "core/commands/core-commands-hostapd",
                    "core/commands/core-commands-minionutil",
                    "core/commands/core-commands-ble",
                    "core/commands/core-commands-hooklib",
                    "core/commands/core-commands-dac",
                    "core/commands/core-commands-clock",
                    "core/commands/core-commands-keyfob",
                    "core/commands/core-commands-obd",
                    "core/commands/core-cmd-time",
                    "core/commands/core-commands-reactor",
                    "core/commands/core-commands-ec2x",
                    "core/commands/core-commands-qmi",
                    "core/commands/core-cmd-commands",
                    "core/commands/core-commands-tracking",
                    "core/commands/core-commands-audio",
                    "core/commands/core-commands-stn",
                    "core/commands/core-commands-spm",
                    "core/commands/core-commands-cloud",
                    "core/commands/core-commands-wifi"
                ]
            }
        ]
    }
};