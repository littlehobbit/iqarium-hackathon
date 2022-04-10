import React from 'react';
import s from "./Header.module.css";
import Notification from "./Notification/Notification";
import Profile from "./Profile/Profile";
import Logo from "./Logo/Logo";

function Header() {
    return (
        <div className={s.header_body}>
            <Logo/>
            <div className={s.right_block}>
                <Notification/>
                <Profile/>
            </div>
        </div>
    );
}

export default Header;
