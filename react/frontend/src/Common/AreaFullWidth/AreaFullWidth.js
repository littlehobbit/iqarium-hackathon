import React from 'react';
import s from "./AreaFullWidth.module.css";

function AreaFullWidth(props) {

    return (
        <div className={s.text_area}>
            <img src={props.icon} alt=""/>
            <textarea rows="10"
                      type="text"
                      placeholder={props.placeholder}
                      value={props.value}
                      onChange={(e)=>{props.callback(e.target.value)}}/>
        </div>
    );
}

export default AreaFullWidth;