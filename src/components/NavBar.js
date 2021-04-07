import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link> </li>
            </ul>
            <ul>
                <li><Link to="/about">About</Link> </li>
            </ul>
            <ul>
                <li><Link to="/contact">Contact</Link> </li>
            </ul>
            <ul>
                <li><Link to="/vin-information">VIN Information</Link> </li>
            </ul>
        </>
    )
}

export default NavBar
