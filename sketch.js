let videos = [];
let sounds = [];

let currentVideo;
let currentSound;

let videoNumber;
let soundNumber;


function preload() {

    sounds[0] = loadSound("Sounds/sound1.mp3");
    sounds[1] = loadSound("Sounds/sound2.mp3");
    sounds[2] = loadSound("Sounds/sound3.mp3");
}


function setup() {

    let canvas = createCanvas(800, 450);
    canvas.parent("canvas-container");

    videos[0] = createVideo("Videos/video1.mp4");
    videos[1] = createVideo("Videos/video2.mp4");
    videos[2] = createVideo("Videos/video3.mp4");

    for (let video of videos) {
        video.hide();
        video.volume(0);
    }
}


function draw() {

    background(0);

    if (currentVideo) {
        image(currentVideo, 0, 0, width, height);
    }
}


function newCombination() {

    console.log("Neue Kombination wird gestartet");

    if (currentVideo) {
        currentVideo.stop();
    }

    if (currentSound) {
        currentSound.stop();
    }

    videoNumber = floor(random(3));
    soundNumber = floor(random(3));

    currentVideo = videos[videoNumber];
    currentSound = sounds[soundNumber];

    currentVideo.loop();

    currentSound.loop();

    document.getElementById("combination").innerText =
        "Video " + (videoNumber + 1) +
        " + Sound " + (soundNumber + 1);
}