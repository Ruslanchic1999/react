import React from 'react';
import  './FormikControl.css'
import {ErrorMessage, Field} from "formik";
import TextError from "./TextError";

function Input (props)  {
    const {label , name , ...rest} = props
    return (
        <div className = 'formControl'>
            <label htmlFor = {name}> {label} </label>
            <Field  id ={name} name ={name} {...rest} />
            <ErrorMessage component ={TextError} name ={ name} />
        </div>
    )
}

export default Input;
