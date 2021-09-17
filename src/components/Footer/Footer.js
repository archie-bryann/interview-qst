import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className = "footer">
            <div className = "container">
                <div className = "row">
                    <div className ="footer-col-1">
                        <h3>Download Our App</h3>
                        <p>Download App for Android and ios mobile phone</p>
                        <div className = "app-logo">
                            <Link to = "/not-available">
                                {/* <img src = {`${clientRootUrl}images/app-store.png`} />
                                <img src = {`${clientRootUrl}images/play-store.png`} /> */}
                            </Link>
                        </div>
                    </div>
                    <div className = "footer-col-2">
                        <h1 style = {{fontSize:'30px',color:'white'}}>Demo Website</h1>
                        {/* <img src = {`${clientRootUrl}images/foodnet-white.png`} /> */}
                        <p>This is a demo website.</p>
                    </div>
                    <div className = "footer-col-3">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>Returns and Exchange Policy</li>
                            <li>Shipping Policy</li>
                        </ul>
                    </div>
                    <div className = "footer-col-4">
                        <h3>Follow us</h3>
                        <ul>
                            {/* <li>Facebook</li> */}
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>YouTube</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className = "copyright">Copyright 2020 - Demo Website</p>
            </div>
        </div>
    )
}

export default Footer