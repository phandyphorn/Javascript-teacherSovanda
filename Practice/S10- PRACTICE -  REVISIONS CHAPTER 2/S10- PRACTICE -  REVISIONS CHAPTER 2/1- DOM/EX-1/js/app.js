//1. create div with class name "container" and append it to "body"
let contain = document.createElement("div");
contain.className = "container"
document.body.appendChild(contain)

//2. create div with class name "card" and append it to "container" div
let card = document.createElement("div");
card.className = "card";
contain.appendChild(card)


//3. create div with class name "card-img" and append it to "card" div
let cardOfImage = document.createElement("div");
cardOfImage.className = "card-img"
card.appendChild(cardOfImage)

//4. create img tags with class name "img", use "src" attribute to display image and append it to "card-img" div
// example: sample.src = "images/example.jpg";
let image = document.createElement("img");
image.className = "img"
image.src = "images/example.jpg";
cardOfImage.appendChild(image)

//5. create div with class name "card-body" and append it to "card" div
let cardOfBody = document.createElement("div");
cardOfBody.className = "card-body"
card.appendChild(cardOfBody)


//6. create h2 tags with class name "card-title", textContent = "Natural in the world" and append it to "card-body" div
let heading2 = document.createElement("h2");
heading2.className = "card-title"
heading2.textContent = "Natural in the world"
cardOfBody.appendChild(heading2)

//7. create p tags with class name "description",
// textContent = "Lorem ipsum dolor sitore aliquam ab sequi saepe facilis, ipsam illo modi cupiditate illum iure? Maiores suscipit dicta mollitia velit. Eveniet reprehenderit rem odio provident quibusdam consequatur aspernatur porro aliquam similique illo ut cum reiciendis amet placeat dolor possimus laboriosam, aliquid, veritatis natus accusamus quod nulla ipsam. Deserunt perferendis laboriosam delectus maxime blanditiis."
// and then apppend it to "card-body" div

let paragraph = document.createElement("p");
paragraph.className = "description"
paragraph.textContent = "Lorem ipsum dolor sitore aliquam ab sequi saepe facilis, ipsam illo modi cupiditate illum iure? Maiores suscipit dicta mollitia velit. Eveniet reprehenderit rem odio provident quibusdam consequatur aspernatur porro aliquam similique illo ut cum reiciendis amet placeat dolor possimus laboriosam, aliquid, veritatis natus accusamus quod nulla ipsam. Deserunt perferendis laboriosam delectus maxime blanditiis."
cardOfBody.appendChild(paragraph)

//8. create div with class name "card-footer" and append it to "card" div
let footer = document.createElement("div");
footer.className = "card-footer";
card.appendChild(footer)

//9. create span tags with id name "date", textContent = "14 / April / 2021" and append it to "card-footer" div 
let dateSpan = document.createElement("span");
dateSpan.id = "date"
dateSpan.textContent = "14 / April / 2021"
footer.appendChild(dateSpan)


//10. create span tags with id name "author", textContent ="Ronan Ronaldo"  and append it to "card-footer" 
let nameSpan = document.createElement("span");
nameSpan.id = "author"
nameSpan.textContent = "Ronan Ronaldo"
footer.appendChild(nameSpan)
