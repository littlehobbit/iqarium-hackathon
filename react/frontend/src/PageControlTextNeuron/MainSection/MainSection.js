import React from 'react';
import s from "./MainSection.module.css";
import arrow_left from '../../StaticImages/arrow-left.svg'
import InputWithCheckBox from "../InputWithCheckBox/InputWithCheckBox";
import icon from '../../StaticImages/logo.svg'
import mailIcon from '../../StaticImages/majesticons_mail.svg'
import homeIcon from '../../StaticImages/majesticons_home-line.svg'
import userIcon from '../../StaticImages/majesticons_user-line.svg'
import calendarIcon from '../../StaticImages/majesticons_calendar.svg'
import textBoxIcon from '../../StaticImages/majesticons_textbox.svg'
import TextAreaWithCheckBox from "../TextAreaWithCheckBox/TextAreaWithCheckBox";
import Button from "../../Common/Button/Button";

function MainSection(props) {
    return (
        <div className={s.main_section}>
            <div className={s.title}>
                <img src={arrow_left}/>
                <p>{`Заявка №${props.object.id}`}</p>
            </div>

            <div className={s.body}>
                <img src={props.object.request_image} className={s.image_doc}/>
                <div className={s.input_fields}>
                    <InputWithCheckBox icon={userIcon} placeholder={"ФИО заявителя"}/>
                    <InputWithCheckBox icon={mailIcon} placeholder={"Адрес электронной почты"}/>
                    <InputWithCheckBox icon={homeIcon} placeholder={"Получатель"}/>
                    <TextAreaWithCheckBox icon={textBoxIcon} placeholder={"Текст заявления"}/>
                    <InputWithCheckBox icon={calendarIcon} placeholder={"Дата подачи заявления"}/>

                </div>

            </div>
            <Button text={"Подтвердить"}/>
        </div>
    );
}

export default MainSection;
