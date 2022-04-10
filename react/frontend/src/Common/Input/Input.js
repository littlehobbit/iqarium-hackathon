import React from 'react';
import s from "./Input.module.css";

function Input(props) {
    return (
        <div className={s.custom_input}>
            <img src={props.icon} alt=""/>
            <input 
                type="text" 
                placeholder={props.placeholder} 
                value={props.value} 
                disabled={props.state} 
                onChange={(e)=>{props.callback(e.target.value)}}/>
        </div>
    );
}

export default Input;