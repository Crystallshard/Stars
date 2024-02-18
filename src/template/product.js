import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useEffect, useState } from "react";
import { getImage } from "gatsby-plugin-image";
import Footer from '../components/Footer/footer'
import { graphql } from 'gatsby'
import {
  productPageBody,
  imageSelectionContainer,
  splitContainer,
  productInfoContainer,
  productName,
  productPrice,
  productDescription,
  // colorInfoContainer,
  // colorDivider,
  // productColor,
  // productColorList,
  sizeContainer,
  productSize,
  sizeChartContainer,
  addToCartContainer,
  addToCartButton,
  productSizeList,
  leftContainer,
  rightContainer,
  sizeChart,
  sizeLetter,
  sizeElemetRadio,
} from '../template/productPage.module.css'

//components
import NavBar from '../components/Navbar/navbar';
import Accordion from '../components/Accordion/accordion';
import ImageSlider from '../components/ImageSlider/imageSlider';
import Modal from '../components/Modal/modal';
import Bag from '../components/Bag/bag';

import { useCartContext, CartContextProvider } from '../context/Cart';


export default function ProductPage({ pageContext, data }, props) {
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

  const { product } = pageContext

  const { addProductToCart } = useCartContext()

  /* on-click functions for sizes */
  const [radio, setRadio] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRadio(sessionStorage.getItem('key'))
    }
  }, [])
  /* ^ */

  /* on-click functions for modal */
  const [openModal, setOpenModal] = useState(false)
  /* ^ */

  /* automaticly prints all elements in array*/
  const colorElementsArray = [];
  for (let i = 0; i < Object.values(product.color).length; i++) {
    colorElementsArray.push(
      <li style={{ backgroundColor: `rgb(${product.color[i]})` }}></li>
    );
  }

  /* automaticly prints all elements in array*/
  const pictureElementsArray = [];
  for (let i = 0; i < Object.values(product.productImages).length; i++) {
    pictureElementsArray.push(
      <GatsbyImage
        image={getProductImageData(product.productImages[i])}
      />
    );
  }

  const sizeElemetsArray = [];
  for (let i = 0; i < Object.values(product.size).length; i++) {

    /* saves size option to session storage */
    function profileClick() {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('key', product.size[i]);
      }

      var buttonID = document.getElementById(product.size[i]);
      buttonID.checked = true;
    };
    /* ^ */
    
    // if (typeof window !== 'undefined') {
    //   sessionStorage.clear();
    // }

    sizeElemetsArray.push(
      <li id='size' className={productSize}>
        <input
          className={sizeElemetRadio}
          id={product.size[i]}
          type="radio"
          name="radio"
          value={radio}
          // checked={radio === product.size[i]}
        />
        <label className={sizeLetter}
          for={product.size[i]}
          onClick={profileClick}
          onKeyDown={profileClick}
        >{product.size[i]}</label>
      </li>
    );
  }

  /* when you click on the bag, open bag, and dim the background */
  var [toggle, settoggle] = React.useState(0.5)
  var [pointerEvent, PEToggle] = useState("auto")
  function clickable() {
      if (pointerEvent === "auto") {
          PEToggle("none")
          settoggle(0)
      } else {
          PEToggle("auto")
          settoggle(0.5)
      }
      document.getElementById("bagOpacity").style.opacity = toggle;
      document.getElementById("bagOpacity").style.pointerEvents = pointerEvent;
  }
  /* ^ */

  const [bag, showBag] = useState(true);
  /* ^ */

  return (
    <CartContextProvider>
      <body className={productPageBody}>
        <NavBar />
        <Bag productName={product.name} productPrice={product.price} productImage={getProductImageData(product.imageName)} Bag={bag} Clickable={() =>{clickable()}} Showbag={() =>{showBag(!bag)}} Toggle={toggle} PointerEvent={pointerEvent}/>
        <div className={imageSelectionContainer}>
          <div className={splitContainer}>
            <div className={leftContainer}>
              <ImageSlider images={pictureElementsArray} />
            </div>
          </div>

          <div className={splitContainer}>
            <div className={rightContainer}>
              <div className={productInfoContainer}>
                <h1 className={productName}>{product.name}</h1>
                <h3 className={productPrice}>{product.price}</h3>
                <h3 className={productDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </h3>
              </div>

              <div className={sizeContainer}>
                <ul className={productSizeList}>
                  {sizeElemetsArray}
                </ul>
              </div>


              <div className={addToCartContainer}>
                <button className={addToCartButton} onClick={() => addProductToCart(product) }>ADD TO CART</button>
              </div>
              <div className={sizeChartContainer}>
                <h3 className={sizeChart} onClick={() => { setOpenModal(true) }}>SIZE CHART</h3>
                {openModal && <Modal closeModal={setOpenModal} name={product.name} />}
              </div>
              <Accordion details={product.details} sizeDetails={product.sizeDetails} deliveryDetails={product.deliveryDetails} />
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </CartContextProvider>

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