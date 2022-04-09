import React from 'react';
import s from "./DetailedCard.module.css";

function DetailedCard(props) {
    func();
    return (
        <div onClick={props.onclick}>
            <div className={s.detailed_card} onClick={() => {

            }}>
                <div className={s.bottom_layer}>

                </div>
                <div className={s.body}>
                    <span className={s.title}> {props.title}</span>
                    <span className={s.category}> {`категория: ${props.category}`}</span>
                    <span className={s.sub_category}> {`подкатегория: ${props.category}`}</span>
                    <span className={s.sender}> {props.sender}</span>
                </div>

            </div>

        </div>

    )

}


async function func() {
    let otvet = await (await fetch('http://26.120.212.37:3000/img-req/request/1')).json();
    console.log(otvet);
}

export default DetailedCard;
