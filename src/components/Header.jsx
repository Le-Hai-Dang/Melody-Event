import React from 'react';

const Header = ({ isLoggedIn, onLogin, onLogout }) => {
    return (
        <div id="header" className="Header">
            <ul id="nav" className="nav-left">
                <li><a href="#">Home</a></li>
                <li><a href="#tour">Buy Tickets</a></li>
            </ul>
            <div className="nav-right">
                {isLoggedIn ? (
                    <button className="login-button" onClick={onLogout}>Logout</button>
                ) : (
                    <button className="login-button" onClick={onLogin}>Login</button>
                )}
            </div>
            <div id="mobile-menu" className="mobile-menu-btn">
                <i className="menu-icon ti-menu"></i>
            </div>
        </div>
    );
};

export default Header;