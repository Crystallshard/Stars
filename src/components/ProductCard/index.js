import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const StyledCard = styled.div`
flex-basis: 25%;
background-color: ${props => props.productColor};
`

export default function ProductCard({ product, imageData })  {
    return  (
        <>
        <StyledCard productColor={product}>
        <Link to={`/products/${product.name}`}>{product.image}
        <GatsbyImage
                image={imageData}
                width={200}
                height={200}
              />
        <h2>{product.name}</h2>
        <h3>{product.price}</h3>
        </Link>
        </StyledCard>
        </>
    )
}


  


// export default IndexPage