//  FUNCTIONS -------------------------------------------------------------
function addBook(event) {
  event.preventDefault();
  // 1- Get the book name from the input field
  let bookName = document.querySelector("#add-book-textfield").value;
    // 2- Create a new span bookName for the book name, class name = name
  let spanForBook = document.createElement('span');
  spanForBook.classList.add('name');
  spanForBook.textContent = bookName;
    // 3- Create a new span deleteBtn for the button delete, class name = delete
  let spanForDelete = document.createElement('span');
  spanForDelete.classList.add("delete");
  spanForDelete.textContent = "delete";
    // 4- Create a new li
  let li = document.createElement('li');
    // 5- Add bookName and deleteBtn to li and li to the  bookList UL
  li.appendChild(spanForBook);
  li.appendChild(spanForDelete);
  ul.appendChild(li)
  bookName.value = "";
}
function deleteBook(event) {
  // find the index of delete which click 
  // 1- Check the event if raised on the button delete 
 //  2  if yes, get the parent and remove it from the  bookList
  if (event.target.className === "delete") {
    let li = event.target.parentElement;
    ul.removeChild(li);
  }
}


function searchBook(event) {
  // 1- Get the search text
  let userInput = searchBookInput.value.toLowerCase()
  let allBooks = document.querySelector('ul').children;
  console.log(allBooks.value)

  }

  // 2- Loop on all LI
 
    // Update the style of the LI (visible or hidden)

// //  MAIN -------------------------------------------------------------
let buttonAddBook = document.querySelector("button");
var ul = document.querySelector('#book-list ul')
buttonAddBook.addEventListener("click", addBook);

let bookList = document.querySelector("#book-list ul")
bookList.addEventListener('click',deleteBook)

let searchBookInput = document
  .getElementById("search-books")
  .querySelector("input");
searchBookInput.addEventListener('keyup',searchBook);



