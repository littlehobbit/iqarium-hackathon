import React from 'react';
import s from "./Card.module.css";

function Card() {
    return (
        <div className={s.card}>
            <span className={s.card_title}></span>
            <span className={s.card_sender}></span>
        </div>
    );
}

export default Card;
