import styled from "styled-components";
import React from "react";

import {
    bagOpacity,
    innerNavList,
    theBag,
    bagHeader,
    bagTitle,
    headerDivider,
    bagFooter,
    footerDivider,
    checkOutButton,
    subtotalDivider,
    subtotalDisplay,
    xButtonContainer,
    xButton,
    bagContents,
} from "./Bag.module.css"
import BagCard from "../BagCard/bagCard";
import { getImage } from "gatsby-plugin-image";
import { graphql } from 'gatsby'
// import { GatsbyImage } from 'gatsby-plugin-image'

import { useCartContext } from "../../context/Cart";


const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: right;
  list-style: none;
  height: 100vh;
  width: 325px;
  background: rgb(255, 255, 255);
  position: fixed;
  top: 0;
  right: 0%;
  transition: transform 300ms;
  transform: ${({ nav }) => (nav ? "translateX(100%)" : "translateX(0%)")};
  z-index: 4;
  
  @media (max-width: 431px){
    min-width: 100svw;
    right: 0vw;
    min-height: 100svh;
  }

`;

function Bag({ productName, productPrice, productImage, data, Bag, Clickable, Showbag, Toggle, PointerEvent}) {

    const { products } = useCartContext()

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

    /* get size from selected session storage */
    // const size = sessionStorage.getItem('key');
    /* ^ */

     console.log('Products', products)

    return (
        <>
            <div id="bagOpacity" className={bagOpacity} onClick={() => { Showbag(!Bag); Clickable() }}></div>
            <div className={innerNavList}>
                <h1 className={theBag} onClick={() => { Showbag(!Bag); Clickable() }}>
                    BAG
                </h1>
            </div>
            <MenuLinks nav={Bag}>

                <div className={bagHeader}>
                    <div className={xButtonContainer} onClick={() => { Showbag(!Bag); Clickable() }}>
                        <button className={xButton}>x</button>
                    </div>
                    <h1 className={bagTitle}>
                        BAG
                    </h1>
                    <div className={headerDivider}></div>
                </div>

                <div className={bagContents}>
                    {products.map(product => (
                        <BagCard productName={product.name} productPrice={product.price} productImage={getProductImageData(product.imageName)} theSize={"M"} />
                    ))}
                    
                </div>

                <div className={bagFooter}>
                    <div className={footerDivider}></div>
                    <ul className={subtotalDisplay}>
                        <li>
                            <h1>SUBTOTAL</h1>
                        </li>
                        <li>
                            <div className={subtotalDivider}></div>
                        </li>
                        <li>
                            <h1>200.00</h1>
                        </li>
                    </ul>
                    <button className={checkOutButton}>
                        <h1>CHECK OUT</h1>
                    </button>
                </div>
            </MenuLinks>
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

export default Bag; 