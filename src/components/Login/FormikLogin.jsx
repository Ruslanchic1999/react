import React from 'react';
import {Form, Formik} from 'formik';
import * as Yup from 'yup'
import FormikControl from "./FormikControl";
import './FormikControl.css'
import {Login} from "../../redux/auth_reducer";
import store from "../../redux/redux-store";
import {Navigate} from 'react-router-dom'


function FormikLogin(props) {
    const initialValues = {
        email: '',
        password: '',
        rememberMe: [],
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
        rememberMe: Yup.array().required('Required')
    })
    const onSubmit = (values) => {
        const {email, password, rememberMe} = values
        store.dispatch(Login(email, password, rememberMe))
    }
debugger;
    if (props.isAuth) {
        return <Navigate to='/profile'/>
    }
    return (

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => {
                    return (
                        <Form className='formControl'>
                            <FormikControl control='chakrainput' type='email' label='Login' name='email'
                                           placeholder='Enter your email'/>
                            <FormikControl control='chakrainput' type='password' label='Password' name='password'
                                           placeholder='Enter your password'/>
                            <FormikControl control='input' type='checkbox' label='Remember me' name='rememberMe'/>
                            <button type="submit" disabled={!formik.isValid}> Login</button>
                        </Form>

                    )
                }
            }
        </Formik>
    );
};

export default FormikLogin;
