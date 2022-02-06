import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Post from "../Profile/MyPosts/Post/Post";
import DialogItem from "./DialogItem";
import Messages from "./Messages";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";


const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage
    let dialogsElements = state.dialogs.map(d => < DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => < Messages message={m.message}/>);
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        let action = updateNewMessageBodyCreator(body)
        props.store.dispatch(action)
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
                            <textarea onChange={onNewMessageChange} value={newMessageBody} placeholder={'Enter your message'}></textarea>
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

export default Dialogs;
