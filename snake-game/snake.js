/**
 * 常数：1
 * 指数：log(n)
 * 线性：n
 * 次方：n^2， n^3,...
 * 幂：2^n, 3^n
 * n^n
 */

// shift unshift

let arr = [1, 2, 3, 4, 5, 6, 7];

let scene = null;
let btn = null;
let score = null;
let aiStart = null;
let blocks = [];
let snake = [];

const GAME_STATUS = {
    NOT_START: 0,
    PLAYING: 1,
    FINISH: 2,
};

let gameStatus = GAME_STATUS.NOT_START;

const row_num = 30; // 行数
const col_num = 30; // 列数
const snake_init_pos = { x: 12, y: 12 }; // 蛇的初始位置
const foodInitPos = { x: 0, y: 0 };
const food = { x: "", y: "" };
let isEat = false;
let currentAnchor = "";
let currentKey = "";
let level = 0;
let snakeSpeed = 5; // 每秒刷新次数
let timer = null;

let grid = new Array(row_num * col_num).fill(true);
// console.log(grid)

let aiFlag = false;
let aiTimer = null;


let target = {x: 0, y: 0};
function startAi2() {
    refreshFood();
    startGame();
    setInterval(() => {
        
    }, 1);
}


function startAi() {
    refreshFood();
    startGame();
    console.log('超级AI,启动!')
    aiTimer = setInterval(() => {
        if (gameStatus === GAME_STATUS.FINISH) {
            clearInterval(aiTimer);
            console.log("游戏结束!!!!!!");
            return;
        }
        const { x, y } = snake[0];
        const fx = food.x;
        const fy = food.y;
        if (x > fx) {
            console.log('判断食物在上方,尝试往上走')
            tryGoUp();
            return;
        }
        if (x < fx) {
            console.log('判断食物在下方,尝试往下走')
            tryGoDown();
            return;
        }
        if (y > fy) {
            console.log('判断食物在左方,尝试往左走')
            tryGoLeft();
            return;
        }
        if (y < fy) {
            console.log('判断食物在右方,尝试往右走')
            tryGoRight();
            return;
        }
        console.log('------');
    }, 1);
}

function checkIsInSnake(nx, ny) {
    return snake.some((b, i) => {
        if (i === 0) return false;
        if (nx === b.x && ny === b.y) {
            return true;
        } else {
            return false;
        }
    });
}

function tryGoUp() {
    const { x, y } = snake[0];
    const fx = food.x;
    const fy = food.y;
    if (currentAnchor == "up") {
        console.log('尝试往上，此时方向也为上,则不处理')
        let newX = x - 1;
        let newY = y;
        if (checkIsInSnake(newX, newY) || newX < 0 || newX > col_num || newY < 0 || newY > row_num) {
            console.log('判断直接往上会有危险,尝试往左')
            newX = x;
            newY = y - 1;
            if (newX < 0 || newX > col_num || newY < 0 || newY > row_num) {
                console.log('判断往左会有危险,改为往右')
                tryGoRight();
                return;
            } else {
                if (checkIsInSnake(newX, newY)) {
                    console.log('判断往左会有危险,改为往右')
                    tryGoRight();
                    return;
                } else {
                    tryGoLeft();
                    return;
                }
            }
        }
        return;
    }
    if (currentAnchor == "up" || currentAnchor == "down") {
        if (y > fy) {
            tryGoLeft();
            return;
        } else if (y < fy) {
            tryGoRight();
            return;
        } else {
            let newX = x;
            let newY = y - 1;
            if (newX < 0 || newX > col_num || newY < 0 || newY > row_num) {
                tryGoRight();
                return;
            } else {
                if (checkIsInSnake(newX, newY)) {
                    tryGoRight();
                    return;
                } else {
                    tryGoLeft();
                    return;
                }
            }
        }
    }
    let newX = x - 1;
    let newY = y;
    if (checkIsInSnake(newX, newY)) {
        goDown();
    } else {
        goUp();
    }
}

function tryGoDown() {
    const { x, y } = snake[0];
    const fx = food.x;
    const fy = food.y;
    if (currentAnchor == "down") {
        let newX = x + 1;
        let newY = y;
        if (checkIsInSnake(newX, newY) || newX < 0 || newX > col_num || newY < 0 || newY > row_num) {
            newX = x;
            newY = y - 1;
            if (newX < 0 || newX > col_num || newY < 0 || newY > row_num) {
                tryGoRight();
                return;
            } else {
                if (checkIsInSnake(newX, newY)) {
                    tryGoRight();
                    return;
                } else {
                    tryGoLeft();
                    return;
                }
            }
        }
        return;
    }
    if (currentAnchor == "up" || currentAnchor == "down") {
        if (y > fy) {
            tryGoLeft();
            return;
        } else if (y < fy) {
            tryGoRight();
            return;
        } else {
            let newX = x;
            let newY = y - 1;
            if (newX < 0 || newX > col_num || newY < 0 || newY > row_num) {
                tryGoRight();
                return;
            } else {
                if (checkIsInSnake(newX, newY)) {
                    tryGoRight();
                    return;
                } else {
                    tryGoLeft();
                    return;
                }
            }
        }
    }
    let newX = x + 1;
    let newY = y;
    if (checkIsInSnake(newX, newY)) {
        goUp();
    } else {
        goDown();
    }
}

