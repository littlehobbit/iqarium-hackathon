import React from 'react';
import s from "./Area.module.css";

function Area(props) {
    let inputValue
    return (
        <div className={s.text_area}>
            <img src={props.icon} alt=""/>
            <textarea rows="18"
                      type="text"
                      value={inputValue}
                      placeholder={props.placeholder}
                      value={props.value}/>
        </div>
    );
}

export default Area;