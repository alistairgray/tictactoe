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

// Arrays that track the player's progress
const playerXGame = [];
const playerOGame = [];

// Function to check if either player has won
const gameChecker = function(player){
for(let i=0; i < currentGame.length; i++){
  const a = currentGame[i][0]
  const b = currentGame[i][1]
  const c = currentGame[i][2]
    if (player.includes(a) && player.includes(b) && player.includes(c)){
    console.log(currentPlayer, 'Wins!');
    }
  }
};

// Starting current player if no button is clicked
let currentPlayer = null;

// Start button randomly selects which player starts
$('#start').on('click', function(){
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



// Counts how many moves have been made
let count = 0;

// Changes button to red for current player and grey for the other
$('#playerO').on('click', function(){
  $('#playerO').css('background-color', 'red')
  $('#playerX').css('background-color', 'grey')
  currentPlayer = 'playerO';
})

$('#playerX').on('click', function(){
  $('#playerX').css('background-color', 'red')
  $('#playerO').css('background-color', 'grey')
  currentPlayer = 'playerX';
})


// The main game
$('.box').on('click', function(event){
  let clickedBox = event.target
  let currentBoxID = clickedBox.id;
  // Logic check if box already clicked
  if(playerOGame.includes(clickedBox) || playerXGame.includes(clickedBox)){
    console.log('Box already clicked, pick another');
  }else{ // Add image to box, push to player's array and then check if player won
      if(currentPlayer === 'playerO'){
      $('#' + currentBoxID).css('background-image', 'url(images/o.png)');
      playerOGame.push(clickedBox);
      gameChecker(playerOGame);
      count += 1;
      console.log(count);
      currentPlayer = 'playerX'
    } else if(currentPlayer === 'playerX'){
      $('#' + currentBoxID).css('background-image', 'url(images/x.png)')
      playerXGame.push(clickedBox)
      gameChecker(playerXGame);
      count += 1;
      console.log(count);
      currentPlayer = 'playerO'
  } else if(currentPlayer === null){ // Logic check if no player is selected
    console.log('choose a player before starting');
  }
  if(count === 9){
    console.log("It's a draw!");
    }
  }
});
