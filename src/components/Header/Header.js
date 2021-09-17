import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Header.css'

function Header() {

    return (
        <React.Fragment>
            <div className = "header">
                <div className = "container">
                    <NavBar />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header