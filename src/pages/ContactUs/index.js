import * as React from 'react'
import {
    contactUsBody,
} from '../ContactUs/contactUs.module.css'

//components
import Footer from '../../components/Footer/footer'
import Navbar from '../../components/Navbar/navbar';

const ContactUs = () => {
    return (
        <>
            <body className={contactUsBody}>
                <Navbar />
                <div>Contact us page!</div>
                <Footer />
            </body>
        </>
    )
}
export default ContactUs