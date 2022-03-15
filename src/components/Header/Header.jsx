import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (

        <header className={s.header}>
           <div> <img src='https://i.pinimg.com/originals/71/ff/89/71ff89fbe1987a5684aa48b453b25184.png' /></div>

            <div className={s.loginBlock}>
                { props.isAuth ? props.login : <NavLink to = {'/login'} >Login</NavLink> }
            </div>
        </header>
    );
}

export default Header;