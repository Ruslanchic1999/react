// import React from 'react';
// import {Form, Formik} from 'formik';
// import * as Yup from 'yup'
// import FormikControl from "../Login/FormikControl";
// import  '../Login/FormikControl.css'
//
//
// function FormikDialogs () {
//     const initialValues = {
//         description: ''
//     }
//     const validationSchema = Yup.object({
//
//         description: Yup.string().required('Required')
//
//     })
//     const onSubmit = values => { console.log('Data form', values)}
//
//     return (
//         <Formik initialValues={initialValues} validationSchema ={validationSchema} onSubmit = {onSubmit} >
//             {
//                 formik =>{
//
//                     return(
//                         <Form className = 'formControl'>
//
//                             <FormikControl control = 'textarea'
//                                            label = 'Description'
//                                            name = 'description'
//                                            placeholder = 'Enter your message'/>
//
//                             <button type = "submit" disabled={!formik.isValid} > Send Message </button>
//                         </Form>
//
//                     )}
//             }
//         </Formik>
//     );
// };
//
// export default FormikDialogs;
