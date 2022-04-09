import React from 'react';
import s from "./LongInput.module.css";

function LongInput(props) {
    let inputValue
    return (
        <div className={s.custom_input}>
            <img src={props.icon} alt=""/>
            <input type="text" value={inputValue} placeholder={props.placeholder} value={props.value}/>
        </div>
    );
}

export default LongInput;