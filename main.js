// select HTML elements for use later
let mainElement = document.querySelector("#main");
let resultsElement = document.querySelector("#results");
let graphElement = document.querySelector("#graph");

let rockButton = document.createElement("button");
let paperButton = document.createElement("button");
let scissorsButton = document.createElement("button");

rockButton.append("Rock");
paperButton.append("Paper");
scissorsButton.append("Scissors");

mainElement.append(rockButton, paperButton, scissorsButton);

rockButton.addEventListener("click", playGame);
paperButton.addEventListener("click", playGame);
scissorsButton.addEventListener("click", playGame);

//create helper function to select a random choice for the computer
let computerChoices = ["Rock", "Paper", "Scissors"];

let resultCounts = [0, 0, 0];

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    resultCounts[index] += 1;
    return computerChoices[index];
}

function renderResults() {
    graphElement.innerHTML = ""
    for (let index = 0; index < resultCounts.length; index += 1) {
        const element = resultCounts[index];
        let newDiv = document.createElement("div");
        newDiv.classList.add("resultBox")
        graphElement.append(newDiv);
        newDiv.innerHTML = `The computer has selected ${computerChoices[index]} 
        <p class='bigNumber'>${element}</p> times.`;
    }
}

function playGame(event) {
    let playerChoice = event.target.innerText;
    let computerChoice = getComputerChoice();
    // console.log(computerChoice)

    if (playerChoice === computerChoice) {
        resultsElement.innerText = "It's a draw.";
    }
    if (playerChoice === "Rock" && computerChoice === "Scissors") {
        resultsElement.innerText = "Rock beats Scissors, YOU WIN!";
    }
    if (playerChoice === "Rock" && computerChoice === "Paper") {
        resultsElement.innerText = "Rock beats Paper, YOU LOSE!";
    }
    if (playerChoice === "Paper" && computerChoice === "Scissors") {
        resultsElement.innerText = "Scissors beats Paper, YOU LOSE!";
    }
    if (playerChoice === "Paper" && computerChoice === "Rock") {
        resultsElement.innerText = "Paper beats Rock, YOU WIN!";
    }
    if (playerChoice === "Scissors" && computerChoice === "Rock") {
        resultsElement.innerText = "Rock beats Scissors, YOU LOSE!";
    }
    if (playerChoice === "Scissors" && computerChoice === "Paper") {
        resultsElement.innerText = "Scissors beats Paper, YOU WIN!";
    }
    renderResults()
}
