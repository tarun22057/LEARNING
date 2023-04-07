const btn = document.querySelector(".button");
const form = document.querySelector(".form");
const input = document.querySelector(".textBox");
const list = document.querySelector(".list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const getValue = input.value;
  const newLi = document.createElement("li");
  newLi.innerText = getValue;
  list.append(newLi);
  input.value = "";
});
