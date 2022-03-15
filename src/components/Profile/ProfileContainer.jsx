import React from 'react';
import Profile from "./Profile";
import {addPost, setUserProfile, updateNewPostText} from "../../redux/profile_reducer";
import {connect} from "react-redux";
import { profileAPI} from "../../api/api";



class ProfileContainer extends React.Component {

    componentDidMount() {
        profileAPI.getUserProfile()
        .then(data => {
            debugger;
            this.props.setUserProfile(data);
        });
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

export default  connect (mapStateToProps, {addPost, updateNewPostText, setUserProfile})(ProfileContainer);


