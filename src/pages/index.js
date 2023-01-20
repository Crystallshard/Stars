// Step 1: Import React
import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from "styled-components"

import Layout from '../components/Layout/layout'

import {
  star,
} from '../components/Layout/layout.module.css'



// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
      <StaticImage className={star}
      
            alt="Star"
            src="C:\Users\Kishon\Desktop\Stars website\src\images\stars.png"
            placeholder="blurred"
            layout="fixed"
            width={400}
            height={400} />
      
      
      

    </Layout>
    
  )
}
// Step 3: Export your component
export default IndexPage