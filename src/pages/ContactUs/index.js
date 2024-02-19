import * as React from 'react'
import {
    contactUsBody,
} from '../ContactUs/contactUs.module.css'

//components
import Footer from '../../components/Footer/footer'
import Layout from '../../components/Layout/layout'

const ContactUs = () => {
    return (
        <>
            <Layout>
                <body className={contactUsBody}>
                    <div>Contact us page!</div>
                    <Footer />
                </body>
            </Layout>
        </>
    )
}
export default ContactUs