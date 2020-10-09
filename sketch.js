const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var division;



var particles = []
var plinkos = []
var divisions = []

var divisionHeight = 300;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;


  ground1 = new Ground(240,800,1600,20);



  for(var k = 0; k<=width; k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }



for(var j = 40; j <= width; j=j+50){
  plinkos.push(new Plinko(j,50));
}

for(var j = 15; j <= width; j=j+50){
  plinkos.push(new Plinko(j,150));
}


for(var j = 22; j <= width; j=j+50){
  plinkos.push(new Plinko(j,250));
}


for(var j = 30; j <= width; j=j+50){
  plinkos.push(new Plinko(j,350));
}



}


function draw() {
  background(255,255,0);  

  Engine.update(engine);

  
for(var k = 0; k < divisions.length; k++){
   divisions[k].display();
}
  
for(var i = 0; i < plinkos.length; i++){
  plinkos[i].display();
}

if(frameCount%60===0){
  particles.push(new Particle(random(width/2+30, width/2-30),0, 10));
}

for(var e = 0; e < particles.length; e++){
  particles[e].display();
}


ground1.display();


  drawSprites();
}

