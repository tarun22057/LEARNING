const button = document.querySelector(".buthole");
const body = document.getElementsByTagName("body")[0];
const h1 = document.querySelector(".h1");

button.addEventListener("click", () => {
    //generating random  numbers onclick
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newCol = `rgb(${r},${g},${b})`;

    //changing the background of the body onclick
    body.style.backgroundColor = newCol;

    //changing the h1 to the name of the color
    h1.innerHTML = newCol;
    if (r < 100 && g < 100 && b < 100) {
        h1.style.color = "#fff";
    }
});