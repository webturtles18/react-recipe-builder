import React from 'react';
import Aux from '../../../hoc/ReactAux';
import RecipeImage from '../../../components/RecipeImage/RecipeImage';

const RecipeCard = (props) => {

    return (
        <Aux>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" onClick={props.clicked}>
                <div className="card mb-4 py-1" >
                    <RecipeImage image={props.image} />
                    <div className="card-body text-center">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">Total Serve: {props.total_serve}</p>
                    </div>
                </div>
            </div>
        </Aux>
    );
}

export default RecipeCard;
