function solution(board, position = null) {

    //Get initial position of Jafar's pawn on first call
    if (!position) {
        position = getPosition(position, board);
    }

    const legalMoves = getLegalMoves(position, board);

    if (legalMoves.length === 0) {

        // Base recursive case
        return 0;
    } else {

        // Construct tree of different possible moves and tally their pawns beat
        const tree = legalMoves.map((move) => {

            // Construct the new board after move is made
            let newBoard = beatPawn(position, move, board);

            return 1 + solution(newBoard, {
                x: move.newPosition.x,
                y: move.newPosition.y
            });
        })

        //Return the maximum
        return Math.max(...tree)
    }

}

// Returns array with legal moves
function getLegalMoves(position, board) {
    const legalMoves = [];

    // One step up, left or right
    let singleStepX = [-1, 1];
    let singleStepY = [-1];

    // Check all moves for legality
    singleStepX.map(x => {
        singleStepY.map(y => {
            const nextX = position.x + x;
            const nextY = position.y + y;

            //Check if move is inbounds
            if (nextY + y >= 0 && nextY + y < board.length &&
                nextX + x >= 0 && nextX + x< board[nextY].length
            ) {
                //Check if move beats a pawn
                if (board[nextY][nextX] === 'X' &&
                    board[nextY + y][nextX + x] === '.') {
                    legalMoves.push({
                        newPosition: {
                            x: nextX + x,
                            y: nextY + y
                        },
                        beatPawn: {
                            x: nextX,
                            y: nextY
                        }
                    })
                }

            }

        })
    })

    return legalMoves;
}

function getPosition(position, board) {
    position = {};
    for (let i = 0; i < board.length; i++) {
        if (board[i].indexOf('O') >= 0) {
            position.x = board[i].indexOf('O');
            position.y = i;
        }
    }
    return position;
}

function beatPawn(position, move, board) {
    let clone = cloneBoard(board);
    clone[position.y][position.x] = '.';
    clone[move.newPosition.y][move.newPosition.x] = 'O';
    clone[move.beatPawn.y][move.beatPawn.x] = '.';
    return clone;
}

function cloneBoard(board) {
    let clone = [];
    for (let i = 0; i < board.length; i++) {
        clone[i] = [...board[i]];
    }
    return clone;
}

module.exports = solution;
