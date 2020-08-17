import React, { useState, useEffect } from 'react';
import Aux from '../../hoc/ReactAux';
import { Route } from 'react-router-dom';

import classes from './Recipe.module.css';

import Recipes from './Recipes/Recipes';
import RecipeDetail from './RecipeDetail/RecipeDetail';
import RecipeAdd from './RecipeAdd/RecipeAdd';


const Recipe = (props) => {

    return (
        <Aux>
            {/* <Route path="/" exact render={() => <h1>Hello</h1> } />
            <Route path="/" render={() => <h1>Hello 2</h1> } /> */}

            <div className={classes.MainSection}>
                <Route path="/recipes" exact component={Recipes} />
                <Route path="/new-recipe" exact component={RecipeAdd} />
                <Route path="/recipes/:id" exact component={RecipeDetail} />
            </div>
            
        </Aux>
    )
}

export default Recipe;
