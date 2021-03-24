import React, { useState } from 'react'
import { Form, Icon, Message } from 'semantic-ui-react'
import { ProgressBar,Step } from "react-step-progress-bar";
// import { Link } from 'react-router-dom';
import './RegisterForm.scss'
import ProgressBarLevel from '../progressBar/ProgressBarLevel';
const RegisterForm = () => {

    const [errors, seterrors] = useState("")
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);




    const isFormValid = () => {
        if (!username || !email || !password || !confirmPassword) {
            seterrors("Fill all the fields");
            return false;
        }
        else if (password.length < 6 || confirmPassword.length < 6) {
            if (password !== confirmPassword) {
                seterrors("Password dont match")
                return false;
            }
            else {
                seterrors("Password atleast have 6 character")
                return false;
            }
        }
        else {
            return true;
        }
    }


    const formSubmit = (event) => {
        event.preventDefault();
        if (isFormValid()) {
            setLoading(true)
        }
    }


    return (
        <div className="registerform">
            {/* {
                errors ? <Message error className="registerform__error" ><h2>{errors}</h2></Message> : ""

            } */}
            <div className="ProgressBar">
     <ProgressBarLevel value="9"/>
  </div>

            <h4 className="registerform__heading">Personal Info</h4>
            <Form onSubmit={formSubmit}>
                <Form.Group >
                    <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        id='form-subcomponent-shorthand-input-first-name'
                        label='Name'
                        className="registerform__input1 textbox_line"
                        type="text"
                        onChange={(event) => setUsername(event.target.value)}
                        value={username}
                    />
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-last-name'
                        label='Email'
                        icon="mail"
                        iconPosition="left"
                        type="email"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}

                        className={errors.toLowerCase().includes('email') ? 'error  registerform__input1' : ' registerform__input1'}
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Input
                        fluid
                        icon="phone volume"
                        iconPosition="left"
                        id='form-subcomponent-shorthand-input-first-name'
                        label='Ph Numbers'
                        className="registerform__input1 textbox_line"
                        type="text"
                        onChange={(event) => setUsername(event.target.value)}
                        value={username}
                    />
                      <Form.Input
                      style={{width:'16rem'}}
                        fluid
                        label='Date of event conduct'
                        type="date"
                        onChange={(event) => setUsername(event.target.value)}
                        value={username}
                    />
                </Form.Group>
                <Form.Input
                    fluid
                    name="Address"
                    icon="address card"
                    iconPosition="left"
                    label="Address"
                    type="text"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    className={errors.toLowerCase().includes('password') ? 'error registerform__input2' : ' registerform__input2'}
                />
                <Form.Input
                    fluid
                    name="Occupation"
                    icon="building outline"
                    iconPosition="left"
                    label="Occupation"
                    type="text"
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    value={confirmPassword}
                    className={errors.toLowerCase().includes('password dont match') ? 'error registerform__input2' : 'registerform__input2'}
                />
                <button type='submit' disabled={loading} className={loading ? 'loading registerform__button' : "registerform__button"} >Next <Icon name="arrow right" /> </button>
            </Form>
            {/* <div className="registerform__link">Already a user?<Link to="/login">  Login</Link></div> */}

        </div>
    )
}

export default RegisterForm
