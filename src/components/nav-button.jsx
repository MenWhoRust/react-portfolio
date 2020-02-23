import React from "react";

function NavButton(props) {
    return(
        <div className="nav-button__container theme-dark">
            <span className="nav-button__text theme-dark">{props.text}</span>
        </div>
    )

}

export default NavButton;
