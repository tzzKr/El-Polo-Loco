let canvas;
let world;
let keyboard = new Keyboard();
let showStartScreen = true;
let ctx;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    world = new World(canvas, keyboard)
    // drawStartScreen();

    // canvas.addEventListener('click', () => {
    //     console.log('showStartScreen :>> ', showStartScreen);
    //     if (showStartScreen) {
    //         startGame();
    //     }
    // });
    // gameLoop();

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

// function drawStartScreen() {
//     ctx.fillStyle = 'black';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     ctx.fillStyle = 'white';
//     ctx.font = '48px sans-serif';
//     ctx.textAlign = 'center';
//     ctx.fillText('Startbildschirm', canvas.width / 2, canvas.height / 2 - 50);

//     ctx.font = '24px sans-serif';
//     ctx.fillText('Klicken, um zu starten', canvas.width / 2, canvas.height / 2 + 50);
// }

// function startGame() {
//     showStartScreen = false;
// }



// function gameLoop() {
//     if (showStartScreen) {
//         drawStartScreen();
//     } else {
//         world = new World(canvas, keyboard)
//     }
//     requestAnimationFrame(gameLoop);
// }
