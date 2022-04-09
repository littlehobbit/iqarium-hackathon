import React, { useEffect, useState } from 'react';
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
import ControlTextNeuron from '../Data/ControlTextNeuron';

function PopUpCheckCategories(props) {
    
    let [requestData, setRequestData] = useState(null);
    console.log(props.defaultData);
    useEffect(()=>{
        ControlTextNeuron.getRequestData(props.defaultData.id).then(result=>{setRequestData(result); console.log(result)});
    }, [])

    return (
        <div className={s.two_rows}>
            <div className={s.data_fields}>
                <TextWithIcon icon={userIcon} text={"ФИО заявителя"}  text={requestData !== null ? requestData.request.full_name : ""}/>
                <TextWithIcon icon={mailIcon} text={"Адрес электронной почты"} text={requestData !== null ? requestData.sender_mail: props.defaultData.sender_mail}/>
                <TextWithIcon icon={homeIcon} text={"Получатель"} text={requestData !== null ? requestData.request.receiver: ""}/>
                <TextWithIcon icon={textBoxIcon} text={"Текст заявления"} text={requestData !== null ? requestData.request.text: ""}/>
                <TextWithIcon icon={calendarIcon} text={"Дата подачи заявления"} text={requestData !== null ? requestData.request.request_date: ""}/>
            </div>
            <div className={s.right_block}>
                <div>
                    <TextWithIcon icon={listIcon} text={props.defaultData.subCategory} />
                    <Input icon={textBoxIcon} placeholder={"Предлагаемая категория"} />
                </div>
                <div className={s.buttons_container}>
                    <Button text={"Подтвердить"} />
                    <Button text={"Отклонить"} />
                </div>
            </div>
        </div>
    );
}

export default PopUpCheckCategories;