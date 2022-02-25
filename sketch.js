var canvas, bgImgStart, bgImg;
var database;
var game, form, player;
var gameState, playerCount;
var attack1, attack2, die1, die2, jump1, jump2, kick1, kick2, run1, run2;

function preload(){
    bgImgStart = loadImage("assets/BgStart.jpg");

    attack1 = loadAnimation("assets/Attack-1.1.jpg", "assets/Attack-1.2.jpg", "assets/Attack-1.3.jpg", "assets/Attack-1.4.jpg");
    die1 = loadAnimation("assets/Die-1.1.jpg", "assets/Die-1.2.jpg", "assets/Die-1.3.jpg", "assets/Die-1.4.jpg");
    jump1 = loadAnimation("assets/Jump-1.1.jpg", "assets/Jump-1.2.jpg", "assets/Jump-1.3.jpg", "assets/Jump-1.4.jpg", "assets/Jump-1.5.jpg")
    kick1 = loadAnimation("assets/Kick-1.1.jpg", "assets/Kick-1.2.jpg", "assets/Kick-1.3.jpg", "assets/Kick-1.4.jpg");
    run1.loadAnimation("assets/Run-1.1.jpg", "assets/Run-1.2.jpg", "assets/Run-1.3.jpg", "assets/Run-1.4.jpg")
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);

    database = firebase.database();

    game = new Game();
    game.start();
}

function draw(){
    background(bgImgStart);

    drawSprites();
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}