import "./landing.css"
import CreaLogo from "./crea-logo.png"

function Landing(){
    return(<div class="container">
    <div class="item-1">
        <img id="logo" src={CreaLogo} alt="CREA Logo" />
    </div>
    <div class="connect-label">Connect with us through</div>
    <div class="item-2">
        <ul id="icons" class="social-icons">
            <li class="website">
                <a href="/site">
                    <i class="fa fa-safari" onClick="handleHoverClick"></i>
                    <div class="slider">
                        <p>Website</p>
                    </div>
                </a>
            </li>
            <li class="mail">
                <a href="#">
                    <i class="fa fa-envelope"></i>
                    <div class="slider">
                        <p>mail</p>
                    </div>
                </a>
            </li>
            <li class="instagram">
                <a href="#">
                    <i class="fa fa-instagram"></i>
                    <div class="slider">
                        <p>instagram</p>
                    </div>
                </a>
            </li>
            <li class="facebook">
                <a href="#">
                    <i class="fa fa-facebook"></i>
                    <div class="slider">
                        <p>facebook</p>
                    </div>
                </a>
            </li>
            <li class="pinterest">
                <a href="#">
                    <i class="fa fa-pinterest"></i>
                    <div class="slider">
                        <p>pinterest</p>
                    </div>
                </a>
            </li>
            <li class="youtube">
                <a href="#">
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