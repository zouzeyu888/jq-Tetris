// 画一个方格
function drawSquare(row, col, color) {
    let rowDivs = $('.board').children().eq(row).children().eq(col);
    rowDivs.css('background', color);
}

// 画一个形状
function drawShape(row, col, shape) {
    for (let i = 0; i < 4; i++) {
        let binaryStr = parseInt(shape[i], 16).toString(2);
        if (binaryStr.length < 4) {
            binaryStr = Array(4 - binaryStr.length).fill(0).join('') + binaryStr;
        }
        for (let j = 0; j < binaryStr.length; j++) {
            if (binaryStr[j] == 1) {
                drawSquare(row + i, col + j, SQUARE_COLOR);
            }
        }
    }
}

//抹去一个图形
function eraseShape(row, col, shape) {
    for (let i = 0; i < 4; i++) {
        let binaryStr = parseInt(shape[i], 16).toString(2);
        if (binaryStr.length < 4) {
            binaryStr = Array(4 - binaryStr.length).fill(0).join('') + binaryStr;
        }
        for (let j = 0; j < binaryStr.length; j++) {
            if (binaryStr[j] == 1) {
                drawSquare(row + i, col + j, BOARD_COLOR);
            }
        }
    }
}

// 边界验证
function validate(row, col, shape) {
    for (let i = 0; i < 4; i++) {
        let binaryStr = parseInt(shape[i], 16).toString(2);
        if (binaryStr.length < 4) {
            binaryStr = Array(4 - binaryStr.length).fill(0).join('') + binaryStr;
        }
        for (let j = 0; j < binaryStr.length; j++) {
            if (binaryStr[j] == 1) {
                if (row + i < 0 || row + i > 19) {
                    return false;
                }
                if (col + j < 0 || col + j > 9) {
                    return false;
                }
                if (board[row + i][col + j] == 1) {
                    return false;
                }
            }
        }
    }
    return true;
}

// 设置棋盘
function setBoard(row, col, shape) {
    for (let i = 0; i < 4; i++) {
        let binaryStr = parseInt(shape[i], 16).toString(2);
        if (binaryStr.length < 4) {
            binaryStr = Array(4 - binaryStr.length).fill(0).join('') + binaryStr;
        }
        for (let j = 0; j < binaryStr.length; j++) {
            if (binaryStr[j] == 1) {
                board[row + i][col + j] = 1;
            }
        }
    }
}


/* 画下一个图形的部分 start*/
// 画一个方格
function drawNextSquare(row, col, color) {
    let rowDivs = $('.nextShape').children().eq(row).children().eq(col);
    rowDivs.css('background', color);
}
// 画一个形状
function drawNextShape(shape) {
    for (let i = 0; i < 4; i++) {
        let binaryStr = parseInt(shape[i], 16).toString(2);
        if (binaryStr.length < 4) {
            binaryStr = Array(4 - binaryStr.length).fill(0).join('') + binaryStr;
        }
        for (let j = 0; j < binaryStr.length; j++) {
            if (binaryStr[j] == 1) {
                drawNextSquare(i, j, SQUARE_COLOR);
            }
        }
    }
}
//抹去一个图形
function eraseNextShape(shape) {
    for (let i = 0; i < 4; i++) {
        let binaryStr = parseInt(shape[i], 16).toString(2);
        if (binaryStr.length < 4) {
            binaryStr = Array(4 - binaryStr.length).fill(0).join('') + binaryStr;
        }
        for (let j = 0; j < binaryStr.length; j++) {
            if (binaryStr[j] == 1) {
                drawNextSquare(i, j, BOARD_COLOR);
            }
        }
    }
}
/* 画下一个图形的部分 end*/

function drawAll() {
    for(let i = 0; i < BOARD_ROW; i++) {
        for(let j = 0; j < BOARD_COLUMN; j++) {
            if(board[i][j] == 0) {
                drawSquare(i, j, BOARD_COLOR);
            } else {
                drawSquare(i, j, SQUARE_COLOR);
            }
        }
    }
}