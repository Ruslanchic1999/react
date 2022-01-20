import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    
    return (

        <div className={s.item}>
            <img src='https://avatars.mds.yandex.net/get-zen_doc/3381150/pub_5fe595608380f70f48b64390_5fe59ece8380f70f48c5d6e3/scale_1200' />
            { props.message }
            <div>
            
            <span> like</span>  {props.likesCount} 
            </div>
        </div>

    )
}

export default Post;
