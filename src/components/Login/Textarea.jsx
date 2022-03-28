import React from 'react';
import  './FormikControl.css'
import {ErrorMessage, Field} from "formik";
import TextError from "./TextError";

const Textarea = (props) => {
    const {label , name , ...rest} = props
    return (
        <div className = 'formControl'>
            <label htmlFor = {name}> {label} </label>
            <Field  as = 'textarea' id ={name} name ={name} {...rest} />
            <ErrorMessage component ={TextError} name ={ name} />
        </div>
    );
};

export default Textarea;
