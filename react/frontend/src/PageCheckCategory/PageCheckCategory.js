import React, { useEffect, useRef, useState } from 'react';
import Header from "../Common/Header/Header";
import s from "./PageCheckCategory.module.css"
import FilterButton from "../Common/FilterButton/FilterButton";
import DetailedCard from "../Common/DetailedCard/DetailedCard";
import ControlTextNeuron from "../Data/ControlTextNeuron";
import ShowMore from "../PageControlTextNeuron/LeftMenu/ShowMore/ShowMore";
import PopUpCheckCategories from "../PopUpCheckCategories/PopUpCheckCategories";
import PopupFunctionality from '../Common/Popup/PopupFunctionality';

function PageCheckCategory() {

    const [dataArray, setDataArray] = useState([]);
    const popup = useRef();
    useEffect(()=>{
        ControlTextNeuron.getRequestsList().then((result)=>{
            setDataArray(result);
        })
    }, [])

    let detailedCardsList = dataArray.map((item, index) => {
        return {
            id:item.id,
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
            <div className={s.position_wrapper}>
                <PopupFunctionality 
                    child={<PopUpCheckCategories/>} 
                    ref={popup} 
                    docName="asdasd"
                    defaultData={
                        {
                            id:
                        }
                    }
                    />
            </div>
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
                                      sender={item.sender}
                                      onclick={()=>{popup.current.showPopup(true); return item.}}/>
                    }).slice(0,9)}
                    {detailedCardsList.length > 10 ? <ShowMore/> : ""}
                </div>
            </div>


        </div>
    );
}

export default PageCheckCategory;
