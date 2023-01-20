import * as React from 'react'
import NavBar from '../components/NavBar'
import Bag from '../components/Bag/bag'
import {} from './productPage.module.css'
import products from '../config/products.json'

export default function ProductPage(props)  {
    
console.log(props)
    return  (
        <>
        <Bag/>
        <NavBar/>
        
        {/* <h1>productname : {props.pageContext.product.name}</h1>
        <h1>productprice : {props.pageContext.product.price}</h1> */}

        {/* <h2>template test</h2> */}
        </>

    )
}


  


// export default IndexPage