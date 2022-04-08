import React from 'react';
import s from "./InputWithCheckBox.module.css";

function InputWithCheckBox(props) {
    let string
    return (
        <div className={s.body}>
            <img src={props.icon} alt=""/>
            <input type="text" value={string} onChange={string} className={s.input}/>
            <input type="checkbox" value={string} onChange={string} />
        </div>
    );
}

export default InputWithCheckBox;
