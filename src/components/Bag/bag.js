import React, { useState } from "react";
import styled from "styled-components"
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { bag } from "./bag.module.css"

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: right;
  list-style: none;
  height: 100vh;
  width: 18%;
  background: rgb(255, 255, 255);
  position: absolute;
  top: 0;
  right: 0%;
  transition: transform 300ms;
  transform: ${({ nav }) => (nav ? "translateX(100%)" : "translateX(0%)")};
  z-index: 3;
`;

const Bag = ({ data, product }) => {
    
    var [toggle,settoggle] = React.useState(0.5)
    const [nav, showNav] = useState(true);
    
    function makeBlur1 ()  {
        if(toggle === 0.5){
        settoggle(0)
        }else{
        settoggle(0.5)
        }
        document.getElementById("opacity").style.opacity = toggle;
    }

  
  
    return (
        <>
            <Link className={bag} to="#" onClick={() => { makeBlur1() ; showNav(!nav) }}>
            <StaticImage
                    alt="Star"
                    src="C:\Users\Kishon\Desktop\Stars website\src\images\bag.png"
                    placeholder="blurred"
                    layout="fixed"
                    width={40}
                    height={40}
                />
            </Link>
        <MenuLinks nav={nav}>

        </MenuLinks>
        </>
    )
}

export default Bag;