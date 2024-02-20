import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { productName, productPrice, productImage } from "../ProductCard/productCard.module.css";
import formatCurrency from './util';

const StyledCard = styled.div`
flex-basis: 25%;
background-color: ${props => props.productColor};
`

export default function ProductCard({ product, imageData, key }) {

    return (
        <>
            <StyledCard productColor={product}>
                <Link to={`/products/${product.url}`}>
                    <GatsbyImage
                        className={productImage}
                        image={imageData}
                    />
                    <h2 className={productName}>{product.name}</h2>
                    <h3 className={productPrice}>{formatCurrency(product.price)}</h3>
                </Link>
            </StyledCard>
        </>
    )
}





// export default IndexPage