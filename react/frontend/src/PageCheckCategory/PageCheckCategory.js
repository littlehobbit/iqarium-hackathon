import React from 'react';
import Header from "../Common/Header/Header";
import s from "./PageCheckCategory.module.css"
import FilterButton from "../Common/FilterButton/FilterButton";
import DetailedCard from "../Common/DetailedCard/DetailedCard";
import ControlTextNeuron from "../Data/ControlTextNeuron";
import ShowMore from "../PageControlTextNeuron/LeftMenu/ShowMore/ShowMore";

function PageCheckCategory() {

    let detailedCardsList = ControlTextNeuron.getRequestsList().map((item, index) => {
        return {
            title: `Заявка №${item.id}`,
            category: "none",
            subCategory: "none",
            sender: item.sender_mail,
            indexInArray: index,
        }
    })

    return (
        <div className={s.page}>
            <Header/>

            <div className={s.body}>
                <div className={s.filters_list}>
                    <FilterButton text={"Все"}/>
                    <FilterButton text={"Жалобы"}/>
                    <FilterButton text={"Обращения"}/>
                    <FilterButton text={"Запросы"}/>
                </div>
                <p className={s.title}>Поиск по фильтру</p>
                <div className={s.cards_grid}>
                    {detailedCardsList.map((item) => {
                        return <DetailedCard title={item.title}
                                      category={item.category}
                                      subCategory={item.subCategory}
                                      sender={item.sender}/>
                    }).slice(0,9)}
                    {detailedCardsList.length > 10 ? <ShowMore/> : ""}
                </div>
            </div>


        </div>
    );
}

export default PageCheckCategory;
