
var trex ,trex_running;
var ground,imageofground;
var ing 
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  imageofground = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,155,20,50);
 trex.addAnimation("running",trex_running);
trex.scale = 0.6

ing = createSprite(200,170,400,20);
ing.visible = false;

ground = createSprite(200,155,400,20);
ground.addImage("ground",imageofground);
}




function draw(){
  background("beige")

if(keyDown("space") && trex.y>=100){
  trex.velocityY = -7;
}

trex.velocityY = trex.velocityY + 0.8;
trex.collide(ing);
if (ground.x<0){
  ground.x= ground.width/2;
}

ground.velocityX = -7;
drawSprites();
}
