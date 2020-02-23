import React from "react";

function NavButton(props) {
    return(
        <div className="nav-button__container theme-dark" onClick={props.onClick}>
            <span className="nav-button__text theme-dark">{props.text}</span>
        </div>
    )

}

export default NavButton;
