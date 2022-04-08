import someData from "./ControlTextNeuronDataBase";

var getRequestsListLocal = () => {
    var result = [];
    someData.forEach(element => {
        var t = element;
        delete t.request_image;
        delete t.request;
        result.push(t);
    });
    return result;
}

var getRequestDataLocal = (id) => {
    return someData[id];
}

var getRequestDataExternal = (id) =>{
}

var getRequestsListExternal = () =>{
}

var ControlTextNeuronDataBase = {
    getRequestData:getRequestDataLocal,
    getRequestsList:getRequestsListLocal
}

export default ControlTextNeuronDataBase;