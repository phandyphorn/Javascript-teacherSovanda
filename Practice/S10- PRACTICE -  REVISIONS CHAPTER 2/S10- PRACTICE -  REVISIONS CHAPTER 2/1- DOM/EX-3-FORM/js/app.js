function getValue(event) {

    // prevent default 
    event.preventDefault();

    // 1. Get value from input type text that have id name "#textId"
    let nameInput = document.querySelector("#textId").value;

    // 2. Get value from input type password that have id name "#passId"
    let passInput = document.querySelector("#passId").value;

    // 3. Get value from input type email that have id name "#emailId"
    let emailInput = document.querySelector("#emailId").value;

    // 4. Get value from input type number that have id name "#numId"
    let numInput = document.querySelector("#numId").value;

    // 5. Get value from textarea that have id name "#textareaId"
    let textInput = document.querySelector("#textareaId").value;

    // 6. Get value from select that have Id name "#selectId"
    let selected = document.querySelector("#selectId").value;

    // output
    const spanInputs = document.querySelector('.inputs');
    if (nameInput !== "" && passInput !== "" && emailInput !== "" && numInput !== "") {
        spanInputs.textContent = nameInput + " | " + passInput + " | " + emailInput + " | " + numInput;
    }
    const spanTextarea = document.querySelector('.textarea');
    if (textInput !== "") {
        spanTextarea.textContent = textInput;
    }
    const spanSelect = document.querySelector('.select');
    if (selected !== "") {
        spanSelect.textContent = selected;
    }

    // Look at powerpoint slide to see the output look like
}

const btn = document.querySelector('button');
// add event to button and call function
btn.addEventListener('click', getValue);