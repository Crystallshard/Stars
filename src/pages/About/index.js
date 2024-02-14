import * as React from 'react'
import {
    aboutBody,
} from './about.module.css'

//components
import Footer from '../../components/Footer/footer'
import Navbar from "../../components/Navbar/navbar";

const About = () => {
    return (
        <>
            <body className={aboutBody}>
                <Navbar />
                <div>about stars page!</div>
                <Footer />
            </body>
        </>
    )
}
export default About