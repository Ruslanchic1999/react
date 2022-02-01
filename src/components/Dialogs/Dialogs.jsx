import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Post from "../Profile/MyPosts/Post/Post";
import DialogItem from "./DialogItem";
import Messages from "./Messages";


const Dialogs = (props) => {
    let dialogsElements =
        props.dialogs.map(d => < DialogItem name={d.name} id={d.id}/>);

    let messagesElements =
        props.messages.map(m => < Messages message={m.message}/>);

    let newDialogElement = React.createRef();
    let newMessagesElement = React.createRef();
    let addDialog = () => {
        props.addDialog ();
    }
    let addMessage = () => {
        props.addMessage ();
    }

    return (
        <div>
            <DialogItem/>
            <Messages/>
            <h3> My Dialogs </h3>
            <div>
                <div>
                    <textarea  ref={newDialogElement} value={props.newDialogText}/>
                </div>

                <div>
                    <button onClick={addDialog}>Add Dialog</button>
                </div>

            </div>

            <div className={s.dialogs}>
                <div className={s.dialogItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>

                    {messagesElements}
                    <div>
                        <textarea ref={newMessagesElement} value={props.newMessageText}/>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add Message</button>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Dialogs;
