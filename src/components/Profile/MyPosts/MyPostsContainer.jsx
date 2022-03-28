import React from 'react';
import {
    addPost,
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
            addPost: (newPostText) =>
            {
                dispatch(addPost(newPostText));
            }
        })
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts);



export default MyPostsContainer;
