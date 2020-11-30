
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bobDiameter;
var roof,rope1;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
  world = engine.world;
  
	//Create the Bodies Here.


	bob1=new Bob(200,550,20);
  roof=new Roof(300,500,20,10);
  rope1=new rope(bob1.body,roof.body,-bobDiameter*2,0);
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  roof.display();
  rope1.display(); 
  drawSprites();
 
}



