import React, {useEffect, useState} from 'react';
import s from "./LeftMenu.module.css";
import Card from "../../Common/Card/Card";
import ShowMore from "./ShowMore/ShowMore";
import ControlTextNeuron from "../../Data/ControlTextNeuron";
import Header from "../../Common/Header/Header";

function LeftMenu(props) {
    const [activeCard, setActiveCard] = useState(-1);

    let cardsList = props.cardsListData.map((item, index) => {
        return {
            title: `Заявка №${item.id}`,
            sender: item.sender_mail,
            indexInArray: index,
            isActive: index === activeCard
        }
    })

    function updateActiveCard(clickedCardIndex) {
        setActiveCard(clickedCardIndex)
    }

    cardsList = props.cardsListData.map((item, index) => {
        if(index === activeCard) props.updateInfo(item.id)
        return {
            title: `Заявка №${item.id}`,
            sender: item.sender_mail,
            indexInArray: index,
            isActive: index === activeCard
        }
    })

    useEffect(() => {
        setActiveCard(0)
    }, []);


    return (

        <div>
            <div className={s.menu_body}>
                {cardsList.map((item) => <Card title={item.title}
                                               sender={item.sender}
                                               index={item.indexInArray}
                                               isActive={item.isActive}
                                               stateChanger={updateActiveCard}
                />).slice(0,14)}
                {cardsList.length > 13 ? <div className={s.moreWrapper}> <ShowMore/> </div> : ""}
            </div>

        </div>
    );
}

export default LeftMenu;
