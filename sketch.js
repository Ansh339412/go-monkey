
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,ground
var score=100

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);  
monkey=createSprite(80,315,10,10);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.2
  
  ground=createSprite(400,400,900,10);
  ground.velocityX=-4;
  ground.x= ground.width/2;
}


function draw() {
background("white")
text(score,280,80);
  text("survival time",200,80);
  fill ("marron")
  
  if(ground.x<0){
  ground.x=ground.width/4
    score=score-1
  }
  
  if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = monkey.velocityY -6    
   if(monkey.velocityY=-3){
     monkey.velocityY=monkey.velocityY-4;
   }
  
  }
 
  spawnObstacles()
 
  drawSprites();
  
}
function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.addImage(  obstaceImage)
   obstacle.scale=0.1
 
   
 }
}






