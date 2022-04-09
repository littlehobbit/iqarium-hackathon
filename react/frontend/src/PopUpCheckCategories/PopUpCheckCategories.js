import React from 'react';
import s from "./PopUpCheckCategories.module.css";
import TextWithIcon from "../Common/TextWithIcon/TextWithIcon";
import mailIcon from '../StaticImages/majesticons_mail.png'
import homeIcon from '../StaticImages/majesticons_home-line.svg'
import userIcon from '../StaticImages/majesticons_user-line.svg'
import calendarIcon from '../StaticImages/majesticons_calendar.svg'
import textBoxIcon from '../StaticImages/majesticons_textbox.png'
import listIcon from '../StaticImages/majesticons_checkbox-list-line.svg'
import Input from "../Common/Input/Input";
import Button from "../Common/Button/Button";
import PopupFunctionality from "../Common/Popup/PopupFunctionality";

function PopUpCheckCategories(props) {
    return (
        <div className={s.position_wrapper}>
            <PopupFunctionality child=
                                    {<div className={s.two_rows}>
                                        <div className={s.data_fields}>
                                            <TextWithIcon icon={userIcon} text={"ФИО заявителя"}/>
                                            <TextWithIcon icon={mailIcon} text={"Адрес электронной почты"}/>
                                            <TextWithIcon icon={homeIcon} text={"Получатель"}/>
                                            <TextWithIcon icon={textBoxIcon} text={"Текст заявления"}/>
                                            <TextWithIcon icon={calendarIcon} text={"Дата подачи заявления"}/>
                                        </div>
                                        <div className={s.right_block}>
                                            <div>
                                                <TextWithIcon icon={listIcon} text={"Сгенерированная категория"}/>
                                                <Input icon={textBoxIcon} placeholder={"Предлагаемая категория"}/>
                                            </div>
                                            <div className={s.buttons_container}>
                                                <Button text={"Подтвердить"}/>
                                                <Button text={"Отклонить"}/>
                                            </div>
                                        </div>
                                    </div>}/>
        </div>
    );
}

export default PopUpCheckCategories;