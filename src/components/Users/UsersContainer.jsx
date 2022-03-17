import React from 'react';
import {
    follow, getUsers, getUsersCurrentPage,
    setCurrentPage,
    setTotalCount,
    unfollow
} from "../../redux/users_reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {Redirect} from "react-router";


class UsersContainer extends React.Component {

    componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersCurrentPage(pageNumber, this.props.pageSize)
    }

    render() {

        return (
            <>
                <div>
                    {this.props.isFetching ? <Preloader/> : null}
                </div>
                <Users {...this.props} onPageChanged={this.onPageChanged}/>
            < />
        )
    }
}


let mapStateToProps = (state) => {
    return (
        {
            users: state.usersPage.users,
            pageSize: state.usersPage.pageSize,
            totalCount: state.usersPage.totalCount,
            currentPage: state.usersPage.currentPage,
            isFetching: state.usersPage.isFetching,
            followingInProcess: state.usersPage.followingInProcess,
        }
    )

}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setTotalCount,
    setCurrentPage,
    getUsers,
    getUsersCurrentPage

})(UsersContainer);


