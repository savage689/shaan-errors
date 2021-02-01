
var database,game,player,form,playerCount=0;
var allPlayers;
var gameState=0;
var blackcoin;
var browncoin;
var carromboard;
var striker;
var striker2;
var player1;
var player2;
var coin1,coin2,coin3,coin4,coin5,coin6,coin7,coin8,coin9,coin10,coin11,coin12,coin13,coin14,coin15,coin16;
var hole1,hole2,hole3,hole4;
var coins;
var holes;
var border1,border2,border3,border4;
var borders;

function preload(){
  blackcoin=loadImage("images/blackcoin.png");
  browncoin=loadImage("images/yellowcoin.png");
  carromboard=loadImage("images/carromboard.jpg");
  carromstriker=loadImage("images/carromstriker.png");

}


function setup() {
  createCanvas(700,700);
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
 if(playerCount===2){
game.updateState(1);
 }

 if(gameState===1){
   clear();
   game.play();
   
 }

 
  
}

