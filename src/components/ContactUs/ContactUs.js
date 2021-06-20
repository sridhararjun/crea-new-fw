import React, { useState } from "react";
import emailjs from 'emailjs-com';
import {db} from "../../config/firebase"
import './ContactUs.css'
import logo from '../LandingComponent/crea-logo.png'
import mailbox from '../LandingComponent/mailbox.png'
import fb from '../LandingComponent/fb.png'
import instagram from '../LandingComponent/insta.jpeg'
import youtube from '../LandingComponent/youtube.png'
import linkedin from '../LandingComponent/linkedin.png'
import pinterest from '../LandingComponent/pinterest.png'
import behance from '../LandingComponent/behance.png'

function ContactUs() {
  const [email, setEmail] = useState("");
  const [queryField, setQueryField] = useState("");
  const [phone, setPhone] = useState("");

  const handleQueryOnChange = (event) => {
    const { target: { value } } = event;
    setQueryField(value);
  }

  const handleEmailOnChange = (event) => {
    const { target: { value } } = event;
    setEmail(value);
  }

  const handlePhoneOnChange = (event) => {
    const {target:{value}} = event;
    setPhone(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (queryField !== '' && phone !== '') {
      console.log(email, queryField, phone);
      var reference = db.ref('subscriptions');

      var data = {
          email: email,
          queryField: queryField,
          phone: phone
      }
      var successDialog = document.getElementById("subscribeSuccess");

      emailjs.init('user_v0kDydSuiLzAe28AfIn5m');
      emailjs.send('service_nne8783', 'template_61m5d2i', {emaild:email,queryField:queryField,phone:phone})
         .then((result) => {
          successDialog.classList.add('showSuccess');
          console.log("Success")
          }, (error) => {
          console.log(error.text);
    });
      reference.push(data);
    }
  }

  return (
    <div className="contactusWrapper">
      <div className='description'>
        <div className="leftpanel">
          <div className="imagewrapper">
            <img src={logo} className="creaLogo" />
          </div>
        </div>
        <div className='separatorMob'><hr /></div>
        <div className='textWrapper'>
          <div className='wrapper'>
            <h1 className='webHead'>Our website is coming soon</h1>
            <p>In the meantime, connect with us through the information below</p>
            <div className="captionWrapper"><h2 className="caption">C</h2> <p className="captionDesc">Connect with us</p></div>
            <a href="mailto:crealuxurymetaldecor@gmail.com"><img src={mailbox} className='rssIcon alignment' /></a>
            <div className="captionWrapper"><h2 className="caption">R</h2> <p className="captionDesc">Reach us</p></div>
            <p className="alignment">
              <a href="tel:9626040395">9626040395 </a>|  <a href="tel:9787444059">9787444059</a></p>
            <div className="captionWrapper"><h2 className="caption">E</h2> <p className="captionDesc">Engage with us</p></div>
            <a href="https://www.facebook.com/Crea-Luxury-Metal-Decor-102304805235829/?ti=as" target="_blank" rel="noopener noreferrer"><img src={fb} className='rssIcon alignment fb' /></a>
            <a href="https://www.instagram.com/crealuxurymetaldecor/" target="_blank" rel="noopener noreferrer"><img src={instagram} className='rssIcon alignment insta' /></a>
            {/* <a href="https://www.linkedin.com/in/crea-luxury-metal-decor-684617213" target="_blank" rel="noopener noreferrer" > <img src={linkedin} className='rssIcon alignment linkedin' /></a> */}
            <a href="https://www.behance.net/crealuxurya079" target="_blank" rel="noopener noreferrer"><img src={youtube} className='rssIcon alignment youtubeIcon' /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><img src={pinterest} className='rssIcon alignment pinterestIcon' /></a>
            <a href="https://www.behance.net/crealuxurya079" target="_blank" rel="noopener noreferrer"><img src={behance} className='rssIcon alignment behanceIcon' /></a>
            <div className="captionWrapper"><h2 className="caption">A</h2> <p className="captionDesc">Ask us</p></div>
            <div className='alignment'>
              <form onSubmit={handleSubmit}>
            <textarea id="query" name="w3review" rows="4" cols="30" placeholder="Please type your query here..." onChange={handleQueryOnChange}></textarea>
            <input type="email" className="email" name="w3review" rows="4" cols="30" placeholder="Email (Optional)" onChange={handleEmailOnChange}></input>
            <input type="tel" name="phone" placeholder="Phone" className="phoneNum" maxLength="10" onChange={handlePhoneOnChange}></input>
            <input id='submit' type="submit" value="Notify"/>
            </form>
            </div>
            <p id="subscribeSuccess">Thanks!!! Our team will reach out to you in 24hrs...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;