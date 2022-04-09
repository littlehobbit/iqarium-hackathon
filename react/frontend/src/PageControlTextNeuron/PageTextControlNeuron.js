import React, {useState} from 'react';
import s from "./PageTextControlNeuron.module.css";
import Header from "../Common/Header/Header";
import LeftMenu from "./LeftMenu/LeftMenu";
import MainSection from "./MainSection/MainSection";
import ControlTextNeuron from "../Data/ControlTextNeuron";
import Card from "../Common/Card/Card";

function PageTextControlNeuron() {

    const [currentInfo, setCurrentInfo] = useState(null);


    function updateDisplayedData(requestId) {
        setCurrentInfo(ControlTextNeuron.getRequestData(requestId))
    }

    return (
        <div className={s.page}>
            <Header/>
            <div className={s.body}>
                <LeftMenu updateInfo={updateDisplayedData}/>
                {currentInfo !== null ? <MainSection object ={currentInfo}/> : <div>empty list</div>}

            </div>
        </div>
    );
}

export default PageTextControlNeuron;
