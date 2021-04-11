var fixedRectangle, movingRectangle;

function setup() {
  createCanvas(1200,800);
  fixedRectangle = createSprite(400, 200, 50, 80);
  fixedRectangle.shapeColor = "blue";
  fixedRectangle.debug = true;
  movingRectangle = createSprite(400, 400, 80, 30);
  movingRectangle.shapeColor = "green";
  movingRectangle.debug = true;
}

function draw() {
  background(0); 
   movingRectangle.x = mouseX;
   movingRectangle.y = mouseY;
   console.log(movingRectangle.x - fixedRectangle.x);
   if(movingRectangle.x - fixedRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2 && fixedRectangle.x - movingRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2 
     && movingRectangle.y - fixedRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2 && fixedRectangle.y - movingRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2){
     movingRectangle.shapeColor = "red";
   }
   else{
    movingRectangle.shapeColor = "green";
   }
  drawSprites();
}