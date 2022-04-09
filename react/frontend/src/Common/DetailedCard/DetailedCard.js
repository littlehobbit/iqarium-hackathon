import React from 'react';
import s from "./DetailedCard.module.css";

function DetailedCard(props) {
    return (
        <div className={s.detailed_card} onClick={() => {

        }}>
            <div className={s.body}>
                <span className={s.title}> {props.title}</span>
                <span className={s.category}> {`категория: ${props.category}`}</span>
                <span className={s.sub_category}> {`подкатегория: ${props.category}`}</span>
                <span className={s.sender}> {props.sender}</span>
            </div>
            <div className={s.bottom_layer}>

            </div>
        </div>
    );
}


export default DetailedCard;
