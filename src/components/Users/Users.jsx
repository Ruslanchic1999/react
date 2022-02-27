import React from 'react';
import styles from './Users.module.css';
import * as  axios from 'axios'
import userPhoto from '../../assess/images/images.png'

class Users extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
    onPageChange = (pageNumber) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
        this.props.setCurrentPage(pageNumber);
    }

   render() {
        let pageCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize)
       let pages = [];
        for (let i=1; i <= pageCount; i++){
            pages.push(i);
        }
       return (
           <div>
               <div>
                   {
                       pages.map(p => {
                           return <button className={this.props.currentPage === p && styles.selectedPage}
                           onClick={() => {this.onPageChange(p);}}>{p}</button>
                       })
                   }
               </div>
               <div className={styles.container}>
                   {
                       this.props.users.map(u => <div key={u.id}>
                           <div className={styles.avatarka}>
                               <div>
                                   <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                               </div>
                               <div> {
                                   u.followed ? <button onClick={() => {
                                           this.props.unfollow(u.id)
                                       }}>Unfollow</button> :
                                       <button onClick={() => {
                                           this.props.follow(u.id)
                                       }}>Follow</button>
                               }
                               </div>
                           </div>
                           <div className={styles.status}>
                               <div>{u.name}</div>
                               <div>{u.status}</div>
                           </div>
                           <div className={styles.location}>
                               <div>[u.location.city]</div>
                               <div>[u.location.country]</div>
                           </div>
                       </div>)
                   }
               </div>
           </div>

       )
   }
}

export default Users;
