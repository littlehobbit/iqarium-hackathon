import React from 'react';
import s from "./ShowMore.module.css";
import ReactLogo from '../../../StaticImages/arrow_down.svg'

function ShowMore() {
    return (
        <a href={"#"} className={s.show_more_block}>
            <img src={ReactLogo} className={s.arrow}/>
            <span>Показать ещё</span>
        </a>
    );
}

export default ShowMore;
