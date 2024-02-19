import * as React from 'react'
import {
    collectionsBody,
} from '../Collections/collections.module.css'

//components
import Footer from '../../components/Footer/footer'
import Layout from '../../components/Layout/layout'

const Collections = () => {
    return (
        <>
            <Layout>
                <body className={collectionsBody}>
                    <div>collections page!</div>
                    <Footer />
                </body>
            </Layout>
        </>
    )
}
export default Collections