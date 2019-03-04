// CONSOLE VERSION
// let tasks = [];
// do {
//   var taskInput = prompt('Enter Task:');

//   if (taskInput !== 'quit'){
//     tasks.push(taskInput);
//   }
// } while (taskInput !== 'quit');

// tasks.forEach(function(e){
//   console.log(e);
// });

// let elements = [];
 
// for (i = 0; i < 10;i ++) {
//   elements[i] = i + 1;
// }

// console.log(elements);

// var total = 0;
// elements.forEach(function(e,i) {
//   console.log(i);
//   total += e;
// });

// console.log(total);

/* DOM Version */

let textField = document.getElementById('textField');
let button = document.getElementById('taskButton');
let taskList = document.querySelector('#taskList');

//annonymous function
button.onclick = function() {
  let newTask = document.createElement('LI');
  let taskText = textField.value;
  let taskTextNode = document.createTextNode(taskText);

  let checkBox = document.createElement('input');
  checkBox.type = 'checkbox';

  //dynamic CSS
  checkBox.onclick = function() {
    newTask.setAttribute('style', 'text-decoration: line-through');
    newTask.setAttribute('style', 'opacity: 0');

    //timeouts
    window.setTimeout(function() {
      taskList.removeChild(newTask);
    }, 2000); //milliseconds
  }

  newTask.appendChild(checkBox);

  newTask.appendChild(taskTextNode);
  taskList.appendChild(newTask);

  textField.value = '';
}