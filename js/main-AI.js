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
let humanGame = [];
let aiGame = [];
let aiAvailChoices = [ta, tb, tc, ma, mb, mc, ba, bb, bc];

// Used to check if game is won or draw
let gameStatus = null;

// Player scores which are placed on the scoreboard via jQuery
let humanScore = 0;
let aiScore = 0;

// Starting current player which is used to check if no button is clicked
let currentPlayer = null;

// Counts how many moves have been made
let count = 0;

// --------------------------------------------------------------------------------------------------- //
// GAME FUNCTIONS

// Human goes first
$('.start').on('click', function(){
  if(gameStatus === 'won' || gameStatus === 'draw' || gameStatus === 'inProgress'){
    return false;
  }
  gameStatus = 'inProgress';
  currentPlayer = 'human';
  $('.start').text("Human's Turn").css('background-color', 'blue');
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
      $('.start').text(currentPlayer+' Wins!').css('background-color', 'violet')
      gameStatus = 'won';
      if(currentPlayer === 'human'){
        humanScore +=1;
        $('#pO').text(humanScore)
        resetGame();
      } else if(currentPlayer === 'ai'){
        aiScore +=1;
        $('#pX').text(aiScore)
        resetGame();
        }
    } else if(count === 9 && gameStatus !== 'won'){ // draw check
      $('.start').text("It's a draw!").css('background-color', 'black')
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
  } else if(humanGame.includes(clickedBox) || aiGame.includes(clickedBox)){
    alert('Box already clicked, pick another');

  }else{ // Checks who the current player is
      if(currentPlayer === 'human'){
      // Changes status div to display new text and blue background
      $('.start').text("Humans's Turn").css('background-color', 'blue');
      $('#' + currentBoxID).css('background-image', 'url(images/o.png)');
      // Pushes the clickedBox html data into humanGame array
      humanGame.push(clickedBox);
      spliceChoice(clickedBox);
      count += 1;
      $('.start').text("AI's Turn").css('background-color', 'red');
      gameChecker(humanGame);
      currentPlayer = 'ai'
      aiPlayer();
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
    humanGame = [];
    aiGame = [];
    aiAvailChoices = [ta, tb, tc, ma, mb, mc, ba, bb, bc];
    $('.box').css('background-image', 'none');
    $('.start').text("START").css('background-color', 'red')
    $('#resetGame').css('visibility', 'hidden');
  })
}

const aiPlayer = function(){
  if(gameStatus === 'won' || gameStatus === 'draw'){
    return false;
  } else {
    setTimeout(function () {
      $('.start').text("AI's Turn").css('background-color', 'red');
      let randElement = Math.floor(Math.random() * aiAvailChoices.length);
      clickedBox = aiAvailChoices[randElement];
      currentBoxID = clickedBox.id
      $('#' + currentBoxID).css('background-image', 'url(images/x.png)')
      aiGame.push(clickedBox)
      spliceChoice(clickedBox);
      $('.start').text("Human's Turn").css('background-color', 'blue');
      count += 1;
      gameChecker(aiGame);
      currentPlayer = 'human'
    }, 1500)
  }
};

const spliceChoice = function(value){
  i = aiAvailChoices.indexOf(value)
  aiAvailChoices.splice(i, 1)
}
