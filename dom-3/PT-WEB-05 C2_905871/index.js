// fill in javascript code here

myform = addEventListner("submit",function(e){
    e.preventDefault();

    let name=document.getElementById("name").value ;
    let docId=document.getElementById("docId").value ;
    let dept=document.getElementById("dept").value ;
    let exp=document.getElementById("exp").value ;
    let email=document.getElementById("email").value ;
    let mbl=document.getElementById("mbl").value ;


    let role;

    if(exp>5)
    {
        role="Senior"
    }
    else if (exp>=2 && exp<=5)
    {
        role="Junior"
    }
    else{
        role="Trainee"
    }

    let tbody=document.querySelector("tbody");

    let row =document.createElement("tr");

    let data=[name,docid,dept,exp,email,mbl,role]

    data.forEach((ele)=>{
        let td=document.createElement("td");
        id:innerText=ele
        row.appendChild(td);
    })

    let deleted=document.creatElement("td");
    let deleteBtn=document>creatElement("button");
    deleteBtn.innerText="Delete";

    deleteBtn.addEventListner("click",function(){
        tbody.removeChild(row);
    })

    deleteTd.appendChild(deleteBtn);
    row.appendChild(deleteTd);


    tbody.appendChild(row);
    
})