function tryGoRight() {
    const { x, y } = snake[0];
    const fx = food.x;
    const fy = food.y;
    if (currentAnchor == "right") {
        let newX = x;
        let newY = y + 1;
        if (checkIsInSnake(newX, newY)  || newX < 0 || newX > col_num || newY < 0 || newY > row_num) {
            newX = x - 1;
            newY = y;
            if (newX < 0 || newX > col_num || newY < 0 || newY > row_num) {
                tryGoUp();
                return;
            } else {
                if (checkIsInSnake(newX, newY)) {
                    tryGoUp();
                    return;
                } else {
                    tryGoDown();
                    return;
                }
            }
        }
        return;
    }
    if (currentAnchor == "left" || currentAnchor == "right") {
        if (x > fx) {
            tryGoDown();
            return;
        } else if (x < fx) {
            tryGoUp();
            return;
        } else {
            let newX = x - 1;
            let newY = y;
            if (newX < 0 || newX > col_num || newY < 0 || newY > row_num) {
                tryGoUp();
                return;
            } else {
                if (checkIsInSnake(newX, newY)) {
                    tryGoUp();
                    return;
                } else {
                    tryGoDown();
                    return;
                }
            }
        }
    }
    let newX = x;
    let newY = y + 1;
    if (checkIsInSnake(newX, newY)) {
        goLeft();
    } else {
        goRight();
    }
}

function tryGoLeft() {
    const { x, y } = snake[0];
    const fx = food.x;
    const fy = food.y;
    if (currentAnchor == "left") {
        let newX = x;
        let newY = y - 1;
        if (checkIsInSnake(newX, newY)  || newX < 0 || newX > col_num || newY < 0 || newY > row_num) {
            newX = x - 1;
            newY = y;
            if (newX < 0 || newX > col_num || newY < 0 || newY > row_num) {
                tryGoUp();
                return;
            } else {
                if (checkIsInSnake(newX, newY)) {
                    tryGoUp();
                    return;
                } else {
                    tryGoDown();
                    return;
                }
            }
        }
        return;
    }
    if (currentAnchor == "left" || currentAnchor == "right") {
        if (x > fx) {
            tryGoDown();
            return;
        } else if (x < fx) {
            tryGoUp();
            return;
        } else {
            let newX = x - 1;
            let newY = y;
            if (newX < 0 || newX > col_num || newY < 0 || newY > row_num) {
                tryGoUp();
                return;
            } else {
                if (checkIsInSnake(newX, newY)) {
                    tryGoUp();
                    return;
                } else {
                    tryGoDown();
                    return;
                }
            }
        }
    }
    let newX = x;
    let newY = y - 1;
    if (checkIsInSnake(newX, newY)) {
        goRight();
    } else {
        goLeft();
    }
}

function celarGrid() {
    grid = new Array(row_num * col_num).fill(true);
}

function useGrid(x, y) {
    grid[x * row_num + y] = false;
}

function refreshFood() {
    let canUseGrid = grid
        .map((g, index) => {
            let x = parseInt(index / row_num);
            let y = index % col_num;
            return { x, y, g };
        })
        .filter((item) => item.g);
    let len = canUseGrid.length;
    let i = Math.floor(Math.random() * len);
    food.x = canUseGrid[i].x;
    food.y = canUseGrid[i].y;
}

function drawFood() {
    setBlockColor(food.x, food.y, "yellow");
}

function updateScore() {
    let len = snake.length - 1;
    if (len / 10 > level) {
        level++;
        clearInterval(timer);
        setInterval(() => {
            tick();
        }, 1000 / (snakeSpeed + level / 5));
    }
    score.innerHTML = `
        <h1>${len * 10}</h1>
    `;
}

window.onload = function () {
    initElements();
    initScene();
    initSnake();
    initEvent();
    // initFood();
};

// ArrowDown 40
// ArrowUp 38
// ArrowLeft 37
// ArrowRight 39
// event.keyCode

function initEvent() {
    updateScore();
    aiStart.onclick = startAi;
    window.onkeydown = function (event) {
        if (gameStatus === GAME_STATUS.NOT_START) {
            startGame();
            refreshFood();
        }
        switch (event.code) {
            case "KeyW":
            case "ArrowUp":
                goUp();
                break;
            case "KeyD":
            case "ArrowRight":
                goRight();
                break;
            case "KeyS":
            case "ArrowDown":
                goDown();
                break;
            case "KeyA":
            case "ArrowLeft":
                goLeft();
                break;
            default:
                break;
        }
    };
}

