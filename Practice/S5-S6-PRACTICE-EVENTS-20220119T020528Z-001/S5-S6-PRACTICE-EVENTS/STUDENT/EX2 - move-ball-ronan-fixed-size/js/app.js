let box = document.querySelector("#boxId");

function moveLeft() {
  // Move the box left
  box.style.left = "0px";
}

function moveRight() {
  // Move the box right
  box.style.left = "300px";
}

function moveUp() {
  // Move the box up
  box.style.top = "0px";
}

function moveDown() {
  // Move the box down
  box.style.top = "300px";
}
// Get the 4 buttons and bind to the 4 functions
let buttonRight = document.getElementById("btn-move-right");
buttonRight.addEventListener("click", moveRight);


let buttonLeft = document.getElementById("btn-move-left");
buttonLeft.addEventListener("click", moveLeft);

let buttonUp = document.getElementById("btn-move-up");
buttonUp.addEventListener("click", moveUp);

let buttonDown = document.getElementById("btn-move-down");
buttonDown.addEventListener("click", moveDown);