// 画一个方格
function drawSquare(row, col, color) {
    let rowDivs = $('.board').children().eq(row).children().eq(col);
    rowDivs.css('background', color);
}

// 画一个形状
function drawShape(y, x, shape) {
    for (let i = 0; i < 4; i++) {
        let binaryStr = parseInt(shape[i], 16).toString(2);
        if (binaryStr.length < 4) {
            binaryStr = Array(4 - binaryStr.length).fill(0).join('') + binaryStr;
        }
        for (let j = 0; j < binaryStr.length; j++) {
            if (binaryStr[j] == 1) {
                drawSquare(y + i, x + j, SQUARE_COLOR);
            }
        }
    }
}

//抹去一个图形
function eraseShape(y, x, shape) {
    for (let i = 0; i < 4; i++) {
        let binaryStr = parseInt(shape[i], 16).toString(2);
        if (binaryStr.length < 4) {
            binaryStr = Array(4 - binaryStr.length).fill(0).join('') + binaryStr;
        }
        for (let j = 0; j < binaryStr.length; j++) {
            if (binaryStr[j] == 1) {
                drawSquare(y + i, x + j, BOARD_COLOR);
            }
        }
    }
}

// 边界验证
function validate(y, x, shape) {
    for (let i = 0; i < 4; i++) {
        let binaryStr = parseInt(shape[i], 16).toString(2);
        if (binaryStr.length < 4) {
            binaryStr = Array(4 - binaryStr.length).fill(0).join('') + binaryStr;
        }
        for (let j = 0; j < binaryStr.length; j++) {
            if (binaryStr[j] == 1) {
                if (y + i < 0 || y + i > 19) {
                    return false;
                }
                if (x + j < 0 || x + j > 9) {
                    return false;
                }
                if(board[y+i][x+j] == 1) {
                    return false;
                }
            }
        }
    }
    return true;
}

// 设置棋盘
function setBoard(y, x, shape) {
    for (let i = 0; i < 4; i++) {
        let binaryStr = parseInt(shape[i], 16).toString(2);
        if (binaryStr.length < 4) {
            binaryStr = Array(4 - binaryStr.length).fill(0).join('') + binaryStr;
        }
        for (let j = 0; j < binaryStr.length; j++) {
            if (binaryStr[j] == 1) {
                board[y + i][x + j] = 1;
            }
        }
    }
}
