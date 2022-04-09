import React from 'react';
import s from "./InputWithCheckBox.module.css";
import Input from "../../Common/Input/Input";
import CustomCheckbox from "../../Common/CustomCheckbox/CustomCheckbox";

function InputWithCheckBox(props) {
    let string
    return (
        <div className={s.body}>
            <Input icon={props.icon} placeholder ={props.placeholder}/>
            <CustomCheckbox />
        </div>
    );
}

export default InputWithCheckBox;
