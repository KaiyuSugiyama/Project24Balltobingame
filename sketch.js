const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,100,50);
	bin = new DustBin(600, 700, 150,50);
	binLeft = new DustBin(530, 680, 20, 200);
	binRight = new DustBin(670, 680, 20, 200);

	ground = new DustBin(400,700,900,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  bin.display();
  binLeft.display();
  binRight.display();
  ground.display();
}
function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:100,y:-100});
	}
}



