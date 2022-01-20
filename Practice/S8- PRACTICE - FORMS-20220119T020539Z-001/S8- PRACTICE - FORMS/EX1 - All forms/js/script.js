// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------
function submitData() {
  // 1- get values from forms
  let userName = document.querySelector('#username').value;
  let userEmail = document.querySelector('#email').value;
  let userSex = document.querySelector('input[name="genderSelect"]:checked').value;
  let userSelector = document.querySelector('#fruit').value;
  let userSubjects = document.querySelectorAll('.subject');
  let userClickSubject = "";
  for (sujbect of userSubjects) {
    if (sujbect.checked){
      userClickSubject += sujbect.value+" ,"
    }
  }
  let userMessage = document.querySelector('#sms').value;
  // TODO
  // 2- change labels on right side
  // TODO
  document.querySelector('#getUsername').textContent = userName;
  document.querySelector('#getEmail').textContent = userEmail;
  document.querySelector('#getGender').textContent = userSex;
  document.querySelector('#getFruit').textContent = userSelector;
  document.querySelector('#getSubject').textContent = userClickSubject;
  document.querySelector('#getMessage').textContent = userMessage;
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------
let applyButton = document.getElementById("applyButton");
applyButton.addEventListener("click", submitData);
