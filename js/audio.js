
let globalVolume = 0.2;

let collectingCoin = new Audio('audio/Coin.mp3');
let collectingBottle = new Audio('audio/CollectBottle.mp3');
let collectingPowerUp = new Audio('audio/Coin.mp3');
let walking_sound = new Audio('audio/Run.mp3');
let jumping_sound = new Audio('audio/Jump.mp3');
let chicken_dead_sound = new Audio('audio/Chicken.mp3');
let hurt_sound = new Audio('audio/hurt.mp3');
let throwBottle = new Audio('audio/Throw.mp3');

let music1 = new Audio('audio/BgMusic1.mp3');
let music2 = new Audio('audio/BgMusic2.mp3');
let musicArray = [music1, music2];

function toggleAudio() {

    if (globalVolume == 0) {
        globalVolume = 0.2;
        audioVolume();
        document.getElementById('soundImg').src = 'img/img/Icons/volume.svg'
        document.getElementById('pauseVolumeBtn').src = 'img/img/Icons/volume.svg'
    } else {
        globalVolume = 0;
        document.getElementById('soundImg').src = 'img/img/Icons/volume_off.svg'
        document.getElementById('pauseVolumeBtn').src = 'img/img/Icons/volume_off.svg'

        audioVolume();
    }
    console.log('glo :>> ', globalVolume);

}
function audioVolume() {
    
            collectingCoin.volume = globalVolume;
            collectingBottle.volume = globalVolume;
            collectingPowerUp.volume = globalVolume;
            walking_sound.volume = globalVolume;
            jumping_sound.volume = globalVolume;
            chicken_dead_sound.volume = globalVolume;
            hurt_sound.volume = globalVolume;
            throwBottle.volume = globalVolume;
            music1.volume = globalVolume;
            music2.volume = globalVolume;
          

}

