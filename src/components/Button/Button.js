
import React from "react";
import "./Button.css";

export default function Button (props) {
    const {iconName, btnName} = props;
    return(
        <li className="listWrapper">
            <p className="outerborder"></p>
        <a href="mailto:crealuxurymetaldecor@gmail.com">
           <i className={iconName} ></i>
            <div className="btnContent">
                <p>{btnName}</p>
            </div>
        </a>
    </li>
    )
}