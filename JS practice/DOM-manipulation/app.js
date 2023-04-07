const allLinks = document.querySelectorAll("a");

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

for (let link of allLinks) {
    link.style.color = "rgb(0, 108, 134)";
    link.style.textDecorationColor = "magenta";
    link.style.textDecorationStyle = "wavy";
}

const userText = document.querySelector(".userManipulation");
const userInput = document.querySelector(".textbox");
const buttonl = document.querySelector(".butt");

// jab enter kiya to TEXTBOX ki value humne paragraph ki jagha daal diya
buttonl.addEventListener("click", () => {
    userText.innerText = userInput.value;
});