function tick(isKey) {
    if (tick.key && !isKey) {
        tick.key = isKey;
        return;
    }

    tick.key = isKey;
    currentAnchor = currentKey;

    if (gameStatus === GAME_STATUS.FINISH) {
        // alert("游戏结束");
        clearInterval(timer);
        return;
    }
    let { x, y } = snake[0];
    // console.log(`蛇头[${x},${y}], 方向:${currentAnchor}`)
    switch (currentAnchor) {
        case "up":
            x--;
            break;
        case "down":
            x++;

            break;
        case "left":
            y--;
            break;
        case "right":
            y++;
            break;
    }
    snake = [{ x, y }, ...snake];
    checkIsEat();
    if (isEat) {
        isEat = false;
    } else {
        snake.pop();
    }
    // console.log(isEat, JSON.stringify(snake));
    checkFinish();
    if (gameStatus !== GAME_STATUS.FINISH) {
        clearScene();
        drawSnake();
        drawFood();
    }
    updateScore();
}

function startGame() {
    // currentAnchor = "right";
    currentKey = "right";
    gameStatus = GAME_STATUS.PLAYING;
    timer = setInterval(() => {
        tick(true);
    }, 1000 / snakeSpeed);
}

function checkFinish() {
    let { x, y } = snake[0];
    let flag = x >= row_num || y >= col_num || x < 0 || y < 0;
    flag =
        flag ||
        snake.some((block, index) => {
            if (index == 0) {
                return false;
            } else {
                return block.x === x && block.y === y;
            }
        });
    if (flag) {
        gameStatus = GAME_STATUS.FINISH;
    }
}

function checkIsEat() {
    if (snake[0].x === food.x && snake[0].y === food.y) {
        isEat = true;
        refreshFood();
    }
}

function goUp() {
    if (currentAnchor === "up" || currentAnchor === "down") return;
    currentKey = "up";
    tick(true);
    console.log("上");
}

function goDown() {
    if (currentAnchor === "up" || currentAnchor === "down") return;
    currentKey = "down";
    tick(true);
    console.log("下");
}

function goRight() {
    if (currentAnchor === "right" || currentAnchor === "left") return;
    currentKey = "right";
    tick(true);
    console.log("右");
}

function goLeft() {
    if (currentAnchor === "right" || currentAnchor === "left") return;
    currentKey = "left";
    tick(true);
    console.log("左");
}

/**
 * 统一获取页面上常用的DOM元素
 */
function initElements() {
    scene = document.getElementById("scene");
    score = document.getElementById("score");
    aiStart = document.getElementById("ai-start");
}

/**
 * 初始化蛇的相关内容
 */
function initSnake() {
    snake.push(snake_init_pos);
    drawSnake();
}

/**
 * 绘制蛇
 */
function drawSnake() {
    celarGrid();
    let head = snake[0];
    for (let i = 1; i < snake.length; i++) {
        useGrid(snake[i].x, snake[i].y);
        setBlockColor(snake[i].x, snake[i].y, "blue");
    }
    setBlockColor(head.x, head.y, "red");
    useGrid(head.x, head.y);
}

function clearScene() {
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].style.backgroundColor = "#fff";
    }
}

function setBlockColor(x, y, color = "#000") {
    getBlock(x, y).style.backgroundColor = color;
}

function getBlock(x, y) {
    return blocks[x * row_num + y];
}

/**
 * 初始化游戏场景
 */
function initScene() {
    let html = "";
    for (let i = 0; i < row_num; i++) {
        html += `<div class="row">`;
        for (let j = 0; j < col_num; j++) {
            html += `<div class="block"></div>`;
        }
        html += `</div>`;
    }
    scene.innerHTML = html;
    blocks = document.getElementsByClassName("block");
}
//获取所有坐标

//随机食物位置
// function getFoodPostion() {
// let  = getDiffrent(blocks, snake);
// let i = Math.floor(Math.random() * arrLength);
// let randomPos = blocks[i];
// return randomPos;
// }
//踢出蛇所在位置后数组长度
// function getDiffrent(array1, array2) {
//     let arr = [array1, ...array2];
//     let result = [];
//     arr.forEach((item) => {
//         if (arr.indexOf(item) == arr.lastIndexOf(item)) {
//             result.push(item);
//         }
//         return result;
//     });
// }

//初始化食物位置
// function initFood() {
//     let initPos = getFoodPostion();
//     food.push(foodInitPos);
//     drawFood();
// }

// //绘制食物
// function drawFood() {
//     let initFood = food[0];
//     setBlockColor(initFood.x, initFood.y, "black");
// }
