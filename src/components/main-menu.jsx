import React from "react";
import ImagePin from "./image-pin";
import pic from "../resources/images/avatar-large.jpeg";
import PhraseRevolver from "./phrase-revolver";

function MainMenu() {
    return(
        <div className="menu-container">
            <ImagePin src={pic} alt="Me!"/>
            <PhraseRevolver/>
        </div>
    );

}

export default MainMenu;