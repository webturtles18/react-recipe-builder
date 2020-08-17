import {useState} from 'react';

const FormHook = (initialValues, callback) => {

    if(initialValues === null || initialValues === "undefined" || initialValues === ""){
        initialValues = {};
    }

    const [inputs, setInputs] = useState(initialValues);
    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        callback(event);
    }
    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return {
        handleSubmit,
        handleInputChange,
        inputs,
        setInputs
    };
}

export default FormHook;