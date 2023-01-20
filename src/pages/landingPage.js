import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    star,
} from '../components/Layout/layout.module.css'

const landingPage = () => {
    return (
        <Link to="/">
        <StaticImage className={star}
            alt="Star"
            src="C:\Users\Kishon\Desktop\Stars website\src\images\star.png"
            placeholder="blurred"
            layout="fixed"
            width={600}
            height={600} />
        </Link>
    )
}
export default landingPage