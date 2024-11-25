module.exports = {
  "sidebar": [
    "index", 
    {
      "Getting Started": [
        {
          "items": [
            "getting_started/autopi_tmu_cm4/guides-intro",
            "getting_started/autopi_tmu_cm4/4g-internet-setup-troubleshooting",
            "getting_started/autopi_tmu_cm4/cm4-data-troubleshooting",
          ],
          "label": "AutoPi TMU CM4",
          "type": "category"
        },
        {
          "items": [
            "getting_started/autopi_mini/mini-guides-intro",
            "getting_started/autopi_mini/create-mini-loggers",
            "getting_started/autopi_mini/mini-data-troubleshooting",
          ],
          "label": "AutoPi Mini",
          "type": "category"
        },
        {
          "items": [
            "getting_started/heavy_duty_vehicles/j1939-getting-started-guide",
          ],
          "label": "Heavy Duty Vehicles",
          "type": "category"
        },
        {
          "items": [
            "getting_started/electric_vehicles/electric-vehicles-intro",
            "getting_started/electric_vehicles/power-cycle-for-electric-vehicles",
          ],
          "label": "Electric Vehicles",
          "type": "category"
        },
        {
          "items": [
            "getting_started/api/api-intro",
            "getting_started/api/command-webhook-callbacks",
            "getting_started/api/change-device-settings-from-api",
            "getting_started/api/export-data-from-api",
            "getting_started/api/send-device-data-to-own-server"
          ],
          "label": "API",
          "type": "category"
        },       
      ],
      "Developer Guides": [  
        "developer_guides/how-to-use-bluepy-with-autopi-edge-devices",  
        "developer_guides/developer-guides-intro",
        "developer_guides/configuring-mqtt",
        "developer_guides/how-to-ssh-to-your-device",
        "developer_guides/local-development-workflow",
        "developer_guides/reflashing-your-device",
        "developer_guides/remotely-waking-up-your-device",
        "developer_guides/rfid-integartion",
        "developer_guides/upgrading-your-raspberry-pi",
        "developer_guides/jumpers",
        "developer_guides/installing-a-camera-on-your-autopi",
        "developer_guides/enabling_bluetooth_on_TMU_devices",
        "developer_guides/setting-up-a-device-with-verizon-wireless",
        "developer_guides/autopi-logs",
        "developer_guides/setting-up-docker",
        "developer_guides/using-the-autopi-with-an-external-power-supply",       
      ],
      "Cloud": [
        "cloud/cloud-intro",
        {
          "items": [
            "cloud/fleet_management/fleet-intro",
            "cloud/fleet_management/fleet-overview",
            {
              "items": [
                "cloud/fleet_management/vehicles/list",
                "cloud/fleet_management/vehicles/vehicle-details",
                "cloud/fleet_management/vehicles/fleet-geofences",
                "cloud/fleet_management/vehicles/fleet-groups",
                {
                  "items": [
                    "cloud/fleet_management/vehicles/trips/introduction",
                    "cloud/fleet_management/vehicles/trips/automatic-exports"
                  ],
                  "label": "Trips",
                  "type": "category"
                },
              ],
              "label": "Vehicles",
              "type": "category",
            },
            "cloud/fleet_management/locations",
            {
              "items": [
                "cloud/fleet_management/configurations/notification-channels",
                "cloud/fleet_management/configurations/vehicle-states",
              ],
              "label": "Configurations",
              "type": "category",
            },
          ],
          "label": "Fleet Management",
          "type": "category"
        },
        {
          "items": [
            "cloud/device_management/device-management-intro",
            "cloud/device_management/device-install-procedure",
            {
              "items": [
                "cloud/device_management/dashboard/dashboard-intro",
                "cloud/device_management/dashboard/adding-a-new-widget-from-scratch",
              ],
              "label": "Dashboard",
              "type": "category"
            },
            {
              "items": [
                "cloud/device_management/events/cloud-events-intro",
                "cloud/device_management/events/cloud-events-system",
                "cloud/device_management/events/cloud-events-vehicle"
              ],
              "label": "Events",
              "type": "category"
            },
            {
              "items": [
                "cloud/device_management/services/services-intro",
                "cloud/device_management/services/create-custom-returners",
                "cloud/device_management/services/create-custom-services",
                "cloud/device_management/services/create-custom-triggers",
                "cloud/device_management/services/create-custom-workers"
              ],
              "label": "Services",
              "type": "category"
            },
            "cloud/device_management/cloud-jobs",
            {
              "items": [
                {
                  "items": [
                    "cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-intro",
                    "cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-accelerometer",
                    "cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-alerts",
                    "cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-audio",
                    "cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-bluetooth",
                    "cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-charging-session",
                    "cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-cloud-storage",
                    "cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-docker",
                    "cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-key-fob",
                    "cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-mqtt",
                    "cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-obd",
                    "cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-power",
                    "cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-rfid",
                    "cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-system",
                    "cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-tracking",
                    "cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-trip",
                    "cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-update-release",
                    "cloud/device_management/advanced_settings/autopi_tmu_cm4/cloud-config-wifi"
                  ],
                  "label": "AutoPi TMU CM4",
                  "type": "category"
                },
                {
                  "items": [
                    "cloud/device_management/advanced_settings/autopi_mini/cloud-config-mini-intro"
                  ],
                  "label": "AutoPi Mini",
                  "type": "category"
                }
              ],
              "label": "Advanced Settings",
              "type": "category"
            },
            {
              "items": [
                "cloud/device_management/triggers/a-guide-to-triggers",
                "cloud/device_management/triggers/fleet-wakeup",
              ],
              "label": "Triggers",
              "type": "category"
            },
            "cloud/device_management/software-updates",
            "cloud/device_management/move-to-dedicated-environment",
            "cloud/device_management/geofences", 
            "cloud/device_management/nested-customers",
            "cloud/device_management/templates",
          ],
          "label": "Device Management",
          "type": "category"
        },
        {
          "items": [
            "cloud/obd-ii/obd-ii-intro",
            "cloud/obd-ii/can-bus-configuration",
            "cloud/obd-ii/create-pid-loggers",
            "cloud/obd-ii/create-can-signal-loggers",
            "cloud/obd-ii/debug-raw-pid-queries",
            "cloud/obd-ii/log-raw-can-messages",
            "cloud/obd-ii/using-the-can-bus-commands",
            "cloud/obd-ii/automatic-obd-logger-pausing",
          ],
          "label": "OBD-II",
          "type": "category"
        },
        {
          "items": [
            "cloud/obd_library/car-explorer-library-manual",
            "cloud/obd_library/community_library",
          ],
          "label": "OBD Library",
          "type": "category"
        },
        "cloud/accounts"
      ],
      "Core": [
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
      "Hardware": [
        "hardware/hardware-intro",
        {
          "items": [
            "hardware/accessories/accessories-intro",
            "hardware/accessories/doip-install",
            {
              "items": [
                "hardware/accessories/keyfob-hat/keyfob-intro",
                "hardware/accessories/keyfob-hat/keyfob-interface",
                "hardware/accessories/keyfob-hat/keyfob-hat-install",
                "hardware/accessories/keyfob-hat/keyfob-hat-pinout"
              ],
              "label": "Keyfob HAT",
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
            "hardware/autopi_tmu_cm4/replacing-cm4",
            "hardware/autopi_tmu_cm4/using-hat"
          ],
          "label": "AutoPi TMU CM4",
          "type": "category"
        },
        {
          "items": [
            "hardware/autopi_mini/autopi-mini-intro",
            "hardware/autopi_mini/device_specifications"
          ],
          "label": "AutoPi Mini",
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
          "label": "Socket CAN",
          "type": "category"
        },
        {
          "items": [
            {
              "items": [
                "hardware/legacy_devices/autopi_dongle/gen-2-intro",
                "hardware/legacy_devices/autopi_dongle/connection-overview",
                "hardware/legacy_devices/autopi_dongle/obd-connector-pinout",
                "hardware/legacy_devices/autopi_dongle/setup-your-gen-2-diy-edition",
                "hardware/legacy_devices/autopi_dongle/update-firmware-of-eg25-g-module",
                "hardware/legacy_devices/autopi_dongle/using-gpio-and-hdmi-with-the-gen-2",
                "hardware/legacy_devices/autopi_dongle/using-the-rpi3-adapter"
              ],
              "label": "AutoPi Dongle",
              "type": "category"
            },
            {
              "items": [
                "hardware/legacy_devices/autopi_dongle_gen3/gen-3-intro",
                "hardware/legacy_devices/autopi_dongle_gen3/connection-overview",
                "hardware/legacy_devices/autopi_dongle_gen3/developer-kit",
                "hardware/legacy_devices/autopi_dongle_gen3/installing-external-antennas",
                "hardware/legacy_devices/autopi_dongle_gen3/obd-connector-pinout",
                "hardware/legacy_devices/autopi_dongle_gen3/setup-your-tmu-diy-edition"
              ],
              "label": "AutoPi Dongle Gen3",
              "type": "category"
            },
            {
              "items": [
                "hardware/legacy_devices/autopi_tmu_can_fd/gen-3.5-intro",
                "hardware/legacy_devices/autopi_tmu_can_fd/connection-overview",
                "hardware/legacy_devices/autopi_tmu_can_fd/device_dimensions",
                "hardware/legacy_devices/autopi_tmu_can_fd/installing-external-antennas",
                "hardware/legacy_devices/autopi_tmu_can_fd/mounting_holes",
                "hardware/legacy_devices/autopi_tmu_can_fd/obd-connector-pinout"
              ],
              "label": "AutoPi TMU CAN-FD",
              "type": "category"
            },
          ],
          "label": "Legacy Devices",
          "type": "category"
        },
      ],
    },
    {
      "type": "link",
     "label": "API",
      "href": "https://api.autopi.io/"
    },
  ]
};
