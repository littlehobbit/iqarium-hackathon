import React, { useEffect, useState } from 'react';
import s from "./PopUpCheckCategories.module.css";
import TextWithIcon from "../../Common/TextWithIcon/TextWithIcon";
import mailIcon from '../../StaticImages/majesticons_mail_blue.png'
import homeIcon from '../../StaticImages/majesticons_home-line_blue.png'
import userIcon from '../../StaticImages/majesticons_user-line_blue.png'
import calendarIcon from '../../StaticImages/majesticons_calendar_blue.png'
import textBoxIcon from '../../StaticImages/majesticons_textbox_blue.png'
import listIcon from '../../StaticImages/majesticons_checkbox-list-line.png'
import Input from "../../Common/Input/Input";
import Button from "../../Common/Button/Button";
import CategoryCheck from '../../Data/categoryCheck.js';

function PopUpCheckCategories(props) {

    let [requestData, setRequestData] = useState(null);
    let [userCategory, setCategory] = useState("");

    useEffect(()=>{
        CategoryCheck.getRequestData(props.defaultData.id).then(result=>{setRequestData(result); console.log(result)});
    }, [])

    return (
        <div className={s.two_rows}>
            <div className={s.data_fields}>
                <TextWithIcon 
                    icon={userIcon} 
                    text={requestData !== null ? requestData.request.full_name : ""} 
                    />
                <TextWithIcon 
                    icon={mailIcon} 
                    text={requestData !== null ? requestData.sender_mail: props.defaultData.sender_mail}
                    />
                <TextWithIcon icon={homeIcon} text={requestData !== null ? requestData.request.receiver: ""}/>
                <div className={s.description}>
                    <TextWithIcon icon={textBoxIcon} text={requestData !== null ? requestData.request.text: ""}/>
                </div>
                <TextWithIcon icon={calendarIcon} text={requestData !== null ? requestData.request.request_date: ""}/>
            </div>
            <div className={s.right_block}>
                <div>
                    <TextWithIcon icon={listIcon} text={requestData !== null ? requestData.category: props.defaultData.subCategory} />
                    <Input icon={textBoxIcon} placeholder={"Предлагаемая категория"} value={userCategory} callback={(res)=>{setCategory(res)}}/>
                </div>
                <div className={s.buttons_container}>
                    <Button text={"Подтвердить"} onclick={()=>{
                        let object = {
                            suggest:userCategory,
                            status:true
                        }
                        CategoryCheck.CategoryTextCheck(requestData.id, object);
                        document.location.reload()
                    }}/>
                    <Button text={"Отклонить"} onclick={()=>{
                        let object = {
                            suggest:userCategory,
                            status:false
                        }
                        CategoryCheck.CategoryTextCheck(requestData.id, object);
                    }}/>
                </div>
            </div>
        </div>
    );
}

export default PopUpCheckCategories;