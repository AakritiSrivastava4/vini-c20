
var rect1,rect2;
function setup() {
  createCanvas(800,400);
  rect1=createSprite(300,300,20,5);
  rect1.shapeColor = "red"
  rect2 = createSprite(200,100,50,50);
  
}

function draw() {
  background("black");  
  rect1.y= mouseY;
  rect1.x= mouseX;
  console.log (rect1.x-rect2.x)
  if (rect1.x-rect2.x < rect1.width/2 + rect2.width/2 &&
    rect2.x-rect1.x< rect1.width/2 + rect2.width/2 && 
    rect1.y-rect2.y < rect1.height/2  + rect2.height/2 &&
    rect2.y-rect1.y < rect1.height/2 + rect2.height/2 ){
    rect1.shapeColor="green";
    rect2.shapeColor="green";
  }
  else  {
    rect1.shapeColor="red";
    rect2.shapeColor="red";

  }
  drawSprites();
}


