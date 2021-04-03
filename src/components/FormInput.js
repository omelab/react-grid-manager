/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"; 
export const FormInput = (props) => { 
  return (
    <> 
      <input 
        className={`form-control form-control-lg form-control-solid`}
        type={props.type || 'text'}
        name={props.name || 'input_name'}
        placeholder={props.placeholder || 'write here...'} 
        value={props.value || ''} 
        readOnly={props.readOnly || false} 
        onChange={e => props.handleChange?props.handleChange(e):console.log(e.target.value)} 
      />

    </>
  );
} 
