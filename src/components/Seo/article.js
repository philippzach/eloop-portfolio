import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const SeoArticle = ({ title, desc, banner, pathname, author, date }) => (
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
          pathPrefix,
          twitter,
          facebook,
          defaultBanner,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: desc || defaultDescription,
        image: banner || 'https://eloop.at/assets/socialmedia-og.jpg',
        url: `${siteUrl}${pathname || '/'}`,
      }

      let schemaOrgJSONLD = [
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          '@id': seo.url,
          url: seo.url,
          name: seo.title,
          alternateName: titleAlt || '',
          headline: seo.title,
          image: {
            '@type': 'ImageObject',
            url: seo.image,
          },
          description: seo.description,
          datePublished: date,
          dateModified: buildTime,
          author: {
            '@type': 'Person',
            name: author,
          },
          publisher: {
            '@type': 'Organization',
            name: author,
            logo: {
              '@type': 'ImageObject',
              url: siteUrl,
            },
          },
          isPartOf: siteUrl,
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': siteUrl,
          },
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
          <meta name="image" content={seo.image} />
          {/* OpenGraph tags */}
          <meta property="og:url" content={seo.url} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:image" content={seo.image} />
          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="ELOOP Carsharing" />
          <meta property="article:published_time" content={date} />
          <meta property="article:modified_time" content={buildTime} />
          <meta property="article:section" content="E-Mobility Vienna" />
          <meta property="article:tag" content="Carsharing E-Mobility Vienna" />
          <meta property="fb:admins" content="1909615442604206" />
          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@eloopcarsharing" />
          <meta name="twitter:title" content="Eloop E-Carsharing" />
          <meta name="twitter:description" content={seo.description} />
          <meta name="twitter:creator" content="@eloopcarsharing" />
          {/* <!-- Twitter summary card with large image must be at least 280x150px --> */}
          <meta name="twitter:image:src" content={seo.image} />
          {/* Schema.org markup for Google+ */}
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgJSONLD)}
          </script>
        </Helmet>
      )
    }}
  />
)

export default SeoArticle

const query = graphql`
  query SEOArticle {
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
