/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'; 
import { FormInput } from "FormInput";

const TestForm =()=> { 
    const [state, setState] = useState({ first_name: "", last_name: "", full_Name:'' }); 

    function onChange(event) {
        const { name, value } = event.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    }
    
    return (
        <div>
            <input name="title" onChange={onChange} value={state.title || ''} />
            <FormInput name="first_name" value={state.first_name || ''} handleChange={onChange} />
            <FormInput name="last_name" value={state.last_name || ''} handleChange={onChange} /> 
            <FormInput name="full_name" value={`${state.first_name || ''}  ${state.last_name || ''}`}/> 
        </div>
    ) 
}

export default TestForm;
