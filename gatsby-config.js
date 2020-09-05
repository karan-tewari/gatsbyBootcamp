/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata : {
    author:'Karan Tewari',
    title: 'Demo Project'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve:'gatsby-source-filesystem',
      options : {
        name:'src',
        path:`${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ],
}


