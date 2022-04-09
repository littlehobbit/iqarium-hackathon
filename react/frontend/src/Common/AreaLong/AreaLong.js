import React from 'react';
import s from "./AreaLong.module.css";

function AreaLong(props) {
    let inputValue
    return (
        <div className={s.text_area}>
            <img src={props.icon} alt=""/>
            <textarea rows="15"
                      type="text"
                      value={inputValue}
                      placeholder={props.placeholder}
                      value={props.value}/>
        </div>
    );
}

export default AreaLong;