import React, { useState } from "react";
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";
import {
  star,
  opacity,
  navbar,
  contactTermsList,
  mobileNav,
  contactTermsContainer,
  innerNavList,
  navContainer,
  linkList,
  navList,
} from "./NavBar.module.css";

const Global = createGlobalStyle`
    body
    {
      
        margin: 0;       
}
`;

const MenuIcon = styled.button`
border: none;
width: 40px;
height: 40px;
top: 45px;
left: 0.7rem;
display: flex;
flex-direction: column;
justify-content: space-around;
height: 1.8rem;
background: transparent;
border: button;
align-items: center;
cursor: pointer;
z-index: 10;
position: relative;



    div{
        
    width: 1.5rem;
    height: 0.1rem;
    background: black;
    transform-origin: 1px;
    position: static;
    
    }
`;
const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  list-style: none;
  height: 100vh;
  width: 21%;
  background: rgb(255, 255, 255);
  position: absolute;
  top: 0;
  left: -25%;
  transition: transform 300ms;
  transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};
  z-index: 3;
`;



const NavBar = ({ title }) => {
  var [toggle,settoggle] = React.useState(0.5)
  
  function makeBlur1 ()  {
    if(toggle === 0.5){
      settoggle(0)
    }else{
      settoggle(0.5)
    }
    document.getElementById("opacity").style.opacity = toggle;
  }


  

  const [nav, showNav] = useState(true);

  const SSIZE = 25;

  

  return (
    <>
      <Global />
      <nav className={navbar} id="main">
        <div id="opacity" className={opacity} ></div>
        <div className={innerNavList}>
          <ul>
            <li>
            
              <MenuIcon onClick={() => { makeBlur1() ; showNav(!nav) }}>
                <div />
                <div />
                <div />
              </MenuIcon>
              
            </li>
          </ul>
        </div>
        <MenuLinks nav={nav} className={navList}>
          
          <ul className={navContainer}> 
            <li className={mobileNav}>
              <Link className={linkList} to="/shop">
                SHOP
              </Link>
              <StaticImage className={star}
                alt="Star"
                src="C:\Users\Kishon\Desktop\Stars website\src\images\Star.png"
                placeholder="blurred"
                layout="fixed"
                width={SSIZE}
                height={SSIZE}
                />
            </li>
            <li className={mobileNav}>

            <Link className={linkList} to="/shop">
                COLLECTIONS
              </Link>
              <StaticImage className={star}
                alt="Star"
                src="C:\Users\Kishon\Desktop\Stars website\src\images\Star.png"
                placeholder="blurred"
                layout="fixed"
                width={SSIZE}
                height={SSIZE}
              />
            </li>
            <li className={mobileNav}>
            <Link className={linkList} to="/blog">
                ABOUT STARS
              </Link>
              <StaticImage className={star}
                alt="Star"
                src="C:\Users\Kishon\Desktop\Stars website\src\images\Star.png"
                placeholder="blurred"
                layout="fixed"
                width={SSIZE}
                height={SSIZE}
              />
            </li>
            <li className={mobileNav}>
            <Link className={linkList} to="#">
                SOCIAL MEDIA
              </Link>
              <StaticImage className={star}
                alt="Star"
                src="C:\Users\Kishon\Desktop\Stars website\src\images\Star.png"
                placeholder="blurred"
                layout="fixed"
                width={SSIZE}
                height={SSIZE}
              />
            </li>
          </ul>

          <ul className={contactTermsContainer}>
            <li className={contactTermsList}>
              <Link to="#">
                CONTACT US
              </Link>
            </li>
            <li>
              <Link to="#">
                TERMS OF SERVICE
              </Link>
            </li>
            
          </ul>
        </MenuLinks>
      </nav>
    </>
  );
};

export default NavBar;

