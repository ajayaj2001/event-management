import React, { useState } from 'react'
import { Form, Icon, Label, Message,TextArea } from 'semantic-ui-react'
import ProgressBarLevel from '../progressBar/ProgressBarLevel'
// import { Link } from 'react-router-dom';
const RegisterForm3 = () => {

    const options1 = [
        { key: 'a', text: 'Public', value: 'Public' },
        { key: 'b', text: 'Private', value: 'Private' },
        { key: 'c', text: 'Both', value: 'Both' }
      ]

      const options2 = [
        { key: 'd', text: `DJ Party's`, value: `DJ Party's` },
        { key: 'e', text: 'Wedding', value: 'Wedding' },
        { key: 'f', text: 'College Cultural', value: 'College Cultural' },
        { key: 'g', text: 'Workshops / Seminars training', value: 'Workshops / Seminars training' },
        { key: 'h', text: 'Birthday Celebration', value: 'Birthday Celebration' },
        { key: 'i', text: 'Festival Celebration', value: 'Festival Celebration' },
        { key: 'j', text: 'Other', value: 'Other' }
      ]

      const options3 = [
        { key: 'k', text: 'UPI payment', value: 'UPI payment' },
        { key: 'l', text: 'Challan', value: 'Challan' },
        { key: 'm', text: 'Net Banking ', value: 'Net Banking '},
        { key: 'n', text: ' bank check', value: ' bank check' },
        { key: 'o', text: ' bank check', value: ' bank check' },

      ]

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
            //db code
        }
    }


    return (
        <div className="registerform">
            {/* {
                errors ? <Message error className="registerform__error" ><h2>{errors}</h2></Message> : ""

            } */}
 <div className="ProgressBar">
   <ProgressBarLevel value="100"/>
  </div>
            <h4 className="registerform__heading">Payment Details</h4>
            <Form onSubmit={formSubmit}>
                <Form.Group >
                <Form.Select label="Type" options={options1} placeholder='type'  />
                <Form.Select label="category" options={options2} placeholder='category'  />
                </Form.Group>
                <Form.Group >
                <Form.Input
                      style={{width:'16rem'}}
                        fluid
                        label='Price Range : From'
                        type="number"
                        onChange={(event) => setUsername(event.target.value)}
                        value={username}
                    />
                      <Form.Input
                      style={{width:'16rem'}}
                        fluid
                        label='To'
                        type="number"
                        onChange={(event) => setUsername(event.target.value)}
                        value={username}
                    />
                </Form.Group>
                <Form.Input
                    fluid
                    name="Description"
                    icon="bolt"
                    iconPosition="left"
                    label="What you want to tell us"
                    type="text"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    className={errors.toLowerCase().includes('password') ? 'error registerform__input2' : ' registerform__input2'}
                />
                 <Form.Select 
                 label="Payment Method" 
                 options={options3} 
                 placeholder='Payment Method'  
                 />
                <button type='submit' disabled={loading} className={loading ? 'loading registerform__button' : "registerform__button"} >Next <Icon name="arrow right" /> </button>
            </Form>
            {/* <div className="registerform__link">Already a user?<Link to="/login">  Login</Link></div> */}

        </div>
    )
}

export default RegisterForm3
