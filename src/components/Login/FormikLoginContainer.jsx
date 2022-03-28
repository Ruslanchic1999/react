import React from 'react';

import  './FormikControl.css'

import {Login, Logout} from "../../redux/auth_reducer";

import FormikLogin from "./FormikLogin";
import {connect} from "react-redux";



function FormikLoginContainer () {

    return (
       <FormikLogin />
    );
};

const mapStateToProps = (state) => {
    return (
        {
            isAuth: state.auth.isAuth,
           }

    )
}

export default connect(mapStateToProps, {Login,Logout}) (FormikLogin);
