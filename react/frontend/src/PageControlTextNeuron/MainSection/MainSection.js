import React from 'react';
import s from "./MainSection.module.css";
import arrow_left from '../../StaticImages/arrow-left.svg'
import InputWithCheckBox from "../InputWithCheckBox/InputWithCheckBox";
import icon from '../../StaticImages/logo.svg'

function MainSection(props) {
    return (
        <div className={s.main_section}>
            <div className={s.title}>
                <img src={arrow_left}/>
                <p>{props.title}</p>
            </div>

            <div className={s.body}>
                <img src={props.imageSrc} className={s.image_doc}/>
                <div className={s.input_fields}>
                    <InputWithCheckBox icon={icon}/>
                    <InputWithCheckBox icon={icon}/>
                    <InputWithCheckBox icon={icon}/>
                    <InputWithCheckBox icon={icon}/>
                </div>

            </div>
        </div>
    );
}

export default MainSection;
