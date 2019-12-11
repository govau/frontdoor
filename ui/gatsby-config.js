'use strict'

module.exports = {
  proxy: {
    prefix: "/api",
    url: "http://api:5000",
  },
  siteMetadata: {
    title: 'Digital Sourcing Front Door',
    description: 'Digital Sourcing Front Door',
    keywords: 'digital sourcing',
    siteUrl: 'https://fd-rc.apps.y.cld.gov.au/',
    author: {
      name: 'Sam',
      url: '',
      email: ''
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://fd-rc.apps.y.cld.gov.au/'
      }
    },
    // 'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    // 'gatsby-plugin-sharp',
    // 'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    `gatsby-plugin-remove-trailing-slashes`
  ]
}
