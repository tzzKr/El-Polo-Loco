
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

// iOS Audio Context fix
let audioContext = null;
let audioInitialized = false;

function initializeAudioContext() {
    if (!audioInitialized && (window.AudioContext || window.webkitAudioContext)) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        audioInitialized = true;
        
        // Resume audio context if suspended (iOS requirement)
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
    }
}

// Audio preloading for better performance
function preloadAudio() {
    const audioFiles = [collectingCoin, collectingBottle, collectingPowerUp, walking_sound, 
                       jumping_sound, chicken_dead_sound, hurt_sound, throwBottle, music1, music2];
    
    audioFiles.forEach(audio => {
        audio.preload = 'auto';
        audio.load();
        // iOS requires user interaction before playing audio
        audio.muted = true;
        audio.play().catch(() => {}).then(() => {
            audio.pause();
            audio.currentTime = 0;
            audio.muted = false;
        });
    });
}

// Initialize audio on first user interaction (iOS requirement)
function enableAudioOnUserGesture() {
    initializeAudioContext();
    preloadAudio();
    
    // Remove event listeners after first interaction
    document.removeEventListener('touchstart', enableAudioOnUserGesture);
    document.removeEventListener('click', enableAudioOnUserGesture);
}

// Initialize audio preloading when page loads
window.addEventListener('DOMContentLoaded', () => {
    // Add touch/click listeners for iOS audio unlock
    document.addEventListener('touchstart', enableAudioOnUserGesture, { once: true });
    document.addEventListener('click', enableAudioOnUserGesture, { once: true });
    
    // Preload immediately for desktop
    preloadAudio();
});

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

