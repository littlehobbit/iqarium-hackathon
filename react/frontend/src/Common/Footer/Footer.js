import React from 'react';
import s from "./Footer.module.css";
import Notification from "./Notification/Notification";
import Profile from "./Profile/Profile";
import Logo from "./Logo/Logo";

function Footer() {
    return (
        <div className={s.footer}>
            <Logo/>
            <div className={s.right_block}>
                <Notification/>
                <Profile/>
            </div>
        </div>
    );
}

export default Footer;
