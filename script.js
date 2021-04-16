// const para = document.querySelector("p");

// para.addEventListener("click", updateName);

// function updateName() {
//     let name = prompt("Enter a new name");
//     para.textContent = "Player 1: " + name;
// }

//document.addEventListener("DOMContentLoaded", function() {
    // function createParagraph() {
    //     let para = document.createElement("p");
    //     para.textContent = "You clicked the button!";
    //     document.body.appendChild(para);
    // }

    // const buttons = document.querySelectorAll("button");

    // for(let i = 0; i < buttons.length; i++) {
    //     buttons[i].addEventListener("click", createParagraph);
    // }
//});
//defer already used no need to add event to domcontent
//async and defer to bypass problem of blocking script
//best to use async when scripts in the page runs independently and immediately
//defer will load scripts accordingly and needs to wait for pasrasing 


// random number guesses
// let randomNumber = Math.floor(Math.random() * 100) + 1;

// const guesses = document.querySelector(".guesses");
// const lastResult = document.querySelector(".lastResult");
// const lowOrHi = document.querySelector(".lowOrHi");
// const guessSubmit = document.querySelector(".guessSubmit");
// const guessField = document.querySelector(".guessField");

// let guessCount = 1;
// let resetButton;

// function checkGuess() {
//     //alert("I am a placeholder.");
//     let userGuess = Number(guessField.value);
//     if(guessCount === 1) {
//         guesses.textContent = "Previous guesses: ";
//     }
//     guesses.textContent += userGuess + " ";

//     if(userGuess === randomNumber) {
//         lastResult.textContent = "Congratulations! You got it right!";
//         lastResult.style.backgroundColor = "green";
//         lastResult.style.fontSize = "200%";
//         lastResult.style.boxShadow = "3px 3px 6px black";
//         lowOrHi.textContent = "";
//         setGameOver();
//     } else if(guessCount === 10) {
//         lastResult.textContent = "!!!GAME OVER!!!";
//         setGameOver();
//     } else {
//         lastResult.textContent = "Wrong!";
//         lastResult.style.backgroundColor = "red";
//         if(userGuess < randomNumber) {
//             lowOrHi.textContent = "Last guess was too low";
//         } else if(userGuess > randomNumber) {
//             lowOrHi.textContent = "Last guess was too high!";
//         }
//     }

//     guessCount++;
//     guessField.value = "";
//     guessField.focus();
// }

// guessSubmit.addEventListener("click", checkGuess);

// function setGameOver() {
//     guessField.disabled = true;
//     guessSubmit.disabled = true;
//     resetButton = document.createElement("button");
//     resetButton.textContent = "Start New Game";
//     document.body.append(resetButton);
//     resetButton.addEventListener("click", resetGame);
// }

// function resetGame() {
//     guessCount = 1;
//     const resetParas = document.querySelectorAll(".resultParas div");
//     for(let i = 0; i < resetParas.length; i++) {
//         resetParas[i].textContent = "";
//     }

//     resetButton.parentNode.removeChild(resetButton);

//     guessField.disabled = false;
//     guessSubmit.disabled = false;
//     guessField.value = "";
//     // lastResult.textContent = "";
//     // guesses.textContent = "";
//     guessField.focus();
//     //focus allows user input without having to click on the text field
//     lastResult.style.backgroundColor = "white";

//     randomNumber = Math.floor(Math.random() * 100) + 1;
// }


// const button = document.querySelector("button");

// button.onclick = function() {
//     let name = prompt("What is your name?");
//     alert("Hello " + name + ", nice to meet you!");
// }

// let dog = {name: "bonny", breed:"german shepherd" };

// console.log(dog.name);

// let myInt = 5;
// let myFloat = 6.667;

// const btn = document.querySelector("button");
// const txt = document.querySelector("p");

// btn.addEventListener("click", updateBtn);

// function updateBtn() {
//     if(btn.textContent === "Start machine") {
//         btn.textContent = "Stop machine";
//         txt.textContent = "The machine has started!";
//     } else {
//         btn.textContent = "Start machine";
//         txt.textContent = "The machine has stopped!";
//     }
// }

// let name = ["tomi", "kenkz", "dami"];
// let me = name[name.length - 1];

//separate informations and remove station code and numbers basically
const list = document.querySelector(".output ul");
list.innerHTML = "";
// let stations = [
//     'MAN675847583748sjt567654;Manchester Piccadilly',
//     'GNF576746573fhdg4737dh4;Greenfield',
//     'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//     'SYB4f65hf75f736463;Stalybridge',
//     'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
// ];

// for(let i = 0; i < stations.length; i++) {
//     let input = stations[i];
//     let code = input.slice(0,3);
//     let semiC = input.indexOf(";");
//     let name = input.slice(semiC + 1);
//     let result = code + ": " + name;
//     let listItem = document.createElement("li");
//     listItem.textContent = result;
//     list.appendChild(listItem);
// }

// const totalBox = document.querySelector(".output p");
// let total = 0;
// totalBox.textContent = "";

// let products = [
//     'underpants:6.99',
//     'Socks:5.99',
//     'T-shirt:14.99',
//     'Trousers:31.99',
//     'Shoes:23.99'
// ];

// for(let i = 0; i < products.length; i++) {
//     let subArray = products[i].split(":");
//     let name = subArray[0];
//     let price = Number(subArray[1]);
//     total += price;
//     let itemText = name + " -$" + price;

//     let listItem = document.createElement("li");
//     listItem.textContent = itemText;
//     list.appendChild(listItem);
// }

// totalBox.textContent = "Total: $" + total.toFixed(2);

const searchInput = document.querySelector('.output input');
const searchBtn = document.querySelector('.output button');

// list.innerHTML = '';

let myHistory= [];

searchBtn.onclick = function() {
 if(searchInput.value !== '') {
 myHistory.unshift(searchInput.value);

 list.innerHTML = '';

 for(let i = 0; i < myHistory.length; i++) {
 itemText = myHistory[i];
 const listItem = document.createElement('li');
 listItem.textContent = itemText;
 list.appendChild(listItem);
 }

 if(myHistory.length >= 5) {
 myHistory.pop();
 }

 searchInput.value = '';
 searchInput.focus();
 }
}