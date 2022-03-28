import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem";
import Messages from "./Messages";
import {Form, Formik} from 'formik';
import * as Yup from 'yup'
import FormikControl from "../Login/FormikControl";
import  '../Login/FormikControl.css';
import store from '../../redux/redux-store';
import {sendMessage} from "../../redux/dialogs_reducer";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => < DialogItem name={d.name} key={d.key} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => < Messages message={m.message} key={m.key}/>);
   let addNewMessage = (values) => {
       debugger
    props.sendMessage(values.newMessageBody)
}


    return (
        <div>
            <DialogItem/>
            <Messages/>
            <h3> My Dialogs </h3>

            <div className={s.dialogs}>
                <div className={s.dialogItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                   <FormikDialogs onSubmit = { addNewMessage } />

                </div>

            </div>
        </div>
    )
}

function FormikDialogs () {
    const initialValues = {
        newMessageBody: ''
    }
    const validationSchema = Yup.object({

        newMessageBody: Yup.string().required('Required')

    })
    const onSubmit = (values) => {
        store.dispatch(sendMessage(values.newMessageBody))
    }

    return (
        <Formik initialValues={initialValues} validationSchema ={validationSchema} onSubmit = {onSubmit} >
            {
                formik =>{

                    return(
                        <Form className = 'formControl'>

                            <FormikControl control = 'textarea'
                                           label = 'Description'
                                           name = 'newMessageBody'
                                           placeholder = 'Enter your message'/>

                            <button type = "submit" disabled={!formik.isValid} > Send Message </button>
                        </Form>

                    )}
            }
        </Formik>
    );
};



export default Dialogs;





