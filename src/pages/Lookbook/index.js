import * as React from 'react'
import {
    lookbookBody,
} from '../Lookbook/lookbook.module.css'

//components
import Footer from '../../components/Footer/footer'
import Layout from '../../components/Layout/layout'

const Lookbook = () => {
    return (
        <>
            <Layout>
                <body className={lookbookBody}>
                    <div>lookbook page!</div>
                    <Footer />
                </body>
            </Layout>
        </>
    )
}
export default Lookbook