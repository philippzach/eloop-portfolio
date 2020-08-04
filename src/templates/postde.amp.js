import React from "react"
import { graphql } from "gatsby"
import Layout from '../layouts/de';

const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost
  return (
    <Layout>
    <React.Fragment>
      <h1>{data.title.text}</h1>
      <p>{data.date}</p>
      <p>{data.description}</p>
    </React.Fragment>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlugAMP($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
          html
        }
        date 
        description
      }
    }
  }
`