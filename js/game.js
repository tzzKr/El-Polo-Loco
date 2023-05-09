let canvas;
let world;
let keyboard = new Keyboard();
let showStartScreen = true;
let ctx;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    world = new World(canvas, keyboard)
    
    gameLoop();

}


window.addEventListener("keydown", (e) => {
    if (e.code == "ArrowRight") {
        keyboard.RIGHT = true;
    }
    if (e.code == "KeyK") {
        keyboard.K = true;
    }

    if (e.code == "ArrowLeft") {
        keyboard.LEFT = true;
    }

    if (e.code == "ArrowUp") {
        keyboard.UP = true;
    }

    if (e.code == "ArrowDown") {
        keyboard.DOWN = true;
    }

    if (e.code == "Space") {
        keyboard.SPACE = true;
    }

})


window.addEventListener("keyup", (e) => {
    if (e.code == "ArrowRight") {
        keyboard.RIGHT = false;
    }

    if (e.code == "KeyK") {
        keyboard.K = false;;
    }

    if (e.code == "ArrowLeft") {
        keyboard.LEFT = false;
    }

    if (e.code == "ArrowUp") {
        keyboard.UP = false;
    }

    if (e.code == "ArrowDown") {
        keyboard.DOWN = false;
    }

    if (e.code == "Space") {
        keyboard.SPACE = false;
    }

})



function startGame() {
    showStartScreen = false;
}



function gameLoop() {
    console.log('showStartScreen :>> ', showStartScreen);
    if (showStartScreen) {
        document.getElementById('startScreen').style.display = 'flex';
    } else {
        document.getElementById('startScreen').style.display = 'none';
    }
    requestAnimationFrame(gameLoop);
}
