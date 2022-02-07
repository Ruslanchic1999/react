import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return (
        { dialogsPage: state.dialogsPage }
    )

}

let mapDispatchToProps = (dispatch) => {
    return(
        {
            sendMessage: () => {
                dispatch(sendMessageCreator());
            },
            updateNewMessageBodyCreator: (body) => {
                let action = updateNewMessageBodyCreator(body);
                dispatch(action)
            }
        })
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
