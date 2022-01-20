const NUMBER_BOX = 10;
let container = document.querySelector(".container");

for (let index = 1; index < 11; index++){
  let div = document.createElement("div");
  div.className = "box";
  div.classList.add("#box")
  let span = document.createElement("span");
  // span2.textContent = Math.floor(Math.random()*10)+1;
  div.appendChild(span);
  span.style.opacity = 1;
  div.addEventListener("click", onBoxClick);
  container.appendChild(div);
}


// let div2 = document.createElement("div");
// div2.className = "box";
// let span2 = document.createElement("span");
// // span2.textContent = Math.floor(Math.random()*10)+1;
// div2.appendChild(span2);
// span2.style.opacity = 1;
// div2.addEventListener("click", onBoxClick);
// container.appendChild(div2);

// let div3 = document.createElement("div");
// div3.className="box";
// let span3 = document.createElement("span");
// div3.appendChild(span3);
// span3.style.opacity=1;
// div3.addEventListener("click",onBoxClick);
// container.appendChild(div3)
  
// let div4 = document.createElement("div");
// div4.className="box";
// let span4 = document.createElement("span");
// div4.appendChild(span4);
// span4.style.opacity=1;
// div4.addEventListener("click",onBoxClick);
// container.appendChild(div4)

// let div5 = document.createElement("div");
// div5.className="box";
// let span5 = document.createElement("span");
// div5.appendChild(span5);
// span5.style.opacity=1;
// div5.addEventListener("click",onBoxClick);
// container.appendChild(div5)

// let div6 = document.createElement("div");
// div6.className="box";
// let span6 = document.createElement("span");
// div6.appendChild(span4);
// span6.style.opacity=1;
// div6.addEventListener("click",onBoxClick);
// container.appendChild(div6)

// let div7 = document.createElement("div");
// div7.className="box";
// let span7 = document.createElement("span");
// div7.appendChild(span4);
// span7.style.opacity=1;
// div7.addEventListener("click",onBoxClick);
// container.appendChild(div7)

// let div8 = document.createElement("div");
// div8.className="box";
// let span8 = document.createElement("span");
// div8.appendChild(span8);
// span8.style.opacity=1;
// div8.addEventListener("click",onBoxClick);
// container.appendChild(div8)


// This function is called when any box is clicke
function onBoxClick(event) {
  let div = event.target;
  let span = div.children[0];

  let numberString = span.textContent;
  let number = parseInt(Math.floor(Math.random()*10)+1);

  if (number%2==0) {
    div.style.background="green"
    span.style.color = "white";
    span.textContent = "won" + number;
  }else{
    div.style.background="red"
    span.style.color = "white";
    span.textContent = "lost" + number;
  }

  let spanText = span.textContent;
  console.log("number ", spanText);
}
