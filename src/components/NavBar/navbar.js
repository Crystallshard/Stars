import * as React from 'react'
import { Link } from 'gatsby'
import {

    starsContainer,
    stars,
    navbarContainter,
    navBarShadow
} from '../Navbar/navbar.module.css'

//components
import HamburgerMenu from "../HamburgerMenu/hamburgerMenu"
// import Bag from '../Bag/bag'

const NavBar = () => {
    return (
        <>
            <div className={navbarContainter}>
                <HamburgerMenu />
                <div className={starsContainer}>
                    <Link to="/">
                        <svg className={stars} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="450px" height="450px" viewBox="0 0 216 216" shapeRendering="geometricPrecision">
                            <g id="Layer_2" display="none">
                                <image display="inline" opacity="0.2" width="546" height="638" transform="matrix(0.24 0 0 0.24 42.2295 37.0176)">
                                </image>
                            </g>
                            <g id="Layer_3">
                                <path fill="none" stroke="#231F20" d="M90.917,36.583" />
                                <path fill="#231F20" d="M91.167,181.44c0,0,2.836-53.174,14.333-67.681c7.417-9.358,23.25-11.843,29.25-11.065
		c2.943,0.382,8.145,1.951,10.618,6.388c3.608,6.474,5.508,25,5.508,25s1.812-18.753,5.614-25.003
		c4.414-7.255,16.344-8.136,16.344-8.136l0,0c0,0-11.806-0.401-16.344-8.064c-4.24-7.16-5.614-24.547-5.614-24.547
		S148.833,87.713,145,92.88c-3.461,4.666-6.333,6.537-10.25,7.055l0,0c0,0-18.878,0.681-31.5-12.814
		c-7.75-8.287-12.083-50.042-12.083-50.042l0,0c0,0-4.49,40.66-12.437,50.042c-10.833,12.79-36.817,13.832-36.817,13.832
		s24.745,0.913,34.753,12.808C88.583,127.924,91.167,181.44,91.167,181.44L91.167,181.44z"/>
                            </g>
                        </svg>
                    </Link>
                </div>
                {/* <Bag /> */}
                <div className={navBarShadow}></div>
            </div>

        </>
    )
}
export default NavBar