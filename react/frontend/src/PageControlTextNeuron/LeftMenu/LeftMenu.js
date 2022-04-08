import React from 'react';
import s from "./LeftMenu.module.css";
import Card from "../../Common/Card/Card";
import ShowMore from "./ShowMore/ShowMore";
import ControlTextNeuron from "../../Data/ControlTextNeuron";

function LeftMenu() {

    let cardsList = ControlTextNeuron.getRequestsList().map(item =>
        <Card title={`Заявка №${item.id}`} sender={item.sender_mail} />
    )

    return (
        <div>
            <div className={s.menu_body}>
                {cardsList}
            </div>

        </div>
    );
}

export default LeftMenu;
