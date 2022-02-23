const emailField = document.getElementById("emailField");
const button = document.getElementById("button");
const response = document.getElementById("response");
const exclamation = document.getElementById("fa");
const error = document.getElementById("error");

//Submit via Arrow Button Click
button.addEventListener("click", function () {
  const email = emailField.value;
  if (validateEmail(email)) {
    response.innerHTML = "";
  } else {
    response.innerHTML = "Please provide a valid email";
    error.classList.add("error");
  }
});

//Submit via Enter key
emailField.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        const email = emailField.value;
        if (validateEmail(email)) {
            response.innerHTML = "";
        } else {
            response.innerHTML = "Please provide a valid email";
        }
    } else {
        response.innerHTML = "";
    }
});

//Validate Email Function
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}