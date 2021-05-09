const SQUARE_WIDTH = 20; // 方格宽度

const SQUARE_COLOR = "red"; // 方格颜色

const BOARD_ROW = 20; // 棋盘行数

const BOARD_COLUMN = 10; // 棋盘列数

const BOARD_COLOR = "#131114";//模板颜色

let MIN = 0; //初始化分 

let SEC = 0; //初始化秒

let marks = 0; //初始分数

// 方块形状
const shapes = [
    /* O I L Z S J T */
    // shapeO
    ["CC00", "CC00", "CC00", "CC00"],
    //shapeI
    ["8888", "F000", "8888", "F000"],
    //spapeL
    ["88C0", "2E00", "C440", "E800"],
    //shapeZ
    ["C600", "4C80", "C600", "4C80"],
    //shapeS
    ["6C00", "8C40", "6C00", "8C40"],
    //shapeT
    ["E400", "8C80", "4E00", "4C40"],
    //shapeJ
    ["44C0", "E200", "C880", "8E00"]
]

let currentRow = 0;
let currentCol = 0;
let currentShape = {
    x: 0,
    y: 0
};

let nextshape = parseInt(Math.random(0, 1) * 7);

const board = [];

// 初始化棋盘
function init() {
    for (let i = 0; i < BOARD_ROW; i++) {
        let row = $('<div class="rowDiv">');
        let board_row = [];
        for (let j = 0; j < BOARD_COLUMN; j++) {
            row.append('<span class="spanTetris"></span>');
            board_row.push(0);
        }
        $('.board').append(row);
        board.push(board_row);
    }
}

//下一个图形
function nextShape() {
    for (let i = 0; i < 4; i++){
        let row = $('<div class="rowDiv">');
        for (let j = 0; j < 4; j++){
            row.append('<span class="spanTetris"></span>');
        }
        $('.nextShape').append(row);
    }
}


