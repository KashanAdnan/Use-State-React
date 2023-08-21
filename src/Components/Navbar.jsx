import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>Navbar</h1>
            <ul>
                <li>
                    <Link to="/">Light</Link>
                    <Link to="/degree">Degree</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
