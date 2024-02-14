const path = require("path")

const productJSON = require("./src/config/products.json") 
const productTemplate = path.resolve(`src/template/product.js`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({graphql, actions, reporter}) => {
  const { createPage } = actions

    productJSON.forEach(product => {
      createPage({
        path: `/products/${product.url}`,
        component: productTemplate,

        context: {
        pagePath:  `/products/${product.url}`,
        product, 
        },
      })
    })
    
  }