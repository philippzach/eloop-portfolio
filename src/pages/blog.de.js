import React, { Component } from 'react'
import Layout from '../layouts/de'
import Helmet from 'react-helmet'
import Container from '../components/Container/containerfaq'
import title from '../components/Modules/title.module.css'
import Footer from '../components/Footer/footer_black'
//import PropTypes from 'prop-types';
import { graphql } from 'gatsby'
import Seo from '../components/Seo/page'

import BlogGrid from '../components/Blog/bloggridde'

class Blog extends Component {
  render() {
    const {
      data: { posts },
      location,
    } = this.props
    return (
      <Layout>
        <Helmet>
          <link
            rel="alternate"
            hreflang="de"
            href="https://eloop.at/de/blog/"
          />
          <link
            rel="alternate"
            hreflang="en"
            href="https://eloop.at/en/blog/"
          />
          <link
            rel="alternate"
            hreflang="x-default"
            href="https://eloop.at/de/blog/"
          />
        </Helmet>
        <Seo
          title="Der Eloop Blog zum Thema Mobilität, Technologie & Umwelt"
          desc="Im Eloop Blog findest du Beiträge zu den Themen Sharing Economy, innovative Mobilitätslösungen, Blockchain Anwendungen und vieles mehr"
          pathname={location.pathname}
        />
        <div className={title.head}>
          <h1 className={title.heading}>Blog & News</h1>
        </div>
        <Container>
          <div>
            <BlogGrid posts={posts.edges} />
          </div>
        </Container>
        <Footer />
      </Layout>
    )
  }
}

export default Blog

/* Blog.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object.isRequired,
  }).isRequired,
}; */

export const pageQuery = graphql`
  query BlogQueryDe {
    posts: allPrismicPost(
      filter: { lang: { eq: "de-at" } }
      sort: { fields: [data___date], order: DESC }
    ) {
      edges {
        node {
          uid
          data {
            title {
              text
              html
            }
            headerimage {
              url
              alt
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            author {
              text
            }
            date
            description
          }
        }
      }
    }
  }
`
