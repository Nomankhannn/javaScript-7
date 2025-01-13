var validEmail = "test@example.com";
var validPassword = "123456";

var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var loginButton = document.getElementById("loginButton");

loginButton.onclick = function() {

    var enteredEmail = emailInput.value;
    var enteredPassword = passwordInput.value;

    if (enteredEmail === validEmail && enteredPassword === validPassword) {
        alert("Login successful!");
    } else {
        alert("Invalid email or password.");
    }
};