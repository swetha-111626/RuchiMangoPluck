
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bg,airplane,airplanei;
var girl,GIRLi,tree,treei;
function preload()
{
  bg=loadImage("BG.png");
  airplanei=loadImage("planeRed1.png");
  GIRLi=loadImage("kid_10.png");
  treei=loadImage("tree.png");
}

function setup() {
 createCanvas(800, 500);
 engine = Engine.create();
world = engine.world;

girl=createSprite(700,80);
girl.addImage(GIRLi);
girl.scale=0.3;

tree=createSprite(80,350);
tree.addImage(treei);
tree.scale=0.5;

airplane=createSprite(700,140,50,50);
airplane.addImage(airplanei);
airplane.scale=1.5;

base2=new Ground(400,495,800,5);
cup1=new Cake(80,80,30);
cup2=new Cake(120,380,30);
cup3=new Cake(40,180,30);
cup4=new Cake(120,275,30)
cup5=new Cake(40,320,30);
ic=new Icrm(120,200,30);
ic3=new Icrm(20,250,30);
ic4=new Icrm(50,120,30);
ic5=new Icrm(20,390,30);
ic6=new Icrm(140,330,30);

stone=new Stone(300,300,50);
slin=new Shot(stone.body,{x:600,y:350});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  drawSprites();
  stone.display();
  cup1.display();
  cup2.display();
  cup3.display();
  cup4.display();
  cup5.display();
  ic.display();
  ic3.display();
  ic4.display();
  ic5.display();
  ic6.display();
  base2.display();
  slin.display();
  detectollision(stone,cup1);
  detectollision(stone,cup2);
  detectollision(stone,cup3);
  detectollision(stone,cup4);
  detectollision(stone,cup5);
  detectollision(stone,ic);
  detectollision(stone,ic3);
  detectollision(stone,ic4);
  detectollision(stone,ic5);
  detectollision(stone,ic6);
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
       slin.Fly();
  }
  function keyPressed() {
    if (keyCode === 32) {
      Matter.Body.setPosition(stone.body, {x:100, y:100}) 
      slin.attach(stone.body);
    }
    }
    function detectollision(lstone,lCake){
    
      CakeBodyPosition=lCake.body.position;
      stoneBodyPosition=lstone.body.position;
      var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, CakeBodyPosition.x, CakeBodyPosition.y);
      console.log("val1 "+(lCake.r+lstone.r));
      console.log(distance);
      if(distance<=lCake.r+lstone.r){
        console.log("falldown");
  	    Matter.Body.setStatic(lCake.body,false);
    }
    }
