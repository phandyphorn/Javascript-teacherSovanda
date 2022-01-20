function getValueFromInput(event) {
	// 0. Prevent default form behavior
    event.preventDefault();

    // 1. Get value from input type color that have id name "#colorId"
    let colorInput = document.querySelector("#colorId").value;
    // 2. Get value from input type file that have id name "#fileId"
    let fileInput = document.querySelector("#fileId").value;

    // 3. Get value from input type date that have id name "#dateId"
    let dateInput = document.querySelector("#dateId").value;

    // 4. Get value from input type range that have id name "#rangeId"
    let rangeInput = document.querySelector("#rangeId").value;

    // output
    const result = document.querySelector('span');
    if (colorInput !== "" && fileInput !== "" && dateInput !== "" && rangeInput !== ""){
        result.textContent = colorInput+" | " + fileInput + " | " + dateInput + " | " + rangeInput;
    }
    
    
    // Look on slide result we want
}
const btn = document.querySelector('button');

btn.addEventListener('click', getValueFromInput);
