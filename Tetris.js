// comment for updating github
var board = new Array(20); //Boolean 2d array saving if there is a block at (x,y) cords
var score = 0; //player's score throught the round
var isExistNow = false;
var fallingTime = 250;
var type = 0;
var rot = 0; //type of rotation
var turn = 0;
var col = 0;
var tbl = document.getElementById("scoreBoard");
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
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var x1 = 0;
var x2 = 0;
var x3 = 0;
var x4 = 0;
var y1 = 0;
var y2 = 0;
var y3 = 0;
var y4 = 0;
let e1,e2,e3,e4;
document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 17:
            while (FallingDown()) {}
            break;
        case 37:
            //Left Key pressed;
            leftOrRight(-1);
            break;
        case 38:
            //Up Key pressed
            Rotation(type);
            break;
        case 39:
            //Right Key pressed;
            leftOrRight(1);
            break;
        case 40:
            //Down Key pressed
            FallingDown();
            break;
    }
}
function Rotation(type) { //piece type 
    switch (type) {
        case 1:
            if (rot == 0) {
                if (y4 < 18) {
                    if (!board[x4][y4 + 1] && !board[x4][y4 + 2] && !board[x4][y4 + 3]) {
                        Swap(x4, x4, x4, x4, y4 + 3, y4 + 2, y4 + 1, y4);
                    }
                }
            }
            else {
                if (x4 > 3) {
                    if (!board[x4 - 1][y4] && !board[x4 - 2][y4] && !board[x4 - 3][y4]) {
                        Swap(x4-3,x4-2,x4-1,x4,y4,y4,y4,y4);
                    }
                }
            }
            rot = 1 - rot;
            break;
        case 2:
            if (rot == 0) {
                if (x4 < 9 && y4 < 17 && !board[x4][y4 + 1] && !board[x4][y4 + 2] && !board[x4 + 1][y4 + 2]) {
                    Swap(x4 + 1, x4, x4, x4, y4 + 2, y4 + 2, y4 + 1, y4);
                }
            }
            else {
                if (x4 > 1 && y4 < 18 && !board[x4 - 2][y4 + 1] && !board[x4 - 2][y4] && !board[x4 - 1][y4]) {
                    Swap(x4 - 2, x4 - 2, x4 - 1, x4, y4 + 1, y4, y4, y4);
                }
            }
            rot = 1 - rot;
            break;
        case 3:
            if (rot == 0) {
                if (x1 > 0 && y1 < 17 && !board[x1][y1 + 1] && !board[x1][y1 + 2] && !board[x1 - 1][y1 + 2]) {
                    Swap(x1,x1,x1,x1-1,y1,y1+1,y1+2,y1+2);
                }
            }
            else {
                if (x1 < 8 && y1 < 18 && !board[x1 + 1][y1] && !board[x1 + 2][y1] && !board[x1 + 2][y1 + 1]) {
                    Swap(x1, x1 + 1, x1 + 2, x1 + 2, y1, y1, y1, y1 + 1);
                }
            }
            rot = 1 - rot;
            break;
        case 4:
            rot = 1 - rot;
            break;
        case 5:
            if (rot == 0) {
                if (x1 > 0 && y1 < 17 && !board[x1][y1 + 1] && !board[x1 - 1][y1 + 1] && !board[x1 - 1][y1 + 2]) {
                    Swap(x1, x1, x1 - 1, x1 - 1, y1, y1 + 1, y1 + 1, y1 + 2);
                }
            }
            else {
                if (x1 < 8 && !board[x1 + 1][y1] && !board[x1 + 1][y1 + 1] && !board[x1 + 2][y1 + 1]) {
                    Swap(x1, x1 + 1, x1 + 1, x1 + 2, y1, y1, y1 + 1, y1 + 1);
                }
            }
            rot = 1 - rot;
            break;

        case 6:
            switch (rot) { //{x3,y3} <- center
                case 0:
                    if (y3 < 19 && !board[x3 - 1][y3] && !board[x3 - 1][y3 + 1]) {
                        Swap(x3 - 1, x3 - 1, x3, x3 - 1, y3 + 1, y3, y3, y3 - 1);
                        rot++;
                    }
                    break;
                case 1:
                    if (x3 < 9 && y3 < 19 && !board[x3][y3 + 1] && !board[x3 + 1][y3 + 1]) {
                        Swap(x3 + 1, x3, x3, x3 - 1, y3 + 1, y3 + 1, y3, y3 + 1);
                        rot++;
                    }
                    break;
                case 2:
                    if (x3 > 0 && !board[x3 + 1][y3] && !board[x3 + 1][y3 - 1]) {
                        Swap(x3 + 1, x3 + 1, x3, x3 + 1, y3 - 1, y3, y3, y3 + 1);
                        rot++;
                    }
                    break;
                case 3:
                    if (x3 > 0 && !board[x3][y3 - 1] && !board[x3 - 1][y3 - 1]) {
                        Swap(x3 - 1, x3, x3, x3 + 1, y3 - 1, y3 - 1, y3, y3 - 1);
                        rot = 0;
                    }
                    break;
            }
            break;
        case 7:
            if (rot == 0) {
                if (x4 < 9 && y4 < 18 && !board[x4][y4 + 1] && !board[x4 + 1][y4 + 1] && !board[x4 + 1][y4 + 2]) {
                    Swap(x4, x4 + 1, x4 + 1, x4, y4 + 1, y4 + 1, y4 + 2, y4);
                }
            }
            else {
                if (x4 > 1 && !board[x4 - 1][y4] && !board[x4 - 1][y4 + 1] && !board[x4 - 2][y4 + 1]) {
                    Swap(x4 - 1, x4 - 1, x4 - 2, x4, y4, y4 + 1, y4 + 1, y4);
                }
            }
            rot = 1 - rot;
            break;
    }
}
function leftOrRight(changer) {
    if (!isExistNow) { return;}
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


    var mini = Math.min(y1, y2, y3, y4);
    var flag = false;
    if (mini == y1)
        if (y1 > 0 && board[x1][y1 - 1]) {
            if (board[x1 + changer][y1 - 1]) { flag = true; }
        }
        else {
            flag = true;
        }

    if (mini == y2) {
        if (y2 > 0 && board[x2][y2 - 1]) {
            if (board[x2 + changer][y2 - 1]) { flag = true; }
        }
        else {
            flag = true;
        }
    }
    if (mini == y3) {
        if (y3 > 0 && board[x3][y3 - 1]) {
            if (board[x3 + changer][y3 - 1]) { flag = true; }
        }
        else {
            flag = true;
        }
    }
    if (mini == y4) {
        if (y4 > 0 && board[x4][y4 - 1]) {
            if (board[x4 + changer][y4 - 1]) { flag = true; }
        }
        else {
            flag = true;
        }
    }
    if (!flag) {
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
CordXChange(changer, changer, changer, changer);
}
function CreatePiece() {
    if (!isExistNow) {
        col %= 7;   
        col++;
        turn++;
        rot = 0;
        fallingTime = 200;
        let x = Math.floor(Math.random() * 7) + 1;
        type = x;
        switch (x) {
            case 1:
                x1 = 3;
                y1 = 19;
                x2 = 4;
                y2 = 19;
                x3 = 5;
                y3 = 19;
                x4 = 6;
                y4 = 19;
                if (IsLost()) { gameOver(); }
                CordXChange(0,0,0,0);
                break;
            case 2:
                x1 = 3;
                y1 = 19;
                x2 = 3;
                y2 = 18;
                x3 = 4;
                y3 = 18;
                x4 = 5;
                y4 = 18;
                if (IsLost()) { gameOver(); }
                CordXChange(0, 0, 0, 0);
                break;
            case 3:
                x1 = 3;
                y1 = 18;
                x2 = 4;
                y2 = 18;
                x3 = 5;
                y3 = 18;
                x4 = 5;
                y4 = 19;
                if (IsLost()) { gameOver(); }
                CordXChange(0, 0, 0, 0);
                break;
            case 4:
                x1 = 3;
                y1 = 18;
                x2 = 3;
                y2 = 19;
                x3 = 4;
                y3 = 18;
                x4 = 4;
                y4 = 19;
                if (IsLost()) { gameOver(); }
                CordXChange(0, 0, 0, 0);
                break;
            case 5:
                x1 = 3;
                y1 = 18;
                x2 = 4;
                y2 = 18;
                x3 = 4;
                y3 = 19;
                x4 = 5;
                y4 = 19;
                if (IsLost()) { gameOver(); }
                CordXChange(0, 0, 0, 0);
                break;
            case 6:
                x1 = 3;
                y1 = 18;
                x2 = 4;
                y2 = 18;
                x3 = 4;
                y3 = 19;
                x4 = 5;
                y4 = 18;
                if (IsLost()) { gameOver(); }
                CordXChange(0, 0, 0, 0);
                break;
            case 7:
                x1 = 3;
                y1 = 19;
                x2 = 4;
                y2 = 19;
                x3 = 4;
                y3 = 18;
                x4 = 5;
                y4 = 18;
                if (IsLost()) { gameOver(); }
                CordXChange(0, 0, 0, 0);
                break;
        }
    }
    isExistNow = true;
}
function FallingDown() {
    if (isExistNow) {
        if (y1 == 0 || y2 == 0 || y3 == 0 || y4 == 0) {
            isExistNow = false;
            fullRow();
            return false;
        }
        if (board[x1][y1 - 1]) {
            var a = y1 == y2 + 1 && x1 == x2;
            var b = y1 == y3 + 1 && x1 == x3;
            var c = y1 == y4 + 1 && x1 == x4;
            if (!(a || b || c)) {
                isExistNow = false;
                fullRow();
                return false;
            }
        }
        if (board[x2][y2 - 1]) {
            var a = y2 == y1 + 1 && x2 == x1;
            var b = y2 == y3 + 1 && x2 == x3;
            var c = y2 == y4 + 1 && x2 == x4;
            if (!(a || b || c)) {
                isExistNow = false;
                fullRow();
                return false;
            }
        }
        if (board[x3][y3 - 1]) {
            var a = y3 == y1 + 1 && x3 == x1;
            var b = y3 == y2 + 1 && x3 == x2;
            var c = y3 == y4 + 1 && x3 == x4;
            if (!(a || b || c)) {
                isExistNow = false;
                fullRow();
                return false;
            }
        }
        if (board[x4][y4 - 1]) {
            var a = y4 == y1 + 1 && x4 == x1;
            var b = y4 == y3 + 1 && x4 == x3;
            var c = y4 == y2 + 1 && x4 == x2;
            if (!(a || b || c)) {
                isExistNow = false;
                fullRow();
                return false;
            }
        }
        CordYChange(-1, -1, -1, -1);
        return true;
    }
}
function drawBoard() {
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    ctx.rect(0, 0, 400, 800);
    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 25; j++) {
            if (board[i][j]) {
                switch (col) {
                    case 1:
                        ctx.fillStyle = "darkblue";
                        break;
                    case 2:
                        ctx.fillStyle = "yellow";
                        break;
                    case 3:
                        ctx.fillStyle = "deeppink";
                        break;
                    case 4:
                        ctx.fillStyle = "crimson";
                        break;
                    case 5:
                        ctx.fillStyle = "orange";
                        break;
                    case 6:
                        ctx.fillStyle = "greenyellow";
                        break;
                    case 7:
                        ctx.fillStyle = "snow";
                        break;
                }
                //col++; col %= 7; if (col == 0) { col = 1;}
                //ctx.rect(i * 40, 760 - j * 40, 40, 40);
                //ctx.fillRect(i * 40, 760 - j * 40, 40, 40);
                ctx.rect(i * 40, 760 - j * 40, 40, 40);
                ctx.fillRect(i * 40, 760 - j * 40, 40, 40);
            }
        }
    }
    ctx.stroke();
    tbl.innerHTML = "Your Score Is : " + score;
}
function fullRow() {
    for (var j = 0; j < 20; j++) {
        while (RowCheck(j)) {
            for (var i = 0; i < 10; i++) {
                for (var h = j; h < 19; h++) {
                    board[i][h] = board[i][h+1];
                }
                board[19] = false;
            }
            score++;
        }
    }
}
function RowCheck(j) {
    for (var i = 0; i < 10; i++) {
        if (!board[i][j]) return false;
    }
    return true;
}
function start() {
    e1 = setInterval("drawBoard()", 1);
    e2 = setInterval("CreatePiece()", 1000);
    e3 = setInterval("FallingDown()", 300);
    //e4 = setInterval("islost()", 1);
    document.getElementById("woosh").remove();
    document.getElementById("newGame").innerHTML = "";
    tbl.style.border = "1px solid #96D4D4";
    tbl.innerHTML = "Your Score Is : " + score;
    tbl.style.color = "48px snow"; ;//= "32px snow";
}
function gameOver() {
    clearInterval(e1);
    clearInterval(e2);
    clearInterval(e3);
    clearInterval(e4);
    //gameOver();
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.font = "24px Trebuchet MS";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("Game Over - Your Score Is : " + score, c.width / 2, c.height / 2);
    var tmp = document.getElementById("newGame");
    tmp.innerHTML = "<a href='Tetris.html'>For A New Game, Press Here</a>";;
    document.getElementById("scoreBoard").remove();

}
function Swap(a1, a2, a3, a4, b1, b2, b3, b4) {
    board[x1][y1] = false;
    board[x2][y2] = false;
    board[x3][y3] = false;
    board[x4][y4] = false;
    x1 = a1; x2 = a2; x3 = a3; x4 = a4;
    y1 = b1; y2 = b2; y3 = b3; y4 = b4;
    board[x1][y1] = true;
    board[x2][y2] = true;
    board[x3][y3] = true;
    board[x4][y4] = true;
}
function CordXChange(a1,a2,a3,a4) {
    board[x1][y1] = false;
    board[x2][y2] = false;
    board[x3][y3] = false;
    board[x4][y4] = false;
    x1 += a1;
    x2 += a2;
    x3 += a3;
    x4 += a4;
    board[x1][y1] = true;
    board[x2][y2] = true;
    board[x3][y3] = true;
    board[x4][y4] = true;
}
function CordYChange(a1, a2, a3, a4) {
    board[x1][y1] = false;
    board[x2][y2] = false;
    board[x3][y3] = false;
    board[x4][y4] = false;
    y1 += a1;
    y2 += a2;
    y3 += a3;
    y4 += a4;
    board[x1][y1] = true;
    board[x2][y2] = true;
    board[x3][y3] = true;
    board[x4][y4] = true;
}
function IsLost() {
    if (board[x1][y1] || board[x2][y2] || board[x3][y3] || board[x4][y4]) { return true; }
    return false;
}
document.body.onkeyup = function (e) {
    if (e.key == " " ||
        e.code == "Space" ||
        e.keyCode == 32
    ) {
        start();
    }
}