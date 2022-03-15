import React from 'react';
import {
    follow,
    isToggleFetching,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleInFollowingProcess,
    unfollow
} from "../../redux/users_reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import { usersAPI} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.isToggleFetching(true);
       usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.isToggleFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalCount(data.totalCount)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.isToggleFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getCUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.isToggleFetching(false);
            this.props.setUsers(data.items);
        });
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
    isToggleFetching,
    unfollow,
    setUsers,
    setTotalCount,
    setCurrentPage,
    toggleInFollowingProcess

})(UsersContainer);


