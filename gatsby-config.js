const path = require(`path`);
const config = require('./data/Siteconfig');

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    title: config.siteTitle,
    author: config.siteTitle,
    description: config.description,
    copyright: config.copyright,
    menuLinks: [
      {
        name: 'ABOUT',
        link: '/about'
      },
      {
        name: 'CONTACT',
        link: '/contact'
      },
      {
        name: 'RECIPES',
        link: '/recipes'
      }
    ],
    siteUrl: `https://www.cakedinbutter.com`,
    description: `For all the best baked goods.`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: `content/assets/header-logo.png`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`
  ]
};
