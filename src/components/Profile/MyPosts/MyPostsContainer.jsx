import React from 'react';
import {
    addPost,
    updateNewPostText,
} from "../../../redux/profile_reducer";
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
    return({
            addPost: () =>
            {
                dispatch(addPost());
            },
            updateNewPostText: (text) =>
            {
                let action = updateNewPostText(text);
                dispatch(action)
            }
        })
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts);



export default MyPostsContainer;
