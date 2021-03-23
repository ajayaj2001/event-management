import React from 'react'
import './Footer.scss'
const Footer = () => {
    return (
        <div className="footer">
            <ul className="nav">
                <li className="nav__item"><a href="#future-development" className="nav__link">Terms & conditions</a></li>
                <li className="nav__item"><a href="#future-development" className="nav__link">Locations</a></li>
                <li className="nav__item"><a href="#future-development" className="nav__link">Sponsership</a></li>
                <li className="nav__item"><a href="#future-development" className="nav__link">Contact us</a></li>
                <li className="nav__item"><a href="#future-development" className="nav__link">Submit Your Event ideas</a></li>
                <li className="nav__item"><a href="#future-development" className="nav__link">Come Work With Us!</a></li>
            </ul>
            <p className="copyright">&copy; This website was developed by ajay  ,Mostly developed with advance sass in react js
            you can inspire from this site but dont copy the design totally..
            </p>
        </div>
    )
}

export default Footer
