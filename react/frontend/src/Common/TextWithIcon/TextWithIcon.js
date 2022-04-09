import React from 'react';
import s from "./TextWithIcon.module.css";

function TextWithIcon(props) {
    let inputValue
    return (
        <div className={s.text_with_image}>
            <img src={props.icon} alt=""/>
            <p>{props.text}</p>
        </div>
    );
}

export default TextWithIcon;