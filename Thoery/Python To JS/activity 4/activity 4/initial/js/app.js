let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");

//  1- Move the item 3 to the second container
let thirdBox = container1.children[2];
// let threeBox = document.getElementsByClassName('item')[2];
container2.appendChild(thirdBox)
//  2- Remove item 4
let fourthBox = container2.children[0];
container2.removeChild(fourthBox)

// 3- Create a new item 10 and add it to container 3
let tenthBox = document.createElement('div')
tenthBox.className = 'item'
tenthBox.textContent = "10"
container3.appendChild(tenthBox)

//  4- Set all item in blue containers  background color to  red
let allBlueItem = document.querySelectorAll('.containerBlue .item');
for (let blueItem of allBlueItem) {
    blueItem.style.color = "red"
}
