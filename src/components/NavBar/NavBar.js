import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {

    const [maxHeight, setMaxHeight] = useState("0px");

    // const [cartNum, setCartNum] = useState(null);

    function menuToggle() {
        if(maxHeight === "0px") {
            setMaxHeight("200px");
        } else {
            setMaxHeight("0px");
        }
    }

    // const token = localStorage.getItem('wpt');

    return (
        <div className = "navbar">
            <div className = "logo">
                <Link to = {localStorage.getItem('token') ? '/user' : ''}>
                <h1 style = {{fontSize:'30px',color:'white'}}>Demo Website</h1>
                {/* <h1 style = {{fontSize:'23px'}}>E-Care</h1> */}
                </Link>
            </div>

            <nav>
                <ul style={{maxHeight}}>
                    {(localStorage.getItem('token') && (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <li><a href="#" className = "link c" onClick= {()=>{
                            localStorage.clear()
                            window.location='/'
                        }}>Log out</a></li>

                    ))}
                </ul>
            </nav>
            <i className = "fa fa-bars menu-icon c" style = {{fontSize:'23px',marginLeft:'15px'}} onClick = {menuToggle} ></i>
        </div>
    )
}

export default NavBar