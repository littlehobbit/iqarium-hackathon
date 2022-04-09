import React from 'react';
import s from "./MainSection.module.css";
import arrow_left from '../../StaticImages/arrow-left.svg'
import InputWithCheckBox from "../InputWithCheckBox/InputWithCheckBox";
import icon from '../../StaticImages/logo.svg'
import mailIcon from '../../StaticImages/majesticons_mail.png'
import homeIcon from '../../StaticImages/majesticons_home-line.svg'
import userIcon from '../../StaticImages/majesticons_user-line.svg'
import calendarIcon from '../../StaticImages/majesticons_calendar.svg'
import textBoxIcon from '../../StaticImages/majesticons_textbox.png'
import TextAreaWithCheckBox from "../TextAreaWithCheckBox/TextAreaWithCheckBox";
import Button from "../../Common/Button/Button";

function MainSection(props) {
    console.log(props)
    return (
        <div className={s.main_section}>
            <div className={s.title}>
                <img src={arrow_left}/>
                <p>{`Заявка №${props.object.id}`}</p>
            </div>
            <div className={s.body}>
                <img src={props.object.request_image} className={s.image_doc}/>
                <div className={s.input_fields}>
                    <InputWithCheckBox icon={userIcon} placeholder={"ФИО заявителя"} value={props.object.request !== null ? props.object.request.full_name : ""}/>
                    <InputWithCheckBox icon={mailIcon} placeholder={"Адрес электронной почты"} value={props.object.sender_mail}/>
                    <InputWithCheckBox icon={homeIcon} placeholder={"Получатель"} value={props.object.request !== null ? props.object.request.receiver : ""}/>
                    <TextAreaWithCheckBox icon={textBoxIcon} placeholder={"Текст заявления"} value={props.object.request !== null ? props.object.request.text : ""}/>
                    <InputWithCheckBox icon={calendarIcon} placeholder={"Дата подачи заявления"} value={props.object.request !== null ? props.object.request.request_date.split("T")[0]: ""}/>
                </div>

            </div>
            <Button text={"Подтвердить"}/>
        </div>
    );
}

export default MainSection;
