import React, {useState} from 'react';
import s from "./CustomCheckbox.module.css";
import checkIcon from "./../../StaticImages/check.svg";

function CustomCheckbox(props) {
    const [active, setActive] = useState(false);
    return (
        <div className={active ? s.checkbox + ' ' + s.active : s.checkbox} onClick={e => {
            let newValue = !e.currentTarget.classList.contains(s.active)
            setActive(newValue);
            props.callback(newValue);
            console.log(newValue)
        }}>
            <img src={checkIcon} alt=""/>
        </div>
    );
}

export default CustomCheckbox;