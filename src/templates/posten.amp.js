import React from 'react'
import { graphql } from 'gatsby'
//import Layout from '../layouts/en';
import Navbar from '../components/Amp/navbaramp'
import Seo from '../components/Seo/article'
import Share from '../components/Amp/shareamp.js'
import Container from '../components/Container/containerblog'
import styled from '@emotion/styled'
import SliceZone from '../components/SliceZone'
import './posts.css'

const ImageContainer = styled.header`
  background: #00e2b2ad;
  margin: 0;
  box-shadow: inset 0px 30px 106px -54px rgba(0, 0, 0, 0.62);
  text-align: center;
  @media (min-width: 600px) {
    height: 80vh;
    width: 100vw;
  }
`
const Title = styled.h1`
  font-size: 5vh;
  @media (min-width: 600px) {
    font-size: 7vh;
  }
`

const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost
  const DateString = new Date(data.date)
  let options = { year: 'numeric', month: 'long', day: 'numeric' }
  const PubDate = DateString.toLocaleDateString('en-US', options)
  return (
    <div>
      <Navbar />
      <Seo
        title={data.title.text}
        description={data.description}
        banner={data.headerimage.url}
        author={data.author.text}
        pathName={`/en/blog/amp/${prismicPost.uid}`}
        date={data.date}
      />
      <article>
        <ImageContainer>
          <amp-img
            class="postimageamp"
            src-set={
              'https://eloop.at' +
              data.headerimage.localFile.childImageSharp.fluid.srcSet
            }
            src={
              'https://eloop.at' +
              data.headerimage.localFile.childImageSharp.fluid.src
            }
            width={
              data.headerimage.localFile.childImageSharp.fluid.presentationWidth
            }
            height={
              data.headerimage.localFile.childImageSharp.fluid
                .presentationHeight
            }
            alt={data.headerimage.alt}
            layout="intrinsic"
          />

          <div className="headlines">
            <div>
              <Title>{data.title.text}</Title>
              <p>
                {PubDate} · by <b>{data.author.text}</b>
              </p>
              <p>{data.description}</p>
            </div>
          </div>
        </ImageContainer>
        <Share data={`https://eloop.at/en/blog/amp/${prismicPost.uid}`} />
        <Container>
          <React.Fragment>
            <SliceZone allSlices={data.body} />
          </React.Fragment>
        </Container>
      </article>
    </div>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlugEnAMP($uid: String!) {
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
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
                presentationWidth
                presentationHeight
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
