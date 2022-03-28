import React from 'react';
import  './FormikControl.css'
function TextError (props) {
debugger
    return (
        <div className = 'error'>
            {props.children}
        </div>
    );
};

export default TextError;
