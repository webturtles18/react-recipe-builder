import React, { useState } from 'react';
import Aux from '../../../hoc/ReactAux';
import SimpleReactValidator from 'simple-react-validator';
import useFormHook from '../../../components/FormHook/FormHook';

const RecipeDirections = (props) => {

    const validator = new SimpleReactValidator();

    let directions_list = "";
    const init_direction = { title: "", description: "" };
    const direction = useFormHook(init_direction);
    const [directions, setDirections] = useState(directions_list);
    const loadDirections = () => {
        
        let directions_list;

        if(directions.length <= 0){
            directions_list = <tr>
                <td className="text-center" colSpan="100%">Please add directions</td>
            </tr>;
        }
        else{
            directions_list = directions.map((item,index) => {
                let title = "directions["+index+"][title]";
                let description = "directions["+index+"][description]";
                let count = (index + 1);

                return <tr key={index}>
                    <td>{count}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>
                        <input type="hidden" name={title} value={item.title} />
                        <input type="hidden" name={description} value={item.description} />
                        <button type="button" className="btn btn-danger btn-sm" onClick={() => removeDirections(index)}>Remove</button>
                    </td>
                </tr>
            });
        }

        return directions_list;
    }

    const addDirections = (event) => {
        if (validator.allValid()) {
            let temp = direction.inputs;
            setDirections([...directions,temp]);
            direction.setInputs(init_direction);
        }
    }
    
    const removeDirections = (itemIndex) => {
        directions.splice(itemIndex,1);
        setDirections([...directions]);
    }

    return (
        <Aux>
            <h4>Directions: </h4>
            <hr/>
            <div>
                <div className="form-row direction_container mb-3">
                    <div className="form-group col-md-5 col-sm-12">
                        <label>Title</label>
                        <input type="text" 
                            name="title" 
                            className="form-control" 
                            placeholder="Title"
                            onChange={direction.handleInputChange} 
                            value={direction.inputs.title} />
                        {validator.message('title', direction.inputs.title, 'required')}
                    </div>
                    <div className="form-group col-md-5 col-sm-12">
                        <label>Description</label>
                        <textarea name="description"
                            className="form-control" 
                            placeholder="Write Description..." 
                            onChange={direction.handleInputChange} 
                            value={direction.inputs.description}
                        />
                        {validator.message('description', direction.inputs.description, 'required')}
                    </div>
                    <div className="form-group col-md-2 col-sm-12">
                        <label>&nbsp;</label>
                        <button type="button" 
                            className="btn btn-success btn-sm form-control"
                            onClick={addDirections}>Add</button>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loadDirections()}
                    </tbody>
                </table>
            </div>
        </Aux>
    )
}

export default RecipeDirections;
