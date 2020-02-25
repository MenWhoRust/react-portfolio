import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

const getCurrentModalClass = (element, isOpen) => {
    return `${element} ${isOpen ? `${element}--open` : `${element}--close`} theme-dark`;
};


const HeroModal = (props) => {
    return (
        <div className={getCurrentModalClass('hero-modal__container', props.isOpen)}>
            <div className={getCurrentModalClass('hero-modal__close-button', props.isOpen)} onClick={props.closeOnClick}>
                <FontAwesomeIcon icon={faTimes}/>
            </div>
            <div className={getCurrentModalClass('hero-modal__content', props.isOpen)}>
                {props.content}
            </div>
        </div>
    )


};

export default HeroModal;