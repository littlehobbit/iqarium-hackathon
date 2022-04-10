import React, { useEffect, useState } from 'react';
import s from "./InputWithCheckBox.module.css";
import Input from "../../Common/Input/Input";
import CustomCheckbox from "../../Common/CustomCheckbox/CustomCheckbox";
import Area from "../../Common/Area/Area";

function InputWithCheckBox(props) {
    let [inputState, setInputState] = useState(false);
    let [fvalue, setValue] = useState("");
    let [checkStateValue, setCheckStateValue] = useState(false);
    useEffect(() => {
        console.log(props)
        setValue([false, props.value])
    }, [props])
    return (
        <div className={s.body}>
            <Input icon={props.icon} placeholder={props.placeholder} value={fvalue[1]} callback={(value) => {
                setValue([fvalue[0], value]);
                console.log(fvalue)
            }} state={inputState}/>
            <CustomCheckbox callback={(value) => {
                setInputState(!value);
                props.callback([value, fvalue[1]])
            }} CheckState={props.checkState}/>
        </div>
    );
}

export default InputWithCheckBox;