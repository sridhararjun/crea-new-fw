import "./landing.css"
import CreaLogo from "./crea-logo.png"
import { useEffect } from "react";

function Landing(){

    useEffect(()=>{
        var delayInMilliseconds = 3000;
        setTimeout(function(){
            var animatedIconsList = document.getElementById("icons").getElementsByTagName("li");
            var reachLabel = document.getElementById("connect-label");
            reachLabel.scrollIntoView({
                behavior:"smooth"
            });
            reachLabel.classList.add("animateNow")
            for (var i = 0; i < animatedIconsList.length; i++) {
                animatedIconsList[i].classList.add("animateNow");
            }
        },delayInMilliseconds);
    });

    return(<div class="container">
    <div class="item-1">
        <img id="logo" src={CreaLogo} alt="CREA Logo" />
    </div>
    <div id="connect-label">Connect with us through</div>
    <div class="item-2">
        <ul id="icons" class="social-icons">
            <li class="website">
                <a href="/site#soon">
                    <i class="fa fa-safari" onClick="handleHoverClick"></i>
                    <div class="slider">
                        <p>Website</p>
                    </div>
                </a>
            </li>
            <li class="mail">
                <a href="mailto:crealuxurymetaldecor@gmail.com">
                    <i class="fa fa-envelope"></i>
                    <div class="slider">
                        <p>mail</p>
                    </div>
                </a>
            </li>
            <li class="instagram">
                <a href="https://www.instagram.com/crealuxurymetaldecor/" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-instagram"></i>
                    <div class="slider">
                        <p>instagram</p>
                    </div>
                </a>
            </li>
            <li class="facebook">
                <a href="https://www.instagram.com/crealuxurymetaldecor/" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-facebook"></i>
                    <div class="slider">
                        <p>facebook</p>
                    </div>
                </a>
            </li>
            <li class="pinterest">
                <a href="https://in.pinterest.com/business/create/" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-pinterest"></i>
                    <div class="slider">
                        <p>pinterest</p>
                    </div>
                </a>
            </li>
            <li class="youtube">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-youtube"></i>
                    <div class="slider">
                        <p>youtube</p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</div>);
}

export default Landing;