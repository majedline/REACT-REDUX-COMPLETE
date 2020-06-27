import React from 'react';
import { Link, NavLink, withRouter } from "react-router-dom";


const Navbar = (props) => {
    
    // setTimeout( () => {
    //     props.history.push("/about");
    // }, 2000);

    return (
        <nav>
            <div className="nav-wrapper red darken-3">
                <a href="#" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/todo">Todo</NavLink></li>
                </ul>
            </div>
        </nav>

    );
}

export default withRouter(Navbar);