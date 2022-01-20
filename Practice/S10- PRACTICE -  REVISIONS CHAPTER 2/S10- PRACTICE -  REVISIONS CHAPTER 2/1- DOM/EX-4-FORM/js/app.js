function multipleValue(event) {
    event.preventDefault();

    // 1. Get element from input type radio "input[name=gender]"
    let gendersInput = document.querySelectorAll("input[name=gender]:checked");
    
    // 2. Get element from input type checkbox "input[name=teacher]"
    let checkboxsInput = document.querySelectorAll("input[name = teacher]");

    // 3. Get element from multiple select "#select-meal-type option"
    let multipleInput = document.querySelectorAll("#select-meal-type option")
    
    // Loop to get value from input radio when we checked
    let gen = "";
    for (let gender of gendersInput) {
        if (gender.checked) {
            gen = gender.value;
        }
    }
    
    // Loop to get value from input checkbox when we checked
    let teach = "";
    for (let checkBox of checkboxsInput) {
        if (checkBox.checked) {
            teach += checkBox.value + " ,"
        }
    }

    // Loop to get value from multiple select when we selected
    let meal = "";
    for (let food of multipleInput) {
        if (food.selected) {
            meal += food.value + " ,"
        }
    }
   
    // output
    const spanGender = document.querySelector('.gender');
    if (gen !== "") {
        spanGender.textContent = gen;
    }
    const spanTeacher = document.querySelector('.teacher');
    if (teach !== "") {
        spanTeacher.textContent = teach
    }
    const spanMeal = document.querySelector('.meal');
    if (meal !== "") {
        spanMeal.textContent = meal
    }

    // Look on PowerPoint slide to see the output look like
}

document.addEventListener('change', multipleValue);