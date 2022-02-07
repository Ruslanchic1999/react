import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return (
        {
            newPostText: state.profilePage.newPostText,
            posts: state.profilePage.posts
        }
    )

}

let mapDispatchToProps = (dispatch) => {
    debugger
    return({
            addPost: () =>
            {
                dispatch(addPostActionCreator());
            },
            updateNewPostTextActionCreator: (text) =>
            {
                let action = updateNewPostTextActionCreator(text);
                dispatch(action)
            }
        })
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts);



export default MyPostsContainer;
