import React, { useState, useEffect } from 'react';
import Aux from '../../hoc/ReactAux';

const RecipeImage = (props) => {

    let headline = "Image";
    let defaultClass = "card-img-top";
    let defaultImage = "/images/recipe.png";


    if(props.class != undefined && props.class.length > 0)
    {
        defaultClass = props.class;
    }

    const handleOnError = (ev) => {
        ev.target.src = defaultImage;
        defaultClass = "card-img-top p-3";
        ev.target.className = defaultClass;
        ev.target.onError = null;

    }

    return (
        <Aux>
            <img src={props.image} className={defaultClass} onError={handleOnError} alt={headline}/>
        </Aux>
    );
}

export default RecipeImage;
