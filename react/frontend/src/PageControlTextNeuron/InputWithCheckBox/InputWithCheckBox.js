import React, { useEffect, useState } from 'react';
import s from "./InputWithCheckBox.module.css";
import Input from "../../Common/Input/Input";
import CustomCheckbox from "../../Common/CustomCheckbox/CustomCheckbox";

function InputWithCheckBox(props) {
    let [checkboxValue, setCheckboxValue] = useState(false);
    let [inputState, setInputState] = useState(false);
    let [value, setValue]= useState("");
    useEffect((e)=>{
        console.log(props)
        setValue([false, props.value])
    }, [props])
    return (
        <div className={s.body}>
            <Input icon={props.icon} placeholder ={props.placeholder} value={value[1]} callback={(value)=>{setValue([value[0], value]); console.log(value)}} state={inputState}/>
            <CustomCheckbox callback={(value)=>{setInputState(value); setCheckboxValue(value); props.callback([value, value[1]])}} CheckState={props.checkState}/>
        </div>
    );
}

export default InputWithCheckBox;
