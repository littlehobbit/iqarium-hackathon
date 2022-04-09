import React, {useEffect, useRef, useState} from 'react';
import Header from "../Common/Header/Header";
import s from "./PageManualFix.module.css"
import FilterButton from "../Common/FilterButton/FilterButton";
import DetailedCard from "../Common/DetailedCard/DetailedCard";
import ControlTextNeuron from "../Data/ControlTextNeuron";
import ShowMore from "../PageControlTextNeuron/LeftMenu/ShowMore/ShowMore";
import PopupFunctionality from "../Common/Popup/PopupFunctionality";
import PopUpManualFix from "./PopUpManualFix/PopUpManualFix";

function PageManualFix() {

    const [dataArray, setDataArray] = useState([]);
    const [popupItem, setPopupItem] = useState({id: -1, sender: "", request: null});
    const popup = useRef();

    useEffect(() => {
        ControlTextNeuron.getRequestsList().then((result) => {
            setDataArray(result);
        })
    }, [])

    let detailedCardsList = dataArray.map((item, index) => {
        return {
            id: item.id,
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
                    child={<PopUpManualFix defaultData={popupItem}/>}
                    ref={popup}
                    docName={`Заявка №${popupItem.id}`}
                />
            </div>
            <div className={s.body}>
                <p className={s.title}>Заявки на ручную проверку</p>
                <div className={s.cards_grid}>
                    {detailedCardsList.map((item) => {
                        return <DetailedCard title={item.title}
                                             category={item.category}
                                             subCategory={item.subCategory}
                                             sender={item.sender}
                                             onclick={() => {
                                                 setPopupItem(item)
                                                 popup.current.showPopup(true);
                                             }}/>

                    }).slice(0, 9)}
                    {detailedCardsList.length > 10 ? <div className={s.centerWrapp}><ShowMore/></div> : ""}
                </div>
            </div>
        </div>
    );
}

export default PageManualFix;
