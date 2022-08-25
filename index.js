// Add your code here
function submitData(userName, userEmail){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(function(respone){return respone.json()})
    .then((object)=>domFunc(object))
    .catch((error)=>{
        const obj =  document.createElement("div");
        obj.textContent = error.message;
        document.body.appendChild(obj)
    })
}
function domFunc(res){
    console.log(res);
    const obj =  document.createElement("div");
    obj.textContent = res.id;
    document.body.appendChild(obj)
}