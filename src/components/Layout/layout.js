import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  container,
} from './layout.module.css'


import { CartContextProvider } from '../../context/Cart'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    console.log('Hello Im Layout')

  return (
    <CartContextProvider>
      <div className={container}>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      

      
        
        <main>
          {children}
        </main>
      
      </div>
    </CartContextProvider>
  )
}
export default Layout