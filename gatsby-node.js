const path = require("path")


exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"],
      },
    })
  }
  

  
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  
  if( node.internal.type === 'MarkdownRemark') {
    
      const slug = path.basename(node.fileAbsolutePath, '.md')
  
      createNodeField({
        node, 
        name: 'slug', 
        value: slug
      })
    }
  }

  module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const { data} = await graphql(`
        query {
            allMarkdownRemark {
                nodes {
                  frontmatter {
                    slug
                  }
                }
              }
        }
    `)

    data.allMarkdownRemark.nodes.forEach((node) => {
      createPage({
          component: blogTemplate,
          path: `/blog/${node.frontmatter.slug}`,
          context: {
              slug: node.frontmatter.slug
          }
      })
  })  
  
};