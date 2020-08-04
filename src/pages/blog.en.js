import React, { Component } from 'react'
import Layout from '../layouts/en'
import Helmet from 'react-helmet'
import Container from '../components/Container/containerfaq'
import title from '../components/Modules/title.module.css'
import Footer from '../components/Footer/footer_blacken'
import Subscribe from '../components/Section/subscribeformen'
//import PropTypes from 'prop-types';
import { graphql } from 'gatsby'
import Seo from '../components/Seo/page'

import BlogGrid from '../components/Blog/bloggriden'

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
            href="https://eloop.at/en/blog/"
          />
        </Helmet>
        <Seo
          title="The Eloop Blog on Mobility, Technology & Environment."
          desc="In the Eloop Blog section, you'll find articles on sharing economy, innovative mobility solutions, blockchain applications, and more"
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
        <Subscribe />
        <Container />
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
  query BlogQueryEn {
    posts: allPrismicPost(
      filter: { lang: { eq: "en-us" } }
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
