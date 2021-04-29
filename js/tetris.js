const WIDTH = 20;
const ROW = 20;
const COLUMN = 10;
// 初始化棋盘
function init() {
    for (let i = 0; i < ROW; i++) {
        let row = $('<div class="rowDiv">');
        for (let j = 0; j < COLUMN; j++) {
            row.append('<span class="spanTetris"></span>')
        }
        $('.board').append(row);
    }
}

// 画一个方格
function drawSquare(x, y, color) {
    let rowDivs = $('.board').children().eq(x).children().eq(y);
    rowDivs.css('background', color);

}

//抹去上一个图形
function allEraseShape(x, y, shape) {
    console.log(shape);
    let row;
    for (let i = 0; i < shape.length; i++) {
        console.log(i);
        row = shape[i];
        console.log(row);
        for (let j = 0; j < row.length; j++) {
            let binaryStr = parseInt(row[i], 16).toString(2);
            if (binaryStr.length < 4) {
                binaryStr = Array(4 - binaryStr.length).fill(0).join('') + binaryStr;
            }
            for (let k = 0; k < binaryStr.length; k++){
                if (binaryStr[j] == 1){
                    drawSquare(x + j, y + k, 'orange');
                }
            }
        }
    }
    /*  for (let i = 0; i < 4; i++) {
         //console.log(row);
  
          let binaryStr = parseInt(row[i], 16).toString(2);
          //console.log(binaryStr);
          if (binaryStr.length < 4) {
              binaryStr = Array(4 - binaryStr.length).fill(0).join('') + binaryStr;
          }
          //console.log(binaryStr);
          for (let j = 0; j < binaryStr.length; j++) {
              if (binaryStr[j] == 1) {
                  drawSquare(x + i, y + j, 'orange');
              }
          }
      }   */
}

function eraseShape(x, y, shape){
    let row = shape;

    for (let i = 0; i < 4; i++) {
        //console.log(row);
        let binaryStr = parseInt(row[i], 16).toString(2);
        //console.log(binaryStr);
        if (binaryStr.length < 4) {
            binaryStr = Array(4 - binaryStr.length).fill(0).join('') + binaryStr;
        }
        //console.log(binaryStr);
        for (let j = 0; j < binaryStr.length; j++) {
            if (binaryStr[j] == 1) {
                drawSquare(x + i, y + j, 'orange');
            }
        }
    }
}

// 画一个形状
function drawShape(x, y, shape) {
    //console.log(shape);
    let row = shape;

    for (let i = 0; i < 4; i++) {
        //console.log(row);
        let binaryStr = parseInt(row[i], 16).toString(2);
        //console.log(binaryStr);
        if (binaryStr.length < 4) {
            binaryStr = Array(4 - binaryStr.length).fill(0).join('') + binaryStr;
        }
        //console.log(binaryStr);
        for (let j = 0; j < binaryStr.length; j++) {
            if (binaryStr[j] == 1) {
                drawSquare(x + i, y + j, 'red');
            }
        }
    }
}

function clearLotate(x, y, shape) {

    console.log(shape);
    for (let i = 0; i < 4; i++) {
        //console.log(row);
        let row = shape;
        let binaryStr = parseInt(row[i], 16).toString(2);
        //console.log(binaryStr);
        if (binaryStr.length < 4) {
            binaryStr = Array(4 - binaryStr.length).fill(0).join('') + binaryStr;
        }
        //console.log(binaryStr);
        for (let j = 0; j < binaryStr.length; j++) {
            if (binaryStr[j] == 1) {
                drawSquare(x + i, y + j, 'orange');
            }
        }
    }
}


// 变形









// 所有形状
const shapes = [
    /* O I L Z S J T */
    // shapeO
    ["CC00", "CC00", "0000", "0000"],
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


// 所有颜色
const colors = []

// 棋盘状态
const board = [];


