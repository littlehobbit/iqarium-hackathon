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
    let parsed = await answer.json();
    return {
        id: parsed.id,
        sender_mail:parsed.email,
        request:{
            full_name: parsed.fullName,
            receiver:parsed.receiver,
            request_mail:parsed.email,
            text:parsed.text,
            request_date: parsed.reqDate,
        },
        request_image: `http://26.120.212.37:3000/img-req/request/Picture/${parsed.id}`
    }
}

let getRequestsListExternal = async () =>{
    let url = 'http://26.120.212.37:3000/img-req/request'; 
    let answer = await fetch(url);
    let parsed = await answer.json();
    let result = [];
    parsed.forEach(element=>{
        result.push({
            id:element.id,
            sender_mail:element.email
        })
    })
    return result.sort ((a, b) => {
       return a.id - b.id
    });
}

let ControlTextCheckLocal = async (id, object) => {
    let modified = someData[id];
    modified.sender_mail = object.sender_mail;
    modified.request.full_name = object.full_name;
    modified.request.receiver = object.receiver;
    modified.request.request_mail = object.sender_mail;
    modified.request.text = object.text;
    modified.request.request_date = object.request_date;
    console.log(object, id)
}


let ControlTextCheckExternal = async (id, object) => {
    let url = "http://26.120.212.37:3000/img-req/request/"+id+"/ApprovingImage/"
    const res = await fetch(url, {
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(object)
    });
    return await res.json();
}

let ControlTextNeuron = {
    getRequestData:getRequestDataExternal,
    getRequestsList:getRequestsListExternal,
    ControlTextCheck:ControlTextCheckExternal
}
 
export default ControlTextNeuron;