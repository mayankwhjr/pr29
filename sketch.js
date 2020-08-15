const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box,ground,bird,polygonimg;
function preload() {
  polygonimg=loadImage("hexagon.jpg")
}

function setup() {
  var canvas =createCanvas(800,600);
  engine= Engine.create();
world=engine.world;
  
ground= new Ground(400,590,800,20)
  ground2= new Ground(450,490,150,15)
  ground3= new Ground(650,300,150,15)
  //level1
  box1=new Box(395,480,25,30)
  box2=new Box(415,480,25,30)
  box3=new Box(435,480,25,30)
  box4=new Box(455,480,25,30)
  box5=new Box(475,480,25,30)
  //level2
  box6=new Box(400,460,25,30) 
  box7=new Box(420,460,25,30)
  box8=new Box(440,460,25,30)
  box9=new Box(460,460,25,30)
  //level3

  polygon=createSprite(200,400,25,30)
  slingshot = new SlingShot(polygon.body,{x:200, y:400});  
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
   
  drawSprites();
box1.display();
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
polygon.display()
slingshot.display()


ground.display()
ground2.display()
ground3.display();

imageMode(CENTER)
image(polygonimg,0,0,50,50);
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
