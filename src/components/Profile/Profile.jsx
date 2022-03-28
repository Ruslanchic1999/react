import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {useParams} from 'react-router-dom'

const Profile = (props) => {
    const {userId} = useParams()

    return (


        <>
            <div>{userId}</div>
            <div>
                <ProfileInfo profile={props.profile} updateStatus ={props.updateStatus} status={props.status}/>
                <MyPostsContainer />
            </div>
        </>

    )
}

export default Profile;


