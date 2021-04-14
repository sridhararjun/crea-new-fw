import "./site.css"
import {db} from "../../config/firebase"
import { useState } from "react";

function Site(){
    const [email,setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        var reference = db.ref('subscriptions');

        var data = {
            email: email
        }
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
            <input type="email" id="fname" name="emailId" placeholder="Enter your email" 
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="submit" value="Notify"/>
        </form>
    </div>
</article>);
}

export default Site;