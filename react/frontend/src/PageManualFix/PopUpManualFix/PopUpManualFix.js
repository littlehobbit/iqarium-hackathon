import React, {useEffect, useState} from 'react';
import s from "./PopUpManualFix.module.css";
import TextWithIcon from "../../Common/TextWithIcon/TextWithIcon";
import mailIcon from '../../StaticImages/majesticons_mail_blue.png'
import homeIcon from '../../StaticImages/majesticons_home-line_blue.png'
import userIcon from '../../StaticImages/majesticons_user-line_blue.png'
import calendarIcon from '../../StaticImages/majesticons_calendar_blue.png'
import textBoxIcon from '../../StaticImages/majesticons_textbox_blue.png'
import listIconBlue from '../../StaticImages/majesticons_checkbox-list-line.svg'
import Input from "../../Common/Input/Input";
import Button from "../../Common/Button/Button";
import ManualCheck from '../../Data/manualCheck';
import AreaFullWidth from "../../Common/AreaFullWidth/AreaFullWidth";

function PopUpManualFix(props) {

    let [requestData, setRequestData] = useState(null);
    let [replyMessage, setReplyMessage] = useState("");
    useEffect(() => {
        ManualCheck.getRequestData(props.defaultData.id).then(result => {
            console.log(result);
            setRequestData(result);
        });
    }, [])
    return (
        <>
            <div className={s.two_rows}>
                <div className={s.data_fields}>
                    <TextWithIcon icon={userIcon} text={"ФИО заявителя"}
                                  text={requestData !== null ? requestData.request.full_name : ""}/>
                    <TextWithIcon icon={mailIcon} text={"Адрес электронной почты"}
                                  text={requestData !== null ? requestData.sender_mail : props.defaultData.sender_mail}/>
                    <TextWithIcon icon={homeIcon} text={"Получатель"}
                                  text={requestData !== null ? requestData.request.receiver : ""}/>
                    <div className={s.description}>
                        <TextWithIcon icon={textBoxIcon} text={"Текст заявления"}
                                      text={requestData !== null ? requestData.request.text : ""}/>
                    </div>
                    <TextWithIcon icon={calendarIcon} text={"Дата подачи заявления"}
                                  text={requestData !== null ? requestData.request.request_date : ""}/>
                </div>
                <div className={s.right_block}>
                    <div className={s.row}>
                        <div className={s.remove_margin}>
                            <TextWithIcon icon={listIconBlue} text={"Работник 1"}/>
                        </div>
                        <Input icon={textBoxIcon} placeholder={"Предлагаемая категория"} value={requestData !== null ? requestData.suggest[0].suggest : ""} state={true}/>
                    </div>
                    <div className={s.row}>
                        <div className={s.remove_margin}>
                            <TextWithIcon icon={listIconBlue} text={"Работник 2"}/>
                        </div>
                        <Input icon={textBoxIcon} placeholder={"Предлагаемая категория"} value={requestData !== null ? requestData.suggest[1].suggest : ""} state={true}/>
                    </div>
                </div>
            </div>
            <div className={s.input_field_block}>
                <AreaFullWidth icon={textBoxIcon} placeholder={"Текст заявления"} callback={(value)=>{
                    setReplyMessage(value);
                }}/>
                <div className={s.marginTop}>
                    <Button text={"Отправить"} onclick={()=>{
                        let object = {
                            replyText:replyMessage
                        }
                        ManualCheck.WriteReply(requestData.id, object);
                    }}/>
                </div>
            </div>
        </>
    )
        ;
}

export default PopUpManualFix;