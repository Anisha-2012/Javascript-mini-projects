// Variables and Constants
let inputDir = {x:0, y:0};
const foodSound = new Audio('Others/food.aac');
const gameoverSound = new Audio('Others/gameover.mpeg');
const moveSound = new Audio('Others/direction.aac');
const musicSound = new Audio('Others/bgmusic.mpeg');
let speed = 6;
let lastPaintTime =0;
let score =0;
let snakeArr = [
    {x: 12, y: 13} 
]
let food = {x:8, y:7};

// Functions
function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime)
    if((ctime-lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}
//When snake collides
function isCollide(snake) {
    // If it bumps into itself 
    for (let i = 1; i < snakeArr.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }
    // If it bumps into the wall
    if(snake[0].x >= 18 || snake[0].x <=0 || snake[0].y >= 15 || snake[0].y <=0){
        return true;
    }
        
    return false;
}

function gameEngine(){
    // Updating the snake array
    if(isCollide(snakeArr)){
        gameoverSound.play();
        musicSound.pause();
        inputDir = {x:0,y:0};
        alert("Game Over, Press any key to play again!!");
        snakeArr = [{x: 12, y: 13}];
        musicSound.play();
        score =0;
    }
    let hiscore = localStorage.getItem("hiscore");
if(hiscore === null){
    hiscoreval = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
}
else{
    hiscoreval = JSON.parse(hiscore);
    hiscoreBox.innerHTML = "High Score: " + hiscore;
}
    //When snake eats food
    if(snakeArr[0].x === food.x && snakeArr[0].y === food.y){
        foodSound.play();
        score+=1;
        if(score>hiscoreval){
            hiscoreval = score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
            hiscoreBox.innerHTML = "High Score: " + hiscoreval;
        }
        scoreBox.innerHTML="Score: " + score;
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        let a = 4;
        let b =14;
        food = {x: Math.round(a +(b-a)*Math.random()),y: Math.round(a + (b-a)*Math.random())
        }
    }
    //Moving of snake
    for(let i = snakeArr.length -2; i>=0;i--){
        snakeArr[i+1] = {...snakeArr[i]};
    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    // Displaying snake
    board.innerHTML = "";
    snakeArr.forEach((e,index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index === 0){
            snakeElement.classList.add('head')
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    })
    // Displaying food
        foodElement = document.createElement('div');
        foodElement.style.gridRowStart =food.y;
        foodElement.style.gridColumnStart =food.x;
        foodElement.classList.add('food')
        board.appendChild(foodElement);

}
// Logic and Main code


window.requestAnimationFrame(main);
window.addEventListener("keydown", e=>{
    inputDir={x:0,y:1} //starting the game
    musicSound.play();
    moveSound.play();
    switch(e.key){
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;

        default:
            break;
    }
})
