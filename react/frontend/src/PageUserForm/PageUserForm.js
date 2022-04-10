import React, { useState } from 'react'
import s from './PageUserForm.module.css';
import Button from "../Common/Button/Button";

import mailIcon from '../StaticImages/majesticons_mail.png'
import homeIcon from '../StaticImages/majesticons_home-line.svg'
import userIcon from '../StaticImages/majesticons_user-line.svg'
import textBoxIcon from '../StaticImages/majesticons_textbox.png'
import ReactLogo from "../StaticImages/logo_white.svg";
import LongInput from "../Common/LongInput/LongInput";
import AreaLong from "../Common/AreaLong/AreaLong";
import Footer from "../Common/Footer/Footer";

function PageUserForm(props) {
    let [fullName2, setFullName] = useState();
    let [email2, setEmail] = useState();
    let [receiver2, setReceiver] = useState();
    let [text2, setText] = useState();

    return (
        <div className={s.page}>
            <div className={s.two_rows}>
                <div className={s.big_pic_texts}>
                    <a href={"#"} className={s.logo}>
                        <img src={ReactLogo} className={s.logo_img}/>
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
                    <LongInput icon={userIcon} placeholder={"ФИО заявителя"} onchange={(val)=>{setFullName(val)}}/>
                    <LongInput  icon={mailIcon} placeholder={"Адрес электронной почты"} onchange={(val)=>{setEmail(val)}}/>
                    <LongInput  icon={homeIcon} placeholder={"Получатель"} onchange={(val)=>{setReceiver(val)}}/>
                    <AreaLong icon={textBoxIcon} placeholder={"Текст заявления"} onchange={(val)=>{setText(val)}}/>
                    <Button text={"Отправить"} onclick={()=>{
                        fetch("http://26.120.212.37:3000/text-req/form/create",{
                            method:"POST",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body:JSON.stringify({
                                fullName:fullName2,
                                email:email2,
                                receiver:receiver2,
                                text:text2,
                                reqDate: new Date(Date.now())
                            })
                        })
                    }}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default PageUserForm