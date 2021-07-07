
import React from "react";
import "./Button.css";

export default function Button (props) {
    const {iconName, btnName, hrefValue} = props;
    return(
        <li className="listWrapper social-iconss">
            <p className="outerborder"></p>
        <a href={hrefValue}>
           <i className={iconName} ></i>
            <div className="btnContent">
                <p>{btnName}</p>
            </div>
        </a>
    </li>
    )
}