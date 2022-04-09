import React, {forwardRef, useImperativeHandle, useState} from "react";
import s from "./PopupBasicDesign.module.css"
import crossIcon from "../../StaticImages/cross.svg";

let PopupFunctionality = forwardRef((props, ref) => {
    let [isVisible, setVisibility] = useState(false)

    useImperativeHandle(ref, () => ({
        showPopup(value) {
            setVisibility(value)
        }
    }))

    return (
        <div className={s.popup}>
            <div className={s.title_block}>
                <p>{props.docName}</p>
                <img src={crossIcon} onClick={() => {
                    setVisibility(!isVisible)
                }}/>
            </div>
            <div className={s.popup_body}>
                {props.child}
            </div>
        </div>
    )
})

export default PopupFunctionality