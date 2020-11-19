// Here is how the grid is portrayed:
// ta || tb || tc
// ma || mb || mc
// ba || bb || bc

// Game Win Conditions
const currentGame = [

  [ta, tb, tc],
  [ma, mb, mc],
  [ba, bb, bc],
  [ta, ma, ba],
  [tb, mb, bb],
  [tc, mc, bc],
  [ta, mb, bc],
  [tc, mb, ba],

]

// Global Variables

// Arrays that track the player's progress
let playerXGame = [];
let playerOGame = [];

// Used to check if game is won or draw
let gameStatus = null;

// Player scores which are placed on the scoreboard via jQuery
let playerOScore = 0;
let playerXScore = 0;

// Starting current player which is used to check if no button is clicked
let currentPlayer = null;

// Counts how many moves have been made
let count = 0;

// --------------------------------------------------------------------------------------------------- //
// GAME FUNCTIONS

// Start button randomly selects via 'coin flip' which player starts
$('#start').on('click', function(){
  gameStatus = 'inProgress';
  const playerO = Math.random()
  const playerX = Math.random()
  if(playerO > playerX){
    currentPlayer = 'playerO';
  } else {
    currentPlayer = 'playerX';
  }
  if(currentPlayer === 'playerO'){
  $('#start').text("Player O's Turn").css({'font-size':'30pt','background-color': 'blue'});
} else {
  $('#start').text("Player X's Turn").css({'font-size':'30pt','background-color': 'red'});
  }
});

// Checks on click of a box if the current player has made a winning move
// or if it is a draw

const gameChecker = function(player){
for(let i=0; i < currentGame.length; i++){
  const a = currentGame[i][0]
  const b = currentGame[i][1]
  const c = currentGame[i][2]
    if (player.includes(a) && player.includes(b) && player.includes(c)){
      console.log(currentPlayer, 'Wins!');
      $('#start').text(currentPlayer+' Wins!').css({'font-size':'30pt','background-color': 'pink'});
      gameStatus = 'won';
      if(currentPlayer === 'playerO'){
        playerOScore +=1;
        $('#pO').text(playerOScore)
        resetGame();
      } else if(currentPlayer === 'playerX'){
        playerXScore +=1;
        $('#pX').text(playerXScore)
        resetGame();
        }
    } else if(count === 9 && gameStatus !== 'won'){ // draw check
      $('#start').text("It's a draw!").css({'font-size':'30pt','background-color': 'black'});
      gameStatus = 'draw';
      resetGame();
    }
  }
};

// The main game - on click, checks which box is clicked and gets the box ID
$('.box').on('click', function(event){

  // Puts the clicked box html data into the clickedBox local variable
  let clickedBox = event.target

  // Extracts the ID from the clickedBox variable
  let currentBoxID = clickedBox.id;

  // Logic check if game is over
  if(gameStatus === 'won' || gameStatus === 'draw'){
    alert('Game Over. Click play again to reset the game')

    // Logic check if box already clicked. Alerts player if already clicked
  } else if(playerOGame.includes(clickedBox) || playerXGame.includes(clickedBox)){
    alert('Box already clicked, pick another');

  }else{ // Checks who the current player is
      if(currentPlayer === 'playerO'){

      // Changes status div to display new text and blue background
      $('#start').text("Player O's Turn").css({'font-size':'30pt','background-color': 'blue'});

      $('#' + currentBoxID).css('background-image', 'url(images/o.png)');

      // Pushes the clickedBox html data into playerOGame array
      playerOGame.push(clickedBox);

      count += 1;

      $('#start').text("Player X's Turn").css({'font-size':'30pt','background-color': 'red'});
      
      gameChecker(playerOGame);

      currentPlayer = 'playerX'

      // Checks who the current player is
    } else if(currentPlayer === 'playerX'){
      $('#start').text("Player X's Turn").css({'font-size':'30pt','background-color': 'red'});
      $('#' + currentBoxID).css('background-image', 'url(images/x.png)')
      playerXGame.push(clickedBox)
      count += 1;
      $('#start').text("Player O's Turn").css({'font-size':'30pt','background-color': 'blue'});
      gameChecker(playerXGame);
      currentPlayer = 'playerO'

  } else if(currentPlayer === null){ // Logic check if no player is selected
    alert('Click the red start button');
    }
  }
});

const resetGame = function(){
  $('#resetGame').css('visibility', 'visible');
  $('#resetGame').on('click', function(){
    count = 0;
    currentPlayer = null;
    gameStatus = null;
    playerOGame = [];
    playerXGame = [];
    $('.box').css('background-image', 'none')
    $('#start').text("START").css({'font-size':'30pt','background-color': 'red'});
    $('#resetGame').css('visibility', 'hidden');
  })
}
