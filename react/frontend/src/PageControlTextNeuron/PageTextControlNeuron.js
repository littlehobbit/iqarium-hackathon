import React, {useState, useEffect} from 'react';
import s from "./PageTextControlNeuron.module.css";
import Header from "../Common/Header/Header";
import LeftMenu from "./LeftMenu/LeftMenu";
import MainSection from "./MainSection/MainSection";
import ControlTextNeuron from "../Data/ControlTextNeuron";


function PageTextControlNeuron() {

    const [currentInfo, setCurrentInfo] = useState(null);
    const [currentID, setcurrentID] = useState(null);
    const [currentList, setCurrentList] = useState([]);

    useEffect(() => {
        ControlTextNeuron.getRequestsList().then(result=>setCurrentList(result));
      }, []);

    useEffect(()=>{
        if(currentID !== null){
            ControlTextNeuron.getRequestData(currentID).then(result=>setCurrentInfo(result));
            setCurrentInfo({id:currentID, request:null});
        }
    }, [currentID])

    console.log()
    return (
        <div className={s.page}>
            <Header/>
            <div className={s.body}>
                <LeftMenu updateInfo={id=>setcurrentID(id)} cardsListData={currentList}/>
                {currentInfo !== null ? <MainSection object ={currentInfo}/> : <div>empty list</div>}

            </div>
        </div>
    );
}

export default PageTextControlNeuron;
