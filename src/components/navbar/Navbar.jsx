import React from 'react';
import './NavBar.css'; // Optional: for styling

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">Quiz App</a>
            </div>
            <ul className="navbar-links">
                <li><a href="/signup">Sign Up</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
