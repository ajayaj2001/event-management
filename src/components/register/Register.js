import React from 'react'
import "react-step-progress-bar/styles.css";


import './Register.scss'
import sideImage from '../../img/sideImage.jpg'
import RegisterForm from './registerForm/RegisterForm'
import RegisterForm2 from './registerForm2/RegisterForm2'
import RegisterForm3 from './registerForm3/RegisterForm3'

const Register = () => {
    return (
        <div className="container">
            <div className="register">
            <img src={sideImage} alt="rocket" className="register__image" />
            
                <div className="register__signup">
                    <div className="register__signup--form"><RegisterForm /></div>
                </div>

                
            </div>
        </div>
    )
}

export default Register
