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
// 画一个形状
function drawShape(x, y, shape) {

}
// 变形
let shapeNum = 0;
function transformation() {
    let graph = shapes[shapeNum];
    for (let i = 0; i < shapes[shapeNum].length; i++) {
        let row = graph[i]
        for (let j = 0; j < graph[i].length; j++) {
            let item = row[j]
            if (item >= 1) {
                drawSquare(i, j, 'orange');
            }
        }
    }

    shapeNum++;
    if (shapeNum == 7) {
        shapeNum = 0;

    }
    //console.log(shapeNum);
    graph = shapes[shapeNum];
    for (let i = 0; i < shapes[shapeNum].length; i++) {
        let row = graph[i]
        for (let j = 0; j < graph[i].length; j++) {
            let item = row[j]
            if (item >= 1) {
                drawSquare(i, j, 'red');
            }
        }
    }
    return graph;
}

//旋转
function shapeLotate(orangeShape, redShape) {
    //console.log(lotateNum);,

    let orangeGraph = orangeShape;
    //console.log(orangeShape)
    for (let i = 0; i < orangeGraph.length; i++) {
        let row = orangeGraph[i]
        for (let j = 0; j < orangeGraph[i].length; j++) {
            let item = row[j]
            if (item >= 1) {
                drawSquare(i, j, 'orange');
            }
        }
    }
    //lotateNum++;
    let redGraph = redShape;
    for (let i = 0; i < redGraph.length; i++) {
        let row = redGraph[i]
        for (let j = 0; j < redGraph[i].length; j++) {
            let item = row[j]
            if (item >= 1) {
                drawSquare(i, j, 'red');
            }
        }
    }


}



function clearLotate(orangeShape) {
    let orangeGraph = orangeShape;
    //console.log(orangeShape)
    for (let i = 0; i < orangeGraph.length; i++) {
        let row = orangeGraph[i]
        for (let j = 0; j < orangeGraph[i].length; j++) {
            let item = row[j]
            if (item >= 1) {
                drawSquare(i, j, 'orange');
            }
        }
    }
}



function lotateArray(num) {
    let lotateNum = shapeNum;
    if (lotateNum == 7) {
        lotateNum = 0
    }
    //console.log(lotateNum);
    let allArray = new Array();
    let arr = shapes[lotateNum];
    const n = arr.length;
    for (let k = 0; k < 4; k++) {
        allArray.push(arr);
        const newArr = new Array(n).fill(0).map(() => new Array(n).fill(0));
        for (let i = 0; i < n; i++) {

            for (let j = 0; j < n; j++) {
                newArr[j][n - i - 1] = arr[i][j];
            }

        }

        arr = newArr;
        //allArray = new Array(4).fill().map(()=>arr);

        //console.log(newArr);

    }
    //console.log(allArray);
    if (arguments.length > 0) {
        return allArray[num];
    } else {
        return allArray;
    }

}

function down(arr1,arr2) {
   
    

}

// 所有形状
const shapes = [
    /* O I L Z S J T */
    // shapeO
    [
        [1, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]

    ],
    //shapeI
    [
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0]
    ],
    //spapeL
    [
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0]

    ],
    //shapeZ
    [
        [1, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]

    ],
    //shapeS
    [
        [0, 1, 1, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    //shapeT
    [
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    //shapeJ
    [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0]

    ]
]


// 所有颜色
const colors = []

// 棋盘状态
const board = [];


