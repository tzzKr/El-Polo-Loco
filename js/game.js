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
let randomNum = getRandomBgMusic(0, 1);
let hitbox = false;
let drawAnimate;
let pause = false;

function init() {
    events();
    gameLoop();
}


function detectPhonePosition() {

    if (window.matchMedia("(orientation: portrait)").matches) {
        // Portrait mode
        this.document.getElementById('mobileRotation').style.display = 'flex';

    }
    window.addEventListener("resize", function () {
        if (window.matchMedia("(orientation: landscape)").matches) {
            // Landscape mode
            this.document.getElementById('mobileRotation').style.display = 'none';
        } else {
            // Portrait mode
            this.document.getElementById('mobileRotation').style.display = 'flex';

        }
    });
}

function events() {

    detectPhonePosition();
    loadMoveControll();
    preventContextmenu();
    loadMoveControllMobile();
}

function loadMoveControllMobile() {
    let mobileLeft = document.getElementById('walkLeftMobile');
    let mobileRight = document.getElementById('walkRightMobile');
    let mobileUp = document.getElementById('jumpMobile');
    let mobileThrow = document.getElementById('throwMobile');

    mobileLeft.addEventListener('touchstart', function () {
        keyboard.MOBILELEFT = true;
    });
    mobileRight.addEventListener('touchstart', function () {
        keyboard.MOBILERIGHT = true;
    });
    mobileUp.addEventListener('touchstart', function () {
        keyboard.MOBILEUP = true;
    });
    mobileThrow.addEventListener('touchstart', function () {
        keyboard.MOBILETHROW = true;
    });

    mobileLeft.addEventListener('touchend', function () {
        keyboard.MOBILELEFT = false;
    });
    mobileRight.addEventListener('touchend', function () {
        keyboard.MOBILERIGHT = false;
    });
    mobileUp.addEventListener('touchend', function () {
        keyboard.MOBILEUP = false;
    });
    mobileThrow.addEventListener('touchend', function () {
        keyboard.MOBILETHROW = false;
    });
}

function loadMoveControll() {

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

    

}


function preventContextmenu() {
    
    document.getElementById('walkLeftMobile').addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
    document.getElementById('walkRightMobile').addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
    document.getElementById('jumpMobile').addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
    document.getElementById('throwMobile').addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
}





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


// function gameLoop() {
//     if (showStartScreen) {
//         document.getElementById('startScreen').style.display = 'flex';
//         document.getElementById('gameoverScreen').style.display = 'none';
//         document.getElementById('youlostScreen').style.display = 'none';
//         canvas = null;
//         ctx = null;
//         world = null;
//         music1.pause();
//         music2.pause();
//         music1.currentTime = 0;
//         music2.currentTime = 0;
//         cancelAnimationFrame(drawAnimate);
//         clearInterval(bossPatternInterval);
//         pause = true;

//     } else if (lvlStart) {
//         document.getElementById('startScreen').style.display = 'none';
//         pauseGame();

//         initLevel();
//         canvas = document.getElementById('canvas');
//         ctx = canvas.getContext('2d');
//         world = new World(canvas, keyboard)
//         lvlStart = false;


//     }

//     requestAnimationFrame(gameLoop);
// }

function displayElementById(id, displayValue) {
    document.getElementById(id).style.display = displayValue;
}

function resetGameEnvironment() {
    canvas = null;
    ctx = null;
    world = null;
    pause = true;
}

function resetMusic(music) {
    music.pause();
    music.currentTime = 0;
}

function initializeGame() {
    pauseGame();
    initLevel();
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    world = new World(canvas, keyboard);
    lvlStart = false;
}

function gameLoop() {
    const FLEX_DISPLAY = 'flex';
    const NONE_DISPLAY = 'none';
    
    if (showStartScreen) {
        displayElementById('startScreen', FLEX_DISPLAY);
        displayElementById('gameoverScreen', NONE_DISPLAY);
        displayElementById('youlostScreen', NONE_DISPLAY);
        resetGameEnvironment();
        resetMusic(music1);
        resetMusic(music2);
        cancelAnimationFrame(drawAnimate);
        clearInterval(bossPatternInterval);
    } else if (lvlStart) {
        displayElementById('startScreen', NONE_DISPLAY);
        initializeGame();
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
        document.getElementById('hitboxIcon').src = 'img/img/Icons/Hitbox.svg'
        document.getElementById('hitboxIconPause').src = 'img/img/Icons/Hitbox.svg'

    } else {
        hitbox = true;
        document.getElementById('hitboxIcon').src = 'img/img/Icons/hitboxfilled.svg'
        document.getElementById('hitboxIconPause').src = 'img/img/Icons/hitboxfilled.svg'

    }
}

function pauseGame() {
    if (pause) {
        pause = false;
        document.getElementById('pauseGameIcon').src = 'img/img/Icons/pause.svg';
        document.getElementById('pauseGameIconMobile').src = 'img/img/Icons/pause.svg';
        document.getElementById('gameOverlayMobile').style.display = '';
        document.getElementById('pauseScreen').style = 'backdrop-filter: unset';
        document.getElementById('pauseIconContainer').style.display = 'none';
        document.getElementById('pauseGameIcon').style.display = '';

        music2.play();
    } else {
        document.getElementById('gameOverlayMobile').style.display = 'none';
        document.getElementById('pauseGameIcon').src = 'img/img/Icons/play.svg';
        document.getElementById('pauseGameIconMobile').src = 'img/img/Icons/play.svg';
        document.getElementById('pauseScreen').style = 'backdrop-filter: blur(5px)';
        document.getElementById('pauseIconContainer').style.display = 'flex';
        document.getElementById('pauseGameIcon').style.display = 'flex';
        music2.pause();
        pause = true;

    }
}




