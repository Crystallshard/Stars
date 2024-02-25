import React from "react";
import Data from '../../config/data.json'
import styled from "styled-components"
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import {
  shopBody,
} from "./shop.module.css";

//components
import Footer from '../../components/Footer/footer';
import ProductCard from '../../components/ProductCard/index';
// import Layout from "../../components/Layout/layout";


const Container = styled.div`
display: grid;
z-index: 0;
grid-gap: 50px 15px;
grid-template-columns: repeat(4, 1fr) ;
margin: 17vh auto 5vh;

@media (max-width: 1260px){
    grid-template-columns: repeat(3, 1fr) ;
}

@media (max-width: 1025px){
    grid-template-columns: repeat(2, 1fr) ;
}

@media (max-width: 730px){
    grid-template-columns: repeat(1, 1fr) ;
}
`


const ShopPage = ({ data }) => {

  const getProductImageData = (productImageName) => {
    // gets the images we sourced from our query
    const productImages = data.allImageSharp.nodes;

    // this finds the item in the images data we just queried
    // searches for an image with a filename containing the products "imageName"
    const matchingImageData = productImages.find(imageData => {
      // the source id from the query, its the filename with some added gibberish
      const originalSourceImageId = imageData.gatsbyImageData.images.fallback.src
      return originalSourceImageId.includes(productImageName);
    })

    // if it foudn the matching image, return the image data
    if (matchingImageData) {
      return getImage(matchingImageData);
    }

    throw new Error("Cannot find product image image!");
  }

  /* unchecks the size selection when returning to shop page */
  if (typeof window !== 'undefined') {
    sessionStorage.clear();
  }
  /* ^ */

  return (
    <>
      {/* <Layout> */}
        <body className={shopBody}>
          <Container>
            {Data.products.map(products => (
              <ProductCard key={products.id} product={products} imageData={getProductImageData(products.imageName)} />
            ))}
          </Container>
          <Footer />
        </body>
      {/* </Layout> */}
    </>
  )

}

export const query = graphql`
  query ShopImages {
    allImageSharp {
      nodes {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`

// Step 3: Export your component
export default ShopPage
