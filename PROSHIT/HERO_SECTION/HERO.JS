const signUpButton = document.querySelector(".container-sign-up");
const logInButton = document.querySelector(".conatiner-log-in");

signUpButton.addEventListener("click", () => {
    signUpButton.style.backgroundColor = "#8338ec";
    signUpButton.style.color = "white";
});

logInButton.addEventListener("click", () => {
    logInButton.style.borderColor = "#8338ec";
});