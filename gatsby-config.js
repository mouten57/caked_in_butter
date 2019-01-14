const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Caked in Butter`,
    menuLinks: [
      {
        name: 'HOME',
        link: '/'
      },
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
    `gatsby-plugin-react-helmet`
  ]
};
