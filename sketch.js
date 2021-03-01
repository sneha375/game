var players
var player1,player2,player3,player4;
var monkey, wolf, bird1, bird2, deer, man, point
var monkeyImage, wolfImage, bird1Image, bird2Image, deerImage, manImage, pointImage
var gunImage, BgImage
var monkeyGroup, wolfGroup, bird1Group, bird2Group, deerGroup, manGroup, pointGroup
var gameState=0;
var playerCount=0
var allPlayers=0;
var database
var form, player, game;
var score=0
var done;
function preload(){
monkeyImage=loadAnimation("monkey.png");
wolfImage=loadAnimation("wolf.png");
bird1Image=loadAnimation("bird1.png");
bird2Image=loadAnimation("bird2.png");
deerImage=loadAnimation("deer.png");
manImage=loadAnimation("runningMan.png");
pointImage=loadAnimation("20P.png");
gunImage=loadImage("gun.png")
BgImage=loadImage("background.png")
}
function setup(){
  createCanvas(windowWidth-20,windowHeight-20);
 
  monkeyGroup=new Group();
  wolfGroup=new Group();
  bird1Group=new Group();
  bird2Group=new Group();
  deerGroup=new Group();
  manGroup=new Group();
  pointGroup=new Group();
  database = firebase.database();
  game= new Game();
  game.getState();
  game.start();
}

function draw() {
  background(BgImage); 
  fill("white");
  textSize(20);
  text("Score="+score,100,50)
  
  if(mousePressedOver(monkey)){
    monkeyGroup.destroyEach();
    score=score+2;
  }
  if(mousePressedOver(wolf)){
    wolfGroup.destroyEach();
    score=score+3;
  }
  if(mousePressedOver(bird1)){
    bird1Group.destroyEach();
    score=score+1;
  }
  if(mousePressedOver(bird2)){
    bird2Group.destroyEach();
    score=score+1;
  }
  if(mousePressedOver(deer)){
    deerGroup.destroyEach();
    score=score+3;
  }
  if(mousePressedOver(man)){
    manGroup.destroyEach();
    score=score-10;
  }
  if(mousePressedOver(point)){
    pointGroup.destroyEach();
    score=score+20;
  }

  if (playerCount === 2 && gameState != 2) {
    game.update(1);
  }
  if (gameState === 1) {
    clear(); 
    game.play();
  }

  if(gameState === 2){
    game.end();
  }
 monkeyGroupSpawn();
  wolfGroupSpawn();
  bird1GroupSpawn();
  bird2GroupSpawn();
  deerGroupSpawn();
  manGroupSpawn();
  pointGroupSpawn();
  drawSprites();
}
function monkeyGroupSpawn(){
  if(frameCount%60===0){
    monkey=createSprite(random(1,400),random(1,300),100,100)
    monkey.addAnimation("monkey",monkeyImage);
    monkey.scale=0.5;
    monkey.lifetime=50;
    monkeyGroup.add(monkey);
  }
}
function wolfGroupSpawn(){
if(frameCount%350===0){
  wolf=createSprite(0,random(580,650),100,100)
  wolf.addAnimation("wolf",wolfImage);
  wolf.scale=0.9;
  wolf.velocityX=random(15,30);
  wolfGroup.add(wolf);
}
}
function bird1GroupSpawn(){
  if(frameCount%200===0){
  bird1=createSprite(0,random(50,400),100,100)
  bird1.addAnimation("bird1",bird1Image);
  bird1.scale=0.3
  bird1.velocityX=random(5,10);
  bird1.velocityY=random(-3,5);
  bird1Group.add(bird1);
  }
} 
function bird2GroupSpawn(){
  if(frameCount%220===0){
    bird2=createSprite(1300,random(50,400),100,100)
    bird2.addAnimation("bird2", bird2Image);
    bird2.scale=0.25
    bird2.velocityX=random(-10,-15)
    bird2.velocityY=random(-3,5);
    bird2Group.add(bird2);
  }
}
function deerGroupSpawn(){
  if(frameCount%400===0){
  deer=createSprite(1300,random(470,540),100,100)
  deer.addAnimation("deer",deerImage);
  deer.scale=0.7;
  deer.velocityX=random(-5,-15);
  deerGroup.add(deer);
  }
}
function manGroupSpawn(){
  if(frameCount%500===0){
    man=createSprite(0,random(530,600),100,100)
    man.addAnimation("man", manImage);
    man.scale=0.8;
    man.velocityX=random(10,20);
    manGroup.add(man);
  }
} 
function pointGroupSpawn(){
  if(frameCount%100===0){
    point=createSprite(random(0,1400),random(0,750),100,100)
    point.addAnimation("point", pointImage);
    point.scale=0.25
    point.velocityX=40
    point.velocityY=random(-5,5);
    pointGroup.add(point);
    
  }
}
