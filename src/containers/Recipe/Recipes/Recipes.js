import React, { useState, useEffect } from 'react';
import Aux from '../../../hoc/ReactAux';
import RecipeCard from '../RecipeCard/RecipeCard';
import axios from '../../../axios-config';

const Recipes = (props) => {
    const [recipes, setRecipes] = useState(null);
    const [error, setError] = useState(false);

    

    useEffect(() => {

        async function fetchRecipes() {
            
            await axios.get('recipes')
                .then(response => {
                    console.log(response.data.data);
                    setRecipes(response.data.data);
                    
                })
                .catch(error => setError(true));
        }
    
        fetchRecipes();

    },[]);

    let recipeCards = <p style={{textAlign:'center'}}>No Data Found</p>; 

    if(error === false){
        recipeCards = <p style={{ textAlign: 'center' }}>Loading...!!</p>;
    }

    const recipeSelectedHandler = (id) => {
        console.log("Recipe ID: ", id);
        console.log("History: ",props.history);
        props.history.push({ pathname: "recipes/" + id });
    }

    const getRecipeCards = () => {

        console.log("getRecipeCards: ", recipes);
        console.log("getRecipeCards Error : ", error);

        if(error === false && recipes != null){
            recipeCards = recipes.map(recipe => {
                return <RecipeCard 
                            key={recipe.id} 
                            name={recipe.name} 
                            image="test.jpg" 
                            total_serve={recipe.total_serve}
                            clicked={() => recipeSelectedHandler(recipe.id)} />;
            });
        }

        return recipeCards;
    }

    return (
        
        <Aux>
            <section>
                <div className="container">
                    <div className="row">
                        {getRecipeCards()}
                    </div>
                </div>
            </section>
        </Aux>
    );
}

export default Recipes;
