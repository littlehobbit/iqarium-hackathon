import React, { useEffect, useState } from 'react';
import s from "./InputWithCheckBox.module.css";
import Input from "../../Common/Input/Input";
import CustomCheckbox from "../../Common/CustomCheckbox/CustomCheckbox";

function InputWithCheckBox(props) {
    let [inputState, setInputState] = useState(false);
    let [fvalue, setValue]= useState("");
    useEffect(()=>{
        console.log(props)
        setValue([false, props.value])
    }, [props])
    return (
        <div className={s.body}>
            <Input icon={props.icon} placeholder ={props.placeholder} value={fvalue[1]} callback={(value)=>{setValue([fvalue[0], value]); console.log(fvalue)}} state={inputState}/>
            <CustomCheckbox callback={(value)=>{setInputState(!value); props.callback([value, fvalue[1]])}}/>
        </div>
    );
}

export default InputWithCheckBox;
