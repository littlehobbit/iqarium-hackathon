import React from 'react';
import s from "./LeftMenu.module.css";
import Card from "../../Common/Card/Card";

function LeftMenu() {
    return (
        <div className={s.menu_body}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
}

export default LeftMenu;
