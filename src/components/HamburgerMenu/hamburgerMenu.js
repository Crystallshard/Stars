import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import {
  opacity,
  innerNavList,
  pageLinks,
  infoLinks,
  pLink,
  iLink,
  linksContainer
} from "./HamburgerMenu.module.css";

const MenuIcon = styled.button`
border: none;
top: 31px;
left: 45px;
display: flex;
flex-direction: column;
justify-content: space-around;
height: 1.8rem;
background: transparent;
align-items: center;
cursor: pointer;
z-index: 3;
position: fixed;

  div{
    width: 30px;
    height: 1px;
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
  width: 350px;
  background: rgb(255, 255, 255);
  position: fixed;
  top: 0;
  left: -351px;
  transition: transform 300ms;
  transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};
  z-index: 2;
  
  @media (max-width: 431px){
    min-width: 100svw;
    max-width: 100svw;
    left: -100vw;
    min-height: 100dvh;
    max-height: 100dvh;
  }

  @media (max-width: 321px){
    left: -100vw;
  }

  @media (max-width: 281px){
    left: -100vw;
  }
`;



const HamburgerMenu = ({ title }) => {
  var [toggle, settoggle] = React.useState(0.5)

  var [pointerEvent, PEToggle] = useState("auto")
  function clickable() {
    if (pointerEvent === "auto") {
      PEToggle("none")
      settoggle(0)
    } else {
      PEToggle("auto")
      settoggle(0.5)
    }
    document.getElementById("opacity").style.opacity = toggle;
    document.getElementById("opacity").style.pointerEvents = pointerEvent;
  }

  const [nav, showNav] = useState(true);

  return (
    <>
      <div id="opacity" className={opacity} onClick={() => { showNav(!nav); clickable() }}></div>
      <div className={innerNavList}>
        <ul>
          <li>
            <MenuIcon onClick={() => { showNav(!nav); clickable() }}>
              <div />
              <div />
              <div />
            </MenuIcon>

          </li>
        </ul>
      </div>
      <MenuLinks nav={nav}>
        <div className={linksContainer}>
          <ul className={pageLinks}>
            <li className={pLink}>
              <Link to="/Shop" onClick={() => { showNav(!nav); clickable() }}>
                SHOP
              </Link>
            </li>
            <li className={pLink}>
              <Link to="/Collections" onClick={() => { showNav(!nav); clickable() }}>
                COLLECTIONS
              </Link>
            </li>
            <li className={pLink}>
              <Link to="/About" onClick={() => { showNav(!nav); clickable() }}>
                ABOUT
              </Link>
            </li>
            <li className={pLink}>
              <Link to="/Lookbook" onClick={() => { showNav(!nav); clickable() }}>
                LOOKBOOK
              </Link>
            </li>
          </ul>
          <ul className={infoLinks}>
            <li className={iLink}>
              <Link to="/ContactUs" onClick={() => { showNav(!nav); clickable() }}>
                CONTACT US
              </Link>
            </li>
            <li className={iLink}>
              <Link to="/Terms" onClick={() => { showNav(!nav); clickable() }}>
                TERMS OF SERVICE
              </Link>
            </li>
          </ul>
        </div>
      </MenuLinks>
    </>
  );
};

export default HamburgerMenu;

