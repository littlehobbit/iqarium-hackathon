import React from 'react';
import s from "./PageTextControlNeuron.module.css";
import Header from "../Common/Header/Header";
import LeftMenu from "./LeftMenu/LeftMenu";
import MainSection from "./MainSection/MainSection";

function PageTextControlNeuron() {
    return (
        <div className={s.page}>
            <Header/>
            <div className={s.body}>
                <LeftMenu/>
                <MainSection
                title={"Заявка № 323435"}/>
            </div>
        </div>
    );
}

export default PageTextControlNeuron;
