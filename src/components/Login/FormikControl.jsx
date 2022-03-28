import React from 'react';
import Input from "./Input";
import Textarea from "./Textarea";
import ChakraInput from "./ChakraInput";




function FormikControl(props) {
    const {control, ...rest} = props
    switch (control) {
        case 'input' :return <Input {...rest} />
        case 'textarea' : return <Textarea {...rest} />
        case 'chakrainput' : return <ChakraInput {...rest} />

        default:
            return null
    }
};

export default FormikControl;

