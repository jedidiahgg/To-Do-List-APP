
document.addEventListener("keydown", (keys)=>{

    if(keys.key == "Enter"){
        addTask();
    }
    else{
        return 0;
    }
})

let divClearIndex=0;
const divClear = document.querySelector("div.clear");

function addTask(){

    const task = document.getElementById("task");
    const display = document.getElementById("display");
    if(task.value === ""){
        
    }
    else{

    const card = document.createElement("div");
    card.classList.add("card");
    display.appendChild(card);    

    const check = document.createElement("input");
    check.type = "checkbox";
    check.setAttribute("onclick", "checker()");
    check.classList.add("checker");
    card.appendChild(check);

    const label = document.createElement("label");
    label.textContent = task.value;
    label.classList.add("myTask");
    card.appendChild(label);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("onclick", "deleteTask()");
    deleteBtn.classList.add("delete");
    card.appendChild(deleteBtn);
        const img2 = document.createElement('img');
        img2.src="images/delete.svg";
        deleteBtn.appendChild(img2);

    const breakTag = document.createElement("br");
    card.appendChild(breakTag);
    task.value =null;
    task.focus();
    divClearIndex = 1;
    if(divClearIndex == 0){
        divClear.style.display = "none";
    }
    else{
        divClear.style.display = "block";
    }
    }

    deleteTask();
    checker();
    
}
function deleteTask(){
    let index = 0;
    let deleteBtns = document.querySelectorAll(".delete");
    deleteBtns.forEach(deleteBtn => {
        deleteBtn.addEventListener('click',event =>{
            event.target.parentElement.remove();
            deleteBtns = document.querySelectorAll(".delete");
            divClearIndex = (deleteBtns.length);
            if(divClearIndex == 0){
                divClear.style.display = "none";
            }
            else{
                divClear.style.display = "block";
            }
        })
    })


}
function clearScreen(){
    let deleteBtns = document.querySelectorAll(".delete");
    deleteBtns.forEach(deleteBtn =>{
        const parent = deleteBtn.parentElement;
        parent.remove();
        deleteBtns = document.querySelectorAll(".delete");
    })
    
    divClearIndex = 0;
    if(divClearIndex == 0){
        divClear.style.display = "none";
    }
    else{
        divClear.style.display = "block";
    }

}
function checker(){
    let checkers  = document.querySelectorAll(".checker");
    checkers.forEach(checker =>{
        checker.addEventListener('click', event => {

            const clickedBtn = event.target;
            const parent = clickedBtn.parentElement;
            if(clickedBtn.checked){
                parent.classList.add("completed");
            }
            else{
                parent.classList.remove("completed");
            }
            checkers  = document.querySelectorAll(".checker");

        })
    })
}