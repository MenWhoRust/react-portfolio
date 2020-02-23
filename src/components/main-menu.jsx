import React from "react";
import ImagePin from "./image-pin";
import pic from "../resources/images/avatar-large.jpeg";
import PhraseRevolver from "./phrase-revolver";
import NavButton from "./nav-button";


const phrases = [
    'coding',
    'learning',
    'designing',
    'growing',
    'thinking'

];

const MainMenu = (props) => {
    return(
        <div className="main-menu__container theme-dark">
            <ImagePin src={pic} alt="Me!"/>
            <PhraseRevolver text="I love $phrases!" phrases={ phrases }/>
            <div className="main-menu__button-box theme-dark">
                {props.child}
                <NavButton text="Summary"/>
                <NavButton text="Skills"/>
                <NavButton text="Projects"/>
                <NavButton text="Aspirations"/>
            </div>
        </div>
    );

}

export default MainMenu;
