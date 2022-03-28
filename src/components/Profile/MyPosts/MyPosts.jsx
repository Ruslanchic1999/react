import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import * as Yup from "yup";
import {Form, Formik} from "formik";
import FormikControl from "../../Login/FormikControl";
import store from '../../../redux/redux-store';
import {addPost} from "../../../redux/profile_reducer";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} key={p.key} likesCount={p.likesCount}/>);

    return (
        <div>
            <h3> My Posts </h3>
           <FormikMyPost />
            <div className={s.postsBlock}>
                {postsElements}
            </div>

        </div>
    )
}


function FormikMyPost () {
    const initialValues = {
        newPostText: ''
    }
    const validationSchema = Yup.object({

        newPostText: Yup.string().required('Required')

    })
    const onSubmit = (values) => {
        store.dispatch(addPost(values.newPostText))
    }

    return (
        <Formik initialValues={initialValues} validationSchema ={validationSchema} onSubmit = {onSubmit} >
            {
                formik =>{

                    return(
                        <Form className = 'formControl'>

                            <FormikControl control = 'textarea'
                                           label = 'Description'
                                           name = 'newPostText'
                                           placeholder = 'Enter your post'/>

                            <button type = "submit" disabled={!formik.isValid} > Add post </button>
                        </Form>

                    )}
            }
        </Formik>
    );
};




export default MyPosts;
