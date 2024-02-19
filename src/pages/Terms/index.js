import * as React from 'react'
import {
    termsBody,
} from '../Terms/terms.module.css'

//components
import Footer from '../../components/Footer/footer'
import Layout from '../../components/Layout/layout'

const Terms = () => {
    return (
        <>
            <Layout>
                <body className={termsBody}>
                    <div>terms of service page!</div>
                    <Footer />
                </body>
            </Layout>
        </>
    )
}
export default Terms