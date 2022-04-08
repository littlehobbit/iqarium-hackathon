import React from 'react';
import s from "./Logo.module.css";
import ReactLogo from '../../../StaticImages/logo.svg'

function ProfileCircle() {
    return (
        <a href={"#"} className={s.logo}>
            <img src={ReactLogo} className={s.logo_img}/>
            <span>Обращайся.ру</span>
        </a>
    );
}

export default ProfileCircle;
