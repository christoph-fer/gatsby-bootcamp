/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: 'Gatsby Bootcamp!',
    author: 'Christopher Fernandes'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-transition-link'
    // {
    //   resolve: "gatsby-plugin-transition-link",
    //   options: {
    //       layout: require.resolve(`./src/components/header.js`)
    //     }
    // }
  ],
}
