import React from 'react';
import s from "./Header.module.css";
import Notification from "./Notification/Notification";
import ProfileCircle from "./ProfileCircle/ProfileCircle";
import Logo from "./Logo/Logo";

function Header() {
    return (
        <div className={s.header_body}>
            <Logo/>
            <div className={s.right_block}>
                <Notification/>
                <ProfileCircle/>
            </div>
        </div>
    );
}

export default Header;
