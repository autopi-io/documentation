module.exports = {
  coreSidebar: {
    "Core": ['core/core-overview',
                                  
                  {
                  "type": "category",
                  "label": "Commands",
                  "items": ['core/commands/core-cmd-commands',
                            'core/commands/core-cmd-acc',
                            'core/commands/core-cmd-audio',
                            'core/commands/core-cmd-clock',
                            'core/commands/core-cmd-cloud',
                            'core/commands/core-cmd-dac',
                            'core/commands/core-cmd-ec2x',
                            'core/commands/core-cmd-fileutil',
                            'core/commands/core-cmd-hooklib',
                            'core/commands/core-cmd-hostapd',
                            'core/commands/core-cmd-log',
                            'core/commands/core-cmd-minionutil',
                            'core/commands/core-cmd-obd',
                            'core/commands/core-cmd-power',
                            'core/commands/core-cmd-qmi',
                            'core/commands/core-cmd-reactor',
                            'core/commands/core-cmd-rpi',
                            'core/commands/core-cmd-spm',
                            'core/commands/core-cmd-stn',
                            'core/commands/core-cmd-time',
                            'core/commands/core-cmd-tracking',
                            'core/commands/core-cmd-wifi'],
            },    
            {"type": "category",
            "label": "Power Management",
            "items":
              ['core/power/core-power',
              'core/power/core-power-high',
              'core/power/core-power-low'],
            },            
            {"type": "category",
            "label": "Returners",
            "items":
              ['core/returners/core-returners',
              'core/returners/core-returners-cloud',
              'core/returners/core-returners-event-result',
              'core/returners/core-returners-event'],
            },
            
            {"type": "category",
            "label": "Services",
            "items":
              ['core/services/core-services',
              'core/services/core-services-acc',
              'core/services/core-services-api',
              'core/services/core-services-audio',
              'core/services/core-services-cloud',
              'core/services/core-services-ec2x',
              'core/services/core-services-event',
              'core/services/core-services-obd',
              'core/services/core-services-spm',
              'core/services/core-services-tracking']
            }],  
  },
  cloudSidebar: {
    "Cloud": ['cloud/cloud-overview',                                    
                  'cloud/jobs/cloud-jobs',
                  'cloud/triggers/cloud-triggers',
                  'cloud/trips/cloud-trips',
                  {"type": "category",
                    "label": "Configuration",
                    "items":
                      ['cloud/configuration/cloud-config',
                      'cloud/configuration/cloud-config-acc',
                      'cloud/configuration/cloud-config-audio',
                      'cloud/configuration/cloud-config-bluetooth',
                      'cloud/configuration/cloud-config-api',
                      'cloud/configuration/cloud-config-obd',
                      'cloud/configuration/cloud-config-power',
                      'cloud/configuration/cloud-config-system',
                      'cloud/configuration/cloud-config-tracking',
                      'cloud/configuration/cloud-config-trip',
                      'cloud/configuration/cloud-config-update',
                      'cloud/configuration/cloud-config-wifi'],  
                      },
                      {"type": "category",
                      "label": "Events",
                      "items":  
                      ['cloud/events/cloud-events',
                      'cloud/events/cloud-events-system',
                      'cloud/events/cloud-events-vehicle'],   
                      }
            ]
  },
  guidesSidebar: {
    "Guides": ['guides/guides-overview',
    'guides/create-service-workers'  
            ]
  },
  deviceSidebar: {
    "Device": ['device/device-overview'  
            ]
  },
};
