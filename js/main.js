// tic tac toe psuedocode

// Each box needs to be clickable
// after each click a relevant image needs to be visible

// the logic needs to be created to store the boxes which
// were clicked

// The stored info could be inside an array or object. This would also mean that the winning combinations would require to be stored also

// Here is how the grid is portrayed:
// ta || tb || tc
// ma || mb || mc
// ba || bb || bc

// successful wins
// const winA = [ta, tb, tc];
// const winB = [ma, mb, mc];
// const winC = [ba, bb, bc];
// const winD = [ta, ma, ba];
// const winE = [tb, mb, bb];
// const winF = [tc, mc, bc];
// const winG = [ta, mb, bc];
// const winH = [tc, mb, ba];

// Empty player arrays
// const playerOGame = [];
// const playerXGame = [];

// Game logic
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

const playerXGame = [];
const playerOGame = [];

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


// function(e, i){

let count = 0;


// DOM logic

let currentPlayer = null;



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

$('.box').on('click', function(event){
  let clickedBox = event.target
  let currentBoxID = clickedBox.id;
      if(currentPlayer === 'playerO'){
      $('#' + currentBoxID).css('background-image', 'url(images/o.png)');
      playerOGame.push(clickedBox);
      gameChecker(playerOGame);
    } else if(currentPlayer === 'playerX'){
      $('#' + currentBoxID).css('background-image', 'url(images/x.png)')
      playerXGame.push(clickedBox)
      gameChecker(playerXGame);
  } else if(currentPlayer === null){
    console.log('choose a player before starting');
  }
  count += 1;
  console.log(count);
  if(count === 9){
    console.log("It's a draw!");
  }
});

// Working click function
// $('.box').on('click', function(event){
//   let clickedBox = event.target
//   let currentBoxID = clickedBox.id;
//       if(currentPlayer === 'playerO'){
//       $('#' + currentBoxID).css('background-image', 'url(images/o.png)');
//       playerOGame.push(clickedBox);
//       gameChecker(playerOGame);
//     } else if(currentPlayer === 'playerX'){
//       $('#' + currentBoxID).css('background-image', 'url(images/x.png)')
//       playerXGame.push(clickedBox)
//       gameChecker(playerXGame);
//   } else if(currentPlayer === null){
//     console.log('choose a player before starting');
//   }
//   count += 1;
//   console.log(count);
//   if(count === 9){
//     console.log("It's a draw!");
//   }
// });
