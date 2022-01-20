// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function displayArray() {
  //1- You have to delete the old node parent were is stored the items of your list
  let containers = document.querySelectorAll(".container");
  if (containers.length > 1) {
    containers[1].remove();
  }

  // 2-Create a new container that will contain the items in your list
  let newContainer = document.createElement("div");
  newContainer.className = "container"
  document.body.appendChild(newContainer)

  for (let task of tasks) {
    let eachTask = document.createElement("div");
    eachTask.className = "item"
    eachTask.textContent = task.description;
    if (task.priority === 1) {
      eachTask.style.background = 'red';
    }else {
      eachTask.style.background = 'gray';
    }
    newContainer.appendChild(eachTask)
  }
  
}

function addItem() {
  // 1- Create a new task
  let eachTask = {};
  //  2- Set the description from the text field
  let description = document.querySelector("#description").value;

  // 3- Set the priority fro from select field
  let priority = document.querySelector("#priority").value;

  // 4- Add the new object to the array
  eachTask.description = description;
  if (priority === "Hight") {
    eachTask.priority = 1;
  }else if (priority === "Low"){
    eachTask.priority = 0
  }
  tasks.push(eachTask)


  // 5- Call  the displayArray function to refresh the DOM
  displayArray();
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
