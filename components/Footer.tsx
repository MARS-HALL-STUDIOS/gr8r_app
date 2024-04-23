import React, {useEffect, useState} from 'react'

const Footer = () => {
    
    return(
        <>
        <div className="cs-height_100 cs-height_lg_70"></div>
        <footer className="cs-footer cs-style1">
            <div className="cs-footer_bg"></div>
            <div className="cs-height_100 cs-height_lg_60"></div>
            <div className="container">
                <div className="text-center">
                    {/* <p className="cs-page_title" style={{fontFamily: 'Comfortaa'}}><small>Not A Financial instrument <br/>Not financial advice<br/></small> </p> */}
                </div>
            </div>
            <div className="cs-height_60 cs-height_lg_20"></div>
            <div className="cs-footer_bottom">
            <div className="container">
            <div className="cs-footer_separetor"></div>
            <div className="text-center">
            <div className="text-center p-3">Copyright 2024 GR8R</div>
            <ul className="cs-footer_menu">
            {/* <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Term &amp; Condition</a></li> */}
            </ul>
            </div>
            </div>
            </div>
        </footer>
        </>
    )
}
export default Footer;