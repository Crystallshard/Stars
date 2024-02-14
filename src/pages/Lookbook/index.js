import * as React from 'react'
import {
    lookbookBody,
} from '../Lookbook/lookbook.module.css'

//components
import Navbar from "../../components/Navbar/navbar";
import Footer from '../../components/Footer/footer'

const Lookbook = () => {
    return (
        <>
            <body className={lookbookBody}>
                <Navbar />
                <div>lookbook page!</div>
                <Footer />
            </body>
        </>
    )
}
export default Lookbook