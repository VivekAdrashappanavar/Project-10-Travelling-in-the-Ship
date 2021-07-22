var sea,seaImg;
var ship,ship_movingImg;

function preload(){

ship_movingImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg=loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  background("blue");

sea=createSprite(400,200);
sea.addImage(seaImg);
sea.velocityX=-3;
sea.scale=0.3;

ship=createSprite(130,200,30,30);
ship.addAnimation("ship_movingImg",ship_movingImg);
ship.scale=0.25;
}
function draw() {
 background("black");
 sea.velocityX=-3
 
 if(sea.x < 0)
 {
   sea.x = sea.width/8;
 }
 
 drawSprites();
}