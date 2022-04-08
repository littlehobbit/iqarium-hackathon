import someData from "./ControlTextNeuronDataBase";

let getRequestsListLocal = () => {
    let result = [];
    someData.forEach(element => {
        let t = element;
        delete t.request_image;
        delete t.request;
        result.push(t);
    });
    return result;
}

let getRequestDataLocal = (id) => {
    return someData[id];
}

let getRequestDataExternal = (id) =>{
}

let getRequestsListExternal = () =>{
}

let ControlTextNeuronDataBase = {
    getRequestData:getRequestDataLocal,
    getRequestsList:getRequestsListLocal
}

export default ControlTextNeuronDataBase;