/**
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

 // Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const queryData = await graphql(`
      {
        allContentfulBlogPost(
          sort: { fields: createdAt, order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              title
              pathAlias
              shortDescription
              blogImage {
                gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
            }
          }
        }
      }
    `
  )

  if (queryData.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create blog-list pages
  const posts = queryData.data.allContentfulBlogPost.edges
  const postsPerPage = 2
  const numPages = Math.ceil(posts.length / postsPerPage)

  // Create the blog listing pages.
  createPage({
    path: '/blogs',
    component: path.resolve(__dirname, 'src/templates/blog-list.js'),
    context: {
      limit: 2,
      skip: 0,
    },
  })

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
      component: path.resolve("./src/templates/blog-list.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // Create each blog page.
  posts.forEach(({ node }) => {
    const alias = node.pathAlias;

    createPage({
      path: `/blog/${alias}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        alias: alias,
      }
    })
  });
}