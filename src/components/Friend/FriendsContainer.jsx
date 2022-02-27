import React from 'react';
import {followAC, setFriendsAC, unFollowAC} from "../../redux/friends_reducer";
import {connect} from "react-redux";
import Friends from "./Friends";


let mapStateToProps = (state) => {
    return (
        { friends: state.friendsPage.friends }
    )

}

let mapDispatchToProps = (dispatch) => {
    debugger;
    return(
        {
            follow: (friendId) => {
                dispatch(followAC(friendId));
            },
            unfollow: (friendId) => {
                dispatch(unFollowAC(friendId));
            },
            setFriends: (friends) => {
                let action = setFriendsAC(friends);
                dispatch(action)
            }
        })
}

const FriendsContainer = connect (mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
