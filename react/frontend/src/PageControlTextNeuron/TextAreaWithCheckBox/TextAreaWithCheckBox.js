import React from 'react';
import Area from "../../Common/Area/Area";
import s from "./TextAreaWithCheckBox.module.css"
import CustomCheckbox from "../../Common/CustomCheckbox/CustomCheckbox";

function TextAreaWithCheckBox(props) {
    let string
    return (
        <div className={s.textarea_body}>
            <Area icon={props.icon} placeholder ={props.placeholder} value={props.value}/>
            <CustomCheckbox />
        </div>
    );
}

export default TextAreaWithCheckBox;
