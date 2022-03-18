import React from 'react';
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs_reducer";
import {connect} from "react-redux";
import AuthDialogsNavigateComponent from "./Dialogs";


let mapStateToProps = (state) => {
    return (
        {
            dialogsPage: state.dialogsPage
        })

}

const DialogsContainer = connect (mapStateToProps, {sendMessage, updateNewMessageBody})(AuthDialogsNavigateComponent);

export default DialogsContainer;
