function solution(board) {

    //Get initial position of Jafar's pawn
    let position = {};
    for (let i = 0; i < board.length; i++) {
        if (board[i].indexOf('O') >= 0) {
            position.x = board[i].indexOf('O');
            position.y = i;
        }
    }
}

module.exports = solution;
