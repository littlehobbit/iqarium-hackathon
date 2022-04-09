import React from 'react';
import s from "./Input.module.css";

function Input(props) {
    let inputValue
    return (
        <div className={s.custom_input}>
            <img src={props.icon} alt=""/>
            <input type="text" value={inputValue} placeholder={props.placeholder}/>
        </div>
    );
}

export default Input;