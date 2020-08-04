const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pagesEn = await graphql(`
    {
      allPrismicPost(filter: { lang: { eq: "en-us" } }) {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  const pagesDe = await graphql(`
    {
      allPrismicPost(filter: { lang: { eq: "de-at" } }) {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  const templateDE = path.resolve('src/templates/postde.jsx')
  const templateEN = path.resolve('src/templates/posten.jsx')

  pagesEn.data.allPrismicPost.edges.forEach(edge => {
    createPage({
      path: `/en/blog/${edge.node.uid}`,
      component: templateEN,
      context: {
        uid: edge.node.uid,
      },
    })
    /*  createPage({
      path: `/en/blog/${edge.node.uid}/amp`,
      component: path.resolve('./src/templates/posten.amp.js'),
      context: {
        slug: edge.node.uid,
        uid: edge.node.uid,
      },
    }) */
  })

  pagesDe.data.allPrismicPost.edges.forEach(edge => {
    createPage({
      path: `/de/blog/${edge.node.uid}`,
      component: templateDE,
      context: {
        uid: edge.node.uid,
      },
    })
    /*  createPage({
      path: `/de/blog/${edge.node.uid}/amp`,
      component: path.resolve('./src/templates/postde.amp.js'),
      context: {
        slug: edge.node.uid,
        uid: edge.node.uid,
      },
    }) */
  })
}
