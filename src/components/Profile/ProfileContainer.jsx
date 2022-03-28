import React from 'react';
import Profile from "./Profile";
import {addPost, getStatus, getUserProfile, updateStatus} from "../../redux/profile_reducer";
import {connect} from "react-redux";
import {Outlet} from 'react-router-dom'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";




class ProfileContainer extends React.Component {



    componentDidMount() {
       this.props.getUserProfile();
        this.props.getStatus()
    }

    render() {

        return (
            <>
                <div>
                    <Profile {...this.props}
                             profile={this.props.profile}
                             updateStatus={this.props.updateStatus}
                             status={this.props.status} />
                </div>
                <Outlet />
            </>

        )
    }

}


let mapStateToProps = (state) => {
    return (
        {
            profile: state.profilePage.profile,
            status : state.profilePage.status
        }
    )

}



export default compose (connect (mapStateToProps,
    {addPost, getUserProfile, getStatus, updateStatus}),
    withAuthRedirect)(ProfileContainer)








