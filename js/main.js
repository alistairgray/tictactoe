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
const winA = [ta, tb, tc];
const winB = [ma, mb, mc];
const winC = [ba, bb, bc];
const winD = [ta, ma, ba];
const winE = [tb, mb, bb];
const winF = [tc, mc, bc];
const winG = [ta, mb, bc];
const winH = [tc, mb, ba];

// Empty player arrays
const playerOGame = [];
const playerXGame = [];


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
  let currentBoxID = clickedBox.id || 'No ID';
  console.log(currentBoxID);
    if(currentPlayer === 'playerO'){
      $('#' + currentBoxID).css('background-image', 'url(images/o.png)')
    } else {
      $('#' + currentBoxID).css('background-image', 'url(images/x.png)')
  }
})
