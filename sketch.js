var track, trackimg;
var scene, sceneimg;
function preload(){
  trackimg = loadImage("track (2).png")
  sceneimg = loadImage("background.jpg")
  car1img = loadImage("car1.png")
  car2img = loadImage("car2.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  /*
  track = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight)
  track.addImage(trackimg)
  track.scale = 2
*/
imageMode(CENTER)
image(sceneimg, displayWidth/2,displayHeight/2, displayWidth*3, displayHeight*2)
//image(trackimg, displayWidth/2,displayHeight/2, displayWidth*3, displayHeight*2)
track = createSprite(displayWidth/2, displayHeight/2, displayWidth*3, displayHeight*2)
track.addImage(trackimg)
track.scale = 2.5
car1 = createSprite(displayWidth/2-200, displayHeight-90)
car1.addImage(car1img)
car1.scale = 0.2;
car2 = createSprite(displayWidth/2-200, displayHeight-40)
car2.addImage(car2img)
car2.scale = 0.2;
}

function draw() {
  //background(sceneimg);
  
  if(keyDown("up")){
    car1.velocityX = 1
    if(car1.x>1000){
      car1.velocityY = -2
    }
  }
  if(keyDown("down")){
    car1.velocityX = -1
  }
  if(keyDown("w")){
    car2.velocityX = 1
  }
  if(keyDown("s")){
    car2.velocityX = -1
  }
  //camera.position.x = car1.x
  //camera.position.y = car1.y  
  drawSprites();
  text("x: " + mouseX + "y: " + mouseY,mouseX, mouseY);  
}