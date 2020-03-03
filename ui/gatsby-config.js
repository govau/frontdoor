'use strict'

module.exports = {
  proxy: {
    prefix: "/api",
    url: "http://localhost:5000",
  },
  siteMetadata: {
    title: 'Digital Sourcing for Government',
    description: 'Digital Sourcing for Government',
    keywords: 'digital sourcing government',
    siteUrl: 'https://digitalsourcing.gov.au/',
    author: {
      name: 'Sam',
      url: '',
      email: ''
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-61222473-29",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
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
        siteUrl: 'https://digitalsourcing.gov.au/'
      }
    },
    // 'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    // 'gatsby-plugin-sharp',
    // 'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        autoGenHomeLabel: `Home`,
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
        ],
        crumbLabelUpdates: [
          {
            pathname: '/buyer/products-and-services',
            crumbLabel: 'Buy products and services'
          },
          {
            pathname: '/seller/products-and-services',
            crumbLabel: 'Sell products and services'
          }
        ],
        useClassNames: false,
      }
    },
  ]
}
