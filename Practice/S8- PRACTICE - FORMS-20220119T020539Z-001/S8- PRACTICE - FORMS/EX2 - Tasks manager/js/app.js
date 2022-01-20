function addTask(event) {
  // --------- TO HELP YOU --------------------------
  // 1- Prevent default to avoid to refresh the page
  // TODO
  event.preventDefault();

  // 2- Get the form inputs  information
  // TODO
  let userTask = document.querySelector('#taskId').value;
  let userColor = document.querySelector('#color').value;
  let userDate = document.querySelector('#date').value;
  // 3- Check if task text, color, date are defined :
  //    If not defined, display a warnning        "You must fill all inputs"
  // TODO
  if (userTask !== "" && userColor !== "" && userDate !== "") {
    // 4 - If defined:
  // 4-1- Create a span for the taks name
  //    - class = "task-name"
  // TODO
  let spanT = document.createElement('span');
  spanT.classList.add('.task-name');
  spanT.textContent = userTask;
  // 4-2- Create a span for the taks date
  //    - class = "task-date"
  // TODO
  let spanD = document.createElement('span');
  spanD.classList.add('.task-date');
  spanD.textContent = userDate;

  // 4-3- Create a p containing the 2 spans
  // TODO
  let paragraph = document.createElement('p');
  paragraph.appendChild(spanT);
  paragraph.appendChild(spanD)
  let displayPlace = document.querySelector(".dashboard");
  displayPlace.appendChild(paragraph);

  // 4-4- the P background color is the selected color - the text is back
  // TODO
  // paragraph.style.color = "red";
  paragraph.style.background = "red"
   
  }else {
     alert("You must fill all inputs");
  }

  
}

// MAIN ----------------------------------------------------
const btnAddTask = document.getElementById("addTaskButton");
btnAddTask.addEventListener("click", addTask);
