const BALL_SIZE = 100;
let ball = document.getElementById("ball");
let ballArea = document.getElementById("ball-area");
let box = document.querySelector("#ball-area");
let areaWidth = ballArea.getBoundingClientRect().width;
let areaHeight = ballArea.getBoundingClientRect().height;

function moveLeft() {
	// Move the box left
	ball.style.left = "0px";
};

function moveRight() {
	// Move the box right
	ball.style.left = areaWidth-BALL_SIZE + "px"
};

function moveUp() {
	// Move the box up
	ball.style.top = "0px";
};

function moveDown() {
	// Move the box down
	ball.style.top = areaHeight-BALL_SIZE +"px";
};

// Get the 4 buttons and bind to the 4 functions
let buttonRight = document.getElementById("btn-move-right");
buttonRight.addEventListener("click", moveRight);

let buttonLeft = document.getElementById("btn-move-left");
buttonLeft.addEventListener("click", moveLeft);

let buttonUp = document.getElementById("btn-move-up");
buttonUp.addEventListener("click", moveUp);

let buttonDown = document.getElementById("btn-move-down");
buttonDown.addEventListener("click", moveDown);