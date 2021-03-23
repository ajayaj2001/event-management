import React from 'react'
import './Header.scss';
import logo from '../../img/logo.png';
import bbc from '../../img/logo-bbc.png'
import bi from '../../img/logo-bi.png'
import forbes from '../../img/logo-forbes.png'
import techcrunch from '../../img/logo-techcrunch.png'
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" className="header__logo" />
            <h3 className="heading-1">WE ARE THE  EVENT  ARCHITECTS / Designers</h3>
            <h1 className="heading-3">A Goal without a plan is just a wish</h1>
            <h1 className="heading-4">A Goal without a plan is just a wish</h1>
            <h1 className="heading-4">A Goal without a plan is just a wish</h1>
            <h1 className="heading-4">A Goal without a plan is just a wish</h1>
            <button className="btn header__btn">View Our Events</button>
            <div className="header__seenon-text"> Seen on</div>
            <div className="header__seenon-logo">
                <img src={bbc} alt="bbc" />
                <img src={forbes} alt="forbes" />
                <img src={techcrunch} alt="techcrunch" />
                <img src={bi} alt="bi" />
            </div>
        </div>
    )
}

export default Header;
