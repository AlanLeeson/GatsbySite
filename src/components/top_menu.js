import React from 'react'
import { Link } from 'gatsby'

export default function TopMenu() {
    return (
        <header>
            <ul className="header-navbar" role="menu">
                <li className="header-navbar-item">
                    <Link to="/">Portfolio</Link> 
                </li>
                <li className="header-navbar-item">
                    <Link to="/music/" >My Music</Link>
                </li>
            </ul>
        </header>
    )
}