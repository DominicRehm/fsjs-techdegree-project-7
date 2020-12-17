import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return(
        <nav className="main-nav">
            <ul>
                <li><NavLink to={"/html"}>HTML</NavLink></li>
                <li><NavLink to={"/javaScript"}>JavaScript</NavLink></li>
                <li><NavLink to={"/computers"}>Computers</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation