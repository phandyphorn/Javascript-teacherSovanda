// This is our data structure of TASKS
let tasks = [
  { description: "Do homework", priority: 1,image1:"images/pen.png",image2:'images/bin.png' },
  { description: "Wash clothes", priority:0,image1:"images/pen.png",image2:'images/bin.png' },
  { description: "Dream about Javascript", priority:1,image1:"images/pen.png",image2:'images/bin.png' },
  { description: "Dream about Drink", priority:0,image1:"images/pen.png",image2:'images/bin.png' },
  { description: "Take a bath", priority:0,image1:"images/pen.png",image2:'images/bin.png' }
];
function displayArray(array) {
  // 1 - From the parent body : create a new div  (class : container)
  let div1 = document.createElement("div");
  div1.classList.add(".container")
  let contain = document.querySelector(".container");
  contain.appendChild(div1)
  // 2 - For all tasks,  create a new div (class : item), and append it the container
  
  
  for (let des of tasks) {
    // create div for description, image1 and image2 (containThree, class "containerThree")
    let containForThree = document.createElement("div");
    containForThree.className = "containerThree"

    // create div for description, class item
    let descrip = document.createElement("div");
    descrip.className = "item"
    descrip.textContent = des.description;
    containForThree.appendChild(descrip)

    // let img for image1, class im, and then add to containerForThree
    let spanForImage1 = document.createElement("span");
    let imageF = document.createElement("img")
    imageF.className = "im1"
    imageF.src = des.image1;
    spanForImage1.appendChild(imageF)
    containForThree.appendChild(spanForImage1)

    // let img for image2, class im, and then add to containerForThree.
    let spanForImage2 = document.createElement("span");
    let imageS = document.createElement("img")
    imageS.className = "im2"
    imageS.src = des.image2;
    spanForImage2.appendChild(imageS)
    containForThree.appendChild(spanForImage2)

    // div2.textContent = element['description'];
    // let color = "red";
// 3- The priority defines the color of your item (1 (HIGHT) = red, 0 (LOW) = grey)
    if (des.priority === 1) {
      containForThree.style.background = "red";
    }else if (des.priority === 0) {
      containForThree.style.background = "gray"
    }
    // div2.style["background-color"] = color;
    div1.appendChild(containForThree);
  }
}
displayArray(tasks);

