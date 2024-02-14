import * as React from 'react'
import {
    collectionsBody,
} from '../Collections/collections.module.css'

//components
import Footer from '../../components/Footer/footer'
import Navbar from "../../components/Navbar/navbar";

const Collections = () => {
    return (
        <>
            <body className={collectionsBody}>
                <Navbar />
                <div>collections page!</div>
                <Footer />
            </body>
        </>
    )
}
export default Collections