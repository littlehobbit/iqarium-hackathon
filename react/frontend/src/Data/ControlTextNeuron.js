import someData from "./ControlTextNeuronDataBase";

let getRequestsListLocal = async() => {
    let result = [];
    someData.forEach(element => {
        let t = element;
        result.push(t);
    });
    return result;
}

let getRequestDataLocal = async (id) => {
    return someData[id];
}

let getRequestDataExternal = async (id) => {
    let url = 'http://26.120.212.37:3000/img-req/request/' + id; 
    let answer = await fetch(url);
    return await answer.json();
}

let getRequestsListExternal = async () =>{
    let url = 'http://26.120.212.37:3000/img-req/request'; 
    let answer = await fetch(url);
    return await answer.json();
}

let ControlTextNeuronDataBase = {
    getRequestData:getRequestDataExternal,
    getRequestsList:getRequestsListExternal
}

export default ControlTextNeuronDataBase;