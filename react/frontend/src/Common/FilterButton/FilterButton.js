import React, {useState} from 'react';
import s from "./FilterButton.module.css";

function FilterButton(props) {
    const [active, setActive] = useState(false);


    return (
        <div className={active ? s.filter + ' ' + s.active : s.filter} onClick={() => {
            setActive(!active);
        }}>
            {props.text}
        </div>
    );
}

export default FilterButton;
