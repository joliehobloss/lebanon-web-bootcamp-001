
// array that contains the objects task
const tasks = [];

const noTodos= document.getElementById("notask");
document.addEventListener("DOMContentLoaded", start);

function start(){
   
  renderDate();
  const newform = document.getElementById('create-task-form');
  newform.addEventListener("submit", addTask);
};


const addTask = event => {
  event.preventDefault();
  const date = document.getElementById('deadline');
  const input = document.getElementById("new-task-description");
  const priority = document.getElementById('priority');
  document.getElementById("notask").style.display = "none";

  let task = {
    toDo: input.value,
    priority: priority.value,
    deadline: date.value
  }
  tasks.push(task);
  writeOnBoard();
  event.target.reset();
};

//////////////////////////////
//function that type any task

function writeOnBoard(){
  const todoList = document.getElementById('tasklist');
  todoList.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
     let task= tasks[i];
     let listItem= document.createElement("li");
    listItem.setAttribute("id",`task_${i}`);
    listItem.setAttribute("class","list");

    
    listItem.innerHTML=`
    <div class="todoContainer">
      <div>
      <input type="checkbox" class="checkbox">${tasks[i].toDo} </input>
      </div>
      <div>
        <span class="deadline">${tasks[i].deadline} </span>
        <span class="priority">${tasks[i].priority} </span>
        <button id='btn_${i}' class="delete"> Delete </button>
      </div>
    <div>
    `;
    let list1 = document.querySelector('ul');
    list1.addEventListener('click', checktodo);

    listItem.querySelector('div button').addEventListener('click',deleteTask);

    document.getElementById("tasklist").appendChild(listItem);
    
  }

}

//check todo when done
function checktodo(ev) {
    if (ev.target.classList.contains("checkbox")) {
    ev.target.parentElement.classList.toggle("done");
    }
}

//delete task from the array
function deleteTask(ev) {
  let taskIndex = +ev.currentTarget.id.split("_")[1];
  tasks.splice(taskIndex, 1);
  writeOnBoard(tasks);
  ev.stopPropagation();
}

//write the current date 
function renderDate(){
  let today = new Date();
  let date = today.toDateString();
 let dateToday =today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  document.getElementById("header").innerHTML+=date;
  document.getElementById("deadline").setAttribute("min" , dateToday);
}


