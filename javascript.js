const container = document.querySelector(".container")
const paper = document.createElement("button")
const rock = document.createElement("button")
const scissors = document.createElement("button")
const comp = document.createElement("h2")
const outcome = document.createElement("h4")
const result = document.createElement("h4")
const final = document.createElement("h3")

 container.appendChild(paper)
 container.appendChild(rock)
 container.appendChild(scissors)
 container.appendChild(comp)
 container.appendChild(outcome)
 container.appendChild(result)
 container.appendChild(final)

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
  button.style.backgroundColor = "black";
  button.style.color = "white";
  button.style.padding = "10px";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.margin = "0 10px"; 
});

comp.innerText = "COMPUTER CHOICE: "
outcome.innerText = "OUTCOME: "
result.innerText = "GAME RESULT: "
final.innerText = "FINAL RESULT: "



paper.innerText = "Paper";
rock.innerText = "Rock";
scissors.innerText = "Scissors";


function playGame(){

  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice(min, max) {
    let minCeiled = Math.ceil(min);
    let maxFloored = Math.floor(max);
    
    let random = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    let choice;
  
    if (random == 1) {
      choice = "paper";
    } else if (random == 2) {
      choice = "rock";
    } else if (random == 3) {
      choice = "scissors";
    }
  
    
    // alert("Computer chose: " + choice)
    comp.innerText = "COMPUTER CHOICE: " + choice
    return choice
    
  }
  
  
  // function getHumanChoice(){
  //   let thing = prompt("What do you choose?").toLowerCase()
  //   if (thing == "rock"){
  //     alert("You choose rock")
  //   } else if (thing == "paper"){
  //     alert("You chose paper")
  //   } else if (thing == "scissors"){
  //     alert("You chose scissors")
  //   } else {
  //     alert("You are dumb")
  //   }
  
  //   return thing
  
  // }

  function playRound(humanChoice, computerChoice){

  if(humanChoice == "rock" && computerChoice == "paper"){
    outcome.innerText = "Weh! You Lose!"
    computerScore++
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    outcome.innerText = "Imagine if you had a real weapon"
    humanScore++
  } else if (humanChoice == "rock" && computerChoice == "rock" ) {
    outcome.innerText = "Feckin' Draw"
  }

  
  if(humanChoice == "paper" && computerChoice == "scissors"){
    outcome.innerText = "Weh! You Lose!"
    computerScore++
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    outcome.innerText = "Imagine if you had a real weapon"
    humanScore++
  } else if (humanChoice == "paper" && computerChoice == "paper" ) {
    outcome.innerText = "Feckin' Draw"
  }


  if(humanChoice == "scissors" && computerChoice == "rock"){
    outcome.innerText = "Weh! You Lose!"
    computerScore++
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    outcome.innerText = "Imagine if you had a real weapon"
    humanScore++
  } else if (humanChoice == "scissors" && computerChoice == "scissors" ) {
   outcome.innerText = "Feckin' Draw"
  }

  

   return result.innerText = "Human: " + humanScore + " and Computer: " + computerScore 

}

   

    
    
    let roundCount = 0;
    const totalRounds = 5;
    

    function checkGameEnd(){
      if(roundCount === totalRounds){
        if (humanScore > computerScore) {
          final.innerText = "Yuhuuu!! You beat the AI"
        } else if (humanScore < computerScore) {
          final.innerText = "Sorry, Skynet Beat You"
        } else {
          final.innerText = "It's a tie game! T1000 Approves"
        }
      }
    }

    function getButtons() {
      paper.addEventListener("click", () => {
        if (roundCount < totalRounds) {
          const computerSelection = getComputerChoice(1, 3);
          playRound("paper", computerSelection);
          roundCount++;
          checkGameEnd();
        }
      });

      rock.addEventListener("click", () => {
        if (roundCount < totalRounds) {
          const computerSelection = getComputerChoice(1, 3);
          playRound("rock", computerSelection);
          roundCount++;
          checkGameEnd();
        }
      });

      scissors.addEventListener("click", () => {
        if (roundCount < totalRounds) {
          const computerSelection = getComputerChoice(1, 3);
          playRound("scissors", computerSelection);
          roundCount++;
          checkGameEnd();
        }
      });
    }
  
  getButtons()
}

playGame()





