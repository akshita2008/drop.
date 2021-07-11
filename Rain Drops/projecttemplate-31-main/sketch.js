const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var drop=[];
var maxdrops=100;
var um;

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	um= new Umbrella(200,500,50);
//drop= new Drop(200,200,40);
if(frameCount%150===0){

for(var i=0;i<maxdrops;i++){
	drop.push(new Drop(random(0,400),random(0,400)));
}
}
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  um.display();
  Engine.update(engine);
  for(var i=0;i<maxdrops;i++){
		drop[i].display();
		drop[i].updateY();
 
}


}
