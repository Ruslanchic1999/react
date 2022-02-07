import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostText = props.newPostText;

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value
        props.updateNewPostTextActionCreator(text)
    }

    return (
        <div>
            <h3> My Posts </h3>
            <div>
                <div>
                    <textarea onChange={ onPostChange } value={newPostText}/>
                </div>

                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>

            </div>
            <div className={s.postsBlock}>
                {postsElements}
            </div>

        </div>


    )
}

export default MyPosts;
