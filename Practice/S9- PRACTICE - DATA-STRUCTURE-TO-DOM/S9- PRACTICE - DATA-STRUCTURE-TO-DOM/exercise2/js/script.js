// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function addItem() {
  // 1- Create a new task
  // TODO
  let eachTask = {};
 
  //  2- Set the description from the text field
  // TODO
  let description = document.querySelector("#description").value;

  // 3- Set the priority from select field
  // TODO
  let priority = document.querySelector("#priority").value;

  // 4- Add the new object to the array
  // TODO
  eachTask.description = description;
  if (priority === "Hight") {
    eachTask.priority = 1;
  }else if (priority === "Low"){
    eachTask.priority = 0
  }
  
  tasks.push(eachTask)

  console.log(tasks);
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];


// run the function addItem when you click on the button
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
