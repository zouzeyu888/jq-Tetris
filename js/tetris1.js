let shape = [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 0]
]
let shapeL = ["88C0", "2E00", "", ""];

function drawShape1(x, y, shape) {
    for(let i = 0; i < 4; i++) {
        let row = shape[i];
        let binaryStr = parseInt(row, 16).toString(2);
        if(binaryStr.length < 4) {
            binaryStr = Array(4 - binaryStr.length).fill(0).join('') + binaryStr;
        }
        for(let j = 0; j < 4; j++) {
            if(binaryStr[j] == 1) {
                drawSquare(x + i, y + j, 'red');
            }
        }
    }
}
function drawShape(x, y, shape) {
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            if(shape[i][j] == 1) {
                drawSquare(x + i, y + j, 'red');
            }
        }
    }
}

function eraseShape(x, y, shape) {
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            if(shape[i][j] == 1) {
                drawSquare(x + i, y + j, 'orange');
            }
        }
    }
}



