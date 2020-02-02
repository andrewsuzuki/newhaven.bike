module.exports = {
  siteMetadata: {
    title: `newhaven.bike`,
    description: `The landing page for cyclists in New Haven, CT.`,
    author: `Andrew Suzuki`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `newhaven.bike`,
        short_name: `newhaven.bike`,
        start_url: `/`,
        background_color: `#004173`,
        theme_color: `#004173`,
        display: `minimal-ui`,
        // icon: `src/images/icon.png`, // This path is relative to the root of the site. TODO favicon
      },
    },
  ],
}
