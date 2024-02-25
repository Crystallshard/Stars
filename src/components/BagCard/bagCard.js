import React from "react";
import { GatsbyImage } from 'gatsby-plugin-image'
import {
    container,
    bagCardContainer,
    imageContainer,
    xButton,
    theImage,
    productInfoContainer,
    productNameClass,
    textAndQuantityContainer,
    quantityCounter,
    addQuantity,
    quantityNumber,
    subtractQuantity,
} from "./bagCard.module.css"

import { useCartContext } from '../../context/Cart';

function BagCard({ ID, productName, productPrice, theSize, productImage }) {

    const { deleteProduct } = useCartContext()

    return (
        <>
            <div className={container}>
                <div className={bagCardContainer}>
                    <div className={imageContainer}>
                        <button className={xButton} onClick={()=> deleteProduct(ID)}>X</button>
                        <div className={theImage}>
                            <GatsbyImage
                                image={productImage}
                            />
                        </div>
                    </div>
                    <div className={textAndQuantityContainer}>
                        <div className={productInfoContainer}>
                            <h1 className={productNameClass}>{productName}</h1>
                            <h1>{productPrice}</h1>
                            <h1>{theSize}</h1>
                        </div>
                        <div className={quantityCounter}>
                            <button className={subtractQuantity}>-</button>
                            <div className={quantityNumber}>1</div>
                            <button className={addQuantity}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default BagCard; 