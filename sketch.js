var car , wall;
var speed,weight;








function setup() {

  createCanvas(1200,400);
  
  wall=createSprite(1000,200,70,200)

car=createSprite(200,200,70,70)
speed=random(55,90)
  weight=random(400,1500)

car.velocityX=speed

}

function draw() {
  background(0,0,0); 
  
  if (wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX=0
  var deformatiton=(0.5*speed*speed*weight)/22509
  if (deformatiton>180){
    car.shapeColor=color(255,0,0)
  }
  if (deformatiton<180 && deformatiton>100){
    car.shapeColor=color(230,230,0)
    
  }
  if (deformatiton<100){
    car.shapeColor=color(0,255,0)
  }
  }

  
  drawSprites();
}