import React from 'react';
import s from "./AreaFullWidth.module.css";

function AreaFullWidth(props) {
    let inputValue
    return (
        <div className={s.text_area}>
            <img src={props.icon} alt=""/>
            <textarea rows="10"
                      type="text"
                      value={inputValue}
                      placeholder={props.placeholder}
                      value={props.value}/>
        </div>
    );
}

export default AreaFullWidth;