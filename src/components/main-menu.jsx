import React from "react";
import ImagePin from "./image-pin";
import pic from "../resources/images/avatar-large.jpeg";
import PhraseRevolver from "./phrase-revolver";
import NavButton from "./nav-button";
import phrasesJson from "../resources/json/phrases";

const MainMenu = () => {
    return(
        <div className="main-menu__container theme-dark">
            <ImagePin src={pic} alt="Me!"/>
            <PhraseRevolver text="I love $phrases!" phrases={ phrasesJson }/>
            <div className="main-menu__button-box theme-dark">
                <NavButton text="Summary"/>
                <NavButton text="Skills"/>
                <NavButton text="Projects"/>
                <NavButton text="Aspirations"/>
            </div>
        </div>
    );

};

export default MainMenu;
