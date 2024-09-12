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

  
  alert("Computer chose: " + choice)
  return choice
  
  
  
  
}






function getHumanChoice(){
  let thing = prompt("What do you choose?").toLowerCase()
  if (thing == "rock"){
    alert("You choose rock")
  } else if (thing == "paper"){
    alert("You chose paper")
  } else if (thing == "scissors"){
    alert("You chose scissors")
  } else {
    alert("You are dumb")
  }

  return thing

}





function playGame(){

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice){

  if(humanChoice == "rock" && computerChoice == "paper"){
    alert("Weh! You Lose!")
    computerScore++
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    alert("Imagine if you had a real weapon")
    humanScore++
  } else if (humanChoice == "rock" && computerChoice == "rock" ) {
    alert("Feckin' Draw")
  }

  
  if(humanChoice == "paper" && computerChoice == "scissors"){
    alert("Weh! You Lose!")
    computerScore++
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    alert("Imagine if you had a real weapon")
    humanScore++
  } else if (humanChoice == "paper" && computerChoice == "paper" ) {
    alert("Feckin' Draw")
  }


  if(humanChoice == "scissors" && computerChoice == "rock"){
    alert("Weh! You Lose!")
    computerScore++
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    alert("Imagine if you had a real weapon")
    humanScore++
  } else if (humanChoice == "scissors" && computerChoice == "scissors" ) {
    alert("Feckin' Draw")
  }

   return alert("Human: " + humanScore + " and Computer: " + computerScore )

}

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice(1, 3);
    playRound(humanSelection, computerSelection);
}

  if (humanScore > computerScore) {
    alert("Congratulations! You won the game.");
  } else if (humanScore < computerScore) {
    alert("Sorry, you lost the game.");
  } else {
    alert("It's a tie game!");
  }
  
}

playGame()

