// myMath = {
//     pi: 3.14,
//     square: function(num) {
//         return num * num;
//     },
//     cube: function(num) {
//         return num * num * num;
//     },
// };

// myMath.square(2);

// const el = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// el.forEach(function(i) {
//     if (i % 2 == 0) {
//         console.log(`${i} is even`);
//     } else {
//         console.log(`${i} is odd`);
//     }
// });

// const movie = [{
//         title: "joker",
//         rating: 85,
//     },
//     {
//         title: "krish",
//         rating: 95,
//     },
//     {
//         title: "paji",
//         rating: 105,
//     },
// ];

// movie.forEach(function(x) {
//     console.log(`${x.title} - ${x.rating}`);
// });

// let newMovie = movie.map((x) => {
//     console.log(`${x.title} -${x.rating}`);
// });

// let filteredMovieList = movie.filter((x) => {
//     return x.rating > 90;
// });

// let filteredMovieTitles = filteredMovieList.map((x) => {
//     return x.title;
// });

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
