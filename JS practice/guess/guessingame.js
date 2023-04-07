// let userMax = parseInt(prompt("HELLO! ENTER YOUR MAX NUMBER : ")); //TAKES USER MAX NUMBER
// // parseInt changes those strings that can be changed to int for eg "212" but cant change "djfskjd"
// while (!userMax) {
//     userMax = parseInt(prompt("ENTER A VALID NUMBER"));
// }
// let randomNumber = Math.floor(Math.random() * userMax + 1); // GENERATES RANDOM NUMBER FROM 1 - USER's MAXIMUM NUMBER

// let userGuess = parseInt(prompt("ENTER YOUR GUESS: "));
// let attempts = 1;
// while (userGuess !== randomNumber) {
//     attempts++;
//     if (userGuess > randomNumber) {
//         userGuess = parseInt(prompt("TOO HIGH! GUESS AGAIN"));
//     } else if (userGuess < randomNumber) {
//         userGuess = parseInt(prompt("TOO LOW! GUESS AGAIN"));
//     }
// }
// if (userGuess === randomNumber) {
//     console.log(
//         `YOU GUESSED IT RIGHT! RANDOM NUMBER IS  : ${randomNumber}.It took you ${attempts} guesses.`
//     );
// }

let maxNum = parseInt(prompt("ENTER THE MAX NUMBER  : "));
let randomNum = Math.floor(Math.random() * maxNum + 1);

let userGuess = parseInt(prompt("ENTER YOUR GUESS"));
let attempts = 1;

while (userGuess != randomNum) {
    attempts++;
    if (randomNum > userGuess) {
        userGuess = parseInt(prompt("too low"));
    } else if (randomNum < userGuess) {
        userGuess = parseInt(prompt("too high"));
    } else if (userGuess == "q") {
        break;
    }
}
if (randomNum == userGuess) {
    console.log(
        "CORRECT GUESS ! NUMBER WAS" +
        randomNum +
        "it too you " +
        attempts +
        " attempts"
    );
}