myForm = addEvenetsListner("sumit",function(e){
    e.preventDefault();

let taskName = document.getElementById("task").value ;

let priority = document.getElememtById("priority").value ;

let tbody = document.querySelector("tbody");
let row = document,creatElement("tr");

let data =[taskNmae , priority]

data.forEach((ele)=>{
    let td =document.creatElement("td");
    td.innerText = ele
    row.appendChild(td);
})
tbody.appendChild(row);
})