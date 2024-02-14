import * as React from 'react'
import {
  footerContainer,
  line,
  footerContent
} from '../Footer/footer.module.css'


const Footer = () => {
  
  return (
    <>
        <div className={footerContainer}>
          <div className={line}></div>
          <div className={footerContent}>
            {/* <p>"WELCOME!"</p>
            <p>"HAVE A GOOD DAY"</p> */}
          </div>
        </div>
    </>
  )
}

export default Footer