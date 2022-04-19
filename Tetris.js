// comment for updating github
var board = new Array(20); //Boolean 2d array saving if there is a block at (x,y) cords
var score = 0; //player's score throught the round
var isExistNow = false;
var fallingTime = 250;
var type = 0;
var rot = 0; //type of rotation
//cube size = 40X40 - size for canvas
//board size = 800X400 - size for canvas
for (var i = 0; i < 20; i++) {
    board[i] = new Array(10);
}
for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 10; j++) {
        board[i][j] = false;
    }
}
var x1 = 0;
var x2 = 0;
var x3 = 0;
var x4 = 0;
var y1 = 0;
var y2 = 0;
var y3 = 0;
var y4 = 0;
document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37:
            //Left Key pressed;
            leftOrRight(-1);
            break;
        case 38:
            Rotation(type);
            break;
        case 39:
            //Right Key pressed;
            leftOrRight(1);
            break;
    }
}
function Rotation(type) { //piece type
   //The Final Part :)
}
function leftOrRight(changer) {
    if (y1 == 0 || y2 == 0 || y3 == 0 || y4 == 0) {
        return;
    }
    if (board[x1][y1 - 1]) {
        var a = y1 - 1 == y2 && x1 == x2;
        var b = y1 - 1 == y3 && x1 == x3;
        var c = y1 - 1 == y4 && x1 == x4;
        if (!(a || b || c)) {
            return;
        }
    }
    if (board[x2][y2 - 1]) {
        var a = y2 - 1 == y1 && x2 == x1;
        var b = y2 - 1 == y3 && x2 == x3;
        var c = y2 - 1 == y4 && x2 == x4;
        if (!(a || b || c)) {
            return;
        }
    }
    if (board[x3][y3 - 1]) {
        var a = y3 - 1 == y2 && x3 == x2;
        var b = y3 - 1 == y1 && x3 == x1;
        var c = y3 - 1 == y4 && x3 == x4;
        if (!(a || b || c)) {
            return;
        }
    }
    if (board[x4][y4 - 1]) {
        var a = y4 - 1 == y2 && x4 == x2;
        var b = y4 - 1 == y3 && x4 == x3;
        var c = y4 - 1 == y1 && x4 == x1;
        if (!(a || b || c)) {
            return;
        }
    }
    if (x1 == 9 && changer > 0) {
        return;
    }
    if (x2 == 9 && changer > 0) {
        return;
    }
    if (x3 == 9 && changer > 0) {
        return;
    }
    if (x4 == 9 && changer > 0) {
        return;
    }
    if (x1 == 0 && changer < 0) {
        return;
    }
    if (x2 == 0 && changer < 0) {
        return;
    }
    if (x3 == 0 && changer < 0) {
        return;
    }
    if (x4 == 0 && changer < 0) {
        return;
    }
    if (changer == 1) {
        if (board[x1 + 1][y1]) {
            var a = x1 + 1 == x2 && y1 == y2;
            var b = x1 + 1 == x3 && y1 == y3;
            var c = x1 + 1 == x4 && y1 == y4;
            if (!(a || b || c)) {
                return;
            }
        }
        if (board[x2 + 1][y2]) {
            var a = x2 + 1 == x1 && y2 == y1;
            var b = x2 + 1 == x3 && y2 == y3;
            var c = x2 + 1 == x4 && y2 == y4;
            if (!(a || b || c)) {
                return;
            }
        }
        if (board[x3 + 1][y3]) {
            var a = x3 + 1 == x1 && y3 == y1;
            var b = x3 + 1 == x2 && y3 == y2;
            var c = x3 + 1 == x4 && y3 == y4;
            if (!(a || b || c)) {
                return;
            }
        }
        if (board[x4 + 1][y4]) {
            var a = x4 + 1 == x2 && y4 == y2;
            var b = x4 + 1 == x3 && y4 == y3;
            var c = x4 + 1 == x1 && y4 == y1;
            if (!(a || b || c)) {
                return;
            }
        }
    }
    //
    else {
        if (board[x1 - 1][y1]) {
            var a = x1 - 1 == x2 && y1 == y2;
            var b = x1 - 1 == x3 && y1 == y3;
            var c = x1 - 1 == x4 && y1 == y4;
            if (!(a || b || c)) {
                return;
            }
        }
        if (board[x2 - 1][y2]) {
            var a = x2 - 1 == x1 && y2 == y1;
            var b = x2 - 1 == x3 && y2 == y3;
            var c = x2 - 1 == x4 && y2 == y4;
            if (!(a || b || c)) {
                return;
            }
        }
        if (board[x3 - 1][y3]) {
            var a = x3 - 1 == x1 && y3 == y1;
            var b = x3 - 1 == x2 && y3 == y2;
            var c = x3 - 1 == x4 && y3 == y4;
            if (!(a || b || c)) {
                return;
            }
        }
        if (board[x4 - 1][y4]) {
            var a = x4 - 1 == x2 && y4 == y2;
            var b = x4 - 1 == x3 && y4 == y3;
            var c = x4 - 1 == x1 && y4 == y1;
            if (!(a || b || c)) {
                return;
            }
        }
    }
    //
    board[x1][y1] = false;
    board[x2][y2] = false;
    board[x3][y3] = false;
    board[x4][y4] = false;
    x1 += changer;
    x2 += changer;
    x3 += changer;
    x4 += changer;
    board[x1][y1] = true;
    board[x2][y2] = true;
    board[x3][y3] = true;
    board[x4][y4] = true;
}
function CreatePiece() {
    if (!isExistNow) {
        fallingTime = 200;
        let x = Math.floor(Math.random() * 7) + 1;
        type = x;
        switch (x) {
            case 1:
                board[3][17] = true;
                board[4][17] = true;
                board[5][17] = true;
                board[6][17] = true;
                x1 = 3;
                y1 = 17;
                x2 = 4;
                y2 = 17;
                x3 = 5;
                y3 = 17;
                x4 = 6;
                y4 = 17;
                break;
            case 2:
                board[3][17] = true;
                board[3][16] = true;
                board[4][16] = true;
                board[5][16] = true;
                x1 = 3;
                y1 = 17;
                x2 = 3;
                y2 = 16;
                x3 = 4;
                y3 = 16;
                x4 = 5;
                y4 = 16;
                break;
            case 3:
                board[3][16] = true;
                board[4][16] = true;
                board[5][16] = true;
                board[5][17] = true;

                x1 = 3;
                y1 = 16;

                x2 = 4;
                y2 = 16;

                x3 = 5;
                y3 = 16;

                x4 = 5;
                y4 = 17;

                break;
            case 4:
                board[3][16] = true;
                board[3][17] = true;
                board[4][16] = true;
                board[4][17] = true;
                x1 = 3;
                y1 = 16;
                x2 = 3;
                y2 = 17;
                x3 = 4;
                y3 = 16;
                x4 = 4;
                y4 = 17;
                break;
            case 5:
                board[3][16] = true;
                board[4][16] = true;
                board[4][17] = true;
                board[5][17] = true;
                x1 = 3;
                y1 = 16;
                x2 = 4;
                y2 = 16;
                x3 = 4;
                y3 = 17;
                x4 = 5;
                y4 = 17;
                break;
            case 6:
                board[3][16] = true;
                board[4][16] = true;
                board[4][17] = true;
                board[5][16] = true;
                x1 = 3;
                y1 = 16;
                x2 = 4;
                y2 = 16;
                x3 = 4;
                y3 = 17;
                x4 = 5;
                y4 = 16;
                break;
            case 7:
                board[3][17] = true;
                board[4][17] = true;
                board[4][16] = true;
                board[5][16] = true;
                x1 = 3;
                y1 = 17;
                x2 = 4;
                y2 = 17;
                x3 = 4;
                y3 = 16;
                x4 = 5;
                y4 = 16;
                break;
        }
    }
    isExistNow = true;
}
function FallingDown() {
    if (isExistNow) {
        if (y1 == 0 || y2 == 0 || y3 == 0 || y4 == 0) {
            isExistNow = false;
            fallingTime = 200;
            fullRow();
            return;
        }
        if (board[x1][y1 - 1]) {
            if (y1 != y2 + 1 && y1 != y3 + 1 && y1 != y4 + 1) {
                isExistNow = false;
                fullRow();
                return;
            }
        }
        if (board[x2][y2 - 1]) {
            if (y2 != y1 + 1 && y2 != y3 + 1 && y2 != y4 + 1) {
                isExistNow = false;
                fullRow();
                return;
            }
        }
        if (board[x3][y3 - 1]) {
            if (y3 != y1 + 1 && y3 != y2 + 1 && y3 != y4 + 1) {
                isExistNow = false;
                fullRow();
                return;
            }
        }
        if (board[x4][y4 - 1]) {
            if (y4 != y1 + 1 && y4 != y2 + 1 && y4 != y3 + 1) {
                isExistNow = false;
                fullRow();
                return;
            }
        }
        board[x1][y1] = false;
        board[x2][y2] = false;
        board[x3][y3] = false;
        board[x4][y4] = false;
        board[x1][--y1] = true;
        board[x2][--y2] = true;
        board[x3][--y3] = true;
        board[x4][--y4] = true;
    }
}
function drawBoard() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    ctx.rect(0, 0, 400, 800);
    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 25; j++) {
            if (board[i][j]) {
                ctx.rect(i * 40, 760 - j * 40, 40, 40);
                ctx.fillRect(i * 40, 760 - j * 40, 40, 40);
            }
        }
    }
    ctx.stroke();
}
function islost() {
    for (var i = 0; i < 10; i++) {
        if (!board[i][19]) {
            return false;
        }
    }
    alert("Your Score Overall Is : " + score + ". " + "For A New Game, Refresh Your Browser.");
    return true;
}
function fullRow() {
    while (RowCheck()) {
        for (var i = 0; i < 10; i++) {
            for (var h = 1; h < 19; h++) {
                board[i][h - 1] = board[i][h];
            }
            board[19] = false;
        }
        score++;
    }
}
function RowCheck() {
    for (var i = 0; i < 10; i++) {
        if (!board[i][0]) return false;
    }
    return true;
}
function start() {
    setInterval("drawBoard()", 1);
    //setInterval("fullRow()", 1);
    setInterval("CreatePiece()", 1000);
    IntervalID = setInterval("FallingDown()", 200);
}
document.body.onkeyup = function (e) {
    if (e.key == " " ||
        e.code == "Space" ||
        e.keyCode == 32
    ) {
        start();
    }
}