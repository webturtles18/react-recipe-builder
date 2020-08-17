import React, { useState } from 'react';
import Aux from '../../../hoc/ReactAux';
import axios from '../../../axios-config';
import useFormHook from '../../../components/FormHook/FormHook';
import SimpleReactValidator from 'simple-react-validator';
import RecipeIngredients from './RecipeIngrediants';
import RecipeDirections from './RecipeDirections';

const RecipeAdd = (props) => {

    const validator = new SimpleReactValidator({autoForceUpdate: this});

    const addRecipe = (event) => {

        const formdata = new FormData(event.target);

        axios.post(
            '/recipes/add', 
            formdata,
            { headers: { 'content-type': 'application/x-www-form-urlencoded' }}
        )
        .then(response => {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });


        // const data = {
        //     recipe_name: inputs.recipe_name,
        //     total_serve: inputs.total_serve,
        //     ingrediants: ingrediants,
        //     directions: directions
        // };

        // console.log(data);


        // fetch('http://larademo58.local.com/api/recipes/add', {
        //     method: 'POST',
        //     body: data,
        //     headers: {
        //         'content-type': 'application/x-www-form-urlencoded'
        //     }
        // })
        // .then(response => {
        //     //response.json();
        //     console.log(response)
        // })
        // .then(json => console.log(json));

        // jq.ajax({
        //     url: 'http://larademo58.local.com/api/recipes/add',
        //     type: 'post',
        //     data: data,
        //     dataType: 'json',
        //     processData: false,
        //     contentType: false,
        //     headers: { 'content-type': 'application/x-www-form-urlencoded' },
        //     success: function(response){
        //         console.log(response);
        //     },
        // });

    }

    const init_inputs = { recipe_name:"", total_serve:"" };
    const {inputs, handleInputChange, handleSubmit} = useFormHook(init_inputs,addRecipe);

    let ingrediants_list = [
        { name: "ing 1", measure: "m1"},
        { name: "ing 2", measure: "m2"},
        { name: "ing 3", measure: "m3"},
    ];

    let directions_list = [
        { title: "Direction 1", description: "Desc 1" },
        { title: "Direction 2", description: "Desc 2" },
        { title: "Direction 3", description: "Desc 3" },
    ];

    
    

    return (
        
        <Aux>
            <section>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-8">
                            <form name="frm-add-recipe" id="frm-add-recipe" onSubmit={handleSubmit}>
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Add New Recipe</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-row mb-5">
                                            <div className="form-group col-md-6">
                                                <label>Recipe Name</label>
                                                <input type="text" 
                                                    name="recipe_name"
                                                    className="form-control" 
                                                    onChange={handleInputChange} 
                                                    value={inputs.recipe_name} required />
                                            </div>
                                            <div className="form-group  col-md-6">
                                                <label>Total Serve</label>
                                                <input type="text" 
                                                    name="total_serve"
                                                    className="form-control" 
                                                    onChange={handleInputChange} 
                                                    value={inputs.total_serve} required />
                                            </div>
                                        </div>
                                        <RecipeIngredients />
                                        <RecipeDirections />
                                    </div>
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary">Save</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Aux>
    );
}

const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange
    };
}

export default RecipeAdd;
