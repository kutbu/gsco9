
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score




function preload(){
  
  
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600)

 monkey=createSprite(80,315,20,20); 
 monkey.addAnimation("running",monkey_running);
monkey.scale=0.1;
 
  ground=createSprite(400,350,900,10);
  ground.x=ground.width/2;
ground.velocityX=-4;

  console.log(ground.x)
  
bananasGroup=new Group();
obstaclesGroup=new Group();


 score=0; 
}


function draw() {
background("white")
 
  console.log(monkey.y)    
   
  
   
   if(obstaclesGroup.isTouching(monkey)){
      ground.velocityX=0;     
     monkey.velocityY=0;
      obstaclesGroup.setVelocityXEach(0);
       bananasGroup.setVelocityXEach(0);
      obstaclesGroup.setLifetimeEach(-1);
     bananasGroup.setLifetimeEach(-1);
     } 
   ground.velocityX = -(4 + 3* score/100)

     //scoring
    score = score + Math.round(getFrameRate()/60);
      
      
    bananas();
    obstacles();
   
      if (ground.x < 0){
      ground.x = ground.width/2;
      }
       if(keyDown("space")&& monkey.y >= 314.3) {
      monkey.velocityY = -12;
      } 
      
       monkey.velocityY = monkey.velocityY + 0.8
     
        
  stroke("black")
textSize(15);
fill("black");
  text("Survival Time:"+ score,450,50)

   
    

  

  
     
  


  
  
  
   
    monkey.collide(ground);
  
   
  drawSprites(); 

 
}
function bananas (){
if(frameCount%80===0){
var bananas=createSprite(200,150,20,20);
bananas.y= Math.round(random(120,200));
bananas.addImage(bananaImage)
bananas.velocityX=-3;
bananas.scale=0.1
bananas.lifetime=300;
bananasGroup.add(bananas)
 
monkey.depth=bananas.depth+1
}
}

function obstacles(){
if(frameCount%300===0){
var obstacles=createSprite(400,310,20,20);
obstacles.addImage(obstacleImage)
obstacles.scale=0.2; 
  obstacles.velocityX=-4;
 obstacles.lifetime=200;
  obstaclesGroup.add(obstacles)
}

}



