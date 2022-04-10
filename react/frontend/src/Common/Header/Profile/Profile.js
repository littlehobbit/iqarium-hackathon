import React from 'react';
import s from "./Profile.module.css";
import avatar from "./../../../StaticImages/avatar.png"

function Profile() {
    return (
        <div className={s.profile}>
            <img src={avatar} className={s.avatar} alt="avatar"/>
            <div>
                <span className={s.name}>Кутуков Михаил</span>
                <span className={s.role}>Контроль заявок</span>
            </div>
        </div>
    );
}

export default Profile;
