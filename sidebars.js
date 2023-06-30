module.exports = {
    "cloudSidebar": [
        "cloud/cloud-intro",
        {
            "items": [
                "cloud/api/api-intro",
                "cloud/api/command-webhook-callbacks"
            ],
            "label": "API",
            "type": "category"
        },
        {
            "items": [
                "cloud/configuration/cloud-config-intro",
                "cloud/configuration/cloud-config-accelerometer",
                "cloud/configuration/cloud-config-alerts",
                "cloud/configuration/cloud-config-audio",
                "cloud/configuration/cloud-config-bluetooth",
                "cloud/configuration/cloud-config-charging-session",
                "cloud/configuration/cloud-config-cloud-storage",
                "cloud/configuration/cloud-config-docker",
                "cloud/configuration/cloud-config-key-fob",
                "cloud/configuration/cloud-config-mqtt",
                "cloud/configuration/cloud-config-obd",
                "cloud/configuration/cloud-config-power",
                "cloud/configuration/cloud-config-rfid",
                "cloud/configuration/cloud-config-system",
                "cloud/configuration/cloud-config-tracking",
                "cloud/configuration/cloud-config-trip",
                "cloud/configuration/cloud-config-update-release",
                "cloud/configuration/cloud-config-wifi"
            ],
            "label": "Configuration",
            "type": "category"
        },
        {
            "items": [
                "cloud/events/cloud-events-intro",
                "cloud/events/cloud-events-system",
                "cloud/events/cloud-events-vehicle"
            ],
            "label": "Events",
            "type": "category"
        },
        {
            "items": [
                "cloud/fleet/fleet-intro",
                "cloud/fleet/fleet-overview",
                "cloud/fleet/fleet-wakeup",
                "cloud/fleet/fleet-templates"
            ],
            "label": "Fleet",
            "type": "category"
        },
        {
            "items": [
                "cloud/trips/introduction",
                "cloud/trips/automatic-exports"
            ],
            "label": "Trips",
            "type": "category"
        },
        {
            "items": [
                "cloud/user-manual/user-manual-intro",
                {
                    "items": [
                        "cloud/user-manual/car-explorer/car-explorer-library-manual"
                    ],
                    "label": "Car Explorer",
                    "type": "category"
                },
                "cloud/user-manual/software-updates"
            ],
            "label": "User Manual",
            "type": "category"
        },
        "cloud/geofences",
        "cloud/cloud-jobs",
        "cloud/cloud-triggers"
    ],
    "coreSidebar": [
        "core/core-intro",
        {
            "items": [
                "core/commands/core-commands-intro",
                "core/commands/core-commands-acc",
                "core/commands/core-commands-audio",
                "core/commands/core-commands-avrdude",
                "core/commands/core-commands-ble",
                "core/commands/core-commands-bluetooth",
                "core/commands/core-commands-can",
                "core/commands/core-commands-clock",
                "core/commands/core-commands-cloud",
                "core/commands/core-commands-crypto",
                "core/commands/core-commands-cryptoauth",
                "core/commands/core-commands-dac",
                "core/commands/core-commands-ec2x",
                "core/commands/core-commands-fileutil",
                "core/commands/core-commands-gnss",
                "core/commands/core-commands-hooklib",
                "core/commands/core-commands-hostapd",
                "core/commands/core-commands-keyfob",
                "core/commands/core-commands-log",
                "core/commands/core-commands-minionutil",
                "core/commands/core-commands-modem",
                "core/commands/core-commands-mosquitto",
                "core/commands/core-commands-obd",
                "core/commands/core-commands-openocd",
                "core/commands/core-commands-power",
                "core/commands/core-commands-qmi",
                "core/commands/core-commands-reactor",
                "core/commands/core-commands-rfid",
                "core/commands/core-commands-rpi",
                "core/commands/core-commands-socketcan",
                "core/commands/core-commands-spm",
                "core/commands/core-commands-stn",
                "core/commands/core-cmd-time",
                "core/commands/core-commands-tracking",
                "core/commands/core-commands-usbutil",
                "core/commands/core-commands-wifi"
            ],
            "label": "Commands",
            "type": "category"
        },
        {
            "items": [
                "core/power_management/core-power-intro",
                "core/power_management/core-power-high",
                "core/power_management/core-power-low",
                "core/power_management/core-power-sleep-timers"
            ],
            "label": "Power Management",
            "type": "category"
        },
        {
            "items": [
                "core/returners/core-returners-intro",
                "core/returners/core-returners-cloud",
                "core/returners/core-returners-cloud-jsonl",
                "core/returners/core-returners-event",
                "core/returners/core-returners-event-result",
                "core/returners/core-returners-jsonl",
                "core/returners/core-returners-mqtt"
            ],
            "label": "Returners",
            "type": "category"
        },
        {
            "items": [
                "core/services/core-services-intro",
                "core/services/core-services-acc-manager",
                "core/services/core-services-api-service",
                "core/services/core-services-audio-manager",
                "core/services/core-services-ble-manager",
                "core/services/core-services-can-manager",
                "core/services/core-services-cloud-manager",
                "core/services/core-services-crypto-manager",
                "core/services/core-services-ec2x-manager",
                "core/services/core-services-event-reactor",
                "core/services/core-services-gnss-manager",
                "core/services/core-services-key-fob-manager",
                "core/services/core-services-modem-manager",
                "core/services/core-services-obd-manager",
                "core/services/core-services-process-manager",
                "core/services/core-services-rfid-manager",
                "core/services/core-services-spm-manager",
                "core/services/core-services-tracking-manager"
            ],
            "label": "Services",
            "type": "category"
        }
    ],
    "guidesSidebar": [
        "guides/guides-intro",
        {
            "items": [
                "guides/api/how-to-change-your-devices-settings-from-api",
                "guides/api/how-to-export-data-from-api",
                "guides/api/send-device-data-to-own-server"
            ],
            "label": "API",
            "type": "category"
        },
        {
            "items": [
                "guides/business/move-to-dedicated-environment"
            ],
            "label": "Business",
            "type": "category"
        },
        {
            "items": [
                "guides/obd-ii/obd-ii-intro",
                "guides/obd-ii/create-can-signal-loggers",
                "guides/obd-ii/create-pid-loggers",
                "guides/obd-ii/debug-raw-pid-queries",
                "guides/obd-ii/how-to-use-the-car-explorer-feature",
                "guides/obd-ii/log-raw-can-messages",
                "guides/obd-ii/using-the-can-bus-commands"
            ],
            "label": "OBD-II",
            "type": "category"
        },
        {
            "items": [
                "guides/services/services-intro",
                "guides/services/create-custom-returners",
                "guides/services/create-custom-services",
                "guides/services/create-custom-triggers",
                "guides/services/create-custom-workers"
            ],
            "label": "Services",
            "type": "category"
        },
        "guides/4g-internet-setup-troubleshooting",
        "guides/a-guide-to-triggers",
        "guides/adding-a-new-widget-from-scratch",
        "guides/autopi-logs",
        "guides/configuring-mqtt",
        "guides/enabling_bluetooth_on_TMU_devices",
        "guides/how-to-ssh-to-your-device",
        "guides/installing-a-camera-on-your-autopi",
        "guides/j1939-getting-started-guide",
        "guides/jumpers",
        "guides/local-development-workflow",
        "guides/power-cycle-for-electric-vehicles",
        "guides/reflashing-your-device",
        "guides/remotely-waking-up-your-device",
        "guides/rfid-integartion",
        "guides/setting-up-docker",
        "guides/setting-up-our-device-with-verizon-wireless",
        "guides/upgrading-your-raspberry-pi",
        "guides/using-the-autopi-with-an-external-power-supply"
    ],
    "hardwareSidebar": [
        "hardware/hardware-intro",
        {
            "items": [
                "hardware/accessories/accessories-intro",
                {
                    "items": [
                        "hardware/accessories/keyfob-hat/keyfob-intro",
                        "hardware/accessories/keyfob-hat/keyfob-interface",
                        "hardware/accessories/keyfob-hat/keyfob-hat-install",
                        "hardware/accessories/keyfob-hat/keyfob-hat-pinout"
                    ], 
                    "label": "Keyfob Hat",
                    "type": "category"
                },
                {
                    "items": [
                        "hardware/accessories/doip-hat/doip-intro",
                        "hardware/accessories/doip-hat/doip-install",
                    ],
                    "label": "DOIP Hat",
                    "type": "category"
                },
                "hardware/accessories/device_mounts"
            ],
            "label": "Accessories",
            "type": "category"  
        },
        {
            "items": [
                "hardware/autopi_tmu_cm4/autopi-cm4-intro",
                "hardware/autopi_tmu_cm4/device_dimensions",
                "hardware/autopi_tmu_cm4/device_specifications",
                "hardware/autopi_tmu_cm4/installing_external_antennas",
                "hardware/autopi_tmu_cm4/installing-heatsink",
                "hardware/autopi_tmu_cm4/led-and-button",
                "hardware/autopi_tmu_cm4/mounting_holes",
                "hardware/autopi_tmu_cm4/obd-connector-pinout",
                "hardware/autopi_tmu_cm4/using-hat",
                "hardware/autopi_tmu_cm4/replacing-cm4"
            ],
            "label": "AutoPi TMU CM4",
            "type": "category"
        },
        {
            "items": [
                "hardware/autopi_tmu_socketcan/SocketCAN-intro",
                "hardware/autopi_tmu_socketcan/connection-overview",
                "hardware/autopi_tmu_socketcan/device_dimensions",
                "hardware/autopi_tmu_socketcan/installing_external_antennas",
                "hardware/autopi_tmu_socketcan/mounting_holes",
                "hardware/autopi_tmu_socketcan/obd-connector-pinout"
            ],
            "label": "AutoPi TMU SocketCAN",
            "type": "category"
        },
        {
            "items": [
                "hardware/autopi_tmu_can_fd/gen-3.5-intro",
                "hardware/autopi_tmu_can_fd/connection-overview",
                "hardware/autopi_tmu_can_fd/device_dimensions",
                "hardware/autopi_tmu_can_fd/installing-external-antennas",
                "hardware/autopi_tmu_can_fd/mounting_holes",
                "hardware/autopi_tmu_can_fd/obd-connector-pinout"
            ],
            "label": "AutoPi TMU CAN-FD",
            "type": "category"
        },
        {
            "items": [
                "hardware/autopi_dongle_gen3/gen-3-intro",
                "hardware/autopi_dongle_gen3/connection-overview",
                "hardware/autopi_dongle_gen3/developer-kit",
                "hardware/autopi_dongle_gen3/installing-external-antennas",
                "hardware/autopi_dongle_gen3/obd-connector-pinout",
                "hardware/autopi_dongle_gen3/setup-your-tmu-diy-edition"
            ],
            "label": "AutoPi Dongle Gen3",
            "type": "category"
        },
        {
            "items": [
                "hardware/autopi_dongle/gen-2-intro",
                "hardware/autopi_dongle/connection-overview",
                "hardware/autopi_dongle/obd-connector-pinout",
                "hardware/autopi_dongle/setup-your-gen-2-diy-edition",
                "hardware/autopi_dongle/update-firmware-of-eg25-g-module",
                "hardware/autopi_dongle/using-gpio-and-hdmi-with-the-gen-2",
                "hardware/autopi_dongle/using-the-rpi3-adapter"
            ],
            "label": "AutoPi Dongle",
            "type": "category"
        }
    ]
};
