import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
            <div>
                <div className={s.dialog}>

                    <div className={s.item}>
                        <img
                            src='https://th.bing.com/th/id/OIP.T-le_BDdD7zcgfIywmZBHQHaIL?pid=ImgDet&rs=1'/>
                        <NavLink to={path}> {props.name} </NavLink>
                    </div>
                </div>
            </div>




                )
                };

                export default DialogItem;