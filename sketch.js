var bullet,wall;
var speed,weight;
var speed2;
var speed3;
var speed4;
var line1,line2,line3,line4;
var bullet1,wall1;
var bullet2,wall2;
var bullet3,wall3;
var thickness;


function setup() {
  createCanvas(800,400);

  speed=random(20,28);
  thickness=random(15,21);
  speed2=random(3,30);
  speed3=random(20,37);
  speed4=random(1,28);
  weight=random(200,300);

  bullet=createSprite(30, 30, 30, 20);
  bullet.velocityX=speed;
  wall=createSprite(780,40,20,70);
  line1=createSprite(400,85,850,5);
  
   bullet1=createSprite(30,120,30,20);
   bullet1.velocityX=speed2;
   wall1=createSprite(780,130,20,70);
   line2=createSprite(400,175,850,5);

  bullet2=createSprite(30,210,30,20)
  bullet2.velocityX=speed3;
  wall2=createSprite(780,220,20,70)
  line3=createSprite(400,265,850,5);

  bullet3=createSprite(30,300,30,20)
  bullet3.velocityX=speed4;
  wall3=createSprite(780,310,20,70)
  line4=createSprite(400,355,850,5);

}

function draw() {
  background("black"); 

  hasCollided();
  hasCollided1();
  hasCollided2();
  hasCollided3();

  if(hasCollided(bullet,wall)) 
  {bullet.velocityX=0;
  var damage=0.5 * weight * speed *speed/(thickness * thickness * thickness);
  if(damage>10){
    bullet.shapeColor="red";
  }

  if(damage<10){
    bullet.shapeColor="green";
  }
  
}
if(hasCollided1(bullet1,wall1)) 
  {bullet1.velocityX=0;
  var damage=0.5 * weight * speed2 *speed2/(thickness * thickness * thickness);
  if(damage>10){
    bullet1.shapeColor="red";
  }

  if(damage<10){
    bullet1.shapeColor="green";
  }
  
}

if(hasCollided2(bullet2,wall2)) 
  {bullet2.velocityX=0;
  var damage=0.5 * weight * speed3 *speed3/(thickness * thickness * thickness);
  if(damage>10){
    bullet2.shapeColor="red";
  }

  if(damage<10){
    bullet2.shapeColor="green";
  }
  
}

if(hasCollided3(bullet3,wall3)) 
  {bullet3.velocityX=0;
  var damage=0.5 * weight * speed4 *speed4/(thickness * thickness * thickness);
  if(damage>10){
    bullet3.shapeColor="red";
  }

  if(damage<10){
    bullet3.shapeColor="green";
  }
  
}
  drawSprites();
}



function  hasCollided(Lbullet,Lwall)
{
  bullet.RightEdge = bullet.x + bullet.width;
  wall.LeftEdge=wall.x;
  if(bullet.RightEdge>=wall.LeftEdge){
    return true
  }
   return false;
}

function  hasCollided1(Lbullet,Lwall)
{
  bullet1.RightEdge = bullet1.x + bullet1.width;
  wall1.LeftEdge=wall1.x;
  if(bullet1.RightEdge>=wall1.LeftEdge){
    return true
  }
   return false;
}

function  hasCollided2(Lbullet,Lwall)
{
  bullet2.RightEdge = bullet2.x + bullet2.width;
  wall2.LeftEdge=wall2.x;
  if(bullet2.RightEdge>=wall2.LeftEdge){
    return true
  }
   return false;
}

function  hasCollided3(Lbullet,Lwall)
{
  bullet3.RightEdge = bullet3.x + bullet3.width;
  wall3.LeftEdge=wall3.x;
  if(bullet3.RightEdge>=wall3.LeftEdge){
    return true
  }
   return false;
}
