let canvas;
let world;
let keyboard = new Keyboard();
let showStartScreen = true;
let ctx;
let lvlStart = false;
let characterIntervalMove = null;
let characterStatusInterval = null;
let gravityInterval = null;
let bossPatternInterval = null;
let chickenWalkInterval = null;
let chickenStatusInterval = null;
let cloudInterval = null;
let coinInterval = null;
let randomNum = getRandomBgMusic(1, 2);
let hitbox = false;
let drawAnimate;
let pause = false;

function init() {

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
    audioVolume();
    showStartScreen = false;
    lvlStart = true;
    musicArray[randomNum = 1].play();

}

function getRandomBgMusic(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  

function backToMainScreen() {
    showStartScreen = true;
    lvlStart = false;

}


function gameLoop() {
    if (showStartScreen) {
        document.getElementById('startScreen').style.display = 'flex';
        document.getElementById('gameoverScreen').style.display = 'none';
        document.getElementById('youlostScreen').style.display = 'none';
        canvas = null;
        ctx = null;
        world = null;
        music1.pause();
        music2.pause();
        cancelAnimationFrame(drawAnimate);
        // clearInterval(characterIntervalMove);
        // clearInterval(characterStatusInterval);
        // clearInterval(gravityInterval);
        clearInterval(bossPatternInterval);
        // clearInterval(chickenWalkInterval);
        // clearInterval(chickenStatusInterval);
        // clearInterval(cloudInterval);
        // clearInterval(coinInterval);


    } else if (lvlStart) {
        document.getElementById('startScreen').style.display = 'none';

        initLevel();
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        world = new World(canvas, keyboard)
        lvlStart = false;


    }

    requestAnimationFrame(gameLoop);
}

function openTutorial() {
    document.getElementById('tutorialScreen').style.display = 'flex';
}

function closeTutorial() {
    document.getElementById('tutorialScreen').style.display = 'none';

}
function openSettings() {
    document.getElementById('settingScreen').style.display = 'flex';
}
function closeSettings() {
    document.getElementById('settingScreen').style.display = 'none';
}


function toggleHitbox() {
    if (hitbox) {
        hitbox = false;
    } else {
        hitbox = true;
    }
    console.log('hitbox :>> ', hitbox);

}

function pauseGame() {
    if (pause) {
        pause = false;
    }else{
        pause = true;
    }
}