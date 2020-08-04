import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/en'
import Seo from '../components/Seo/article'
import Share from '../components/share.js'
import Container from '../components/Container/containerblog'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import ProgressBar from 'react-scroll-progress-bar'
import SliceZone from '../components/SliceZone'
import Disqus from 'disqus-react'
import Footer from '../components/Footer/footeren'
import './posts.css'

const ImageContainer = styled.header`
  background: #4adeb5ad;
  ${'' /* #00e2b2ed */}
  margin: 0;
  box-shadow: inset 0px 30px 106px -54px rgba(0, 0, 0, 0.62);
  text-align: center;
  width: 100%;
  @media (min-width: 600px) {
    height: 80vh;
    width: 100%;
  }
`
const Title = styled.h1`
  font-size: 5vh;
  padding-top: 1em;
  @media (min-width: 600px) {
    font-size: 7vh;
  }
`
const Description = styled.p`
  line-height: 1.5em;
`

const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost
  const DateString = new Date(data.date)
  let options = { year: 'numeric', month: 'long', day: 'numeric' }
  const PubDate = DateString.toLocaleDateString('en-US', options)
  const disqusShortname = 'eloop-1'
  const disqusConfig = {
    url: `https://eloop.at/en/blog/${prismicPost.uid}`,
    identifier: prismicPost.uid,
    title: data.title.text,
  }
  return (
    <Layout>
      <Seo
        title={data.title.text}
        description={data.description}
        banner={data.headerimage.url}
        author={data.author.text}
        pathname={`/en/blog/${prismicPost.uid}`}
        date={data.date}
      />
      <ProgressBar height="10px" bgcolor="#4adeb5" />
      <article>
        <ImageContainer>
          <Img
            className="postimage"
            fluid={data.headerimage.localFile.childImageSharp.fluid}
            alt={data.headerimage.alt}
          />
          <div className="headlines">
            <div>
              <Title>{data.title.text}</Title>
              <p>
                {PubDate} · by <b>{data.author.text}</b>
              </p>
              <Description>{data.description}</Description>
            </div>
          </div>
        </ImageContainer>
        <Share data={`https://eloop.at/en/blog/${prismicPost.uid}`} />
        <Container>
          <React.Fragment>
            <SliceZone allSlices={data.body} />
          </React.Fragment>
          <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
          <Footer />
        </Container>
      </article>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlugEn($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
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
              fluid(maxHeight: 800) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
        author {
          text
        }
        date
        description
        body {
          ... on PrismicPostBodyText {
            slice_type
            id
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicPostBodyQuote {
            slice_type
            id
            primary {
              quote {
                html
                text
              }
            }
          }
          ... on PrismicPostBodyImage {
            slice_type
            id
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
