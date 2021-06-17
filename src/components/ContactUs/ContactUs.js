import React, { useState } from "react";
// import emailjs from 'emailjs-com';
// import {db} from "../../config/firebase"
import './ContactUs.css'
import logo from '../LandingComponent/crea-logo.png'
import mailbox from '../LandingComponent/mailbox.png'
import fb from '../LandingComponent/fb.png'
import instagram from '../LandingComponent/insta.jpeg'
import youtube from '../LandingComponent/youtube.png'
import linkedin from '../LandingComponent/linkedin.png'

function ContactUs() {
  const [email, setEmail] = useState("");
  const [queryField, setQueryField] = useState("");


  const handleQueryOnChange = (event) => {
    const { target: { value } } = event;
    setQueryField(value);
  }

  const handleEmailOnChange = (event) => {
    const { target: { value } } = event;
    setEmail(value);
    console.log('emailValue', event.target.value);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== '' && queryField !== '') {
      console.log(email, queryField);
      // make use of "email" and "queryField" to send Email



    }
    //   var reference = db.ref('subscriptions');

    //   var data = {
    //       email: email
    //   }
    //   var successDialog = document.getElementById("subscribeSuccess");

    //   emailjs.sendForm('service_nne8783', 'template_61m5d2i', e.target, 'user_v0kDydSuiLzAe28AfIn5m')
    //      .then((result) => {
    //        successDialog.classList.add("showSuccess");
    //       }, (error) => {
    //       console.log(error.text);
    // });
    //   reference.push(data);
  }
  return (
    <div className="contactusWrapper">
      <div className='description'>
        <div className="leftpanel">
          <div className="imagewrapper">
            <img src={logo} className="creaLogo" />
          </div>
        </div>
        <div className='textWrapper'>
          <div className='wrapper'>
            <h1>Our website is coming soon</h1>
            <p>In the meantime, connect with us through the information below</p>
            <div className="captionWrapper"><h2 className="caption">C</h2> <p className="captionDesc">Connect with us</p></div>
            <img src={mailbox} className='rssIcon alignment' />
            <div className="captionWrapper"><h2 className="caption">R</h2> <p className="captionDesc">Reach us</p></div>
            <p className="alignment">
              <a href="tel:9626040395">9626040395 </a>|  <a href="tel:9787444059">9787444059</a></p>
            <div className="captionWrapper"><h2 className="caption">E</h2> <p className="captionDesc">Engage with us</p></div>
            <a href='' ><img src={fb} className='rssIcon alignment fb' /></a>
            <a href='' ><img src={instagram} className='rssIcon alignment insta' /></a>
            <a href='' > <img src={linkedin} className='rssIcon alignment linkedin' /></a>
            <a href='' ><img src={youtube} className='rssIcon alignment youtubeIcon' /></a>
            <div className="captionWrapper"><h2 className="caption">A</h2> <p className="captionDesc">Ask us</p></div>
            <div className='alignment'>
            <textarea id="query" name="w3review" rows="4" cols="30" placeholder="We like to hear you" onChange={handleQueryOnChange}></textarea>
            <input type="tel" name="phone" placeholder="Phone" className="phoneNum" maxLength="10" onChange={handleEmailOnChange}></input>
            <button className="formSubmit" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;