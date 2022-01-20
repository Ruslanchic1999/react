import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>

            <div>
                <img src='https://w-dog.ru/wallpapers/11/6/318594107862686/vodopad-laguna-zerkalnyj-prud-tropiki.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>

    )
}

export default ProfileInfo;
