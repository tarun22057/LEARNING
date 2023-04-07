const todoItems = []; // array to store your tasks
let choice = prompt("WHAT YOU WANT TO DO : ");
while (choice !== "quit") {
    if (choice === "new") {
        const newTask = prompt("ENTER YOUR TASK");
        todoItems.push(newTask);
        console.log(newTask + " added to the list ");
    } else if (choice === "list") {
        console.log("*******************");
        for (let i = 0; i < todoItems.length; i++) {
            console.log(`${i} : ${todoItems[i]}`);
        }
        console.log("*******************");
    } else if (choice === "delete") {
        const deletionIndext = parseInt(prompt("ENTER THE ITEM YOU WANNA DELETE"));
        todoItems.splice(deletionIndext, 1);
        console.log("TASK DELETED");
    }
    choice = prompt("WHAT YOU WANT TO DO : ");
}
console.log("YOU ARE OUT OF THE APP");
// const todoList = [];
// let userInput = prompt("WHAT YOU WANNA DO ?");
// while (userInput !== "quit") {
//     console.log("sexmex");
//     if (userInput === "new") {
//         let newTask = prompt("ENTER NEW TASK ");
//         todoList.push(newTask);
//         console.log("TASK ADDED TO THE LIST");
//     } else if (userInput === "list") {
//         console.log("*******************");
//         for (let i in todoList) {
//             console.log("[" + i + "]" + " : " + todoList[i]);
//         }
//         console.log("*******************");
//     } else if (userInput === "delete") {
//         let delIndex = parseInt(prompt("ENTER THE INDEX OF TASK YOU WANNA DELETE"));
//         todoList.splice(delIndex, 1);
//         console.log("TASK DELETED SUCCESS FULLY");
//     }
//     let userInput = prompt("WHAT YOU WANNA DO ?");
// }
// console.log("YOU ARE OUT OF THE APP");