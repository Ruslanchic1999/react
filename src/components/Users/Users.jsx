import React from 'react';
import userPhoto from '../../assess/images/images.png';
import s from './Users.module.css';
import {NavLink} from "react-router-dom";
import {deleteFollow, postFollow} from "../../api/api";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount/props.pageSize)
    let pages = [];
    for ( let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }
    return (
        <div>
            <div>
                { pages.map(p => {
                        return <button className={props.currentPage === p && s.selectedPage }
                                       onClick={(e) => {props.onPageChanged(p)}}>{p}</button>
                    }
                    )}
            </div>

            {
                props.users.map(u => <div key={u.id}>
                       <NavLink to = {'/profile/' + u.id}>
                           <div className={s.avatar}>
                           <img src={u.photos.large != null ? u.photos.large : userPhoto}/>
                          </div>
                       </NavLink>
                        <div>
                            {u.followed ? <button disabled={props.followingInProcess.some(id => id === u.id)} onClick={() => {
                                    props.toggleInFollowingProcess(true, u.id);
                                    deleteFollow(u)
                                        .then(data => {
                                            if (data.resultCode == 0) {
                                                props.unfollow(u.id);
                                            }
                                            props.toggleInFollowingProcess(false, u.id);
                                        })
                                }

                            }> Unfollow</button> :
                                <button disabled={props.followingInProcess.some(id => id === u.id)} onClick={() => {
                                    props.toggleInFollowingProcess(true, u.id);

                                    postFollow(u)
                                        .then(data => {
                                            if (data.resultCode == 0) {
                                                props.follow(u.id);
                                            }
                                            props.toggleInFollowingProcess(false, u.id);
                                        })
                                }

                                }> Follow</button>
                            }

                        </div>
                        <div>{u.status}</div>
                        <div>{u.name}</div>
                    </div>
                )
            }
        </div>
    )
}

export default Users;
