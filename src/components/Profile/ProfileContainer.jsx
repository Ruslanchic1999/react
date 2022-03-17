import React from 'react';
import Profile from "./Profile";
import {addPost, getUserProfile,  updateNewPostText} from "../../redux/profile_reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router";




class ProfileContainer extends React.Component {

    componentDidMount() {
       this.props.getUserProfile()
    }
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }

}

let mapStateToProps = (state) => {
    return (
        {profile: state.profilePage.profile}
    )

}

export default  connect (mapStateToProps, {addPost, updateNewPostText, getUserProfile})(ProfileContainer);


