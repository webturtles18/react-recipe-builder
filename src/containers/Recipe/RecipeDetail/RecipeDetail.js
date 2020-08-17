import React, { useState, useEffect } from 'react';
import Aux from '../../../hoc/ReactAux';
import RecipeImage from '../../../components/RecipeImage/RecipeImage';
import axios from '../../../axios-config';

const RecipeDetail = (props) => {

    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {

        let id = props.match.params.id;
        async function fetchRecipe() {
            
            await axios.get('recipes/' + id)
                .then(response => {
                    setRecipe(response.data);                    
                })
                .catch(error => setError(true));
        }
    
        fetchRecipe();
    },[]);

    let recipeDetail = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

    if ( props.match.params.id ) {
        recipeDetail = <p style={{ textAlign: 'center' }}>Loading...!</p>;
    }

    const getRecipeCard = () => {

        let recipeCard = null;

        console.log("getRecipeCard: ", recipe);
        console.log("getRecipeCard Error : ", error);

        if(error === false && recipe != null){
            recipeCard = <Aux> 
                        <div className="col-md-4 col-xs-12">
                            <div className="card mb-4 py-1" >
                                <RecipeImage image="test.jpg" />
                            </div>
                        </div>
                        <div className="col-md-8 col-xs-12">
                            <div className="card mb-4 py-1" >
                                <div className="card-body text-center">
                                    <h5 className="card-title">{recipe.name}</h5>
                                    <p className="card-text">Total Serve: {recipe.total_serve}</p>
                                </div>
                            </div>
                        </div>
                        </Aux>;
        }
        else {
            recipeCard = recipeDetail;
        }

        return recipeCard;
    }

    return (
        <Aux>
            <section>
                <div className="container">
                    <div className="row">
                        {getRecipeCard()}
                    </div>
                </div>
            </section>            
        </Aux>
    );
}

export default RecipeDetail;
