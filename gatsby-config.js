require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    defaultTitle: 'ELoop',
    titleAlt: ' · Electric Car Sharing in Vienna',
    defaultDescription: 'Affortable electric Carsharing in Vienna Downtown.',
    siteUrl: 'https://eloop.at',
    pathPrefix: '/',
    twitter: '',
    facebook: '',
    defaultBanner: '',
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
          },
          `gatsby-remark-lazy-load`,
        ]
      }
    },
    {
    resolve: `gatsby-plugin-minify`,
    options: {
      removeAttributeQuotes: true
      // ...
    }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `eloop`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Eloop',
        short_name: 'Eloop',
        start_url: '/',
        background_color: '#00e2b2',
        theme_color: '#fff',
        display: 'minimal-ui',
        icon: 'src/images/eloop-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: 'de',
        useLangKeyLayout: true,
      },
    },
    /*  {
      resolve: `gatsby-plugin-amp`,
      options: {
        canonicalBaseUrl: 'https://www.eloop.at/',
        components: [
          'amp-form',
          'amp-layout',
          'amp-img',
          'amp-social-share',
          'amp-sidebar',
          'amp-accordion',
        ],
        excludedPaths: ['/404*', '/'],
        pathIdentifier: '/amp/',
        relAmpHtmlPattern: '{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}',
        useAmpClientIdApi: true,
      },
    }, */
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.eloop.at',
        sitemap: 'https://www.eloop.at/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-sitemap`,
    // { resolve: `gatsby-plugin-styled-components`,
    //  options: { Add any options here },},
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    //
    //'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-tagmanager-fork`,
      options: {
        id: 'GTM-KP67NXR',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // Specify optional GTM environment details.
        //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
        //gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
      },
    }//,
    //'gatsby-plugin-offline',
    , 'gatsby-plugin-remove-serviceworker'
  ],
}
