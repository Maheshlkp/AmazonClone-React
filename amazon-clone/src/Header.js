import React from 'react';
import './Header.css';

function Header () {
    return (
        <div className="Header">
            <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" />
            <div className="header__search">
                <input className="header__searchInput" type="text" />
            </div>
            <div className="header_nav">
                <div className="header__option">
                    <span className="header__optionOne">Hello Mahesh</span>
                    <span className="header__optionTwo">Sign In</span>
                </div>

                <div className="header__option">
                    <span className="header__optionOne">Returns</span>
                    <span className="header__optionTwo">&Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionOne">Your</span>
                    <span className="header__optionTwo">Prime</span>
                </div>

            </div>
        </div>
    )
}

export default Header;
