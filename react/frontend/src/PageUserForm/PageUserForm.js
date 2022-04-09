import React from 'react'
import s from './PageUserForm.module.css';
import Header from "../Common/Header/Header";
import Button from "../Common/Button/Button";
import Input from "../Common/Input/Input";
import Area from "../Common/Area/Area";

import mailIcon from '../StaticImages/majesticons_mail.png'
import homeIcon from '../StaticImages/majesticons_home-line.svg'
import userIcon from '../StaticImages/majesticons_user-line.svg'
import textBoxIcon from '../StaticImages/majesticons_textbox.png'
import ReactLogo from "../StaticImages/logo_white.svg";
import LongInput from "../Common/LongInput/LongInput";
import AreaLong from "../Common/AreaLong/AreaLong";

function PageUserForm(props) {
    return (

        <div className={s.page}>
            <div className={s.two_rows}>
                <div className={s.big_pic_texts}>
                    <a href={"#"} className={s.logo}>
                        <span>Обращайся.ру</span>
                    </a>
                    <div className={s.block_big_pic}>
                        <h1 className={s.title}>СТОЛКНУЛИСЬ С ГРУБОСТЬЮ
                            И БОЛЬШИМИ ОЧЕРЕДЯМИ?</h1>
                        <p className={s.subtitle}>Наша компания помогает исправить проблемы тысяч заявителей.<br/>
                            Подайте заявку, помогите стране!</p>
                        <div className={s.white_button}>
                             Оформить
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.fields_block}>
                <p className={s.simple_text}>Наши специалисты ежедневно помогают тысячам людей Поспешите и мы поможем
                    вам!</p>
                <div className={s.fields_wrapper}>
                    <LongInput icon={userIcon} placeholder={"ФИО заявителя"}/>
                    <LongInput  icon={mailIcon} placeholder={"Адрес электронной почты"}/>
                    <LongInput  icon={homeIcon} placeholder={"Получатель"}/>
                    <AreaLong icon={textBoxIcon} placeholder={"Текст заявления"}/>
                    <Button text={"Отправить"}/>
                </div>

            </div>
        </div>
    )
}

export default PageUserForm