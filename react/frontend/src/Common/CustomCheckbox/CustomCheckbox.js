import React, { useState } from 'react';
import s from "./CustomCheckbox.module.css";

function CustomCheckbox(props) {
    const [active, setActive] = useState(false);
    return (
        <div className={active ? s.checkbox + ' ' + s.active : s.checkbox} onClick={e => {
            props.callback(active);
            setActive(!active);
        }}>
        </div>
    );
}

export default CustomCheckbox;