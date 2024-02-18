import * as React from 'react'
import { useState } from "react";
import {
    accordion,
    accordionHeader,
    accordionBody,
    accordionIndicator,
    accordionSectionLine,
    sizeDetailsParagraph,
} from "./accordion.module.css"


function Accordion({ title, details, sizeDetails, deliveryDetails }) {

    const [isOpenDetails, setIsOpenDetails] = useState(false)
    const [isOpenSizeChart, setIsOpenSizeChart] = useState(false)
    const [isOpenDeliveryDetails, setIsOpenDeliveryDetails] = useState(false)

    function detailsLine() {
        if (isOpenDetails === false) {
            document.getElementById('details').style.width = '100%';
            document.getElementById('sizeDetails').style.width = '70%';
            document.getElementById('deliveryDetails').style.width = '70%';
            setIsOpenSizeChart(false);
            setIsOpenDeliveryDetails(false);
        }
        if (isOpenDetails === true) {
            document.getElementById('details').style.width = '70%';
        }
    }

    function sizeDetailsLine() {
        if (isOpenSizeChart === false) {
            // document.getElementById('sizeDetails').style.animation = "sectionLineAnimation ease 3s";
            document.getElementById('sizeDetails').style.width = '100%';
            document.getElementById('details').style.width = '70%';
            document.getElementById('deliveryDetails').style.width = '70%';
            setIsOpenDetails(false);
            setIsOpenDeliveryDetails(false);
        }
        if (isOpenSizeChart === true) {
            // document.getElementById('sizeDetails').style.animation = "sectionLineAnimation ease 3s";
            document.getElementById('sizeDetails').style.width = '70%';
        }
    }

    function DeliveryDetailsLine() {
        if (isOpenDeliveryDetails === false) {
            document.getElementById('deliveryDetails').style.width = '100%';
            document.getElementById('details').style.width = '70%';
            document.getElementById('sizeDetails').style.width = '70%';
            setIsOpenDetails(false);
            setIsOpenSizeChart(false);
            
        }
        if (isOpenDeliveryDetails === true) {
            document.getElementById('deliveryDetails').style.width = '70%';
        }
    }


    return (
        <>
            <div className={accordion}>
                <div className={accordionHeader} onClick={() => { setIsOpenDetails(!isOpenDetails); detailsLine() }}>
                    <div className={accordionIndicator}>{isOpenDetails ? '-' : '+'}</div>
                    <h3>DETAILS</h3>
                </div>
                <div className={accordionSectionLine} id='details'></div>
                {isOpenDetails && (
                    <div className={accordionBody}>
                        <div className={sizeDetailsParagraph}>

                            {details}
                        </div>
                    </div>
                )}
            
            
                <div className={accordionHeader} onClick={() => { setIsOpenSizeChart(!isOpenSizeChart); sizeDetailsLine() }}>
                    <div className={accordionIndicator}>{isOpenSizeChart ? '-' : '+'}</div>
                    <h3>SIZING DETAILS</h3>
                </div>
                <div className={accordionSectionLine} id='sizeDetails'></div>
                {isOpenSizeChart && (
                    <div className={accordionBody}>
                        <div className={sizeDetailsParagraph}>
                            {sizeDetails}
                        </div>
                    </div>
                )}

                <div className={accordionHeader} onClick={() => { setIsOpenDeliveryDetails(!isOpenDeliveryDetails); DeliveryDetailsLine() }}>
                    <div className={accordionIndicator}>{isOpenDeliveryDetails ? '-' : '+'}</div>
                    <h3>DELIVERY DETAILS</h3>
                </div>
                <div className={accordionSectionLine} id='deliveryDetails'></div>
                {isOpenDeliveryDetails && (
                    <div className={accordionBody}>
                        <div className={sizeDetailsParagraph}>
                            {deliveryDetails}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Accordion; 