import React from 'react';
import s from "./Notification.module.css";
import notificationIcon from "./../../../StaticImages/NotificationIcon.svg"

function Notification() {
    return (
        <a href={"#"} className={s.notification}>
            <img src={notificationIcon}/>
        </a>
    );
}

export default Notification;
