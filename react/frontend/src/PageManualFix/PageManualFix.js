import React, { useEffect, useState } from 'react';
import Header from "../Common/Header/Header";
import s from "./PageManualFix.module.css"
import FilterButton from "../Common/FilterButton/FilterButton";
import DetailedCard from "../Common/DetailedCard/DetailedCard";
import ControlTextNeuron from "../Data/ControlTextNeuron";
import ShowMore from "../PageControlTextNeuron/LeftMenu/ShowMore/ShowMore";
import PopUpCheckCategories from "../PopUpCheckCategories/PopUpCheckCategories";

function PageManualFix() {

    const [dataArray, setDataArray] = useState([]);

    useEffect(()=>{
        ControlTextNeuron.getRequestsList().then((result)=>{
            setDataArray(result);
        })
    }, [])

    let detailedCardsList = dataArray.map((item, index) => {
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
                <p className={s.title}>Заявки на ручную проверку</p>
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

export default PageManualFix;
