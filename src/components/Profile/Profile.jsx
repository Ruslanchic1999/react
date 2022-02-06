import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from "./MyPosts/ProfileInfo";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts store={props.store}/>
        </div>

    )
}

export default Profile;


