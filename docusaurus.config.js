module.exports = {
  title: 'AutoPi Documentation',
  tagline: 'Documentation and Guides for Cloud, Core and Devices',
  url: 'https://autopi-io.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'autopi-io', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'AutoPi Documentation',
      logo: {
        alt: 'AutoPi Docs Logo',
        src: 'static/img/logo_trans_doc.png',
      },
      items: [
        {
          to: 'docs/core/core-overview',
          label: 'AutoPi Core Docs',
          position: 'left',
        },
        {
          to: 'docs/cloud/cloud-overview',
          label: 'My AutoPi Cloud Docs',
          position: 'left',
        },
        {
          to: 'docs/guides/guides-overview',
          label: 'Guides',
          position: 'left',
        },
        {
          to: 'docs/device/device-overview',
          label: 'Device',
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
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
