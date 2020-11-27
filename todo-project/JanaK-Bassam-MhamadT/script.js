const priority = ["High", "Medium", "Low"];
let tasks = [];
let todayDate = new Date();
document.querySelector('h1').innerText += "  " + todayDate.toDateString();
const date = todayDate.getFullYear() + "-" + (todayDate.getMonth() + 1) + "-" + todayDate.getDate();


document.querySelector('input[type=date]').min = date;
//----------------------------------

document.getElementById('todo').addEventListener('submit', display);

function display() {
    event.preventDefault();
    todoObject = {};

    todoObject.todoinput = document.getElementById("todoinput").value;
    todoObject.deadline = formatdate(document.getElementById('deadline').value);
    todoObject.priority = document.getElementById('priority').value;
    todoObject.checked = false;
    event.target.reset();
    tasks.push(todoObject);
    render(tasks);
}

function render(tasks) {
    const noTaskP = document.getElementById('noTask');
    noTaskP.style.display = "none";
    document.getElementById("listunorder").innerHTML = "";

    for (i = 0; i < tasks.length; i++) {
        let object = tasks[i];
        let li = document.createElement("li");
        li.className = "lilist";

        if (object.checked) {
            li.classList.add("checked");
        }

        if((new Date(object.deadline).getTime())<=todayDate.getTime())
        {
            li.classList.add("dead");
        }
        li.innerHTML = `<input type="checkbox" onclick="check(event)" > <p> ${object.todoinput} deadline: ${object.deadline} priority: ${priority[object.priority]} </p> 
    <button class ="close" onclick="close1(event)">\u00D7</button>`;
        document.getElementById("listunorder").appendChild(li);
    }
}

function check(e) {
    let checkedList = e.target.parentNode;
    let text = checkedList.innerText.split(" ")[0];
    const found = tasks.findIndex(element => element.todoinput == text)
    tasks[found].checked = !tasks[found].checked;
    render(tasks);
}


function close1(e) {
    let checkedList = e.target.parentNode;
    let text = checkedList.innerText.split(" ")[0];
    const found = tasks.findIndex(element => element.todoinput == text)
    tasks.splice(found, 1);
    render(tasks);
}

function formatdate(x){
let taskTime= new Date(x);
let month =taskTime.getMonth()+1;
let day = taskTime .getDate();
let year = taskTime .getFullYear();
return month + "/" + day + "/" + year;
}


