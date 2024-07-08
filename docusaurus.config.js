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
    metadatas: [
      { property: 'og:type', content: 'website' },
    ],
    algolia: {
      appId: '7BRH96O31B',
      apiKey: '6dfef04434e917765e1dd4f89e170e74',
      indexName: 'autopi',
    },
    gtag: {      
      trackingID: 'G-DB2BZPKYN9',      
      anonymizeIP: false,
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
          to: 'getting_started/cm4/guides-intro',
          label: 'Getting Started',
          position: 'left',
        }, 
        {
          to: 'cloud/cloud-intro',
          label: 'Cloud',
          position: 'left',
        },
        {
          to: 'core/core-intro',
          label: 'Core',
          position: 'left',
        },                
        {
          to: 'hardware/hardware-intro',
          label: 'Hardware',
          position: 'left',
        },      
        {
          to: 'https://api.autopi.io/',
          label: 'API',
          position: 'left',          
        },
        {
          to: 'https://demo.autopi.io/',
          label: 'Online Demo',
          position: 'right',
          className: 'btn-primary cta-btn',
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
              label: 'AutoPi Demo Environment',
              to: 'https://demo.autopi.io'
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
              label: 'AutoPi Community',
              to: 'https://community.autopi.io/',
            },
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
              label: 'Twitter',
              to: 'https://twitter.com/autopi_io',
            },
            {
              label: 'Facebook',
              to: 'https://www.facebook.com/autopi.io/',
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
          trailingSlash: true,
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/getting_started/cm4/guides-intro/',
            from: '/guides/guides-intro/',
          },
          {
            to: '/getting_started/cm4/4g-internet-setup-troubleshooting/',
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
            to: '/getting_started/developer_guides/autopi-logs/',
            from: '/guides/autopi-logs/',
          },
          {
            to: '/getting_started/developer_guides/configuring-mqtt/',
            from: '/guides/configuring-mqtt/',
          },
          {
            to: '/getting_started/developer_guides/enabling_bluetooth_on_TMU_devices/',
            from: '/guides/enabling_bluetooth_on_TMU_devices/',
          },
          {
            to: '/getting_started/developer_guides/how-to-ssh-to-your-device/',
            from: '/guides/how-to-ssh-to-your-device/',
          },
          {
            to: '/getting_started/developer_guides/installing-a-camera-on-your-autopi/',
            from: '/guides/installing-a-camera-on-your-autopi/',
          },
          {
            to: '/getting_started/developer_guides/jumpers/',
            from: '/guides/jumpers/',
          },
          {
            to: '/getting_started/developer_guides/local-development-workflow/',
            from: '/guides/local-development-workflow/',
          },
          {
            to: '/getting_started/developer_guides/reflashing-your-device/',
            from: '/guides/reflashing-your-device/',
          },
          {
            to: '/getting_started/developer_guides/remotely-waking-up-your-device/',
            from: '/guides/remotely-waking-up-your-device/',
          },
          {
            to: '/getting_started/developer_guides/rfid-integartion/',
            from: '/guides/rfid-integartion/',
          },
          {
            to: '/getting_started/developer_guides/setting-up-docker/',
            from: '/guides/setting-up-docker/',
          },
          {
            to: '/getting_started/developer_guides/setting-up-a-device-with-verizon-wireless/',
            from: '/guides/setting-up-our-device-with-verizon-wireless/',
          },
          {
            to: '/getting_started/developer_guides/upgrading-your-raspberry-pi/',
            from: '/guides/upgrading-your-raspberry-pi/',
          },
          {
            to: '/getting_started/developer_guides/using-the-autopi-with-an-external-power-supply/',
            from: '/guides/using-the-autopi-with-an-external-power-supply/',
          },
          {
            to: '/cloud/fleet/geofences/',
            from: '/cloud/geofences/',
          },
          {
            to: '/cloud/fleet/triggers/a-guide-to-triggers/',
            from: '/guides/a-guide-to-triggers/',
          },
          {
            to: '/cloud/fleet/triggers/fleet-wakeup/',
            from: '/cloud/fleet/fleet-wakeup/',
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
            to: '/cloud/device_management/move-to-dedicated-environment/',
            from: '/guides/business/move-to-dedicated-environment/',
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
        ],
        createRedirects(existingPath) {
          if (existingPath.includes('/getting_started/mini/')) {
            return [
              existingPath.replace('/getting_started/mini/', '/guides/Mini/'),
            ];
          }
          if (existingPath.includes('/getting_started/api/')) {
            return [
              existingPath.replace('/getting_started/api/', '/cloud/api/'),
              existingPath.replace('/getting_started/api/', '/guides/api/'),
            ];
          }
          if (existingPath.includes('/cloud/fleet/trips/')) {
            return [
              existingPath.replace('/cloud/fleet/trips/', '/cloud/trips/'),
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
          if (existingPath.includes('/cloud/device_management/advanced_settings/TMU/')) {
            return [
              existingPath.replace('/cloud/device_management/advanced_settings/TMU/', '/cloud/configuration/TMU/'),
            ];
          }
          if (existingPath.includes('/cloud/device_management/advanced_settings/mini/')) {
            return [
              existingPath.replace('/cloud/device_management/advanced_settings/mini/', '/cloud/configuration/mini/'),
            ];
          }
          if (existingPath.includes('/cloud/obd-ii/')) {
            return [
              existingPath.replace('/cloud/obd-ii/', '/guides/obd-ii/'),
            ];
          }
          return undefined; 
        },
      },
    ]
  ]
};
