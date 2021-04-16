const generateFacts = document.querySelector(".facts");
const showFacts = document.querySelector(".showfacts");

let facts = [
    "I love Rick and Morty.", 
    "Alcohol is the best medicine for me.", 
    "The future is in black mirror.", 
    "Alternative is my favorite genre.", 
    "I can rap.", 
    "Out of 24 hours in a day, I can listen to music for 9 hours in total.", 
    "I'm obsessed with myself.", 
    "I'm an introvert.", 
    "I dream a lot, I'm a Josephine.lmao.", 
    "I'm pretty weird and shy at times.", 
    "I'm the wildest person you'll ever meet.", 
    "I literally say \"I don't know\" everytime even when I DO know.",
    "If you ever know my thoughts, I'm sorry, you won't be the same.",
    "I created this under an hour.",
    "I am very intelligent",
    "This contains a very short line of codes."
];

generateFacts.addEventListener('click', displayFacts);

function displayFacts() {
    let factsLength = facts.length;
    let randomNumber = Math.floor(Math.random() * factsLength);

    showFacts.innerHTML = facts[randomNumber];
    showFacts.style.padding = "20px 0";
    document.getElementById("message").style.display = "block";
}
