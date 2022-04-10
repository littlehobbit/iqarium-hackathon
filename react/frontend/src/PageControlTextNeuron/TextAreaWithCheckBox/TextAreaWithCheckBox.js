import React, { useEffect, useState } from 'react';
import Area from "../../Common/Area/Area";
import s from "./TextAreaWithCheckBox.module.css"
import CustomCheckbox from "../../Common/CustomCheckbox/CustomCheckbox";

function TextAreaWithCheckBox(props) {
    let [inputState, setInputState] = useState(false);
    let [checkStateValue, setCheckStateValue] = useState(false);
    let [value, setValue]= useState("");
    useEffect(()=>{
        console.log(props)
        setValue([false, props.value])
    }, [props])
    return (
        <div className={s.textarea_body}>
            <Area icon={props.icon} placeholder ={props.placeholder} value={value[1]} callback={(value)=>{setValue([value[0], value]); console.log(value)}} state={inputState}/>
            <CustomCheckbox callback={(value)=>{setInputState(!value); props.callback([value, value[1]])}} CheckState={props.checkState}/>
        </div>
    );
}

export default TextAreaWithCheckBox;
