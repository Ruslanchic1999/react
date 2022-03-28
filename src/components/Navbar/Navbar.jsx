
import React from 'react';
import s from './Navbar.module.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinkStyles = ({isActive}) => isActive ? s.active : undefined 
    
    
    return (
        <nav className={s.nav}>

            <div className={s.item}>
                <NavLink to='/profile' styles = {navLinkStyles}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' styles = {navLinkStyles}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to ='/news' styles = {navLinkStyles}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to ='/music' styles = {navLinkStyles}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to ='/setting' styles = {navLinkStyles}>Setting</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to ='/users' className={({ isActive }) =>
                    isActive ? s.active : undefined}>Users</NavLink>
            </div>


        </nav>
    );
}

export default Navbar;