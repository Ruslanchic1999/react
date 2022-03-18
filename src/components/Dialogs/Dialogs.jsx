import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem";
import Messages from "./Messages";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";
import {addPost, getUserProfile, updateNewPostText} from "../../redux/profile_reducer";







const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => < DialogItem name={d.name} key={d.key} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => < Messages message={m.message} key={m.key}/>);
    let newMessageBody = props.dialogsPage.newMessageBody;


    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)

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
                    <div>
                        <div>
                            <textarea onChange={onNewMessageChange} value={ newMessageBody } placeholder={'Enter your message'}></textarea>
                        </div>
                        <div>
                            <button onClick={ onSendMessageClick }>Send</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}


export default compose(
    withAuthRedirect
)(Dialogs)
