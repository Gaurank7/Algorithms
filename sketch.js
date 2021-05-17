var fixedangle , movingrectangle


function setup() {
  createCanvas(1200,800);
  movingrectangle = createSprite(400, 200, 80, 30);
movingrectangle.shapeColor = "green"
movingrectangle.debug = true

fixedangle = createSprite(400, 200, 80, 30);
fixedangle.shapeColor = "green"
fixedangle.debug = true

}

function draw() {
  background(255,255,255);
  
movingrectangle.x = World.mouseX  
movingrectangle.y = World.mouseY

if(movingrectangle.x - fixedangle.x<fixedangle.width/2 + movingrectangle.width/2 &&
  fixedangle.x - movingrectangle.x < fixedangle.width/2 + movingrectangle.width/2 &&
  movingrectangle.y - fixedangle.y<fixedangle.height/2 + movingrectangle.height/2 &&
  fixedangle.y - movingrectangle.y < fixedangle.height/2 + movingrectangle.height/2 ){
movingrectangle.shapeColor = "red"
fixedangle.shapeColor ="red"
}
else{
  movingrectangle.shapeColor = "green"
  fixedangle.shapeColor = "green"
}
  drawSprites();
}