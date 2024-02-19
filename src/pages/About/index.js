import * as React from 'react'
import {
    aboutBody,
} from './about.module.css'

//components
import Footer from '../../components/Footer/footer'
import Layout from '../../components/Layout/layout'

const About = () => {
    return (
        <>
            <Layout>
                <body className={aboutBody}>
                    <div>about stars page!</div>
                    <Footer />
                </body>
            </Layout>
        </>
    )
}
export default About