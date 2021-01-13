//images
var bg ;
var playerrunning,playerstanding,playerfallen
var dog;
var car1,car2,car3,car4,car5,car6,car7,car8;
var music;

//sprite
var bgsprite;
var player;
var Dog;
var c1,c2,c3,c4,c5,c6,c7,c8;

function preload() {
  bg=loadImage('assets/bg.png');
  playerrunning=loadAnimation('assets/player/running1.png','assets/player/running2.png');
  playerstanding=loadImage('assets/player/standing.png');
  playerfallen=loadImage('assets/player/fallen.png');

  car1=loadImage('assets/vehicle/c1.png');
  car2=loadImage('assets/vehicle/c2.png');
  //car3=loadImage('assets/vehicle/c3.png');
  car4=loadImage('assets/vehicle/c4.png');
  car5=loadImage('assets/vehicle/c5.png');
  car6=loadImage('assets/vehicle/c6.png');
  car7=loadImage('assets/vehicle/c7.png');
  car8=loadImage('assets/vehicle/c8.png');

  dog=loadImage('assets/dog/dog.png');
}


function setup() {
   
  createCanvas(windowWidth,windowHeight);
  
  
  
  
  player=createSprite(windowWidth/2,windowHeight-100);
  player.scale=2;
  player.addAnimation("running",playerrunning);
  //player.addAnimation("standing",playerstanding);
}

function draw() {
  background('gray');

  imageMode(CENTER);
  bgsprite=image(bg,windowWidth/2,0,windowWidth,windowHeight*2);
  //background(bgsprite); 
  drawSprites();
}