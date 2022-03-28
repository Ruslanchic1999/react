import React from 'react';
import {sendMessage} from "../../redux/dialogs_reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return (
        {
            dialogsPage: state.dialogsPage
        })

}

export default compose (connect (mapStateToProps, {sendMessage}),
    withAuthRedirect
)( Dialogs)


