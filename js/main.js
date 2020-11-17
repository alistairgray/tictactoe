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
const playerXGame = [ta, tb, tc];
const playerOGame = [];

// Loops through and logs elements in each array
for(let i=0; i < currentGame.length; i++){
  console.log(currentGame[i]);
  for(let j=0; j < playerXGame.length; j++)
  console.log(playerXGame[j]);
  if(playerXGame[j] === currentGame[i]){
    console.log('playerXGame wins');
  }
}





// Game Win Check

// $.map(currentGame, function(e, i,){
//   console.log(i);
// });

// for (let key in currentGame){
//     if(currentGame.hasOwnProperty(key)){
//       console.log(key + ":" + currentGame[key]);
//   }
// };

// for (let [key, value] of Object.entries(currentGame)){
//     console.log()
//   // console.log(key, `${$('#' + value).attr('id')}`);
//   // $('#' + value).attr(value).id
// }



// function(e, i){

let count = 0;

// DOM logic

let currentPlayer = null;

$('#playerO').on('click', function(){
  $('#playerO').css('background-color', 'red')
  currentPlayer = 'playerO';
})

$('#playerX').on('click', function(){
  $('#playerX').css('background-color', 'red')
  currentPlayer = 'playerX';
})

$('.box').on('click', function(event){
  let clickedBox = event.target
  let currentBoxID = clickedBox.id;
  // console.log(currentBoxID);
    if(currentPlayer === 'playerO'){
      $('#' + currentBoxID).css('background-image', 'url(images/o.png)');
      playerOGame.push(currentBoxID);
    } else if(currentPlayer === 'playerX'){
      $('#' + currentBoxID).css('background-image', 'url(images/x.png)')
      playerXGame.push(currentBoxID)
  }
  count += 1;
  console.log(count);
});
