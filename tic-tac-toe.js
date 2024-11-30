let xScore = 0;
let oScore = 0;
let dScore = 0;
let total = 0;
let turnCount = 0;

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

const choices = document.querySelectorAll(".box");
console.log(choices.length);
const mssg = document.querySelector(".conclusion p");
const Reset = document.querySelector(".newbtn");

const xScoreBoard = document.querySelector("#xScore");
const oScoreBoard = document.querySelector("#oScore");
const dScoreBoard = document.querySelector("#dScore");
const tScoreBoard = document.querySelector("#tScore");

let isWon = false;
const checkWinner = () => {
    for(let pattern of winPatterns){
        let E1 = choices[pattern[0]].innerText;
        let E2 = choices[pattern[1]].innerText;
        // console.log(pattern, choices[pattern[0]], choices[pattern[1]], choices[pattern[2]]);
        let E3 = choices[pattern[2]].innerText;
        
        if(E1 !== "" && E1 === E2 && E2 === E3){
            mssg.innerText = `Winner : ${E1}`;
            if(E1 === "X"){
                xScore++;
                xScoreBoard.innerText = xScore;
                total++;
                tScoreBoard.innerText = total;
                isWon = true;
            }
            else{
                oScore++;
                oScoreBoard.innerText = oScore;
                total++;
                tScoreBoard.innerText = total;
                isWon = true;
            }
        }
        if (turnCount === 9) {
            mssg.innerText = "It's a Draw!";
            dScore++;
            dScoreBoard.innerText = dScore;
            resetGame();
            total++;
            tScoreBoard.innerText = total;
        }
    }
};

const resetGame = () =>{
    choices.forEach(choice => (choice.innerText = ""));
    turnCount = 0;
    isWon = false;
    // mssg.innerText = "Play First Move!";
}

const playGame = (choice) => {
    if (choice.innerText !== "") return; // Prevents Overwrite.
    
    if(turnCount % 2 != 0){
        choice.innerText = "X";
    }
    else{
        choice.innerText = "O";
    }
    checkWinner();
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // console.log("box clicked\n");
        if(isWon){
            resetGame();
        }
        else{
            turnCount++;
            playGame(choice);
        }
    });
});

Reset.addEventListener("click", () => {
    resetGame();
});