import React, { useState } from 'react';
import Aux from '../../../hoc/ReactAux';
import SimpleReactValidator from 'simple-react-validator';
import useFormHook from '../../../components/FormHook/FormHook';

const RecipeIngrediants = (props) => {

    const validator = new SimpleReactValidator();

    let ingrediants_list = "";

    const init_ingrediant = { name: "", measure:"" };
    const ingrediant = useFormHook(init_ingrediant);
    const [ingrediants, setIngrediants] = useState(ingrediants_list);
    
    const loadIngrediants = () => {
        
        let ingrediants_list;
        
        if(ingrediants.length <= 0){
            ingrediants_list = <tr>
                <td className="text-center" colSpan="100%">Please add ingrediants</td>
            </tr>;
        }
        else{
            ingrediants_list = ingrediants.map((item,index) => {
                let name = "ingredients["+index+"][name]";
                let measure = "ingredients["+index+"][measure]";
                return <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.measure}</td>
                    <td>
                        <input type="hidden" name={name} value={item.name} />
                        <input type="hidden" name={measure} value={item.measure} />
                        <button type="button" className="btn btn-danger btn-sm" onClick={() => removeIngrediants(index)}>Remove</button>
                    </td>
                </tr>
            });
        }

        return ingrediants_list;
    }

    const addIngrediants = (event) => {

        if (validator.allValid()) {
            let temp = ingrediant.inputs;
            setIngrediants([...ingrediants,temp]);
            ingrediant.setInputs(init_ingrediant);
        }
        
    }
    
    const removeIngrediants = (itemIndex) => {
        ingrediants.splice(itemIndex,1);
        setIngrediants([...ingrediants]);
    }

    return (
        <Aux>
            <h4>Ingrediants: </h4>
            <hr/>
            <div className="mb-5">
                <div className="form-row mb-3">
                    <div className="form-group col-md-5 col-sm-12">
                        <label>Ingrediant Name</label>
                        <input type="text" 
                            name="name" 
                            className="form-control" 
                            placeholder="Ingrediant Name" 
                            onChange={ingrediant.handleInputChange} 
                            value={ingrediant.inputs.name} />
                        {validator.message('name', ingrediant.inputs.name, 'required')}
                    </div>
                    <div className="form-group col-md-5 col-sm-12">
                        <label>Ingrediant Measure</label>
                        <input type="text" 
                            name="measure" 
                            className="form-control" 
                            placeholder="Ingrediant Measure" 
                            onChange={ingrediant.handleInputChange} 
                            value={ingrediant.inputs.measure} />
                        {validator.message('measure', ingrediant.inputs.measure, 'required')}
                    </div>
                    <div className="form-group col-md-2 col-sm-12">
                        <label>&nbsp;</label>
                        <button type="button" 
                            className="btn btn-success btn-sm form-control" 
                            onClick={addIngrediants}>Add</button>
                    </div>
                </div>
            
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Measure</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loadIngrediants()}
                    </tbody>
                </table>
            </div>
                                        
        </Aux>
    )
}

export default RecipeIngrediants;
