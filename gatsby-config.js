module.exports = {
  siteMetadata: {
    siteUrl: "https://www.Stars.tld",
    title: "Stars",
    
  },
  plugins: [ 
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    // "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      }
    },
    /* Loads the images for products */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `${__dirname}/src/images/Clothing Images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `kapitalImages`,
        path: `${__dirname}/src/images/Clothing Images/Kapital-shirt-pictures`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto Sans Mono:300`,
          `source sans pro\:300,400,400i,700`
        ],
        display: 'swap'
      }
    },
    `gatsby-transformer-sharp`,
    "gatsby-plugin-mdx",
    `gatsby-transformer-remark`,
  ],
};
