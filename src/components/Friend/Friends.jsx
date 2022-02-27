import React from 'react';
import s from './Friends.module.css'
import * as axios from "axios";

class Friends extends React.Component {
   componentDidMount() {
       axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
           this.props.setFriends(response.data.items)
       });
   }

render() {
    return(
        <div className={s.friends}>
            {
                this.props.friends.map(f => <div key={f.id}>
                    <div>
                        <img src={f.urlPhoto} className={s.photo}/>
                    </div>
                    <div>{f.name}</div>
                    <div>{
                        f.followed ? <button onClick={()=> this.props.follow(f.id)}>AddFriends</button>:
                                     <button onClick={()=> this.props.unfollow(f.id)}>RemoveFriends</button>
                    }
                    </div>
                </div>)
            }
        </div>
    )
}

}


export default Friends;