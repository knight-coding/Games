let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".option");
const mssg = document.querySelector("#mssg");

const userScoreBoard = document.querySelector("#userScore");
const compScoreBoard = document.querySelector("#compScore");

const gameDraw = () => {
    // console.log("It's a Draw!");
    mssg.innerText = "It's a Draw!";
    mssg.style.backgroundColor = "black";
}

const showWinner = (userWin,compChoice) => {
    if (userWin) {
       // console.log("You won");
        mssg.innerText = `You Won!, computer's choice : ${compChoice}`;
        mssg.style.backgroundColor = "green";
        userScore++;
        userScoreBoard.innerText = userScore;
    }
    else {
        // console.log("You loose");
        mssg.innerText = `You loose!, computer's choice : ${compChoice}`;
        mssg.style.backgroundColor = "red";
        compScore++;
        compScoreBoard.innerText = compScore;
    }
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    // Genrating random number
    const rndIdx = Math.floor(Math.random() * 3);
    return options[rndIdx];
};

const playGame = (userChoice) => {
    // console.log("User Choice = ", userChoice);
    // Generating computer choice.
    const compChoice = genCompChoice();
    //console.log("computer's Choice = ", compChoice);
    let userWin = true;

    if (userChoice === compChoice) {
        gameDraw();
    } else {
        if (userChoice === 'rock') {
            userWin = compChoice === 'paper' ? false : true
        }
        else if (userChoice === 'paper') {
            userWin = compChoice === 'scissors' ? false : true
        }
        else {
            userWin = compChoice === 'rock' ? false : true
        }
    }
    showWinner(userWin,compChoice);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("Choice is clicked", userChoice);
        playGame(userChoice);
    });
});