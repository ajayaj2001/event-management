import React from 'react'

import './Footer.scss'
import FooterModel1 from './footerModel1/FooterModel1';
import FooterModel2 from './footerModel2/FooterModel2';
import FooterModel3 from './footerModel3/FooterModel3';
import FooterModel4 from './footerModel4/FooterModel';
import FooterModel5 from './footerModel5/FooterModel';
import FooterModel6 from './footerModel6/FooterModel';


const Footer = () => {
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);
    const [open6, setOpen6] = React.useState(false);
    const handleClickOpen1 = () => {
        setOpen1(true);
      };
      const handleClickOpen2 = () => {
        setOpen2(true);
      };
      const handleClickOpen3 = () => {
        setOpen3(true);
      };
      const handleClickOpen4 = () => {
        setOpen4(true);
      };
      const handleClickOpen5 = () => {
        setOpen5(true);
      };
      const handleClickOpen6 = () => {
        setOpen6(true);
      };
    return (
        <div className="footer">
            <ul className="nav">
                <li className="nav__item"><a href="#future-development" className="nav__link" onClick={handleClickOpen1}>Terms & conditions</a></li>
                <li className="nav__item"><a href="#future-development" className="nav__link" onClick={handleClickOpen2}>Locations</a></li>
                <li className="nav__item"><a href="#future-development" className="nav__link" onClick={handleClickOpen3}>Sponsership</a></li>
                <li className="nav__item"><a href="#future-development" className="nav__link" onClick={handleClickOpen4}>Contact us</a></li>
                <li className="nav__item"><a href="#future-development" className="nav__link" onClick={handleClickOpen5}>Submit Your Event ideas</a></li>
                <li className="nav__item"><a href="#future-development" className="nav__link" onClick={handleClickOpen6}>Come Work With Us!</a></li>
            </ul>
            <p className="copyright">&copy; This website was developed by ajay  ,Mostly developed with advance sass in react js
            you can inspire from this site but dont copy the design totally..
            </p>

<FooterModel1 
open={open1} 

setOpen={setOpen1} 

heading='TERMS & CONDITION'

heading1='Payment'

content1='  Payment in full is due no later than 7 days prior to the event date. This may be made via electronic 
transfer, debit card, cheque or credit card (3% fee - 4% on AMEX). The company reserves the right 
to cancel the event if payment has not been received in full.'

heading2='Cancellation'

content2=' Whether or not payment has been made, if the customer cancels within 4 weeks of the event there is a 100%
cancellation fee.Cancellation between 4 weeks and 8 weeks from the event incurs a 50% cancellation fee. 
Cancellation more than 8 weeks from the event incurs a 15% cancellation fee.'

heading3='Liability for Damage'

content3='
The customer is liable for loss or damage caused by guests whilst on the event to boats, vehicles, 
clothing or other equipment supplied by the company but limited to the amount of the company’s 
insurance excess.'
 />

<FooterModel2 
open={open2} 

setOpen={setOpen2} 

heading='LOCATION'

heading1='Where We Are'

content1={`  Our Services are avaliable in Mostly all over the world ,USA , UE , INDIA ....`}

heading2='Cancellation'

content2=' Whether or not payment has been made, if the customer cancels within 4 weeks of the event there is a 100%
cancellation fee.Cancellation between 4 weeks and 8 weeks from the event incurs a 50% cancellation fee. 
Cancellation more than 8 weeks from the event incurs a 15% cancellation fee.'

heading3='Liability for Damage'

content3='
The customer is liable for loss or damage caused by guests whilst on the event to boats, vehicles, 
clothing or other equipment supplied by the company but limited to the amount of the company’s 
insurance excess.'
 />

<FooterModel3
open={open3} 

setOpen={setOpen3} 

heading='SPONSERSHIP'

heading1='Payment'

content1='  Payment in full is due no later than 7 days prior to the event date. This may be made via electronic 
transfer, debit card, cheque or credit card (3% fee - 4% on AMEX). The company reserves the right 
to cancel the event if payment has not been received in full.'

heading2='Cancellation'

content2=' Whether or not payment has been made, if the customer cancels within 4 weeks of the event there is a 100%
cancellation fee.Cancellation between 4 weeks and 8 weeks from the event incurs a 50% cancellation fee. 
Cancellation more than 8 weeks from the event incurs a 15% cancellation fee.'

heading3='Liability for Damage'

content3='
The customer is liable for loss or damage caused by guests whilst on the event to boats, vehicles, 
clothing or other equipment supplied by the company but limited to the amount of the company’s 
insurance excess.'
 />
 <FooterModel4 
open={open4} 

setOpen={setOpen4} 

heading='CONTACT US'

heading1='Payment'

content1='  Payment in full is due no later than 7 days prior to the event date. This may be made via electronic 
transfer, debit card, cheque or credit card (3% fee - 4% on AMEX). The company reserves the right 
to cancel the event if payment has not been received in full.'

heading2='Cancellation'

content2=' Whether or not payment has been made, if the customer cancels within 4 weeks of the event there is a 100%
cancellation fee.Cancellation between 4 weeks and 8 weeks from the event incurs a 50% cancellation fee. 
Cancellation more than 8 weeks from the event incurs a 15% cancellation fee.'

heading3='Liability for Damage'

content3='
The customer is liable for loss or damage caused by guests whilst on the event to boats, vehicles, 
clothing or other equipment supplied by the company but limited to the amount of the company’s 
insurance excess.'
 />
 <FooterModel5 
open={open5} 

setOpen={setOpen5} 

heading='SUBMIT YOUR EVENT IDEAS'

heading1='Payment'

content1='  Payment in full is due no later than 7 days prior to the event date. This may be made via electronic 
transfer, debit card, cheque or credit card (3% fee - 4% on AMEX). The company reserves the right 
to cancel the event if payment has not been received in full.'

heading2='Cancellation'

content2=' Whether or not payment has been made, if the customer cancels within 4 weeks of the event there is a 100%
cancellation fee.Cancellation between 4 weeks and 8 weeks from the event incurs a 50% cancellation fee. 
Cancellation more than 8 weeks from the event incurs a 15% cancellation fee.'

heading3='Liability for Damage'

content3='
The customer is liable for loss or damage caused by guests whilst on the event to boats, vehicles, 
clothing or other equipment supplied by the company but limited to the amount of the company’s 
insurance excess.'
 />
 <FooterModel6
open={open6} 

setOpen={setOpen6} 

heading='COME WORK WITH US'

heading1='Payment'

content1='  Payment in full is due no later than 7 days prior to the event date. This may be made via electronic 
transfer, debit card, cheque or credit card (3% fee - 4% on AMEX). The company reserves the right 
to cancel the event if payment has not been received in full.'

heading2='Cancellation'

content2=' Whether or not payment has been made, if the customer cancels within 4 weeks of the event there is a 100%
cancellation fee.Cancellation between 4 weeks and 8 weeks from the event incurs a 50% cancellation fee. 
Cancellation more than 8 weeks from the event incurs a 15% cancellation fee.'

heading3='Liability for Damage'

content3='
The customer is liable for loss or damage caused by guests whilst on the event to boats, vehicles, 
clothing or other equipment supplied by the company but limited to the amount of the company’s 
insurance excess.'
 />

        </div>
    )
}

export default Footer
