const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Caked in Butter`,
    siteUrl: `https://www.cakedinbutter.com`,
    description: `For all the best baked goods.`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
};
