import React, { useEffect, useState } from 'react';
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
import ControlTextNeuron from '../../Data/ControlTextNeuron';

function MainSection(props) {
    let [fullName, setFullName] = useState([]);
    let [senderMail, setSenderMail] = useState([]);
    let [receiver, setReceiver] = useState([]);
    let [text, setText] = useState([]);
    let [requestTime, setRequestTime] = useState([]);
    useEffect(()=>{
        setFullName([false, props.object.request !== null ? props.object.request.full_name : ""]);
        setSenderMail([false, props.object.sender_mail]);
        setReceiver([false, props.object.request !== null ? props.object.request.receiver : ""]);
        setText([false, props.object.request !== null ? props.object.request.text : ""]);
        setRequestTime([false, props.object.request !== null ? props.object.request.request_date.split("T")[0]: ""])
    }, [props])
    return (
        <div className={s.main_section}>
            <div className={s.title}>
                <img src={arrow_left}/>
                <p>{`Заявка №${props.object.id}`}</p>
            </div>
            <div className={s.body}>
                <img src={props.object.request_image} className={s.image_doc}/>
                <div className={s.input_fields}>
                    <InputWithCheckBox 
                        icon={userIcon} 
                        placeholder={"ФИО заявителя"} 
                        value={fullName[1]}
                        callback={(value)=>{setFullName(value)}}/>
                    <InputWithCheckBox 
                        icon={mailIcon} 
                        placeholder={"Адрес электронной почты"} 
                        callback={(value)=>{setSenderMail(value)}}
                        value={senderMail[1]}/>
                    <InputWithCheckBox 
                        icon={homeIcon} 
                        placeholder={"Получатель"} 
                        callback={(value)=>{setReceiver(value)}}
                        value={receiver[1]}/>
                    <TextAreaWithCheckBox 
                        icon={textBoxIcon} 
                        placeholder={"Текст заявления"}
                        callback={(value)=>{setText(value)}} 
                        value={text[1]}/>
                    <InputWithCheckBox 
                        icon={calendarIcon} 
                        placeholder={"Дата подачи заявления"} 
                        callback={(value)=>{setRequestTime(value)}}
                        value={requestTime[1]}/>
                </div>

            </div>
            <Button 
            text={"Подтвердить"} onclick={()=>{
                if(!fullName[0] && !senderMail[0] && !receiver[0] && !text[0] && !requestTime[0]){
                let object = {
                    fullName:fullName[1],
                    email:senderMail[1],
                    receiver:receiver[1],
                    text:text[1],
                    reqDate:new Date(requestTime[1])
                }
                    ControlTextNeuron.ControlTextCheck(props.object.id, object)
                }
            }}/>
        </div>
    );
}

export default MainSection;
