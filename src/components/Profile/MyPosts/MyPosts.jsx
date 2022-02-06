import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";

const MyPosts = (props) => {
    let state =  props.store.getState().profilePage
    let postsElements = state.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let addPost = () =>
    {props.store.dispatch ( addPostActionCreator() )}
    let newPostText = state.newPostText;

    let onPostChange =(e) => {
   let text = e.target.value
    let action = updateNewPostTextActionCreator(text)
        console.log(action)
        props.store.dispatch (action);


}
    return (
        <div>
            <h3> My Posts </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={ newPostText }/>
                </div>

                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>

            </div>
            <div className={s.postsBlock}>
                { postsElements }
            </div>

        </div>


    )
}

export default MyPosts;
