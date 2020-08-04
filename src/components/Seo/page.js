import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const SeoPage = ({ title, desc, banner, pathname }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        buildTime,
        siteMetadata: {
          defaultTitle,
          titleAlt,
          defaultDescription,
          siteUrl,
          twitter,
          facebook,
          defaultBanner,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: desc || defaultDescription,
        image: banner || `${siteUrl}${defaultBanner}`,
        url: `${siteUrl}${pathname || '/'}`,
      }

      let schemaOrgJSONLD = [
        {
          '@context': 'http://schema.org',
          '@type': 'WebSite',
          '@id': seo.url,
          url: seo.url,
          name: seo.title,
          alternateName: titleAlt || '',
          logo: '',
        },
      ]

      return (
        <Helmet>
          {/* General tags
      Page Title. Maximum length 60-70 characters
      Page description. No longer than 155 characters.
       */}
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <meta
            name="image"
            content="https://eloop.at/assets/socialmedia-og.jpg"
          />
          {/* OpenGraph tags */}
          <meta property="og:url" content={seo.url} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          <meta
            property="og:image"
            content="https://eloop.at/assets/socialmedia-og.jpg"
          />
          <meta property="og:type" content="website" />
          {/* <meta property="fb:app_id" content={facebook} /> */}
          <meta property="fb:admins" content="1909615442604206" />
          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@eloopcarsharing" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.description} />
          <meta name="twitter:creator" content="@eloopcarsharing" />
          {/* <!-- Twitter summary card with large image must be at least 280x150px --> */}
          <meta
            name="twitter:image:src"
            content="https://eloop.at/assets/socialmedia-og.jpg"
          />
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgJSONLD)}
          </script>
        </Helmet>
      )
    }}
  />
)

export default SeoPage

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        defaultTitle
        titleAlt
        defaultDescription
        siteUrl
        pathPrefix
        twitter
        facebook
        defaultBanner
      }
    }
  }
`
