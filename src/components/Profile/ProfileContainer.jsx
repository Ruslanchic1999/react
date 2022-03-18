import React from 'react';
import Profile from "./Profile";
import {addPost, getUserProfile,  updateNewPostText} from "../../redux/profile_reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



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
        {profile: state.profilePage.profile,}
    )

}



export default compose(
    connect (mapStateToProps, {addPost, updateNewPostText, getUserProfile}),
    withAuthRedirect
)(ProfileContainer)






