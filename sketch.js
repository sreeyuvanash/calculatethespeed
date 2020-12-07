var car,wall;
var weight,speed;

function setup() {
  createCanvas(2000,400);
  background(220)
  speed=random(50,100);
  weight=random(500,1500);
  
  wall=createSprite(1900, 200, 50, 200);
  wall.shapeColor="black"
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;

}

function draw() {
  background(255,255,255); 
  
  colide(car,wall);

  drawSprites();
}

