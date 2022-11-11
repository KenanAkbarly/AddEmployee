let main = document.querySelector("#Body");
let nameValue = document.querySelector("#namevlaue");
let surnameValue = document.querySelector("#surnamevlaue");
let ageValue = document.querySelector('#agevlaue');
let nationaltyValue = document.querySelector("#nationaltyvlaue");
let positionValue = document.querySelector("#positionvlaue");
let experienceValue = document.querySelector("#experiencevlaue");
let button = document.querySelector('#button');

// TABLE
let listTable = document.querySelector("#listable");

let tdName = document.querySelector("#name");
let tdSurname = document.querySelector("#surname");
let tdAge = document.querySelector("#age");
let tdnationalty = document.querySelector("#nationalty");
let tdPosition = document.querySelector("#position");
let tdExperience = document.querySelector("#experience");


button.addEventListener('click', () =>{
    if(nameValue.value.trim() == "" && surnameValue.value.trim() =="" && ageValue.value.trim() == "" && experienceValue.value.trim() == ""){
        alert("Ne ise daxil etmeilisiniz!")
    }else{
    let newTr = document.createElement('tr')
    let newTdname = document.createElement('td');
    let newTdSurname = document.createElement('td');
    let newTdage = document.createElement('td');
    let newTdnationalty = document.createElement('td');
    let newTdposition = document.createElement('td');
    let newTdExperience = document.createElement('td');
    let newTdDelete = document.createElement('button');
    
    newTdname.innerHTML = nameValue.value;
    newTdSurname.innerHTML = surnameValue.value;
    newTdage.innerHTML = ageValue.value;
    newTdnationalty.innerHTML = nationaltyValue.value;
    newTdposition.innerHTML = positionValue.value;
    newTdExperience.innerHTML = experienceValue.value;
    newTdDelete.innerHTML = 'Delete';
    
    
    
    newTr.appendChild(newTdname)
    newTr.appendChild(newTdSurname)
    newTr.appendChild(newTdage)
    newTr.appendChild(newTdnationalty)
    newTr.appendChild(newTdposition)
    newTr.appendChild(newTdExperience)
    newTr.appendChild(newTdDelete)
    listTable.appendChild(newTr)

    nameValue.value ="";
    surnameValue.value = "";
    ageValue.value = "";
    experienceValue.value ="";

    newTdDelete.addEventListener('click', ()=>{
        newTr.innerHTML = " "
    })
    }
    
    
})