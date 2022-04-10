import React from 'react';
import s from "./Footer.module.css";
import ReactLogo from "../../StaticImages/logo_white.svg";
import WhatsappIcon from "../../StaticImages/whats_icon.svg";
import VkIcon from "../../StaticImages/vk_icon.svg";
import TelegramIcon from "../../StaticImages/tg_icon.svg";

function Footer() {
    return (
        <div className={s.footer}>

            <div className={s.first_block}>
                <a href={"#"} className={s.logo}>
                    <img src={ReactLogo} className={s.logo_img}/>
                    <span>Обращайся.ру</span>
                </a>
                <p>© 2022 Obrashaisya. All rights reserved.</p>
            </div>
            <div className={s.second_block}>
                Оформить заявку
            </div>
            <div className={s.third_block}>
                <div>
                    <p>8-800-666-32-23</p>
                    <p>wecanhelp@obrashaisya.ru</p>
                    <div className={s.social}>
                        <img src={VkIcon} alt=""/>
                        <img src={TelegramIcon} alt=""/>
                        <img src={WhatsappIcon} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
