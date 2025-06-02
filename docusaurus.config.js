// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KYH - Typescript',
  tagline: 'Typesafe kodning inom JavaScript',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'sv',
    locales: ['sv'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'WEBB24 - Application Lifecycle Management',
        logo: {
          alt: 'WEBB24 - Application Lifecycle Management',
          src: 'img/logo_was.svg',
          srcDark: 'img/logo_was_dark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Kursmaterial',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Kursmaterial',
            items: [
              {
                label: 'Översikt',
                to: '/docs/course/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Will & Skill',
                href: 'https://willandskill.se',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WILL & SKILL.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  plugins: [
    ['./src/plugins/tailwind-config.js', {}],
  ],
};

export default config;
