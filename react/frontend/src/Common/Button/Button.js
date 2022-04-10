import React from 'react';
import s from "./Button.module.css";

function Button(props) {
    return (
        <div className={s.custom_button} onClick={props.onclick}>
            {props.text}
        </div>
    );
}

export default Button;