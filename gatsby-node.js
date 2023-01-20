const path = require("path")

const productJSON = require("./src/config/products.json") 
const productTemplate = path.resolve(`src/template/product.js`)

exports.createPages = async ({graphql, actions, reporter}) => {
  const { createPage } = actions

    productJSON.forEach(product => {
      createPage({
        path: `/products/${product.name}`,
        component: productTemplate,

        context: {
        pagePath:  `/products/${product.name}`,
        product, 
        },
      })
    })
    
  }