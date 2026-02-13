module.exports = {
  title: 'AutoPi Documentation',
  tagline: 'Documentation and Guides for AutoPi Cloud, Core and Devices',
  url: 'https://docs.autopi.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/shared/favicon.ico',
  organizationName: 'autopi-io', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  trailingSlash: true,
  themeConfig: {
    image: 'img/shared/favicon-194x194.png',
    metadata: [
      { property: 'og:type', content: 'website' },
    ],
    algolia: {
      appId: '7BRH96O31B',
      apiKey: '6dfef04434e917765e1dd4f89e170e74',
      indexName: 'autopi',
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      logo: {
        alt: 'AutoPi Documentation Logo',
        src: 'img/shared/logo_trans_doc.png',
        srcDark: 'img/shared/logo_trans_doc_dark.png',
      },
      items: [
        {
          to: 'getting_started/autopi_tmu_cm4/',
          label: 'Getting Started',
          position: 'left',
        }, 
        {
          to: 'cloud/',
          label: 'Cloud',
          position: 'left',
        },
        {
          to: 'core/',
          label: 'Core',
          position: 'left',
        },                
        {
          to: 'hardware/',
          label: 'Hardware',
          position: 'left',
        },      
        {
          to: 'developer_guides/',
          label: 'Guides',
          position: 'left',
        },  
        {
          to: 'https://api.autopi.io/',
          label: 'API',
          position: 'left',          
        },
        {
          to: 'https://my.autopi.io/',
          label: 'My Cloud',
          position: 'right',
          className: 'cloud-btn',
        },
        {
          to: 'https://shop.autopi.io/',
          label: 'Shop',
          position: 'right',
          className: 'cta-btn'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'AutoPi.io',
          items: [
            {
              label: 'AutoPi.io',
              to: 'https://www.autopi.io',
            },
            {
              label: 'My AutoPi Cloud',
              to: 'https://my.autopi.io',
            },
            {
              label: 'Shop',
              to: 'https://shop.autopi.io',
            },
            {
              label: 'Search Documentation',
              to: 'https://docs.autopi.io/search/',
            },            
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub - AutoPi Core',
              to: 'https://github.com/autopi-io',
            },
          ],
        },
        {
          title: 'Social',
          items: [           
            {
              label: 'Reddit',
              to: 'https://www.reddit.com/r/autopi/',
            },       
            {
              label: 'LinkedIn',
              to: 'https://www.linkedin.com/company/autopi.io',
            },
            {
              label: 'Youtube',
              to: 'https://www.youtube.com/channel/UCH50VR17emPVVfnIWlGMLig',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AutoPi.io.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        gtag: {
          trackingID: 'G-DB2BZPKYN9',
          anonymizeIP: false,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: "https://github.com/autopi-io/documentation/edit/master/"
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: [
    ['./src/plugins/tailwind-config.js', {}],
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/getting_started/autopi_tmu_cm4/4g-internet-setup-troubleshooting/',
            from: '/guides/4g-internet-setup-troubleshooting/',
          },
          {
            to: '/getting_started/heavy_duty_vehicles/j1939-getting-started-guide/',
            from: '/guides/j1939-getting-started-guide/',
          },
          {
            to: '/getting_started/electric_vehicles/power-cycle-for-electric-vehicles/',
            from: '/guides/power-cycle-for-electric-vehicles/',
          },
          {
            to: '/getting_started/api/change-device-settings-from-api/',
            from: '/guides/api/how-to-change-your-devices-settings-from-api/',
          },
          {
            to: '/getting_started/api/export-data-from-api/',
            from: '/guides/api/how-to-export-data-from-api/',
          },
          {
            to: '/developer_guides/autopi-logs/',
            from: '/guides/autopi-logs/',
          },
          {
            to: '/developer_guides/configuring-mqtt/',
            from: '/guides/configuring-mqtt/',
          },
          {
            to: '/developer_guides/enabling_bluetooth_on_TMU_devices/',
            from: '/guides/enabling_bluetooth_on_TMU_devices/',
          },
          {
            to: '/developer_guides/enabling_uart_on_TMU_devices/',
            from: '/guides/enabling_uart_on_TMU_devices/',
          },          
          {
            to: '/developer_guides/how-to-ssh-to-your-device/',
            from: '/guides/how-to-ssh-to-your-device/',
          },
          {
            to: '/developer_guides/installing-a-camera-on-your-autopi/',
            from: '/guides/installing-a-camera-on-your-autopi/',
          },
          {
            to: '/developer_guides/jumpers/',
            from: '/guides/jumpers/',
          },
          {
            to: '/developer_guides/local-development-workflow/',
            from: '/guides/local-development-workflow/',
          },
          {
            to: '/developer_guides/reflashing-your-device/',
            from: '/guides/reflashing-your-device/',
          },
          {
            to: '/developer_guides/remotely-waking-up-your-device/',
            from: '/guides/remotely-waking-up-your-device/',
          },
          {
            to: '/developer_guides/rfid-integartion/',
            from: '/guides/rfid-integartion/',
          },
          {
            to: '/developer_guides/setting-up-docker/',
            from: '/guides/setting-up-docker/',
          },
          {
            to: '/developer_guides/setting-up-a-device-with-verizon-wireless/',
            from: '/guides/setting-up-our-device-with-verizon-wireless/',
          },
          {
            to: '/developer_guides/upgrading-your-raspberry-pi/',
            from: '/guides/upgrading-your-raspberry-pi/',
          },
          {
            to: '/developer_guides/using-the-autopi-with-an-external-power-supply/',
            from: '/guides/using-the-autopi-with-an-external-power-supply/',
          },
          {
            to: '/cloud/device_management/geofences/',
            from: '/cloud/geofences/',
          },
          {
            to: '/cloud/device_management/triggers/a-guide-to-triggers/',
            from: ['/guides/a-guide-to-triggers/', '/cloud/fleet/triggers/a-guide-to-triggers/'],
          },
          {
            to: '/cloud/device_management/triggers/fleet-wakeup/',
            from: ['/cloud/fleet/fleet-wakeup/', '/cloud/fleet/triggers/fleet-wakeup/'],
          },
          {
            to: '/cloud/device_management/dashboard/adding-a-new-widget-from-scratch/',
            from: '/guides/adding-a-new-widget-from-scratch/',
          },
          {
            to: '/cloud/device_management/cloud-jobs/',
            from: '/cloud/cloud-jobs/',
          },
          {
            to: '/cloud/device_management/software-updates/',
            from: '/cloud/user-manual/software-updates/',
          },
          {
            to: '/cloud/obd-ii/automatic-obd-logger-pausing/',
            from: '/guides/automatic-obd-logger-pausing/',
          },
          {
            to: '/cloud/obd_library/car-explorer-library-manual/',
            from: '/cloud/user-manual/car-explorer/car-explorer-library-manual/',
          },
          {
            to: '/cloud/obd_library/community_library/',
            from: '/guides/obd-ii/how-to-use-the-car-explorer-feature/',
          },
          {
            to: '/cloud/device_management/templates/',
            from: '/cloud/fleet/fleet-templates/',
          },
          {
            to: '/cloud/device_management/device-install-procedure/',
            from: '/cloud/fleet/device-install-procedure/',
          },
          {
            to: '/cloud/fleet_management/vehicles/trips/automatic-exports/',
            from: ['/cloud/trips/automatic-exports/', '/cloud/fleet/trips/automatic-exports/', '/cloud/fleet_management/trips/automatic-exports/'],
          },
          {
            to: '/cloud/fleet_management/vehicles/fleet-geofences/',
            from: '/cloud/fleet/geofences/',
          },
          {
            to: '/hardware/accessories/doip-install/',
            from: '/hardware/accessories/doip-hat/doip-install/',
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes('/getting_started/autopi_mini/')) {
            return [
              existingPath.replace('/getting_started/autopi_mini/', '/guides/Mini/'),
            ];
          }
          if (existingPath.includes('/getting_started/api/')) {
            return [
              existingPath.replace('/getting_started/api/', '/cloud/api/'),
              existingPath.replace('/getting_started/api/', '/guides/api/'),
            ];
          }
          if (existingPath.includes('/cloud/fleet_management/')) {
            return [
              existingPath.replace('/cloud/fleet_management/', '/cloud/fleet/'),
            ];
          }
          if (existingPath.includes('/cloud/device_management/events/')) {
            return [
              existingPath.replace('/cloud/device_management/events/', '/cloud/events/'),
            ];
          }
          if (existingPath.includes('/cloud/device_management/services/')) {
            return [
              existingPath.replace('/cloud/device_management/services/', '/guides/services/'),
            ];
          }
          if (existingPath.includes('/cloud/device_management/advanced_settings/autopi_tmu_cm4/')) {
            return [
              existingPath.replace('/cloud/device_management/advanced_settings/autopi_tmu_cm4/', '/cloud/configuration/TMU/'),
            ];
          }
          if (existingPath.includes('/cloud/device_management/advanced_settings/autopi_mini/')) {
            return [
              existingPath.replace('/cloud/device_management/advanced_settings/autopi_mini/', '/cloud/configuration/mini/'),
            ];
          }
          if (existingPath.includes('/cloud/obd-ii/')) {
            return [
              existingPath.replace('/cloud/obd-ii/', '/guides/obd-ii/'),
            ];
          }
          if (existingPath.includes('/hardware/legacy_devices/autopi_dongle/')) {
            return [
              existingPath.replace('/hardware/legacy_devices/autopi_dongle/', '/hardware/autopi_dongle/'),
            ];
          }
          if (existingPath.includes('/hardware/legacy_devices/autopi_dongle_gen3/')) {
            return [
              existingPath.replace('/hardware/legacy_devices/autopi_dongle_gen3/', '/hardware/autopi_dongle_gen3/'),
            ];
          }
          if (existingPath.includes('/hardware/legacy_devices/autopi_tmu_can_fd/')) {
            return [
              existingPath.replace('/hardware/legacy_devices/autopi_tmu_can_fd/', '/hardware/autopi_tmu_can_fd/'),
            ];
          }
          return undefined; 
        },
      },
    ]
  ]
};
