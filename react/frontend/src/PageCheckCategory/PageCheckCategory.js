import React, { useEffect, useRef, useState } from 'react';
import Header from "../Common/Header/Header";
import s from "./PageCheckCategory.module.css"
import FilterButton from "../Common/FilterButton/FilterButton";
import DetailedCard from "../Common/DetailedCard/DetailedCard";
import CategoryCheck from "../Data/categoryCheck.js";
import ShowMore from "../PageControlTextNeuron/LeftMenu/ShowMore/ShowMore";
import PopUpCheckCategories from "./PopUpCheckCategories/PopUpCheckCategories";
import PopupFunctionality from '../Common/Popup/PopupFunctionality';

function PageCheckCategory() {

    const [dataArray, setDataArray] = useState([]);
    const [popupItem, setPopupItem] = useState({id:-1, sender:"", request:null});
    const popup = useRef();
    useEffect(()=>{
        CategoryCheck.getRequestsList().then((result)=>{
            setDataArray(result);
        })
    }, [])

    let detailedCardsList = dataArray.map((item, index) => {
        return {
            id:item.id,
            title: `Заявка №${item.id}`,
            category: item.category,
            subCategory: item.subcategory,
            sender: item.sender_mail,
            indexInArray: index,
        }
    })

    return (
        <div className={s.page}>
            <Header/>
            <div className={s.position_wrapper}>
                <PopupFunctionality 
                    child={<PopUpCheckCategories defaultData={popupItem}/>} 
                    ref={popup} 
                    docName={`Заявка №${popupItem.id}`}
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
                                      onclick={()=>{popup.current.showPopup(true); setPopupItem(item)}}/>
                    }).slice(0,9)}
                    {detailedCardsList.length > 10 ? <div className={s.centerWrapp}> <ShowMore/> </div> : ""}
                </div>
            </div>


        </div>
    );
}

export default PageCheckCategory;
