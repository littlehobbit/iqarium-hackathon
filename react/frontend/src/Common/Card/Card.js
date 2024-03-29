import React from 'react';
import s from "./Card.module.css";

function Card(props) {
    return (
        <div className={props.isActive ? s.card + " " + s.active : s.card} onClick={() => {
            props.stateChanger(props.index)
        }}>
            <div className={s.body}>
                <span className={s.card_title} > {props.title}</span>
                <span className={s.card_sender} > {props.sender}</span>
            </div>
        </div>
    );
}


export default Card;
