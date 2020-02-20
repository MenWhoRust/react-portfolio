import React from "react";


function ImagePin(props) {
    let imgUrl = props.src;
    let alt = props.alt;
    //TODO: Add image element
    return(
        <div className="image-pin__container image-pin--large">
            <img className="image-pin__content" alt={alt} src={imgUrl}/>
        </div>
    )

}

export default ImagePin;
