import someData from "./categoryCheckDataBase";

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

let ControlTextCheckLocal = async (id, object) => {
    console.log(id, object);
}

let getRequestDataExternal = async (id) => {
    let url = 'http://26.120.212.37:3000/category-analysis/NotClassified/' + id; 
    let answer = await fetch(url);
    let parsed = await answer.json();
    console.log(parsed)
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
        category:parsed.category.length > 0 ? parsed.category[0].category: "Undefined",
        subcategpry:parsed.category.length > 0 ? parsed.category[0].category: "Undefined"
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
            category:element.category.length > 0 ? element.category[0].category: "Undefined",
            subcategpry:element.category.length > 0 ? element.category[0].category: "Undefined"
        })
    })
    return result;
}

let ControlTextCheckExternal = async (id, object) => {
    let url = "http://26.120.212.37:3000/category-analysis/SuggestClassification/"+id
    const res = await fetch(url, {
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(object)
    });
    return res.status;
}


let CategoryCheck = {
    getRequestData:getRequestDataExternal,
    getRequestsList:getRequestsListExternal,
    CategoryTextCheck:ControlTextCheckExternal
}

export default CategoryCheck;