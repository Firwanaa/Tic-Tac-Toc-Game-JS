/*Two Players Misère Tic-Tac-Toe "Reverse"*/
//Alqassam Firwana

//Prompt Player 1 & 2 To Input Initioals And Declare Variables
var p1Name = prompt("Enter Player 1 Initials: ");
var p1n = document.getElementById("p1id").innerHTML = "Player 1: "+p1Name;
var p2Name = prompt("Enter Player 2 Initials: ");
var p2n = document.getElementById("p2id").innerHTML = "Player 2: "+p2Name;
var board;
var turn = p1Name;
var notTrun;
var loose;
var winner;

//Assign HTML objects to JS Variables Using DOM Selectores And Query Selectores 
var clicked = document.querySelectorAll('.cell');
var displayMsg = document.querySelector('#turn');
var displayWinMsg = document.querySelector('#win');
var cells = Array.from(document.querySelectorAll('#gameBoard button'));

//"Just For Practice" Event Listener Commented out Becuase I used onClick Attribute on The HTML File
//document.getElementById('gameBoard').addEventListener('click', playerTurn);
//document.getElementById('reset').addEventListener('click', gameInit);


//Loosing Combinations For Reverse Tic Tac Toe "Reverse"
var loosingCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];


//Getting Looser Function According to Our Loosing Logic "Reverse"
function getLooser(){
    var looser = null;
    
    loosingCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) 
        looser = board[combo[0]];
        });
        if(looser){
            return looser;
        }else if(board.includes('')){
            return null;
        }else {
            return 'L';
        };

}


//Function To Handel Turn and Chang Button Text Content.
function playerTurn() {
    var plyx = cells.findIndex(function(cellnum) {
        return cellnum === event.target;
    });
    board[plyx] = turn;
    if(turn === p1Name){
        turn = p2Name, clicked.innerHTML =p1Name, notTrun = p2Name;
      
    }else if(turn === p2Name){
        turn = p1Name, clicked.innerHTML =p2Name, notTrun = p1Name;
    }
    loose = getLooser();
    displayBoard();
};


//Board Emptey Array That Will Be Populated By displayBoard Function 
function gameInit() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    displayBoard();

};


//Functio To Populate Board Array and Declare Winning Message Loosing Message and Draw message.
function displayBoard() {
    board.forEach(function(XorO, index) {
  
    cells[index].textContent = XorO;
    });
   if(loose === 'L'){
    displayMsg.textContent = 'It\'s A Draw ^_^';
    
   } else if(loose ){
    displayMsg.textContent = `${loose} Loose The Game ! :(`;
    displayWinMsg.textContent = `${notTrun} Win The Game ! :)`;
   
   }else {
    displayMsg.textContent =`It's ${turn}'s turn!`;
   }
};

//Invoking gameInit Function
gameInit();