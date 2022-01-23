function gameInit() {
    if( typeof document !== "undefined") {
        return (function() {
            _gameInit()
        })()
    }
}

function _gameInit() {
    let _gameOver = false;
	let canvas = document.getElementById("myCanvas");
	let ctx = canvas.getContext("2d");
    let width = 13;
    let height = 9;

    let snakeHeadX = 0;
    let snakeHeadY = 0;
    let direction = "ArrowRight";
    let snakeLength = 3;
    let snake = [];
    let snakeTail = [];
    let appleX;
    let appleY;
    const appleFill = "#00ff";
    const emptyFill = "#ddd";
    const snakeFill = "#000";
    let interval = 150;

    function drawCell(x, y, fill) {
        ctx.beginPath();
        ctx.rect(35 * x + 20,35 * y + 20,25,25);
        ctx.fillStyle = fill;
        ctx.fill();
        ctx.closePath();
    }
    function drawApple() {
        appleX = Math.floor(Math.random() * width);
        appleY = Math.floor(Math.random() * height);
        snake.forEach((snakeCell) => {
            if(snakeCell[0] == appleX && snakeCell[1] == appleY) {
                drawApple();
            }
        });
        drawCell(appleX, appleY, appleFill)
    }
    function drawBoard() {
        for (let j = 0; j < height; j++) {
            for (let i = 0; i < width; i++) {
                drawCell(i, j, emptyFill)
            }
        }
    }
    function init() {
        drawBoard();
        drawApple();
    }
    init();

    function drawGame() {
        moveSnake();

        if(isSnakeOnBoard() && !isSnakeBitingItself()) {
            drawCell(snakeHeadX, snakeHeadY, snakeFill)
            if (snake.length > snakeLength) {
                snakeTail = snake.shift(); 
                drawCell(snakeTail[0], snakeTail[1], emptyFill)
            }
            if (snakeHeadX == appleX && snakeHeadY == appleY) {
                snakeLength++;
                drawApple();
            }
        }
    }

    const directions = {
        "ArrowUp": [0,-1],
        "ArrowDown": [0,1],
        "ArrowLeft": [-1,0],
        "ArrowRight": [1,0]
    }
    function setDirection(e) {
        if (e.code.startsWith("Arrow")) {
            direction = e.code;
        }
    }
    function moveSnake() {
		snake.push([snakeHeadX, snakeHeadY]);
        snakeHeadX = snakeHeadX + directions[direction][0];
        snakeHeadY = snakeHeadY + directions[direction][1];
    }
    function isSnakeOnBoard() {
        if (
            snakeHeadX < 0 ||
            snakeHeadX > width - 1 ||
            snakeHeadY < 0 ||
            snakeHeadY > height - 1
        ) {
            gameOver("The Snake went off the board!");
            return false;
        }
        return true
    }
    function isSnakeBitingItself() {
        snake.forEach((snakeCell) => {
            
            if (snakeCell[0] == snakeHeadX && snakeCell[1] == snakeHeadY) {
                gameOver("The Snake bit itself!");
                return true;
            }
        });
        return false;
    }
    function gameOver(issue) {
        if (_gameOver !== true) {
            clearInterval(drawInterval);
            _gameOver = true;
            alert('GAME OVER: ' + issue);
        }
    }
    let drawInterval = setInterval(drawGame, interval);
    document.addEventListener('keyup', setDirection);
}
export default gameInit;