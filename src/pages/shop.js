import React from "react";
import Layout from '../components/Layout/layout'
import ProductCard from '../components/ProductCard'
import styled, { createGlobalStyle }  from "styled-components"
import productJSON from "../config/products.json"
import { Link, graphql  } from "gatsby";
import { star, test } from "./shop.module.css";
import { StaticImage, getImage  } from "gatsby-plugin-image";
import Bag from '../components/Bag/bag'


const Container = styled.div`
display: grid;
position: relative;
top: 130px;
align-items: center;
z-index: 0;
grid-gap: 15px;
grid-template-columns: repeat(4, 1fr) ;
margin: 0px 0px 0px;
`


const Global = createGlobalStyle`
    body
    {
      ${'' /* min-height: 100vh;
      display: flex;
        margin: 0;       
        overflow-x: hidden; */}
}
`;

const ShopPage = ({ data, product }) => {
  
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

  return (
    <>
    <Global/>
    <body>
    
     <Link className={star} to="/">
            <StaticImage
              alt="Star"
              src="C:\Users\Kishon\Desktop\Stars website\src\images\stars.png"
              placeholder="blurred"
              layout="fixed"
              width={65}
              height={65}
            />
        </Link>

        <Bag /> 
        
    <Layout pageTitle="shop">
      <Container>
        {productJSON.map(product => (
          <ProductCard key={product.name} product={product} imageData={getProductImageData(product.imageName)} />
        ))}
      </Container>
    </Layout>
   
   </body>
   <footer className={test}>test</footer>
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
