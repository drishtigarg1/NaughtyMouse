var backgroundImage, bg1;
var cat, catImage,catImage, mouse, mouseImage, catImage3,      mouseImage3;

function preload() {
  
    backgroundImage = loadImage("garden.png");
    
    mouseImage = loadImage("jerryOne.png");
    mouseImage2 = loadAnimation("jerryTwo.png", "jerryThree.png");
    mouseImage3 = loadImage("jerryFour.png");
  
    catImage = loadImage("tomOne.png");
    catImage2 = loadAnimation("tomTwo.png", "tomThree.png");
    catImage3 = loadImage("tomFour.png");
  
 
    
}

function setup(){
    createCanvas(600,500);
    
    bg1= createSprite(100,220);
    bg1.addImage(backgroundImage);

    mouse= createSprite(75,400);
    mouse.addImage(mouseImage);
    mouse.scale = 0.1;
  
    cat= createSprite(475,400);
    cat.addImage(catImage);
    cat.addAnimation = ("catRunning", catImage2);
    cat.scale = 0.1;
  
}

function draw() {
     
  if(cat.x - mouse.x < cat.width/2 + mouse.width/2 && 
     mouse.x - cat.x < cat.width/2 + mouse.width/2 && 
     cat.y - mouse.y < cat.height/2 + mouse.height/2 && 
     mouse.y - cat.y < cat.height/2 + mouse.height/2){
      cat.changeAnimation(catImage2)
      mouse.changeAnimation(mouseImage2)
    
     }
  else {
    
      cat.changeAnimation(catImage3)
      mouse.changeAnimation(mouseImage3)
  }
    
    drawSprites();
  
    fill("red")
    text(mouseX + "," + mouseY, 10, 45 );
    
    
}

function keyPressed(){

   if(keyCode === LEFT_ARROW){
     
     cat.velocityX = -5;
     cat.addAnimation = ("catRunning", catImage2);
     cat.changeAnimation("catRunning");
     
     mouse.addAnimation = ("mouseRunning", mouseImage2);
     mouse.changeAnimation("mouseRunning");
     
   }


}

