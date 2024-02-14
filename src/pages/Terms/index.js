import * as React from 'react'
import {
    termsBody,
} from '../Terms/terms.module.css'

//components
import Navbar from "../../components/Navbar/navbar";
import Footer from '../../components/Footer/footer'

const Terms = () => {
    return (
        <>
            <body className={termsBody}>
                <Navbar />
                <div>terms of service page!</div>
                <Footer />
            </body>
        </>
    )
}
export default Terms