// All code should be written in this file.
let playerOneMoveOneType;
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveTwoType;
let playerOneMoveThreeValue;
let playerOneMoveThreeType;
let playerTwoMoveOneType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;
let playerThreeMoveThreeType;
let playerThreeMoveOneValue;
let playerThreeMoveTwoValue;
let playerThreeMoveThreeValue;

function setPlayerMoves (player,moveOneType,moveOneValue,moveTwoType,moveTwoValue,moveThreeType,moveThreeValue) {
if(player === 'playerOne' && moveOneValue!== '' && moveTwoValue!== '' && moveThreeValue!== ''){
  playerOneMoveOneType = moveOneType;
  playerOneMoveOneValue = moveOneValue;
  playerOneMoveTwoValue = moveTwoValue;
  playerOneMoveTwoType = moveTwoType;
  playerOneMoveThreeValue = moveThreeValue;
  playerOneMoveThreeType = moveThreeType;
} else if(player === 'playerTwo' && moveOneValue!== '' && moveTwoValue!== '' && moveThreeValue!== ''){
  playerTwoMoveOneType = moveOneType;
  playerTwoMoveOneValue = moveOneValue;
  playerTwoMoveTwoValu = moveTwoValue;
  playerTwoMoveTwoType = moveTwoType;
  playerTwoMoveThreeType = moveThreeType;
  playerTwoMoveThreeValue = moveThreeValue;
}
}
setPlayerMoves ('playerOne','rock',1,'paper',1,'scissors',1);
console.log(playerOneMoveOneType);
