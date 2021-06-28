module.exports = {
  title: 'AutoPi Documentation',
  tagline: 'Documentation and Guides for AutoPi Cloud, Core and Devices',
  url: 'https://docs.autopi.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'autopi-io', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  trailingSlash: true,
  themeConfig: {
    algolia: {
      apiKey: '9f2c3a395a2ba729c5cfd5b8d443d4fd',
      indexName: 'autopi',
    },
    gtag: {      
      trackingID: 'G-DB2BZPKYN9',      
      anonymizeIP: false,
    },
    navbar: {
      logo: {
        alt: 'AutoPi Documentation Logo',
        src: 'img/logo_trans_doc.png',
        srcDark: 'img/logo_trans_doc_dark.png',
      },
      items: [
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
          to: 'guides/guides-intro',
          label: 'Guides',
          position: 'left',
        },
        {
          to: 'hardware/hardware-intro',
          label: 'Hardware',
          position: 'left',
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
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'AutoPi Community',
              href: 'https://community.autopi.io/',
            },
            {
              label: 'GitHub - AutoPi Core',
              href: 'https://github.com/autopi-io',
            },            
          ],
        },
        {
          title: 'Social',
          items: [           
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/autopi/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/autopi_io',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/autopi.io/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/autopi.io',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UCH50VR17emPVVfnIWlGMLig',
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
    'docusaurus-plugin-sass',
    '@docusaurus/plugin-google-gtag',
  ]
};
