const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulBlogPost {
        nodes {
          slug
          title
          publishedDate(formatString: "MMMM Do YYYYY")
          featuredImage {
            file {
              url
            }
            description
          }
          body {
            raw
            references {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  console.log(JSON.stringify(response));

  response.data.allContentfulBlogPost.nodes.forEach((blogData) => {
    createPage({
      path: `/blog/${blogData.slug}`,
      component: path.resolve(`./src/template/blogTemplate.tsx`),
      context: {
        blogDetails: blogData,
      },
    })
  })
}