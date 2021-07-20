const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  }else{
    console.log('Error');
  }
}

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber){
  case 0:
    return'rock';
  case 1:
    return'paper';
  case 3:
    return'scissors';
}
}

const determineWinner = (userChoice,computerChoice) => {
  if( userChoice === computerChoice){
    return 'The game was a tie';
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Computer won';
    }else{
      return 'User won';
    }
  }

  if(userChoice === 'paper'){
      if(computerChoice === 'scissors' || 'rock'){
        return 'Computer won!';
      }else{
        return 'User won!';
      }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock' || 'paper'){
      return 'Computer won!'; 
    }else{
      return 'User won!';
    }
  }
}

playGame = () => {
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice('scissors');
//   console.log(userChoice,computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}
playGame();