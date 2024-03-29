import * as React from 'react'
import { useState } from "react";
import {
  layoutContainer,
} from './layout.module.css'

//components
import { CartContextProvider } from '../../context/Cart'
import Navbar from '../Navbar/navbar'
import Bag from '../Bag/bag'

const Layout = ({ location="", children }) => {

  /* when you click on the bag, open bag, and dim the background */
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
    document.getElementById("bagOpacity").style.opacity = toggle;
    document.getElementById("bagOpacity").style.pointerEvents = pointerEvent;
  }
  /* ^ */

  const [bag, showBag] = useState(true);
  /* ^ */
 
  const locationPathname = location.pathname;

  return (
    <CartContextProvider>
      <div className={layoutContainer}>
        {locationPathname !== '/' ? <Navbar /> : null}
        {locationPathname !== '/' ? <Bag Bag={bag} Clickable={() => { clickable() }} Showbag={() => { showBag(!bag) }} /> : null}
        <main>
          {children}
        </main>
      </div>
    </CartContextProvider>
  )
}
export default Layout