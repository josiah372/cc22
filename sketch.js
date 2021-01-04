var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  p1 = createSprite(100,100,50,70);
  p1.shapeColor = "blue"
  p2 = createSprite(250,100,50,70);
  p2.shapeColor = "blue"
  p3 = createSprite(350,100,50,70);
  p3.shapeColor = "blue"
  p4 = createSprite(450,100,50,70);
  p4.shapeColor = "blue"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,p4)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
 

  drawSprites();
}
function isTouching(c1,c2){
  if (c1.x - c2.x < c2.width/2 + c1.width/2
    && c2.x - c1.x < c2.width/2 + c1.width/2
    && c1.y - c2.y < c2.height/2 + c1.height/2
    && c2.y - c1.y < c2.height/2 + c1.height/2) {
  return true;
}
else {
 return false;
}
}