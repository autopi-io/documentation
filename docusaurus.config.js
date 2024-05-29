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
    image: 'img/favicon-194x194.png',
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
      disableSwitch: true,
      respectPrefersColorScheme: false,
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
          to: 'hardware/hardware-intro',
          label: 'Hardware',
          position: 'left',
        },
        {
          to: 'guides/guides-intro',
          label: 'Guides',
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
  ]
};
