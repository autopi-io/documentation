module.exports = {
    "cloudSidebar": [
        "cloud/cloud-intro",
        {
            "type": "category",
            "label": "Configuration",
            "items": [
                "cloud/configuration/cloud-config-intro",
                "cloud/configuration/cloud-config-accelerometer",
                "cloud/configuration/cloud-config-audio",
                "cloud/configuration/cloud-config-bluetooth",
                "cloud/configuration/cloud-config-cloud-storage",
                "cloud/configuration/cloud-config-docker",
                "cloud/configuration/cloud-config-key-fob",
                "cloud/configuration/cloud-config-mqtt",
                "cloud/configuration/cloud-config-obd",
                "cloud/configuration/cloud-config-power",
                "cloud/configuration/cloud-config-system",
                "cloud/configuration/cloud-config-tracking",
                "cloud/configuration/cloud-config-trip",
                "cloud/configuration/cloud-config-update-release",
                "cloud/configuration/cloud-config-wifi"
            ]
        },
        {
            "type": "category",
            "label": "Events",
            "items": [
                "cloud/events/cloud-events-intro",
                "cloud/events/cloud-events-system",
                "cloud/events/cloud-events-vehicle"
            ]
        },
        {
            "type": "category",
            "label": "Fleet",
            "items": [
                "cloud/fleet/fleet-intro",
                "cloud/fleet/fleet-overview",
                "cloud/fleet/fleet-wakeup",
                "cloud/fleet/fleet-templates"
            ]
        },
        "cloud/cloud-jobs",
        "cloud/cloud-triggers",
        "cloud/cloud-trips"
    ],
    "hardwareSidebar": [
        "hardware/hardware-intro",
        {
            "type": "category",
            "label": "Generation 2",
            "items": [
                "hardware/generation-2/gen-2-intro",
                "hardware/generation-2/connection-overview",
                "hardware/generation-2/setup-your-gen-2-diy-edition",
                "hardware/generation-2/update-firmware-of-eg25-g-module",
                "hardware/generation-2/using-gpio-and-hdmi-with-the-gen-2",
                "hardware/generation-2/using-the-rpi3-adapter"
            ]
        },
        {
            "type": "category",
            "label": "Generation 3",
            "items": [
                "hardware/generation-3/gen-3-intro",
                "hardware/generation-3/developer-kit",
                "hardware/generation-3/setup-your-tmu-diy-edition"
            ]
        }
    ],
    "guidesSidebar": [
        "guides/guides-intro",
        {
            "type": "category",
            "label": "Api",
            "items": [
                "guides/api/api-intro",
                "guides/api/how-to-export-data-from-api",
                "guides/api/send-device-data-to-own-server"
            ]
        },
        {
            "type": "category",
            "label": "Business",
            "items": [
                "guides/business/move-to-dedicated-environment"
            ]
        },
        {
            "type": "category",
            "label": "Services",
            "items": [
                "guides/services/create-service-workers",
                "guides/services/create-custom-service-returners",
                "guides/services/create-custom-service-triggers"
            ]
        },
        "guides/4g-internet-setup-troubleshooting",
        "guides/a-guide-to-triggers",
        "guides/adding-a-new-widget-from-scratch",
        "guides/autopi-logs",
        "guides/how-to-ssh-to-your-device",
        "guides/how-to-use-the-car-explorer-feature",
        "guides/install-camera-on-your-autopi",
        "guides/jumpers",
        "guides/log-raw-can-messages",
        "guides/reflashing-your-device",
        "guides/remotely-waking-up-your-device",
        "guides/setting-up-our-device-with-verizon-wireless",
        "guides/using-the-autopi-with-an-external-power-supply",
        "guides/using-the-can-bus-commands"
    ],
    "coreSidebar": [
        "core/core-intro",
        {
            "type": "category",
            "label": "Commands",
            "items": [
                "core/commands/core-commands-intro",
                "core/commands/core-commands-acc",
                "core/commands/core-commands-audio",
                "core/commands/core-commands-ble",
                "core/commands/core-commands-clock",
                "core/commands/core-commands-cloud",
                "core/commands/core-commands-dac",
                "core/commands/core-commands-ec2x",
                "core/commands/core-commands-fileutil",
                "core/commands/core-commands-hooklib",
                "core/commands/core-commands-hostapd",
                "core/commands/core-commands-keyfob",
                "core/commands/core-commands-log",
                "core/commands/core-commands-minionutil",
                "core/commands/core-commands-obd",
                "core/commands/core-commands-power",
                "core/commands/core-commands-qmi",
                "core/commands/core-commands-reactor",
                "core/commands/core-commands-rpi",
                "core/commands/core-commands-spm",
                "core/commands/core-commands-stn",
                "core/commands/core-cmd-time",
                "core/commands/core-commands-tracking",
                "core/commands/core-commands-wifi"
            ]
        },
        {
            "type": "category",
            "label": "Power Management",
            "items": [
                "core/power_management/core-power-intro",
                "core/power_management/core-power-high",
                "core/power_management/core-power-low"
            ]
        },
        {
            "type": "category",
            "label": "Returners",
            "items": [
                "core/returners/core-returners-intro",
                "core/returners/core-returners-cloud",
                "core/returners/core-returners-cloud-jsonl",
                "core/returners/core-returners-event",
                "core/returners/core-returners-event-result",
                "core/returners/core-returners-jsonl",
                "core/returners/core-returners-mqtt"
            ]
        },
        {
            "type": "category",
            "label": "Services",
            "items": [
                "core/services/core-services-intro",
                "core/services/core-services-acc-manager",
                "core/services/core-services-api-service",
                "core/services/core-services-audio-manager",
                "core/services/core-services-ble-manager",
                "core/services/core-services-cloud-manager",
                "core/services/core-services-ec2x-manager",
                "core/services/core-services-event-reactor",
                "core/services/core-services-key-fob-manager",
                "core/services/core-services-obd-manager",
                "core/services/core-services-spm-manager",
                "core/services/core-services-tracking-manager"
            ]
        }
    ]
};