import "./site.css"
import {db} from "../../config/firebase"
import { useState } from "react";
import emailjs from 'emailjs-com';

function Site(){
    const [email,setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        var reference = db.ref('subscriptions');

        var data = {
            email: email
        }
        var successDialog = document.getElementById("subscribeSuccess");

        emailjs.sendForm('service_nne8783', 'template_61m5d2i', e.target, 'user_v0kDydSuiLzAe28AfIn5m')
           .then((result) => {
             successDialog.classList.add("showSuccess");
            }, (error) => {
            console.log(error.text);
      });
        reference.push(data);
    }
    return(<article id="home" a name="home">
    <div className="wrapper content">
        <h1>We&rsquo;ll be back soon!</h1>
        <p>
            If you need to you can always <a href="mailto:crealuxurymetaldecor@gmail.com">contact us</a>,
        </p>
        <p>
            Otherwise please leave us your email id and we will notify you!
        </p>
        <p className="team-crea">&mdash; Team CREA</p>

        <form onSubmit={handleSubmit}>
            <input type="email" id="emailId" name="emailId" placeholder="Enter your email" 
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required value={email} onChange={(e)=>setEmail(e.target.value)}/>
            
            <input type="text" id="phone" name="phone" required placeholder="Phone" pattern="(7|8|9)\d{9}"/>
            <input type="submit" value="Notify"/>
        </form>
        <p id="subscribeSuccess">Thanks!!! Our team will reach out to you in 24hrs...</p>
    </div>
</article>);
}

export default Site;