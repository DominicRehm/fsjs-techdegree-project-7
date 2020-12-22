import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return(
        <nav className="main-nav">
            <ul>
            <li><NavLink to="/america">America</NavLink></li>
            <li><NavLink to="/italy">Italy</NavLink></li>
            <li><NavLink to="/germany">Germany</NavLink></li>
            </ul>
        </nav>
    )
}