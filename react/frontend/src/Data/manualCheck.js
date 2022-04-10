import someData from "./manualCheckDataBase";

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

let WriteReplyLocal = async (id, object) => {
    console.log(id, object);
}

let getRequestDataExternal = async (id) => {
    let url = 'http://26.120.212.37:3000/category-analysis/GetManualState/' + id; 
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
        category:parsed.category[0].category,
        subcategpry:parsed.category[0].category,
        suggest:parsed.suggest
    }
}

let getRequestsListExternal = async () =>{
    let url = 'http://26.120.212.37:3000/category-analysis/NotClassified/'; 
    let answer = await fetch(url);
    let parsed = await answer.json();
    let result = [];
    parsed.forEach(element=>{
        result.push({
            id:element.id,
            sender_mail:element.email,
            category:element.category[0].category,
            subcategpry:element.category[0].category
        })
    })
    return result;
}

let WriteReplyExternal = async (id, object) => {
    let url = "http://26.120.212.37:3000/category-analysis/addReplyToRequest/"+id
    const res = await fetch(url, {
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(object)
    });
    return await res.json();
}


let ManualCheck = {
    getRequestData:getRequestDataExternal,
    getRequestsList:getRequestsListExternal,
    WriteReply:WriteReplyExternal
}

export default ManualCheck;