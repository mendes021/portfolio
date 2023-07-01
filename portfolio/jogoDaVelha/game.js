// iniciar variaveis

let board = ['', '', '', '', '', '', '', '', ''];
let playertime = 0;
let symbols = ['o', 'x'];
let gameOver = false;

function handleMove(position){

    if(gameOver){
        return;
    }

    if (board[position] == '') {
        board[position] = symbols[playertime];

        gameOver = isWin();
        if(playertime == 0){
            playertime = 1;
        } else {
            playertime = 0;
        }
    }
}

function isWin(){
    let winStates = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]


}