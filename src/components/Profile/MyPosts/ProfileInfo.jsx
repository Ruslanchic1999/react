import React from 'react';
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assess/images/images.png';
import ProfileInfoStatus from "./ProfileInfo.Status";

const  ProfileInfo = (props) => {

    return (
         props.profile && <div>

                <div className={s.bigPhoto}>
                    <img src='https://w-dog.ru/wallpapers/11/6/318594107862686/vodopad-laguna-zerkalnyj-prud-tropiki.jpg'/>
                </div>
             <ProfileInfoStatus status = {props.status} updateStatus={props.updateStatus}/>
                <div className={s.descriptionBlock}>
                    <img src={props.profile ? props.profile.photos.large : userPhoto}/>
                </div>
                <div>{props.profile.aboutMe  }</div>
                <div>{props.profile.lookingForAJob }</div>
                <div>{props.profile.lookingForAJobDescription }</div>
                <div>{props.profile.fullName }</div>
                <div>{props.profile.contacts.facebook}</div>
            </div>


    )
}

export default ProfileInfo;
