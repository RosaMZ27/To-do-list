const txbInputTask = document.getElementById("txb-input-task")
const btnAddTask = document.getElementById("btn-add-task")
const toDoContainer = document.getElementById("to-do-container")

btnAddTask.addEventListener("click",addTask)

function test(){
    alert("nice")
}

function addTask(){
    let toDoItem = document.createElement("p")
    //toDoItem.classList.add(bg-primary)
    toDoItem.innerHTML = txbInputTask.value;
    toDoContainer.appendChild(toDoItem)
    toDoItem.addEventListener("click", markTask)
    toDoItem.addEventListener("dblclick",deleteTask)
    txbInputTask.value = ""
}

function markTask(){
    if(this.style.textDecoration == "line-through"){
       this.style.textDecoration="none"
    } else {
    this.style.textDecoration="line-through"
    }
}

function deleteTask(){
    toDoContainer.removeChild(this)
}