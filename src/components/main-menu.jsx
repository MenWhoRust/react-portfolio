import React from "react";
import ImagePin from "./image-pin";
import pic from "../resources/images/avatar-large.jpeg";
import PhraseRevolver from "./phrase-revolver";
import phrasesJson from "../resources/json/phrases";

const MainMenu = (props) => {
    return (
        <div className="main-menu__container theme-dark">
            <ImagePin src={pic} alt="Me!"/>
            <PhraseRevolver text="I love $phrases!" phrases={phrasesJson}/>
            <div className="main-menu__button-box theme-dark">
                {
                    props.children.filter(c => c.type.name === 'NavButton')
                }
            </div>
        </div>
    );
};

export default MainMenu;
