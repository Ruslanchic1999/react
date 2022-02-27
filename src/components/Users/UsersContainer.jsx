import React from 'react';
import {
    followAC, setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unFollowAC
} from "../../redux/users_reducer";
import Users from "./Users";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return (
        {
            users: state.usersPage.users,
            totalUsersCount: state.usersPage.totalUsersCount,
            pageSize: state.usersPage.pageSize,
            currentPage: state.usersPage.currentPage,
        }
    )

}

let mapDispatchToProps = (dispatch) => {
    return(
        {
            follow: (userId) => {
                dispatch(followAC(userId));
            },
            unfollow: (userId) => {
                dispatch(unFollowAC(userId));
            },
            setUsers: (users) => {
                let action = setUsersAC(users);
                dispatch(action)
            },
            setCurrentPage: (pageNumber) => {
                let action = setCurrentPageAC(pageNumber);
                dispatch(action)
            },
            setTotalUsersCount: (totalCount) => {
                let action = setTotalUsersCountAC(totalCount);
                dispatch(action)
            },
        })
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
