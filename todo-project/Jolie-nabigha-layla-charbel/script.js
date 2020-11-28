let currentDate=document.getElementById('today-date');
let todoList=document.getElementById('list');
let inputText=document.getElementById('input-todo');
let inputDate=document.getElementById('date-time');
let formTodo=document.getElementById('form-todo');
let remove=document.getElementById('remove');
let data = [];


//compare date//
let compare = new Date();
let dd = String(compare.getDate()).padStart(2, '0');
let mm = String(compare.getMonth() + 1).padStart(2, '0'); 
let yyyy = compare.getFullYear();
compare = yyyy + '-' + mm + '-' + dd;

//current date//
let today=new Date().toDateString()
currentDate.innerText='Today: '+ today;


//add Task function//
formTodo.addEventListener("submit",function(event){
  let selectedValue = document.getElementById("drop-list").value;
  remove.innerHTML='';
  
  let taskData = {};
  taskData.inputText=inputText.value;
  taskData.deadLine=inputDate.value;
  taskData.priority=parseInt(selectedValue);
  taskData.checked=false;
  data.push(taskData);
  console.log(data);

  inputText.value='';
  inputDate.value='';
  displayList();
 event.preventDefault();
})

function displayList() {
  let htmlContent = '';
  for (let i = 0; i < data.length; i++ ) {
    htmlContent += 
    `<li id="li-js">`+
    `<section id="s1">`+
    `<div id="d1">`+
    `<input type="checkbox" id="${i}" onchange="checkboxFunction(${i})">`+
    `</div>`+
    `<div>`+
    `<label id="label-${i}">`+data[i].inputText+`</label>`+`<br>`+
    data[i].deadLine+`<span id="span-${i}">`+`  Priority:`+data[i].priority+`</span>`+
    `</div>`+
    `</section>`+
    `<section id="s2">`+
    `<button class="delbtn" onclick="deleteFunction(${i},this)"><i class="fa fa-trash"></i></button>`+
    `</section>`+
    `</li>`;
  }
 
  todoList.innerHTML = htmlContent;
  dateFunction(compare);
  prirorityFunction();
}

//checkbox function//
function checkboxFunction(value){
  if(data[value].checked === false){
  data[value].checked = true;
  document.getElementById(`label-${value}`).style.textDecoration="line-through";
  }else{
  data[value].checked = false;
   document.getElementById(`label-${value}`).style.textDecoration="none";
  }
  console.log(data);
}

//delete function//
function deleteFunction(value,del){
    data.splice(value,1);
    del.parentNode.parentNode.removeChild(del.parentNode);
    displayList();
    console.log(data);
}

//date compare function//
function dateFunction(val){
  for (let i = 0; i < data.length; i++ ) {
    if(data[i].deadLine<val){
  document.getElementById(`label-${i}`).style.background="red";
      }else{
  document.getElementById(`label-${i}`).style.background="white";
      } 
    }
  }

//priority colors function//
function prirorityFunction(){
for (let i = 0; i < data.length; i++ ) {
  if(data[i].priority===1){
document.getElementById(`span-${i}`).style.color="red";
    }else if(data[i].priority===2){
document.getElementById(`span-${i}`).style.color="green"; 
    }else{
    document.getElementById(`span-${i}`).style.color="blue";
    }
  }
}

  
